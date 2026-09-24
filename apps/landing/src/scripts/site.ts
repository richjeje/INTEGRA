export {};
const all = <T extends Element = HTMLElement>(selector: string) => Array.from(document.querySelectorAll<T>(selector));
document.body.classList.add('enhanced');

// Keep content server-rendered. JavaScript enhances navigation and selection only.
const menu = document.querySelector<HTMLButtonElement>('.menu-toggle')!;
const navigation = document.querySelector<HTMLElement>('#main-nav')!;
const mobileNavigation = matchMedia('(max-width: 1024px)');
const menuBackdrop = document.querySelector<HTMLElement>('.menu-backdrop')!;
const backgroundContent = all<HTMLElement>('main, .home-link, .header-location');
function closeMenu() {
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Abrir menú');
  navigation.classList.remove('open');
  document.body.classList.remove('menu-is-open');
  backgroundContent.forEach(element => element.inert = false);
}
menu.addEventListener('click', () => {
  if (menu.getAttribute('aria-expanded') === 'true') { closeMenu(); return; }
  menu.setAttribute('aria-expanded', 'true');
  menu.setAttribute('aria-label', 'Cerrar menú');
  navigation.classList.add('open');
  document.body.classList.add('menu-is-open');
  backgroundContent.forEach(element => element.inert = true);
  navigation.querySelector<HTMLAnchorElement>('a')?.focus({preventScroll:true});
});
menuBackdrop.addEventListener('click', () => { closeMenu(); menu.focus(); });
document.addEventListener('keydown', event => {
  if (event.key !== 'Tab' || menu.getAttribute('aria-expanded') !== 'true') return;
  const links = all<HTMLAnchorElement>('#main-nav a');
  const last = links[links.length - 1];
  if (event.shiftKey && document.activeElement === menu) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); menu.focus(); }
});
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
document.addEventListener('click', event => { if (event.target instanceof Node && !document.querySelector('.site-header')!.contains(event.target)) closeMenu(); });
mobileNavigation.addEventListener('change', () => { const wasOpen = menu.getAttribute('aria-expanded') === 'true'; closeMenu(); if (wasOpen) navigation.querySelector<HTMLAnchorElement>('a')?.focus({preventScroll:true}); });

const whatsapp = document.querySelector<HTMLAnchorElement>('#whatsapp')!;
const contextLabel = document.querySelector<HTMLElement>('#contact-context')!;
let contextTimer: ReturnType<typeof setTimeout> | undefined;
function setContact(context: string, announce = false) {
  clearTimeout(contextTimer);
  whatsapp.href = 'https://wa.me/524495411077?text=' + encodeURIComponent(`Hola, me interesa ${context}. Quisiera conocer más sobre su servicio.`);
  contextLabel.textContent = announce ? `Consulta seleccionada: ${context}. Continúa en WhatsApp.` : '';
  if (announce) contextTimer = setTimeout(() => { contextLabel.textContent = ''; }, 6000);
}
all<HTMLAnchorElement>('#main-nav a, .unit-index a').forEach(link => link.addEventListener('click', () => {
  closeMenu();
  const context: Record<string, string> = { '#integra': 'un proyecto de ingeniería con Integra', '#met': 'los servicios de Integra Met', '#rent': 'los equipos de Integra Rent' };
  setContact(context[link.hash] || 'un proyecto con Integra');
}));
all<HTMLElement>('[data-contact]').forEach(control => control.addEventListener('click', () => {
  setContact(control.dataset.contact!, true);
  if (control instanceof HTMLButtonElement) whatsapp.focus({ preventScroll: true });
}));

const tabs = all<HTMLButtonElement>('[data-process]');
if (tabs.length) document.querySelector('.process-tabs')!.setAttribute('role', 'tablist');
function selectTab(selected: HTMLButtonElement, animate = false) {
  tabs.forEach(tab => {
    const active = tab === selected;
    tab.setAttribute('role', 'tab'); tab.setAttribute('aria-selected', String(active)); tab.tabIndex = active ? 0 : -1;
    const panel = document.getElementById(tab.getAttribute('aria-controls')!)!;
    panel.setAttribute('role', 'tabpanel'); panel.tabIndex = 0; panel.hidden = !active;
    panel.classList.toggle('tab-enter', active && animate);
  });
}
tabs.forEach((tab,index) => {
  tab.addEventListener('click', () => selectTab(tab,true));
  tab.addEventListener('keydown', event => {
    const next = event.key === 'ArrowRight' ? (index+1)%tabs.length : event.key === 'ArrowLeft' ? (index+tabs.length-1)%tabs.length : event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length-1 : null;
    if (next !== null) { event.preventDefault(); tabs[next].focus(); selectTab(tabs[next],true); }
  });
});
if (tabs.length) selectTab(tabs[0]);

