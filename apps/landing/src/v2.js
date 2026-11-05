const WHATSAPP_NUMBER = '524491060307';
const main = document.querySelector('main');
const arrow = '<span aria-hidden="true">↗</span>';
let contactContext = '';
let activeStage = 0;
let rentFilter = 'todos';

const metalProcesses = [
  { slug: 'corte-laser', name: 'Corte láser', description: 'Del archivo a la pieza. Corte de lámina para componentes y proyectos de manufactura.', result: 'Geometría de la pieza', inputs: ['Plano o referencia', 'Material', 'Espesor', 'Cantidad'] },
  { slug: 'doblado', name: 'Doblado', description: 'La forma que necesita tu ensamble. Conformado de lámina a partir de las medidas de tu proyecto.', result: 'Ángulos y dimensiones', inputs: ['Plano de dobleces', 'Material', 'Espesor', 'Cantidad'] },
  { slug: 'rolado', name: 'Rolado', description: 'Perfiles que siguen tu diseño. Curvado de elementos metálicos para estructuras y conjuntos.', result: 'Perfil y radio requerido', inputs: ['Sección del perfil', 'Material', 'Radio', 'Cantidad'] },
  { slug: 'soldadura', name: 'Soldadura', description: 'Piezas que se convierten en un conjunto. Fabricación y unión de elementos según tu proyecto.', result: 'Ensamble y tipo de unión', inputs: ['Plano del conjunto', 'Material', 'Tipo de unión', 'Cantidad'] }
];
const equipment = [
  { slug: 'montacargas', name: 'Montacargas', group: 'carga', drawing: 'forklift', use: 'Movimiento y manejo de materiales.', criteria: 'Carga y espacio de maniobra' },
  { slug: 'plataformas', name: 'Plataformas de elevación', group: 'altura', drawing: 'lift', use: 'Acceso para trabajos en altura.', criteria: 'Altura de trabajo y acceso' },
  { slug: 'gruas', name: 'Grúas', group: 'carga', drawing: 'crane', use: 'Elevación y maniobras de carga.', criteria: 'Carga, radio y configuración' },
  { slug: 'energia', name: 'Energía y herramientas', group: 'apoyo', drawing: 'power', use: 'Equipos de apoyo para el trabajo en campo.', criteria: 'Aplicación y alimentación' }
];
const engineeringServices = [
  { slug: 'transportadores', name: 'Transportadores industriales', description: 'Ingeniería e integración de sistemas para mover materiales dentro de tu operación.' },
  { slug: 'automatizacion', name: 'Automatización y control', description: 'Integración eléctrica y programación para coordinar los equipos de tu proceso.' },
  { slug: 'ingenieria', name: 'Ingeniería e integración', description: 'Levantamiento, diseño y coordinación técnica para desarrollar tu proyecto.' },
  { slug: 'retrofit', name: 'Mantenimiento y retrofit', description: 'Intervención y mejora de sistemas existentes según las necesidades de tu operación.' }
];
const stages = [
  { name: 'Diseño', heading: 'Todo empieza por entender el proceso.', text: 'Levantamiento, medidas y condiciones de operación. La ingeniería define cómo se conectan los elementos de la solución.', deliverable: 'Alcance técnico, diseño y planos.', drawing: 'conveyor', reference: '01 / DISEÑO DEL SISTEMA' },
  { name: 'Fabricación', heading: 'Cada componente tiene una función.', text: 'Manufactura de los elementos mecánicos y preparación de los sistemas eléctricos y de control definidos para el proyecto.', deliverable: 'Componentes y conjuntos para la instalación.', drawing: 'metal', reference: '02 / COMPONENTES Y CONJUNTOS' },
  { name: 'Operación', heading: 'El proyecto se conecta en campo.', text: 'Instalación, programación y pruebas para poner en marcha la solución. Mantenimiento y mejoras dan continuidad al trabajo.', deliverable: 'Integración y puesta en marcha conforme al alcance.', drawing: 'conveyor', reference: '03 / INTEGRACIÓN EN CAMPO' }
];

