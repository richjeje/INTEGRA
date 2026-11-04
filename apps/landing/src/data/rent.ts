export interface RentalEquipment {
  id: string;
  category: string;
  name: string;
  model: string;
  image: string | null;
  spec: string;
  label: string;
  power: string;
  weight: string;
  use: string;
  applications: string;
  details: [string, string][];
  note: string;
}

// Confirmed catalog content, with earlier technical limits retained where V1 conflicts.
// See docs/equipos/ACTUALIZACION-CATALOGO-V1.md for pending client confirmations.
export const rentalPeriods = ['Día', 'Semana', 'Mes', 'Proyecto'];
export const rentalTasks = [
  ['altura', 'Trabajar en altura', 'Plataformas de elevación'],
  ['carga', 'Mover una carga', 'Grúas y montacargas'],
  ['energia', 'Iluminar o soldar', 'Torres y fuentes de energía'],
  ['herramientas', 'Demoler concreto', 'Herramientas de impacto'],
  ['obra', 'Preparar mezcla', 'Equipo para concreto'],
  ['transporte', 'Trasladar maquinaria', 'Cama baja y logística'],
];

export const equipment: RentalEquipment[] = [
  {id:'zoomlion',category:'altura',name:'Plataforma de tijera',model:'Zoomlion ZS0808AC-Li',image:'/equipos/zoomlion-zs0808ac-li.webp',spec:'10.00 m / 7.8 m',label:'Altura de trabajo interior / exterior',power:'Eléctrica, batería de ion-litio',weight:'2090 kg',use:'Trabajo en altura',applications:"Instalaciones, pintura y cableado en espacios reducidos. Plataforma eléctrica sin emisiones durante la operación.",details:[['Altura de trabajo','10.00 m interior / 7.8 m exterior'],['Altura de plataforma','8.00 m interior / 5.8 m exterior'],['Capacidad de plataforma','230 kg'],['Peso declarado','2090 kg']],note:'Los límites interior y exterior, el número de operadores y la disponibilidad se confirman para cada proyecto.'},
  {id:'genie',category:'altura',name:'Plataforma articulada',model:'Genie Z-34/22 N',image:'rent-02-genie-articulada',spec:'12.52 m',label:'Altura de trabajo',power:'Eléctrica',weight:'5178 kg',use:'Trabajo en altura',applications:"Mantenimiento de líneas y trabajos sobre maquinaria instalada, con alcance para librar obstáculos en naves industriales.",details:[['Altura de plataforma','10.52 m'],['Capacidad','227 kg'],['Alcance horizontal','6.8 m'],['Alimentación','Eléctrica'],['Peso declarado','5178 kg']],note:'Consulta la configuración y disponibilidad para las fechas de tu proyecto.'},
  {"id": "genie-gr12", "category": "altura", "name": "Plataforma de mástil vertical", "model": "Genie GR-12", "image": null, "spec": "5.45 m", "label": "Altura de trabajo", "power": "No documentado", "weight": "No documentado", "use": "Mantenimiento en interiores", "applications": "Mantenimiento en pasillos estrechos, almacenes e instalaciones eléctricas y de climatización. Diseño compacto para interiores.", "details": [["Altura de plataforma", "3.45 m"], ["Capacidad de plataforma", "227 kg"], ["Aplicación", "Interiores y pasillos estrechos"]], "note": "Confirma dimensiones de acceso, condiciones del piso y configuración para el sitio."},
  {id:'broderson',category:'carga',name:'Grúa carry deck',model:'Broderson IC-80-3F',image:'rent-03-broderson-grua',spec:'8.16 t',label:'Capacidad declarada a 1.5 m',power:'Diésel',weight:'No documentado',use:'Maniobra de carga',applications:"Montaje de maquinaria bajo techo y maniobras de precisión dentro de planta. Diseño compacto de perfil bajo.",details:[['Capacidad declarada','8.16 t a 1.5 m'],['Capacidad a 8.5 m','1.07 t'],['Pluma','1.5 a 9 m'],['Motor','Cummins B3.3L, 55 kW']],note:'La capacidad varía con el radio, la configuración y la tabla de carga aplicable.'},
  {id:'montacargas',category:'carga',name:'Montacargas',model:'UniCarrier MP1F2A25LV',image:'rent-05-montacargas',spec:'5000 lb',label:'Capacidad declarada',power:'Gas L.P.',weight:'No documentado',use:'Movimiento de materiales',applications:"Carga y descarga de contenedores y tráileres, movimiento de tarimas y apoyo en montaje de líneas.",details:[['Combustible','Gas L.P.'],['Mástil','Tres etapas'],['Horquillas','42 pulgadas'],['Accesorio','Desplazador lateral']],note:'La capacidad depende del centro de carga y la configuración.'},
  {"id": "montacargas-electrico", "category": "carga", "name": "Montacargas eléctrico", "model": "Eléctrico industrial", "image": null, "spec": "2.5 t", "label": "Capacidad nominal", "power": "Eléctrica", "weight": "No documentado", "use": "Movimiento de carga en interiores", "applications": "Movimiento de carga en almacenes y áreas cerradas con restricciones de emisiones. Operación silenciosa y sin emisiones durante el uso.", "details": [["Capacidad nominal", "2500 kg"], ["Alimentación", "Eléctrica"], ["Aplicación", "Almacenes e interiores"]], "note": "La unidad, altura de elevación, centro de carga y accesorios se confirman según la maniobra."},
  {id:'torre',category:'energia',name:'Torre de iluminación',model:'Segamac SLT-88D',image:'rent-04-torre-iluminacion',spec:'4 × 200 W',label:'Módulos LED',power:'Diésel',weight:'No documentado',use:'Iluminación de sitio',applications:"Trabajos nocturnos, maniobras exteriores y atención a paros de planta que requieren iluminación portátil.",details:[['Flujo luminoso declarado','88 000 lm'],['Motor','Hyundai diésel, 10 hp'],['Tanque','100 L'],['Protección de módulos','IP65']],note:'Comparte ubicación, duración y condiciones de iluminación requeridas.'},
  {id:'infra',category:'energia',name:'Soldadora industrial CA/CD',model:'INFRA MI 2 350 CA/CD',image:'/equipos/infra-mi-2-350.webp',spec:'250 A a 30 V',label:'Salida nominal al 50%',power:'220 / 440 Vca',weight:'138 kg',use:'Soldadura industrial',applications:"Pailería, mantenimiento mecánico y fabricación de estructuras en sitio, con alimentación eléctrica disponible.",details:[['Salida nominal','250 A a 30 V CA/CD, 50%'],['Salida continua','175 A a 27 V, 100%'],['Rango de corriente','Hasta 300 A en CA o CD'],['Alimentación','220 / 440 Vca, 60 Hz']],note:'Admite SMAW y TIG CA/CD; la unidad de alta frecuencia para TIG se documenta como accesorio opcional.'},
  {id:'deltaweld',category:'energia',name:'Fuente de soldadura',model:'Miller Deltaweld 451',image:'rent-06-miller-deltaweld',spec:'450 A',label:'Salida declarada al 100%',power:'200 / 230 / 460 V',weight:'No documentado',use:'Soldadura industrial',applications:"Fabricación y montaje de estructuras metálicas para trabajos de soldadura industrial.",details:[['Salida nominal','38 V / 450 A'],['Ciclo de trabajo','100%'],['Entrada','Trifásica, 23 kW'],['Rango de voltaje','14 a 38 V']],note:'Confirma alimentación disponible, proceso y accesorios antes de seleccionar.'},
  {id:'rompedora',category:'herramientas',name:'Rompedora de concreto',model:'DeWalt D25951K',image:'rent-07-dewalt-rompedora',spec:'24 J',label:'Energía de impacto',power:'120 V / 60 Hz',weight:'13.3 kg',use:'Demolición',applications:"Adecuación de cimentaciones, anclajes de maquinaria, ranurado y trabajos de obra civil en planta.",details:[['Potencia','1500 W'],['Alimentación','120 V / 60 Hz'],['Portaherramienta','SDS max'],['Peso','13.3 kg']],note:'Consulta accesorios y disponibilidad según el trabajo a realizar.'},
  {id:'mezcladora',category:'obra',name:'Mezcladora de concreto',model:'LIDEC',image:'rent-08-revolvedora',spec:'360 L',label:'Capacidad máxima',power:'9 hp',weight:'200 kg sin motor',use:'Preparación de mezcla',applications:"Colados en sitio, bases para maquinaria, banquetas y mantenimiento civil.",details:[['Capacidad','1 saco / máximo 360 L'],['Producción estimada','5 m³/h'],['Ciclo estimado','3 min'],['Dimensiones','57 × 40 × 69 pulgadas']],note:'Producción y ciclo son valores estimados de ficha; dependen de la operación.'},
  {id:'ruffian',category:'energia',name:'Soldadora con generador',model:'ESAB Ruffian ES 150G EDW',image:'rent-11-esab-ruffian',spec:'150 A',label:'Salida al 60%',power:'Motor Kohler 14 hp',weight:'No documentado',use:'Soldadura y energía en campo',applications:"Soldadura y mantenimiento en campo con generación de energía auxiliar.",details:[['Ciclo de trabajo','60% a 150 A / 26 V'],['Ciclo continuo','100% a 115 A / 24.6 V'],['Generador','4.5 kW de arranque'],['Electrodo máximo','5/32 pulgadas']],note:'Confirma proceso, consumibles y demanda eléctrica de los equipos auxiliares.'},
  {id:'bobcat',category:'energia',name:'Soldadora con generador',model:'Miller Bobcat 225',image:'/equipos/miller-bobcat-225.webp',spec:'225 A a 25 V',label:'Salida CC/CD al 100%',power:'Motor Kohler gasolina, 23.5 hp',weight:'220 kg sin combustible',use:'Soldadura y energía en campo',applications:"Pailería, montaje y mantenimiento en sitio con soldadura y energía auxiliar.",details:[['Salida nominal','225 A a 25 V, 100%'],['Generador monofásico','9500 W continuos / 11000 W pico'],['Motor','Kohler gasolina, 23.5 hp'],['Tanque de combustible','45 L (12 gal)']],note:'La salida y el proceso dependen del modo seleccionado; confirma accesorios y demanda de energía auxiliar.'},
  {"id": "cama-baja", "category": "transporte", "name": "Cama baja", "model": "Transporte especializado", "image": null, "spec": "15 t", "label": "Capacidad nominal", "power": "No aplica", "weight": "No documentado", "use": "Traslado de maquinaria", "applications": "Traslado de plataformas, montacargas, estructuras metálicas y maquinaria pesada entre plantas o ciudades.", "details": [["Servicio", "Entrega y recolección"], ["Equipo", "Cama baja propia"], ["Cobertura", "Regional, previa consulta"]], "note": "Dimensiones útiles, capacidad aplicable, ruta y condiciones de carga se confirman antes del traslado."},
];

export function rentalInquiry(item?: RentalEquipment) {
  const request = item
    ? `Hola, me interesa ${item.category === 'transporte' ? 'cotizar el traslado con' : 'rentar'} ${item.name} (${item.model}).`
    : 'Hola, quiero cotizar equipo o transporte especializado con Integra Rigging.';
  const fields = item?.category === 'transporte'
    ? ['Carga a trasladar: ', 'Peso y dimensiones: ', 'Origen: ', 'Destino: ', 'Fechas: ']
    : ['Trabajo a realizar: ', 'Ubicación: ', 'Fechas: ', 'Duración (día, semana, mes o proyecto): ', 'Capacidad o altura requerida: '];
  const message = [request, '', ...fields, '', '¿Me comparten disponibilidad y condiciones de entrega y recolección?'].join('\n');
  return `https://wa.me/524495411077?text=${encodeURIComponent(message)}`;
}