// Continuous project sequence: advances every two seconds and loops indefinitely.
const journey = document.querySelector<HTMLElement>('[data-journey]');
if (journey) {
  const journeyTabs = all<HTMLButtonElement>('[data-journey-step]');
  const journeyFrames = all<HTMLElement>('[data-journey-frame]');
  const timeline = journey.querySelector<HTMLElement>('.journey-timeline')!;
  const stage = journey.querySelector<HTMLElement>('.journey-stage')!;
  const mobile = matchMedia('(max-width: 850px)');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const count = journeyTabs.length;
  let activeJourney = 0;
  let timer: number | undefined;
  let settle: number | undefined;
  let moving = false;
  let dragging = false;
  const copies = (where: 'before' | 'after') => journeyTabs.map((tab, index) => {
    const copy = tab.cloneNode(true) as HTMLButtonElement;
    copy.removeAttribute('id');
    copy.removeAttribute('role');
    copy.removeAttribute('aria-controls');
    copy.removeAttribute('data-journey-step');
    copy.setAttribute('aria-hidden', 'true');
    copy.tabIndex = -1;
    copy.dataset.journeyCopy = String(index);
    if (where === 'after') timeline.append(copy);
    return copy;
  });
  const before = copies('before');
  timeline.prepend(...before);
  const after = copies('after');
  const cards = [...before, ...journeyTabs, ...after];
  const stop = () => { window.clearInterval(timer); timer = undefined; };
  const paint = (index: number) => {
    activeJourney = (index + count) % count;
    cards.forEach((tab, i) => {
      const active = i % count === activeJourney;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = journeyTabs.includes(tab) && active ? 0 : -1;
    });
    journeyFrames.forEach((frame, i) => {
      frame.classList.toggle('is-active', i === activeJourney);
      frame.setAttribute('aria-hidden', String(i !== activeJourney));
    });
  };
  const position = (card: HTMLElement) => {
    const r = card.getBoundingClientRect();
    const t = timeline.getBoundingClientRect();
    return timeline.scrollLeft + r.left - t.left - (t.width - r.width) / 2;
  };
  const center = (slot: number, smooth = true) => {
    if (!mobile.matches) return;
    moving = true;
    timeline.scrollTo({left: position(cards[slot]), behavior: smooth && !reduced.matches ? 'smooth' : 'instant'});
    window.clearTimeout(settle);
    settle = window.setTimeout(finish, smooth && !reduced.matches ? 650 : 30);
  };
  const select = (index: number, slot = count + (index + count) % count) => {
    paint(index);
    center(slot);
  };
  const start = () => {
    stop();
    if (document.hidden || reduced.matches || dragging || journey.contains(document.activeElement)) return;
    timer = window.setInterval(() => select((activeJourney + 1) % count, count + activeJourney + 1), 4000);
  };
  function finish() {
    window.clearTimeout(settle);
    if (dragging || !mobile.matches) return;
    const slot = cards.reduce((best, card, i) => Math.abs(position(card) - timeline.scrollLeft) < Math.abs(position(cards[best]) - timeline.scrollLeft) ? i : best, 0);
    paint(slot % count);
    moving = false;
    // Equivalent copies keep the transition from the last step to the first seamless.
    timeline.scrollTo({left: position(cards[count + activeJourney]), behavior:'instant'});
    start();
  }
  cards.forEach((tab, slot) => tab.addEventListener('click', () => { select(slot % count, slot); start(); }));
  journeyTabs.forEach((tab, index) => tab.addEventListener('keydown', event => {
    const next = event.key === 'ArrowRight' ? (index + 1) % count : event.key === 'ArrowLeft' ? (index + count - 1) % count : event.key === 'Home' ? 0 : event.key === 'End' ? count - 1 : null;
    if (next !== null) { event.preventDefault(); journeyTabs[next].focus({preventScroll:true}); select(next); stop(); }
  }));
  timeline.addEventListener('pointerdown', () => { dragging = true; stop(); });
  const release = () => { if (dragging) { dragging = false; window.clearTimeout(settle); settle = window.setTimeout(finish, 160); } };
  window.addEventListener('pointerup', release);
  window.addEventListener('pointercancel', release);
  timeline.addEventListener('scroll', () => {
    if (!mobile.matches || moving) return;
    window.clearTimeout(settle);
    settle = window.setTimeout(finish, 160);
  }, {passive:true});
  let touchX = 0;
  let touchY = 0;
  stage.addEventListener('pointerdown', event => { touchX = event.clientX; touchY = event.clientY; stop(); stage.setPointerCapture(event.pointerId); });
  stage.addEventListener('pointerup', event => {
    const dx = event.clientX - touchX;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(event.clientY - touchY)) {
      const direction = dx < 0 ? 1 : -1;
      select((activeJourney + direction + count) % count, count + activeJourney + direction);
    }
    start();
  });
  stage.addEventListener('pointercancel', start);
  journey.addEventListener('focusin', stop);
  journey.addEventListener('focusout', () => window.setTimeout(start, 0));
  const reset = () => { moving = false; paint(activeJourney); center(count + activeJourney, false); start(); };
  new ResizeObserver(reset).observe(timeline);
  reduced.addEventListener('change', reset);
  mobile.addEventListener('change', reset);
  document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
  reset();
}