// Abstract line drawings are illustrative, never equipment specifications.
function drawing(type, caption = 'ESQUEMA REFERENCIAL') {
  const shapes = {
    conveyor: `<div class="leg one"></div><div class="leg two"></div><div class="belt">${'<i></i>'.repeat(11)}</div><div class="load"></div><div class="dimension"></div>`,
    metal: '<div class="sheet back"></div><div class="sheet front"></div><div class="measure"></div>',
    lift: '<div class="platform"></div><div class="scissor"></div><div class="scissor b"></div><div class="base"></div><div class="wheel"></div><div class="wheel right"></div>',
    forklift: '<div class="cab"></div><div class="body"></div><div class="mast"></div><div class="fork"></div><div class="wheel"></div><div class="wheel right"></div>',
    crane: '<div class="beam"></div><div class="base"></div><div class="tower"></div><div class="cable"></div>',
    power: '<div class="box"></div>'
  };
  return `<div class="drawing" role="img" aria-label="${caption}: esquema ilustrativo"><div class="axis" aria-hidden="true"></div><span class="mark" aria-hidden="true">+</span><div class="machine ${type}" aria-hidden="true">${shapes[type]}</div><span class="caption">${caption}</span></div>`;
}
function link(route, label, className = 'link') { return `<a href="#${route}" class="${className}"><span class="link-label">${label}</span>${arrow}</a>`; }
function crumbs(items) { return `<div class="bread"><a href="#inicio">Inicio</a>${items.map(([label, route]) => `<span aria-hidden="true">/</span>${route ? `<a href="#${route}">${label}</a>` : `<span>${label}</span>`}`).join('')}</div>`; }
function heading(eyebrow, name, description) { return `<section class="unit-heading"><div><p class="eyebrow">${eyebrow}</p><h1>${name}</h1></div><p>${description}</p></section>`; }
function setContact(context, label, action) {
  contactContext = context;
  document.querySelector('#contact-label').textContent = label;
  document.querySelector('#contact-action').textContent = action;
}
function recipe(items, label = 'Para comenzar la conversación') { return `<div class="request-recipe"><strong>${label}</strong><div class="recipe-items">${items.map(item => `<span>${item}</span>`).join('')}</div></div>`; }
function specs(rows) { return `<dl class="specs">${rows.map(([name, value]) => `<div><dt>${name}</dt><dd>${value}</dd></div>`).join('')}</dl>`; }
function faq(title, pairs) { return `<section class="faq-strip"><p class="eyebrow">${title}</p><div>${pairs.map(([q,a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div></section>`; }

function home() {
  setContact('', 'Un proyecto. Una conversación.', 'Hablemos');
  const divisions = [
    { id:'integra', number:'01', category:'INGENIERÍA INDUSTRIAL', title:'Integra', description:'Automatización de principio a fin.', sketch:'conveyor', caption:'DEL DISEÑO A LA OPERACIÓN', links:[['integra/transportadores','Transportadores'],['integra/automatizacion','Automatización y control']] },
    { id:'met', number:'02', category:'SOLUCIONES EN METAL', title:'<small>Integra</small>MET', description:'Manufactura para darle forma a tu proyecto.', sketch:'metal', caption:'DEL PLANO A LA PIEZA', links:[['met/corte-laser','Corte láser'],['met/doblado','Doblado y conformado']] },
    { id:'rent', number:'03', category:'RENTA DE EQUIPO', title:'<small>Integra</small>RENT', description:'Equipo para mover, elevar y trabajar.', sketch:'lift', caption:'DEL EQUIPO AL TRABAJO', links:[['rent/montacargas','Montacargas'],['rent/plataformas','Plataformas de elevación']] }
  ];
  return `<div class="shell"><section class="masthead"><h1>INTEGRA<span aria-hidden="true">↗</span></h1><div class="intro"><span class="eyebrow">CONTROL TOTAL EN MOVIMIENTO</span><p>Ingeniería, manufactura y equipo.<br>Tres especialidades que conectan tu proyecto.</p></div></section>
  <section class="division-grid" aria-label="Nuestras tres empresas">${divisions.map(d => `<article class="division"><div class="division-top"><span class="folio">${d.number} / ${d.category}</span><a href="#${d.id}" aria-label="Explorar ${d.id==='integra'?'Integra':`Integra ${d.id.toUpperCase()}`}">↗</a></div><h2><a href="#${d.id}">${d.title}</a></h2><p class="division-description">${d.description}</p>${drawing(d.sketch,d.caption)}<div class="division-links">${d.links.map(([url,label])=>link(url,label,'')).join('')}</div><div class="division-foot"><span>UNIDAD ${d.number}</span><span aria-hidden="true">↓</span></div></article>`).join('')}</section>
  <div class="belt-note mono"><span>INGENIERÍA / MANUFACTURA / INSTALACIÓN</span><span>AGUASCALIENTES, MÉXICO</span></div>
  <section class="feature"><aside class="feature-aside"><p class="eyebrow">EN CONJUNTO<br>01 — 03</p><p>Un proyecto permite ver cómo se conecta cada especialidad.</p></aside><div class="feature-body"><h2>Una línea de producción.<br>Muchas disciplinas conectadas.</h2><div class="project-preview"><div class="project-schematic">${drawing('conveyor','TRANSPORTADORES / ESQUEMA ILUSTRATIVO')}<div class="technical-strip"><span>PROYECTO INDUSTRIAL</span><span>INTEGRA ↗</span></div></div><div class="project-facts"><div class="fact"><span>01</span><div><h3>La ingeniería define.</h3><p>Levantamiento, planos y control.</p></div></div><div class="fact"><span>02</span><div><h3>La manufactura da forma.</h3><p>Componentes y conjuntos mecánicos.</p></div></div><div class="fact"><span>03</span><div><h3>La instalación conecta.</h3><p>Montaje, programación y puesta en marcha.</p></div></div>${link('proyecto','Recorrer el proyecto')}</div></div></div></section>
  <section class="network"><p class="eyebrow">SEGÚN TU NECESIDAD</p><div class="network-content"><div><h3>Un proyecto completo.</h3><p>Integra acompaña sus distintas etapas.</p></div><div><h3>Un servicio puntual.</h3><p>Consulta procesos de MET o equipos de RENT.</p></div></div></section></div>`;
}

