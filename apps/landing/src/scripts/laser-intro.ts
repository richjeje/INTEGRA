const intro = document.querySelector<HTMLElement>('#laser-intro');
if (intro && document.documentElement.hasAttribute('data-laser-intro')) {
  const root = document.documentElement;
  const skip = intro;
  const tool = intro.querySelector<SVGGElement>('.laser-tool')!;
  const sparks = Array.from(intro.querySelectorAll<SVGLineElement>('.laser-sparks line'));
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const requested = root.getAttribute('data-laser-motion') === 'full';
  let frame = 0;
  let finished = false;
  let exitTimer: ReturnType<typeof setTimeout>;
  const background = Array.from(document.body.children).filter((el): el is HTMLElement => el instanceof HTMLElement && el !== intro && el.tagName !== 'SCRIPT' && !el.inert);
  const release = () => {
    cancelAnimationFrame(frame);
    clearTimeout(exitTimer);
    background.forEach(el => { el.inert = false; });
    const restoreFocus = intro.contains(document.activeElement);
    root.removeAttribute('data-laser-intro');
    root.removeAttribute('data-laser-motion');
    intro.remove();
    if (restoreFocus) document.querySelector<HTMLElement>('#contenido')?.focus({ preventScroll:true });
  };
  const finish = (immediate = false) => {
    if (finished) return;
    finished = true;
    cancelAnimationFrame(frame);
    if (immediate) release();
    else { intro.classList.add('is-leaving'); exitTimer = setTimeout(release, 550); }
  };
  skip.addEventListener('click', () => finish());
  intro.addEventListener('keydown', event => {
    if (['Escape', 'Enter', ' '].includes(event.key)) { event.preventDefault(); finish(); }
    if (event.key === 'Tab') { event.preventDefault(); skip.focus(); }
  });
  reduced.addEventListener('change', () => { if (reduced.matches && !requested) finish(true); });
  // The independent head watchdog also releases the page if initialization fails.
  const watchdog = new MutationObserver(() => {
    if (!root.hasAttribute('data-laser-intro')) { watchdog.disconnect(); release(); }
  });
  watchdog.observe(root, { attributes:true, attributeFilter:['data-laser-intro'] });
  try {
    const paths = Array.from(intro.querySelectorAll<SVGPathElement>('.laser-artwork path')).filter(path => path.getTotalLength() > 0);
    if (!paths.length) { background.forEach(el => { el.inert = true; }); skip.focus({ preventScroll:true }); exitTimer = setTimeout(() => finish(), 1800); }
    else {
    // Cut the symbol first, then the wordmark left to right.
    paths.sort((a,b) => {
      const box = (path: SVGPathElement) => { const r=path.getBBox(); const m=path.transform.baseVal.consolidate()?.matrix; return { x:r.x+(m?.e ?? 0), y:r.y+(m?.f ?? 0) }; };
      const aa=box(a), bb=box(b);
      const row=(y:number) => y<165 ? 0 : y<250 ? 1 : 2;
      return row(aa.y)-row(bb.y) || aa.x-bb.x;
    });
    let total = 0;
    const segments = paths.map(path => {
      path.style.setProperty('--logo-color', path.getAttribute('fill') || '#CF202E');
      const length=path.getTotalLength();
      const start=total; total+=length;
      path.style.strokeDasharray=`${length} ${length}`;
      path.style.strokeDashoffset=String(length);
      return { path,length,start,end:total };
    });
    background.forEach(el => { el.inert = true; });
    skip.focus({ preventScroll:true });
    const start=performance.now()+180;
    let previous=-1;
    const tick = (now:number) => {
      const progress=Math.max(0,Math.min(1,(now-start)/3300));
      const distance=total*progress;
      const index=segments.findIndex(segment=>segment.end>=distance);
      const segment=segments[index];
      if (!segment) { finish(); return; }
      for (let i=previous; i<index; i++) {
        if (i<0) continue;
        segments[i].path.classList.remove('is-cutting');
        segments[i].path.classList.add('is-cut');
        segments[i].path.style.strokeDashoffset='0';
      }
      previous=index;
      segment.path.classList.add('is-cutting');
      const local=Math.min(segment.length,distance-segment.start);
      segment.path.style.strokeDashoffset=String(segment.length-local);
      const point=segment.path.getPointAtLength(local);
      const matrix=segment.path.transform.baseVal.consolidate()?.matrix;
      const transformed=matrix ? point.matrixTransform(matrix) : point;
      tool.setAttribute('transform', `translate(${transformed.x+154} ${transformed.y+160})`);
      tool.setAttribute('opacity', progress>0 && progress<1 ? '1' : '0');
      sparks.forEach((spark,i) => {
        const phase=((now/(260+(i%4)*35)+i*.137)%1);
        const angle=i*2.399+Math.sin(now/160)*.2;
        const radius=4+phase*(30+(i%4)*12);
        const tail=(9+(i%3)*3)*(1-phase);
        spark.setAttribute('x1',String(Math.cos(angle)*radius));
        spark.setAttribute('y1',String(Math.sin(angle)*radius+phase*phase*15));
        spark.setAttribute('x2',String(Math.cos(angle)*(radius+tail)));
        spark.setAttribute('y2',String(Math.sin(angle)*(radius+tail)+phase*phase*15));
        spark.style.opacity=String(Math.pow(1-phase,.65));
      });
      if (progress<1) frame=requestAnimationFrame(tick);
      else {
        segment.path.classList.remove('is-cutting');
        segment.path.classList.add('is-cut');
        exitTimer=setTimeout(()=>finish(),650);
      }
    };
    frame=requestAnimationFrame(tick);
    }
  } catch { finish(true); }
}