const filters = all<HTMLButtonElement>('[data-filter]');
function filterEquipment(button: HTMLButtonElement) {
  filters.forEach(filter => filter.setAttribute('aria-pressed',String(filter === button)));
  let count = 0;
  all<HTMLElement>('[data-category]').forEach(card => { card.hidden = button.dataset.filter !== 'todos' && card.dataset.category !== button.dataset.filter; if (!card.hidden) count++; });
  const equipmentCount = document.querySelector<HTMLElement>('#equipment-count');
  if (equipmentCount) equipmentCount.textContent = `${count} equipo${count === 1 ? '' : 's'}`;
  const selection = document.querySelector<HTMLElement>('[data-equipment-selection]');
  if (selection) selection.textContent = button.dataset.filterLabel || 'Todos los equipos';
  if (button.dataset.contactContext) setContact(`equipo para ${button.dataset.contactContext.toLowerCase()}`);
}
filters.forEach(button => button.addEventListener('click', () => filterEquipment(button)));

all<HTMLElement>('[data-brief]').forEach(group => {
  const choices = Array.from(group.querySelectorAll<HTMLButtonElement>('[data-brief-token]'));
  const send = group.querySelector<HTMLButtonElement>('[data-brief-send]');
  const summary = group.querySelector<HTMLElement>('[data-brief-summary]');
  const updateBrief = () => {
    const selected = choices.filter(choice => choice.getAttribute('aria-pressed') === 'true').map(choice => choice.textContent?.trim());
    if (summary) summary.textContent = selected.length ? `Información disponible: ${selected.join(', ')}.` : 'Aún no has seleccionado información disponible.';
  };
  choices.forEach(choice => choice.addEventListener('click', () => { choice.setAttribute('aria-pressed', String(choice.getAttribute('aria-pressed') !== 'true')); updateBrief(); }));
  send?.addEventListener('click', () => {
    const selected = choices.filter(choice => choice.getAttribute('aria-pressed') === 'true').map(choice => choice.dataset.briefToken);
    const base = send.dataset.contact || 'un proyecto con Integra';
    setContact(selected.length ? `${base}. Ya cuento con ${selected.join(', ')}` : base, true);
    whatsapp.focus({ preventScroll: true });
  });
});

if ('IntersectionObserver' in window) {
  const navObserver = new IntersectionObserver(entries => {
    entries.filter(entry => entry.isIntersecting).forEach(entry => {
      all<HTMLAnchorElement>('#main-nav a').forEach(link => { if (!link.hash) return; if (link.hash === '#'+entry.target.id) link.setAttribute('aria-current','location'); else link.removeAttribute('aria-current'); });
    });
  }, { rootMargin: '-15% 0px -60% 0px' });
  all('section[id]').forEach(section => navObserver.observe(section));
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  if (!reducedMotion.matches) {
    const reveal = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.remove('reveal-pending'); reveal.unobserve(entry.target); } }), { threshold: .08 });
    all('[data-reveal]').forEach(element => { if (element.getBoundingClientRect().top > innerHeight) { element.classList.add('reveal-pending'); reveal.observe(element); } });
    reducedMotion.addEventListener('change', event => { if (event.matches) { reveal.disconnect(); all('.reveal-pending').forEach(element => element.classList.remove('reveal-pending')); } });
  }
}