function stagePanel() {
  const stage = stages[activeStage];
  return `<div class="engineering-canvas"><div class="stage-meta"><span>TRANSPORTADORES / ESQUEMA ILUSTRATIVO</span><span>0${activeStage+1} / 03</span></div>${drawing(stage.drawing,stage.reference)}<div class="stage-tabs" role="tablist" aria-label="Etapas del proyecto">${stages.map((s,i)=>`<button id="stage-${i}" role="tab" data-stage="${i}" aria-controls="stage-content" aria-selected="${i===activeStage}" tabindex="${i===activeStage?0:-1}"><span>0${i+1}</span>${s.name}</button>`).join('')}</div></div><div class="engineering-copy" id="stage-content" role="tabpanel" aria-labelledby="stage-${activeStage}" tabindex="0"><h2>${stage.heading}</h2><p>${stage.text}</p><div class="deliverable"><span>ALCANCE DE ESTA ETAPA</span><p>${stage.deliverable}</p></div></div>`;
}
function engineering(slug) {
  const service = engineeringServices.find(s=>s.slug===slug);
  setContact(service?`Integra: ${service.name}`:'Integra: ingeniería e integración',service?service.name:'Integra / Ingeniería industrial','Cuéntanos tu proyecto');
  return `<div class="shell">${crumbs(service?[['Integra','integra'],[service.name]]:[['Integra']])}${heading('01 / INGENIERÍA E INTEGRACIÓN',service?service.name:'Integra',service?service.description:'Del levantamiento a la puesta en marcha. La ingeniería conecta cada etapa de tu operación.')}
  <section class="engineering-stage" id="engineering-stage" aria-label="Del diseño a la operación">${stagePanel()}</section>
  ${recipe(['Necesidad del proceso','Ubicación','Etapa del proyecto'])}
  <section class="service-directory"><p class="eyebrow">${service?'OTRAS CAPACIDADES':'CAPACIDADES'}</p><div class="directory-links">${engineeringServices.filter(s=>s.slug!==slug).map(s=>link(`integra/${s.slug}`,s.name,'')).join('')}</div></section>
  <div class="secondary-nav"><p>¿Necesitas fabricar piezas o rentar equipo?</p><div>${link('met','Integra MET')} &nbsp; ${link('rent','Integra RENT')}</div></div></div>`;
}

