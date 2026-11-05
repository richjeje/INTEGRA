// Set the confirmed company number in international format, digits only.
const WHATSAPP_NUMBER = '524491060307';
const units = {
  integra: { name: 'Integra', label: 'Ingeniería e integración', headline: 'De la necesidad a la puesta en marcha.', intro: 'Diseñamos, fabricamos e integramos soluciones para tus procesos de manufactura.', visual: 'PROYECTO INDUSTRIAL EN OPERACIÓN', need: 'Quiero automatizar un proceso', services: [
    ['transportadores', 'Transportadores industriales', 'Sistemas para mover materiales dentro de tu operación.'],
    ['automatizacion', 'Automatización y control', 'Programación e integración de los equipos de tu proceso.'],
    ['ingenieria', 'Ingeniería e integración', 'Del levantamiento y los planos a la instalación.'],
    ['retrofit', 'Mantenimiento y retrofit', 'Conservación, adaptación y mejora de sistemas existentes.']
  ]},
  met: { name: 'Integra MET', label: 'Soluciones en metal', headline: 'Tu diseño, llevado al metal.', intro: 'Corte, conformado y fabricación de piezas para proyectos industriales.', visual: 'PIEZAS Y PROCESOS DE FABRICACIÓN', need: 'Necesito fabricar piezas', services: [
    ['corte-laser', 'Corte láser', 'Piezas a partir de lámina y de tu diseño.'],
    ['doblado', 'Doblado', 'Conformado de lámina para dar forma a tus piezas.'],
    ['rolado', 'Rolado', 'Curvado de perfiles según tu proyecto.'],
    ['soldadura', 'Soldadura', 'Unión y fabricación de conjuntos metálicos.']
  ]},
  rent: { name: 'Integra RENT', label: 'Renta de equipo', headline: 'El equipo que tu trabajo necesita.', intro: 'Explora equipos para elevación, carga y trabajos industriales. Consulta las opciones para tu proyecto.', visual: 'EQUIPO DISPONIBLE EN EL CATÁLOGO', need: 'Busco rentar equipo', services: [
    ['montacargas', 'Montacargas', 'Opciones para movimiento y manejo de cargas.'],
    ['plataformas', 'Plataformas de elevación', 'Equipos para realizar trabajos en altura.'],
    ['gruas', 'Grúas', 'Equipos para maniobras y elevación de cargas.'],
    ['energia', 'Energía y herramientas', 'Generadores, soldadoras y equipos de apoyo.']
  ]}
};
const main = document.querySelector('main');
const arrow = '<span aria-hidden="true">&#8599;</span>';
let contactContext = '';
function visual(text, extra = '') { return `<div class="visual ${extra}" role="img" aria-label="Espacio reservado: ${text}"><span>[ ${text} ]</span></div>`; }
function breadcrumb(items) { return `<div class="wrap breadcrumb"><a href="#inicio">Inicio</a>${items.map(([label, route]) => `<span aria-hidden="true">/</span>${route ? `<a href="#${route}">${label}</a>` : `<span>${label}</span>`}`).join('')}</div>`; }
function closeBand(title, text) { return `<div class="wrap"><section class="close-band"><p class="eyebrow">EL SIGUIENTE PASO</p><h2>${title}</h2><p>${text}</p></section></div>`; }
function relatedLinks(current) { return `<div class="related">${Object.entries(units).filter(([id]) => id !== current).map(([id, unit]) => `<a href="#${id}">${unit.name} ${arrow}</a>`).join('')}</div>`; }
function home() {
  contactContext = '';
  return `<div class="wrap"><section class="hero"><p class="eyebrow">TRES ESPECIALIDADES. UN MISMO RESPALDO.</p><h1>Integra.<br>Tu proyecto, en movimiento.</h1><p class="lead">Ingeniería industrial, soluciones en metal y renta de equipo. Encuentra lo que necesita tu operación.</p><div class="hero-bottom"><a class="text-link" href="#unidades" data-scroll="unidades">Explorar nuestras empresas <span aria-hidden="true">&#8595;</span></a><small>Aguascalientes, México</small></div>${visual('VISTA DE UN PROYECTO REAL DE INTEGRA', 'wide-visual')}</section>
  <section class="section" id="unidades"><div class="section-head"><div><p class="eyebrow">01 / NUESTRAS EMPRESAS</p><h2>¿Qué necesitas resolver?</h2></div><p>Tres caminos para encontrar la solución adecuada para tu proyecto.</p></div><div class="units">${Object.entries(units).map(([id,u],i)=>`<article class="unit"><span class="number">0${i+1} / ${u.label.toUpperCase()}</span><h3>${u.name}</h3><p>${u.need}.</p>${visual(u.visual)}<a class="text-link" href="#${id}">Explorar ${u.name} ${arrow}</a></article>`).join('')}</div></section>
  <section class="section split"><div>${visual('PROYECTO / TRANSPORTADORES')}</div><div><p class="eyebrow">02 / PROYECTOS</p><h2>Del plano<br>a la operación.</h2><p>Conoce cómo se conectan la ingeniería, la fabricación y la instalación en un proyecto industrial.</p><a href="#proyectos/transportadores" class="text-link">Explorar un proyecto ${arrow}</a></div></section>
  <section class="section"><div class="section-head"><div><p class="eyebrow">03 / RESPALDO</p><h2>Capacidad para<br>hacerlo realidad.</h2></div><p>Integra reúne distintas disciplinas para acompañar las necesidades de la industria.</p></div><div class="facts"><div><strong>Equipo técnico</strong>Ingeniería y programación.</div><div><strong>Manufactura</strong>Fabricación y conformado.</div><div><strong>Trabajo en campo</strong>Instalación y puesta en marcha.</div></div></section></div>${closeBand('Hablemos de tu siguiente proyecto.', 'Cuéntanos qué necesitas por WhatsApp. Te orientaremos con el área correspondiente.')}`;
}
function unitPage(id) {
  const u = units[id]; contactContext = u.name;
  const steps = id === 'integra' ? [['Entendemos','Levantamiento y definición de tu necesidad.'],['Diseñamos','Ingeniería y desarrollo de la solución.'],['Construimos','Fabricación, instalación y programación.'],['Ponemos en marcha','Pruebas, supervisión y continuidad.']] : id === 'met' ? [['Tu pieza','Comparte un plano, foto o descripción.'],['Especificaciones','Revisamos material, medidas y cantidad.'],['Cotización','Confirmamos el alcance de fabricación.'],['Fabricación','Producción conforme a lo acordado.']] : [['El trabajo','Identifica qué necesitas realizar.'],['El equipo','Consulta el tipo y las especificaciones.'],['Las fechas','Indica cuándo y dónde lo necesitas.'],['Confirmación','Revisamos disponibilidad y condiciones.']];
  return `${breadcrumb([[u.name]])}<div class="wrap"><section class="hero unit-hero"><div><p class="eyebrow">${u.name.toUpperCase()} / ${u.label.toUpperCase()}</p><h1>${u.headline}</h1><p class="lead">${u.intro}</p><a href="#opciones" data-scroll="opciones" class="text-link">${id==='rent'?'Explorar equipos':'Explorar servicios'} <span aria-hidden="true">&#8595;</span></a></div>${visual(u.visual)}</section>
  <section class="section" id="opciones"><div class="section-head"><div><p class="eyebrow">01 / ${id==='rent'?'EQUIPOS':'SERVICIOS'}</p><h2>${id==='rent'?'Encuentra tu equipo.':'Soluciones para tu proyecto.'}</h2></div><p>${id==='rent'?'Selecciona una categoría para revisar la información del equipo.':'Selecciona un servicio para conocer su alcance.'}</p></div><div class="service-list">${u.services.map(([slug,name,desc],i)=>`<a class="service-row" href="#${id}/${slug}"><span class="index">0${i+1}</span><h3>${name}</h3><p>${desc}</p><span class="arrow" aria-hidden="true">&#8599;</span></a>`).join('')}</div></section>
  <section class="section"><p class="eyebrow">02 / ${id==='integra'?'EL PROCESO':'CÓMO EMPEZAMOS'}</p><h2>${id==='integra'?'Cada etapa, conectada.':'De tu necesidad al siguiente paso.'}</h2><div class="steps">${steps.map(([title,description],i)=>`<div class="step"><span>0${i+1}</span><h3>${title}</h3><p>${description}</p></div>`).join('')}</div></section>
  <section class="section"><p class="eyebrow">03 / OTRAS NECESIDADES</p><h2>El respaldo de Integra.</h2><p>Explora las otras especialidades de nuestras empresas.</p>${relatedLinks(id)}</section></div>${closeBand(id==='rent'?'Consulta tu próxima renta.':id==='met'?'Cuéntanos qué quieres fabricar.':'Tu proyecto comienza con una conversación.',id==='rent'?'Comparte el equipo, las fechas y la ubicación por WhatsApp. La disponibilidad se confirma con nuestro equipo.':id==='met'?'Comparte por WhatsApp tu plano o una descripción de la pieza, el material y la cantidad.':'Comparte por WhatsApp la necesidad de tu operación y la etapa en la que se encuentra tu proyecto.')}`;
}
function servicePage(id, service) {
  const u = units[id]; const [slug,name,desc] = service; contactContext = `${u.name}: ${name}`;
  const rows = id==='rent' ? [['Modelo','Por confirmar'],['Capacidad','Por confirmar según equipo'],['Altura / alcance','Según ficha técnica'],['Alimentación','Según modelo'],['Disponibilidad','Consultar fechas por WhatsApp']] : id==='met' ? [['Materiales','Por confirmar por proceso'],['Dimensiones','Según capacidad validada'],['Espesores','Según material y proceso'],['Cantidad','Comparte el volumen requerido'],['Archivo de referencia','Plano, fotografía o descripción']] : [['Aplicación','Según necesidad del proyecto'],['Alcance','Definido con ingeniería'],['Integración','Mecánica, eléctrica y control'],['Ubicación','Por confirmar con el cliente']];
  const questions = id==='rent' ? [['¿Cómo consulto disponibilidad?','Comparte por WhatsApp el tipo de equipo, las fechas de uso y la ubicación. El equipo comercial confirmará las opciones.'],['¿Qué debo revisar antes de elegir?','La carga, el alcance, el espacio de trabajo y las condiciones del lugar. Las capacidades exactas se validan con la ficha del modelo.']] : id==='met' ? [['¿Qué información comparto para cotizar?','Un plano o referencia de la pieza, el material, sus medidas y la cantidad requerida.'],['¿Puedo consultar sin tener un plano?','Puedes comenzar la conversación con una descripción o fotografía para revisar qué información hace falta.']] : [['¿Cómo inicio mi proyecto?','Describe el proceso que quieres implementar o mejorar y la ubicación. Con esa información se puede revisar el siguiente paso.'],['¿Cómo se define el alcance?','El alcance se acuerda después de revisar la necesidad, las condiciones de operación y los requerimientos técnicos.']];
  return `${breadcrumb([[u.name,id],[name]])}<div class="wrap"><section class="hero"><p class="eyebrow">${u.name.toUpperCase()} / ${id==='rent'?'CATEGORÍA DE EQUIPO':'SERVICIO'}</p><h1>${name}</h1><p class="lead">${desc}</p>${visual(id==='rent'?'FOTOGRAFÍA DEL EQUIPO Y MODELO':'FOTOGRAFÍA DEL PROCESO O RESULTADO','wide-visual')}</section>
  <section class="section details"><div><p class="eyebrow">01 / ${id==='rent'?'ESPECIFICACIONES':'ALCANCE'}</p><h2>${id==='rent'?'Lo que necesitas conocer.':'Los detalles de tu proyecto.'}</h2><p>${id==='rent'?'Cada modelo tiene capacidades y condiciones de trabajo distintas. Consulta la opción adecuada para tu operación.':'Revisamos los requisitos de tu proyecto para definir la solución y sus condiciones.'}</p><small>Información técnica de ejemplo, pendiente de validación.</small></div><dl class="specs">${rows.map(([key,value])=>`<div><dt>${key}</dt><dd>${value}</dd></div>`).join('')}</dl></section>
  <section class="section"><p class="eyebrow">02 / ANTES DE EMPEZAR</p><h2>Resolvemos tus dudas.</h2>${questions.map(([q,a])=>`<details class="question"><summary>${q}</summary><p>${a}</p></details>`).join('')}</section>
  <section class="section"><p class="eyebrow">03 / EXPLORAR ${u.name.toUpperCase()}</p><h2>${id==='rent'?'Otras opciones de equipo.':'Servicios relacionados.'}</h2><div class="related">${u.services.filter(([s])=>s!==slug).map(([s,n])=>`<a href="#${id}/${s}">${n} ${arrow}</a>`).join('')}</div></section></div>${closeBand(id==='rent'?'Consulta este equipo por WhatsApp.':'Hablemos de lo que necesitas.',`La conversación incluirá la referencia de ${name.toLowerCase()} para dar contexto a tu solicitud.`)}`;
}
function projects(detail) {
  contactContext = detail ? 'Integra: proyecto de transportadores' : 'Integra: proyectos industriales';
  if(!detail) return `${breadcrumb([['Proyectos']])}<div class="wrap"><section class="hero"><p class="eyebrow">EXPERIENCIA EN CAMPO</p><h1>Proyectos que<br>toman forma.</h1><p class="lead">Un espacio para conocer el reto, la solución y el alcance de cada proyecto.</p></section><section class="section project-grid"><article>${visual('TRANSPORTADORES / CASO POR DOCUMENTAR')}<h3>Integración de transportadores</h3><p>Ingeniería, manufactura e instalación conectadas en un mismo proyecto.</p><a href="#proyectos/transportadores" class="text-link">Explorar el caso ${arrow}</a></article><div><p class="eyebrow">PRÓXIMOS CASOS</p><h2>La evidencia<br>detrás del trabajo.</h2><p>Los proyectos, fotografías y resultados se incorporarán con información validada por el cliente.</p></div></section></div>`;
  return `${breadcrumb([['Proyectos','proyectos'],['Transportadores']])}<div class="wrap"><section class="hero"><p class="eyebrow">INTEGRA / CASO DE PROYECTO</p><h1>Integración de<br>transportadores.</h1><p class="lead">Del diseño del sistema a su integración dentro de una operación industrial.</p>${visual('VISTA GENERAL DEL PROYECTO','wide-visual')}</section><section class="section"><p class="eyebrow">EL PROYECTO</p><div class="steps"><div class="step"><span>01 / RETO</span><h3>La necesidad inicial</h3><p>Espacio para explicar el problema concreto del cliente.</p></div><div class="step"><span>02 / SOLUCIÓN</span><h3>El sistema diseñado</h3><p>Espacio para describir la solución y las disciplinas involucradas.</p></div><div class="step"><span>03 / ALCANCE</span><h3>El trabajo realizado</h3><p>Espacio para detallar las etapas ejecutadas por Integra.</p></div><div class="step"><span>04 / RESULTADO</span><h3>La operación final</h3><p>Espacio para resultados documentados y autorizados.</p></div></div></section><section class="section"><a href="#integra/transportadores" class="text-link">Conocer el servicio de transportadores ${arrow}</a></section></div>${closeBand('¿Tu operación necesita algo similar?','Cuéntanos tu proyecto por WhatsApp.')}`;
}
function render() {
  const route = location.hash.slice(1) || 'inicio';
  if(route==='contenido') { main.focus(); return; }
  const [unit,slug] = route.split('/');
  let html; let title;
  if(route==='inicio') { html=home();title='Inicio'; }
  else if(units[unit] && !slug) {html=unitPage(unit);title=units[unit].name;}
  else if(units[unit] && units[unit].services.some(([s])=>s===slug)) {const service=units[unit].services.find(([s])=>s===slug);html=servicePage(unit,service);title=service[1];}
  else if(unit==='proyectos' && (!slug || slug==='transportadores')) {html=projects(Boolean(slug));title='Proyectos';}
  else {contactContext='';html=`<div class="wrap"><section class="hero"><h1>No encontramos esta sección.</h1><a class="text-link" href="#inicio">Volver al inicio ${arrow}</a></section></div>`;title='Sección no encontrada';}
  main.innerHTML=html;main.classList.remove('page-enter');void main.offsetWidth;main.classList.add('page-enter');
  document.title=`${title} | Integra · Prototipo`;
  document.querySelectorAll('nav a').forEach(a=>{if(a.hash===`#${unit}`)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
  closeMenu();window.scrollTo(0,0);
  const heading=main.querySelector('h1');if(heading){heading.tabIndex=-1;heading.focus({preventScroll:true});}
}
const menuButton=document.querySelector('.menu-toggle');
function closeMenu(){document.querySelector('nav').classList.remove('open');menuButton.setAttribute('aria-expanded','false');}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));document.querySelector('nav').classList.toggle('open',open);});
document.addEventListener('keydown',event=>{if(event.key==='Escape' && menuButton.getAttribute('aria-expanded')==='true'){closeMenu();menuButton.focus();}});
document.addEventListener('click',event=>{const link=event.target.closest('[data-scroll]');if(!link)return;event.preventDefault();const target=document.getElementById(link.dataset.scroll);if(target){target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});target.tabIndex=-1;target.focus({preventScroll:true});}});
document.querySelector('#whatsapp').addEventListener('click',()=>{
  const message=contactContext ? `Hola, me interesa ${contactContext}. Quisiera recibir información para mi proyecto.` : 'Hola, me gustaría recibir información sobre los servicios de Integra.';
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,'_blank','noopener,noreferrer');
});
main.tabIndex=-1;
window.addEventListener('hashchange',render);
render();
