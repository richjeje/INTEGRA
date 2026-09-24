export {};
const all = <T extends Element = HTMLElement>(selector: string) => Array.from(document.querySelectorAll<T>(selector));
document.body.classList.add('enhanced');

// Keep content server-rendered. JavaScript enhances navigation and selection only.
const menu = document.querySelector<HTMLButtonElement>('.menu-toggle')!;
const navigation = document.querySelector<HTMLElement>('#main-nav')!;
function closeMenu() { menu.setAttribute('aria-expanded', 'false'); navigation.classList.remove('open'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('open', open); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
document.addEventListener('click', event => { if (event.target instanceof Node && !document.querySelector('.site-header')!.contains(event.target)) closeMenu(); });
matchMedia('(max-width: 600px)').addEventListener('change', () => closeMenu());

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
  const journeyProgress = journey.querySelector<HTMLElement>('[data-journey-progress]')!;
  let activeJourney = 0;
  let journeyTimer: number | undefined;
  const journeyReducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const stopJourney = () => { if (journeyTimer !== undefined) window.clearInterval(journeyTimer); journeyTimer = undefined; };
  const selectJourney = (index: number) => {
    activeJourney = index;
    journeyTabs.forEach((tab, tabIndex) => {
      const active = tabIndex === index;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    journeyFrames.forEach((frame, frameIndex) => {
      const active = frameIndex === index;
      frame.classList.toggle('is-active', active);
      frame.setAttribute('aria-hidden', String(!active));
    });
    const denominator = Math.max(journeyTabs.length - 1, 1);
    journeyProgress.style.width = `${index * (100 / denominator)}%`;
  };
  const startJourney = () => {
    stopJourney();
    if (!journeyTabs.length || document.hidden || journeyReducedMotion.matches || journey.matches(':hover, :focus-within')) return;
    journeyTimer = window.setInterval(() => selectJourney((activeJourney + 1) % journeyTabs.length), 2000);
  };
  journeyTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => { selectJourney(index); startJourney(); });
    tab.addEventListener('keydown', event => {
      const next = event.key === 'ArrowRight' ? (index + 1) % journeyTabs.length : event.key === 'ArrowLeft' ? (index + journeyTabs.length - 1) % journeyTabs.length : event.key === 'Home' ? 0 : event.key === 'End' ? journeyTabs.length - 1 : null;
      if (next !== null) { event.preventDefault(); journeyTabs[next].focus(); selectJourney(next); startJourney(); }
    });
  });
  startJourney();
  journey.addEventListener('mouseenter', stopJourney);
  journey.addEventListener('mouseleave', startJourney);
  journey.addEventListener('focusin', stopJourney);
  journey.addEventListener('focusout', () => setTimeout(startJourney, 0));
  journeyReducedMotion.addEventListener('change', startJourney);
  document.addEventListener('visibilitychange', () => document.hidden ? stopJourney() : startJourney());
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