function met(slug='corte-laser') {
  const process = metalProcesses.find(p=>p.slug===slug);
  setContact(`Integra MET: ${process.name}`,`MET / ${process.name}`,'Cotizar piezas');
  return `<div class="shell">${crumbs([['Integra MET']])}${heading('02 / SOLUCIONES EN METAL','Integra MET','Del plano a la pieza. Procesos de fabricación para las necesidades de tu proyecto.')}
  <section class="workbench"><nav class="process-nav" aria-label="Procesos de metal"><p class="eyebrow">ÍNDICE DE PROCESOS</p>${metalProcesses.map((p,i)=>`<a href="#met/${p.slug}" ${p.slug===slug?'aria-current="page"':''}><span><span class="mono">0${i+1}</span> &nbsp; ${p.name}</span></a>`).join('')}<small>UNA PIEZA PUEDE<br>COMBINAR VARIOS PROCESOS.</small></nav>
  <div class="process-content"><div class="process-top"><div><p class="eyebrow">PROCESO / MET</p><h2>${process.name}</h2><p>${process.description}</p></div><span class="process-num" aria-hidden="true">0${metalProcesses.indexOf(process)+1}</span></div>
  <div class="process-visual">${drawing('metal',process.result.toUpperCase())}<div>${specs([['Materiales','Por validar por proceso'],['Medidas y espesores','Según material y equipo'],['Volumen','Según tu requerimiento'],['Referencia','Plano, foto o descripción']])}<p class="note">Las capacidades técnicas se incorporarán con información validada.</p></div></div>${recipe(process.inputs,'Tu solicitud comienza con:')}</div></section>
  ${faq('ANTES DE COTIZAR',[['¿Todavía no tienes un plano?','Comparte una fotografía o una descripción por WhatsApp. Revisaremos qué información hace falta para definir la pieza.'],['¿Tu pieza requiere más de un proceso?','Indica el resultado que necesitas. Podemos revisar el alcance de corte, conformado y unión para tu proyecto.']])}
  <div class="secondary-nav"><p>¿La pieza forma parte de un proyecto de automatización?</p>${link('integra','Conocer Integra')}</div></div>`;
}

function catalogItems() {
  const items=equipment.filter(e=>rentFilter==='todos'||e.group===rentFilter);
  return items.map(e=>`<article class="equipment"><span class="folio">${e.group.toUpperCase()} / 0${equipment.indexOf(e)+1}</span>${drawing(e.drawing,'EQUIPO REFERENCIAL')}<h2>${e.name}</h2><p>${e.use}</p>${link(`rent/${e.slug}`,'Explorar equipo')}</article>`).join('');
}
function rent() {
  setContact('Integra RENT: renta de equipo','RENT / Equipo para tu operación','Consultar renta');
  return `<div class="shell">${crumbs([['Integra RENT']])}${heading('03 / RENTA DE EQUIPO','Integra RENT','Encuentra el tipo de equipo que necesita tu trabajo. Las fechas y condiciones se confirman por WhatsApp.')}
  <section aria-label="Catálogo de equipos"><div class="catalog-tools"><div class="filters" role="group" aria-label="Filtrar equipos">${[['todos','Todos'],['carga','Mover carga'],['altura','Trabajar en altura'],['apoyo','Equipo de apoyo']].map(([value,label])=>`<button data-filter="${value}" aria-pressed="${rentFilter===value}">${label}</button>`).join('')}</div><span class="mono" id="catalog-count" role="status">${equipment.filter(e=>rentFilter==='todos'||e.group===rentFilter).length} CATEGORÍAS</span></div><div class="catalog" id="catalog">${catalogItems()}</div></section>
  ${recipe(['Equipo','Fechas','Ubicación'],'Para consultar disponibilidad:')}
  ${faq('PLANEA TU RENTA',[['¿Qué información necesito para elegir equipo?','La tarea, las características de la carga o la altura requerida y las condiciones del lugar. El equipo comercial revisará contigo la opción adecuada.'],['¿La consulta confirma una reserva?','No. La disponibilidad y las condiciones de renta se confirman en la conversación con el equipo comercial.']])}</div>`;
}
function equipmentDetail(slug) {
  const item=equipment.find(e=>e.slug===slug);
  setContact(`Integra RENT: ${item.name}`,`RENT / ${item.name}`,'Consultar este equipo');
  return `<div class="shell">${crumbs([['Integra RENT','rent'],[item.name]])}${heading('03 / RENT — '+item.group.toUpperCase(),item.name,item.use)}
  <section class="equipment-detail">${drawing(item.drawing,'ESQUEMA REFERENCIAL / MODELO POR CONFIRMAR')}<div><p class="eyebrow">DATOS PARA ELEGIR</p><h2>La opción depende<br>de tu trabajo.</h2>${specs([['Criterio principal',item.criteria],['Modelo','Por confirmar'],['Capacidad','Según ficha del equipo'],['Condiciones de uso','Por revisar con tu proyecto'],['Disponibilidad','Consulta tus fechas']])}<p class="note">El esquema no representa un modelo específico. Inventario y fichas técnicas pendientes de validar.</p></div></section>
  ${recipe(['Trabajo a realizar','Fechas','Lugar de uso'])}<section class="service-directory"><p class="eyebrow">OTROS EQUIPOS</p><div class="directory-links">${equipment.filter(e=>e.slug!==slug).map(e=>link(`rent/${e.slug}`,e.name,'')).join('')}</div></section><div class="inline-back">${link('rent','Volver al catálogo')}</div></div>`;
}

function project() {
  setContact('Integra: proyecto de transportadores','Integra / Proyecto industrial','Hablemos de tu proyecto');
  return `<div class="shell">${crumbs([['Proyecto industrial']])}${heading('PROYECTO / ESTRUCTURA DE CASO','Transportadores<br>industriales.','Un recorrido por las disciplinas que conectan el diseño con la operación.')}<p class="revision-note">CASO ILUSTRATIVO. Evidencia y resultados del proyecto real pendientes de documentar.</p><section id="engineering-stage" class="engineering-stage" aria-label="Etapas del proyecto">${stagePanel()}</section><section class="case-summary"><div><span class="eyebrow">01 / NECESIDAD</span><h3>El punto de partida.</h3><p>Espacio para describir la necesidad de transporte de materiales del cliente.</p></div><div><span class="eyebrow">02 / ALCANCE</span><h3>La intervención.</h3><p>Espacio para documentar las disciplinas y etapas realizadas por Integra.</p></div><div><span class="eyebrow">03 / RESULTADO</span><h3>La evidencia.</h3><p>Espacio para fotografías y resultados comprobados del proyecto.</p></div></section><div class="inline-back">${link('integra/transportadores','Explorar el servicio')}</div></div>`;
}

function render() {
  const route=location.hash.slice(1)||'inicio';
  if(route==='contenido'){main.focus();return;}
  const [unit,slug,...extra]=route.split('/');
  let content;
  if(route==='inicio') content=home();
  else if(!extra.length && unit==='integra' && (!slug||engineeringServices.some(s=>s.slug===slug))) content=engineering(slug);
  else if(!extra.length && unit==='met' && (!slug||metalProcesses.some(p=>p.slug===slug))) content=met(slug);
  else if(route==='rent') content=rent();
  else if(!extra.length && unit==='rent' && equipment.some(e=>e.slug===slug)) content=equipmentDetail(slug);
  else if(route==='proyecto') content=project();
  else {setContact('','Un proyecto. Una conversación.','Hablemos');content=`<div class="shell missing"><h1>Sección no encontrada.</h1>${link('inicio','Volver al inicio')}</div>`;}
  main.innerHTML=content;
  document.querySelectorAll('.site-header nav a').forEach(a=>{if(a.hash===`#${unit}`)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
  document.title=`${main.querySelector('h1')?.textContent||'Integra'} | Borrador 02`;
  window.scrollTo(0,0);
  const h1=main.querySelector('h1');if(h1){h1.tabIndex=-1;h1.focus({preventScroll:true});}
}

function changeStage(index) {
  activeStage=index;
  document.querySelector('#engineering-stage').innerHTML=stagePanel();
  document.querySelector(`#stage-${index}`).focus({preventScroll:true});
}
document.addEventListener('click',event=>{
  const stage=event.target.closest('[data-stage]');
  if(stage){changeStage(Number(stage.dataset.stage));return;}
  const filter=event.target.closest('[data-filter]');
  if(filter){
    rentFilter=filter.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===filter)));
    document.querySelector('#catalog').innerHTML=catalogItems();
    document.querySelector('#catalog-count').textContent=`${equipment.filter(e=>rentFilter==='todos'||e.group===rentFilter).length} CATEGORÍAS`;
  }
});
document.addEventListener('keydown',event=>{
  if(!event.target.matches('[data-stage]'))return;
  const offset=event.key==='ArrowRight'?1:event.key==='ArrowLeft'?-1:0;
  if(offset){event.preventDefault();changeStage((activeStage+offset+stages.length)%stages.length);}
  else if(event.key==='Home'||event.key==='End'){event.preventDefault();changeStage(event.key==='Home'?0:stages.length-1);}
});
document.querySelector('#whatsapp').addEventListener('click',()=>{
  const message=contactContext?`Hola, me interesa ${contactContext}. Quisiera recibir información para mi proyecto.`:'Hola, me gustaría recibir información sobre los servicios de Integra.';
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,'_blank','noopener,noreferrer');
});
window.addEventListener('hashchange',render);
render();
