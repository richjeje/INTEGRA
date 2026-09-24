# Plan maestro digital de Integra

Fecha: 18 de septiembre de 2026. Version 1, propuesta de trabajo.

## Actualizacion de alcance: contacto exclusivo por WhatsApp

Decision posterior del usuario: todo el contacto comercial se concentra en un solo boton persistente de WhatsApp. Esta decision sustituye las propuestas de formularios, adjuntos web, correo, llamadas y multiples CTA de contacto incluidas mas adelante en este documento. Los enlaces de navegacion permanecen disponibles.

El boton conserva contexto de unidad y servicio en un mensaje prellenado. El visitante decide enviarlo dentro de WhatsApp; no hay envio automatico. Planos, fotografias y datos de cotizacion se comparten en esa conversacion. La medicion web se limita al clic de salida; las conversaciones, cotizaciones y ventas requieren seguimiento comercial separado.

El borrador navegable se encuentra en apps/landing/index.html. Es monocromatico, utiliza espacios reservados en lugar de imagenes y rutas por fragmento para explorar la estructura. Estas rutas no sustituyen las URLs indexables previstas para produccion. El numero confirmado por el usuario es +52 449 541 1077 y el boton abre WhatsApp con un mensaje contextual, sin enviarlo automaticamente.

## 1. Decision principal

Construir un sitio comercial unificado con una portada y tres areas principales: Integra, Integra MET e Integra RENT. Cada area tendra identidad reconocible, servicios propios y un recorrido de cotizacion adaptado. La portada sera breve; la profundidad vivira en paginas interiores enlazadas.

Esta propuesta sigue la indicacion mas reciente del proyecto. En la conversacion original el cliente menciono tres sitios independientes; aqui se propone resolver la experiencia en un dominio con tres secciones. Documentar esta evolucion del alcance al presentar el proyecto al cliente.

Usar inicialmente rutas /integra/, /met/ y /rent/. Conservar apps/landing como aplicacion del sitio completo; el monorepo no obliga a desplegar tres sitios ni a crear tres aplicaciones ahora. El dominio definitivo sigue pendiente. Si ya existen dominios, investigar trafico, enlaces y URLs antes de decidir migraciones.

La razon de esta arquitectura es operativa: una navegacion, un sistema editorial, medicion consistente y menos contenido duplicado. Un dominio por si solo no garantiza mejor posicionamiento. Separar sitios en el futuro solo si existe una necesidad comercial real, contemplando redirecciones y migracion de contenido.

## 2. Objetivos y criterios de negocio

Objetivo principal: generar oportunidades calificadas para las tres unidades y convertirlas en cotizaciones y ventas. Medir tambien nuevos clientes ajenos a la cartera habitual.

La dependencia comercial y las cifras financieras compartidas en la reunion son contexto interno. No son contenido publico de la web. La diversificacion de ingresos es una meta de la empresa; la web contribuye, pero no puede garantizarla por si sola.

| Unidad | Visitante principal | Necesidad | Conversion principal |
| --- | --- | --- | --- |
| Integra | Ingenieria, mantenimiento, operaciones y compras | Ejecutar o mejorar un proceso industrial | Solicitar evaluacion de proyecto |
| MET | Compras, fabricantes, talleres y contratistas | Fabricar piezas o conformar metal | Solicitar cotizacion con especificaciones |
| RENT | Construccion, mantenimiento e instaladores | Conseguir equipo adecuado para una fecha | Consultar equipo, fechas y ubicacion |

Prioridad geografica inicial: Aguascalientes. Publicar cobertura regional o nacional solo para los servicios que realmente puedan atenderse. Definir con ventas prioridades por margen, capacidad disponible y demanda; no asumir que los tres negocios requieren el mismo presupuesto publicitario.

## 3. Inventario de certezas y pendientes

La reunion describe capacidades de integracion, transportadores, control y PLC, manufactura, instalacion, mantenimiento y retrofit; MET incluye corte laser, doblado, rolado y soldadura; RENT incluye equipos de elevacion, carga, energia y herramientas. Esto permite organizar contenido, pero no constituye una ficha tecnica aprobada.

Antes de publicar deben confirmarse:

- Nombres comerciales y legales: MET, Rent o Rentals; logotipos vigentes y transicion de Integra.
- Direccion, horarios, cobertura, correos, telefonos y responsables por unidad.
- Inventario disponible y equipos todavia en compra, traslado o puesta en servicio.
- Materiales, espesores, dimensiones, tolerancias, formatos de planos y volumen atendible de MET.
- Capacidades, alturas, alimentacion y restricciones de cada modelo de RENT.
- Certificaciones: alcance, titular, vigencia y documento que respalda cada afirmacion.
- Proyectos, fotografias, logos de clientes y resultados autorizados para publicacion.
- Condiciones de transporte, operador, deposito, facturacion y duraciones de renta.
- Dominio, hosting y cuentas de medicion existentes; no se han auditado.

La transcripcion contiene nombres y unidades inconsistentes. Por ejemplo, la mesa de corte se describe con medidas que luego se corrigen; la capacidad de una grua tampoco debe resumirse como una carga segura universal. Usar fichas del fabricante y revision tecnica, incluyendo configuracion de trabajo cuando corresponda. No convertir ejemplos de produccion masiva en promesas de entrega.

## 4. Arquitectura de informacion

```text
/
|-- integra/
|   |-- transportadores/
|   |-- automatizacion-y-control/
|   |-- ingenieria-e-integracion/
|   `-- mantenimiento-y-retrofit/
|-- met/
|   |-- corte-laser/
|   |-- doblado/
|   |-- rolado/
|   `-- soldadura/
|-- rent/
|   |-- montacargas/
|   |-- plataformas-de-elevacion/
|   |-- gruas/
|   |-- energia-y-herramientas/
|   `-- equipos/[modelo]/
|-- proyectos/
|   `-- [caso]/
|-- nosotros/
|-- recursos/
|   `-- [guia]/
|-- contacto/
`-- aviso-de-privacidad/
```

Es un mapa objetivo, no una orden para publicar paginas vacias. Activar una pagina cuando tenga oferta confirmada, informacion propia y siguiente paso comercial. Ampliar energia y herramientas a categorias separadas cuando el inventario lo justifique. Recursos puede incorporarse despues del lanzamiento.

Menu de escritorio: Integra, MET, RENT, Proyectos y Contacto, con accion destacada de cotizacion. Nosotros y Recursos pueden vivir en navegacion secundaria. En movil, menu compacto con las tres unidades a primer nivel. Breadcrumbs en interiores y enlaces de regreso a la categoria.

No obligar a quien llega desde Google a volver a la portada. Cada pagina interior debe explicar de inmediato servicio, proveedor, cobertura y accion disponible.

## 5. Portada: secuencia y contenido

| Orden | Seccion | Funcion | Contenido propuesto |
| --- | --- | --- | --- |
| 1 | Hero | Identificar la empresa y la oferta | H1: Integra. Apoyo: Ingenieria industrial, soluciones en metal y renta de equipo. Imagen real y enlace a las tres unidades |
| 2 | Tres unidades | Elegir por necesidad | Integra: automatizar o integrar. MET: fabricar piezas. RENT: rentar equipo. Una imagen y enlace descriptivo por unidad |
| 3 | Evidencia | Demostrar capacidad | Uno o dos casos autorizados con alcance y resultado documentado |
| 4 | Respaldo | Explicar por que confiar | Equipo tecnico, instalaciones y capacidades verificadas; enlace a Nosotros |
| 5 | Contacto | Iniciar una oportunidad | Selector de unidad, medio de contacto y solicitud breve |
| 6 | Pie | Resolver orientacion y datos | Domicilio, horarios, cobertura, contactos, rutas y privacidad |

La primera pantalla debe mostrar la marca y al menos el inicio de la siguiente seccion. Probar proporciones en movil y escritorio. No emplear un selector de marcas a pantalla completa que bloquee la entrada ni un carrusel automatico que esconda dos de las unidades.

El proceso completo de integracion pertenece a /integra/. En portada basta una frase de respaldo; no repetir las etapas, todos los servicios y todo el catalogo.

## 6. Experiencia dentro de cada unidad

### Integra

Secuencia: propuesta de ejecucion integral, soluciones principales, proceso, caso real, capacidades y solicitud de evaluacion.

Proceso propuesto: levantamiento, ingenieria y diseno, manufactura, instalacion, programacion e integracion, puesta en marcha y supervision. Mantenimiento, mejoras y retrofit se presentan como continuidad posterior. El equipo debe validar el orden, porque varias actividades pueden ocurrir en paralelo.

Cada etapa muestra una frase, una imagen y el entregable correspondiente. La informacion esencial queda visible; los detalles adicionales pueden desplegarse. La interfaz movil usa una secuencia vertical simple.

### MET

Secuencia: procesos disponibles, capacidades tecnicas, ejemplos de piezas, requisitos para cotizar y envio de solicitud.

En cada servicio: materiales, rangos por material, dimensiones, tolerancias confirmadas, cantidad, acabado y opciones de suministro de material. Mostrar limites con sus condiciones. Las tablas deben distinguir capacidad maxima de condiciones habituales de produccion.

CTA: Cotizar piezas. Permitir iniciar sin plano mediante descripcion y fotografia. No obligar a adjuntar un archivo para poder hablar con ventas.

### RENT

Secuencia: categorias, listado de equipos, ficha de modelo, condiciones de servicio y consulta de fechas.

Filtros solo cuando el inventario lo amerite: tipo, altura de trabajo, capacidad y alimentacion. Mostrar unidades claras y diferenciar altura de plataforma de altura de trabajo. Guardar filtros al regresar de una ficha; ofrecer restablecerlos y un estado util cuando no haya resultados.

Ficha: fotos reales, modelo, especificaciones verificadas, aplicaciones, restricciones, transporte, opcion de operador si existe y fechas de solicitud. Un mismo modelo puede tener varias unidades fisicas; no necesita URLs duplicadas por numero de serie.

CTA: Consultar disponibilidad. No mostrar Disponible ahora ni permitir reservas confirmadas sin una fuente de inventario actualizada. Un formulario enviado no equivale a una renta reservada.

## 7. Navegar sin repetir informacion

Asignar un lugar principal a cada contenido: portada orienta; unidad agrupa; servicio explica; ficha especifica; caso demuestra; contacto convierte. Los resumenes y enlaces son validos, pero no copiar bloques completos entre estos niveles.

La soldadura como servicio de maquila pertenece a MET; dentro de un proyecto integral Integra puede mencionarla y enlazarla. Lo mismo aplica a maniobras y equipo de RENT. Las recomendaciones cruzadas deben responder a una necesidad concreta, con uno o dos enlaces, sin reproducir el menu completo a mitad de cada pagina.

La consistencia de contacto, capacidad y nombres es deseable: mantener una sola fuente de datos y reutilizarla. Un CTA puede repetirse cuando el visitante ya tiene informacion para actuar; evitar repetir el argumento comercial.

Recorridos de prueba:

1. Inicio -> MET -> corte laser -> solicitud con servicio preseleccionado.
2. Busqueda de montacargas -> categoria RENT -> modelo -> fechas y contacto.
3. Caso de transportadores -> servicio Integra -> evaluacion de proyecto.
4. Enlace directo a ficha -> especificaciones -> categoria o contacto, sin depender de conocer la portada.

Objetivo de usabilidad: encontrar la unidad correcta en unos segundos y llegar desde portada a un servicio prioritario en dos selecciones. Verificar con usuarios, no asumir que una arquitectura dibujada ya es intuitiva.

## 8. Direccion visual y animaciones

Concepto creativo propuesto: Del plano a la operacion. La identidad visual conecta precision tecnica, fabricacion real y movimiento de maquinaria.

Base blanca y gris claro, texto grafito, reticula limpia, titulos firmes y fotografias nitidas. Respetar las identidades existentes; colores de acento provisionales para explorar: rojo en Integra, azul en MET y verde en RENT. Validar contra archivos de marca antes de fijar paleta. Diferenciar unidades tambien por nombre, icono e imagen, no solo por color.

Portada con fotografia o video real a todo el ancho y texto legible sobre una zona de poco detalle. Bandas abiertas para secciones; tarjetas solo para elementos repetidos como servicios o equipos. Tipografia tecnica legible sin apariencia de tablero futurista. Especificaciones y formularios reciben una presentacion sobria y compacta.

| Recurso | Ubicacion | Intencion y limite |
| --- | --- | --- |
| Transicion de plano a fotografia | Caso principal de Integra | Mostrar que el diseno se convierte en equipo real; una reproduccion breve o control manual |
| Linea de avance | Proceso Integra | Orientar al recorrer etapas; no secuestrar el scroll |
| Recorte que revela pieza terminada | MET | Relacionar geometria y fabricacion usando material real |
| Video corto de equipo operando | Ficha RENT | Mostrar funcionamiento; reproducir por decision del visitante |
| Cambios de estado sutiles | Botones y enlaces | Confirmar interaccion, entre 150 y 250 ms como punto de partida |
| Entrada leve de contenido secundario | Secciones | Opacidad y desplazamiento corto, aproximadamente 250 a 450 ms |

Limitar el movimiento protagonista a una composicion por vista. El texto principal aparece de inmediato. Evitar precargadores decorativos, scroll horizontal obligatorio, cursor personalizado y reproducciones pesadas simultaneas. Respetar prefers-reduced-motion; las versiones estaticas conservan la informacion y la accion.

El cliente sugirio un GIF continuo del logo antiguo al nuevo. Propuesta: una transicion breve en Integra, con estado final estable y logotipo de navegacion reconocible. Presentar este ajuste al cliente antes del diseno final. Elegir animacion vectorial o video ligero segun los archivos disponibles; un GIF pesado no es requisito funcional.

## 9. Produccion de contenido y evidencia

Crear un inventario editorial con URL, unidad, objetivo, responsable, fuente, estado de validacion, imagen requerida y fecha de revision. Cada dato tecnico debe tener un responsable de la unidad.

Material inicial recomendado: fotografias horizontales y verticales de planta y equipos; secuencias cortas de procesos; retratos del equipo; planos autorizados; dos casos completos si existe permiso. Las imagenes de stock o generadas no deben presentarse como instalaciones o proyectos realizados por Integra.

Caso de proyecto: problema, alcance contratado, disciplinas involucradas, solucion, evidencia visual y resultados respaldados. Si no existe una cifra verificable, describir el resultado cualitativamente. No publicar nombres, planos internos, costos ni logotipos de clientes por el solo hecho de aparecer en la reunion.

Tono: concreto, tecnico y comprensible. Explicar terminos como retrofit o conveyor cuando ayudan al comprador. Usar nombres genericos de equipo junto al modelo; Genie es una marca, no una categoria universal.

## 10. Plan SEO: investigacion y asignacion de paginas

Las siguientes consultas son hipotesis editoriales, no datos de volumen ni competencia. La investigacion debe completarse con resultados locales, Keyword Planner y Search Console si ya existe historial.

| Grupo de intencion | Consultas candidatas | Pagina principal |
| --- | --- | --- |
| Integracion industrial | automatizacion industrial Aguascalientes; integradores industriales | /integra/ |
| Transporte de materiales | fabricacion de conveyors; transportadores industriales | /integra/transportadores/ |
| Control | programacion PLC Aguascalientes | /integra/automatizacion-y-control/ |
| Corte | corte laser metal Aguascalientes | /met/corte-laser/ |
| Conformado | doblado de lamina; rolado de perfiles Aguascalientes | /met/doblado/ y /met/rolado/, segun intencion |
| Carga | renta de montacargas Aguascalientes | /rent/montacargas/ |
| Altura | renta de plataformas; elevador de tijera Aguascalientes | /rent/plataformas-de-elevacion/ |
| Maniobras | renta de gruas Aguascalientes | /rent/gruas/ |

Pasos de investigacion: levantar palabras reales usadas por ventas; agrupar sinonimos e intenciones; revisar resultados y competidores locales; evaluar demanda y capacidad comercial; asignar una URL principal por intencion; priorizar paginas con posibilidad de venta y evidencia suficiente. Distinguir consultas ambiguas, por ejemplo gruas industriales frente a gruas de arrastre.

Cada servicio tendra titulo y descripcion propios, encabezado descriptivo, contenido original, fotos relevantes, enlaces relacionados y CTA especifico. Ejemplo provisional: Corte laser en Aguascalientes | Integra MET. Usar ubicacion solo donde la cobertura este confirmada.

Evitar paginas clonadas para cada ciudad, variacion ortografica o tipo de busqueda. Crear una pagina geografica adicional solo cuando aporte cobertura, operacion y evidencia local diferenciadas. No producir un blog masivo al inicio; primero completar paginas comerciales y casos.

## 11. SEO tecnico y local

Requisitos de construccion: HTML inicial con contenido principal; enlaces rastreables; URLs estables; canonical coherente; sitemap solo de URLs publicables; robots.txt revisado; respuestas 200, 301 y 404 correctas; metadatos sociales e imagenes optimizadas. Las fichas importantes no deben existir solo dentro de un modal o filtro.

Definir una politica para filtros: indexar categorias editoriales utiles; impedir que combinaciones arbitrarias generen miles de URLs publicables. Usar canonical cuando haya equivalencia real; no canonizar todos los servicios a la portada. Si se usa noindex, permitir rastreo para que el buscador pueda leerlo.

Datos estructurados propuestos: Organization para la entidad real, LocalBusiness si corresponde a la operacion, BreadcrumbList en interiores y Service para describir servicios. Evaluar Product en fichas segun la oferta real. Identificadores estables y relaciones entre unidades segun estructura legal confirmada. No inventar precios, disponibilidad, reseñas ni certificaciones. El marcado debe coincidir con informacion visible; no garantiza resultados enriquecidos ni citas de IA.

SEO local: revisar y verificar Google Business Profile, nombre, direccion, telefono, categoria, horario, servicios y fotos. Google explica que la visibilidad local depende de relevancia, distancia y prominencia; no se compra una mejor posicion organica. [Fuente: posicionamiento local](https://support.google.com/business/answer/7091?hl=en).

No crear automaticamente tres fichas de Maps por tener tres unidades. Validar si cada una cumple los criterios de negocio o departamento independiente; mantener informacion real y evitar duplicados. [Fuente: representacion de empresas](https://support.google.com/business/answer/3038177?hl=en).

Pedir reseñas autenticas a clientes reales, sin incentivos ni filtrado por satisfaccion. Construir presencia verificable en asociaciones industriales, directorios pertinentes, proveedores y casos conjuntos autorizados. Mantener coherencia con Bing Places y perfiles sociales. No prometer posicion uno.

## 12. GEO: visibilidad en respuestas con IA

GEO significa mejorar la posibilidad de que sistemas de busqueda con IA encuentren, interpreten y citen la empresa. No existe una inclusion garantizada.

Google mantiene el SEO como fundamento de sus experiencias generativas: prioriza contenido propio y util, acceso tecnico y buena experiencia. No exige un schema especial ni llms.txt; su guia indica que ese archivo no mejora el posicionamiento en Google. Revisar tambien la inclusion del sitio en funciones generativas desde Search Console. [Fuente: guia oficial de Google](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).

Aplicacion editorial propuesta para Integra:

- Explicar de manera consistente quien es cada unidad, que hace, donde atiende y como contactar.
- Responder dudas que afectan una compra: que enviar para cotizar, que materiales se aceptan, que incluye una renta o cuando conviene un retrofit.
- Incorporar tablas tecnicas validadas, ejemplos reales y casos que aporten evidencia propia.
- Asignar revision tecnica y actualizar datos cuando cambie la capacidad o el inventario.
- Mantener especificaciones esenciales en HTML; los PDF seran complementarios.
- Conseguir referencias autenticas de clientes, asociaciones y proveedores, con informacion coherente.

Estas acciones son una propuesta de contenido y calidad, no una formula comprobada de citacion. Las preguntas frecuentes se escriben para resolver dudas reales, sin necesidad de multiplicarlas para cada formulacion de un prompt.

Para ChatGPT Search, verificar que robots.txt y la infraestructura no bloqueen OAI-SearchBot. Permitir rastreo facilita descubrimiento, pero no garantiza aparicion. La decision sobre rastreadores de entrenamiento debe tratarse por separado de la visibilidad en busqueda. [Fuente: OpenAI para editores](https://help.openai.com/en/articles/12627856).

Medicion: revisar impresiones del informe de IA generativa de Search Console; puede no mostrar datos si el sitio carece de impresiones suficientes. No atribuirle metricas de leads ni asumir que ofrece todas las consultas de IA. [Fuente: informe de Google](https://support.google.com/webmasters/answer/16984139?hl=en).

Bing ofrece AI Performance con citas, paginas referenciadas y muestras de consultas de recuperacion. Las citas no equivalen a posicion ni ventas. Revisar su disponibilidad en la cuenta. [Fuente: informe de Bing](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview).

Complementar con trafico referido identificable y una muestra mensual de preguntas comerciales, registrando fecha, sistema, ubicacion y URLs citadas. Las respuestas varian; esa muestra sirve como diagnostico, no como ranking universal. No sumar metricas de Google y Bing como si fueran equivalentes.

## 13. Conversion, WhatsApp y seguimiento

Accion principal por contexto: evaluar proyecto, cotizar piezas o consultar disponibilidad. WhatsApp debe llevar un mensaje con unidad, servicio o modelo; mantener alternativa de formulario, correo o llamada.

En movil, una barra discreta puede incluir cotizacion y WhatsApp, respetando espacio seguro y sin tapar contenido o campos. En escritorio, acceso visible sin cubrir las fichas. Evitar ventanas emergentes inmediatas.

Formulario base: nombre, empresa opcional, un medio de contacto y necesidad. Pedir despues lo que corresponde: proyecto y ubicacion para Integra; material, espesor, cantidad y archivo opcional para MET; modelo, fechas y lugar para RENT. Conservar datos al corregir errores, mostrar estado de envio y confirmar solo al recibir la solicitud en servidor.

Flujo interno: solicitud -> asignacion por unidad -> contacto -> calificacion -> cotizacion -> seguimiento -> ganada o perdida. Registrar motivo de perdida. Definir responsable y tiempo de primera respuesta realista antes de publicarlo.

Eventos propuestos: seleccionar_unidad, ver_servicio, ver_equipo, clic_whatsapp, clic_telefono, iniciar_formulario y solicitud_recibida. Este ultimo se emite tras aceptacion real, con deduplicacion. No enviar nombres, correos, telefonos ni planos a analitica.

Un clic en WhatsApp no demuestra que se envio un mensaje; un clic en telefono no confirma llamada. Medir conversaciones y oportunidades desde el proceso comercial o una integracion validada. Capturar origen, pagina de entrada y campana cuando sea posible, contemplando consentimiento y limites de atribucion.

## 14. Publicidad y medicion comercial

Organizar campanas por unidad e intencion; cada anuncio llega al servicio correspondiente. Separar busquedas de marca de descubrimiento. Ajustar ubicacion al alcance real y excluir intenciones no atendidas, como empleo, cursos o equipo usado si no se ofrece.

Antes de invertir: probar recepcion de solicitudes, enlaces de contacto, responsables de respuesta y medicion. El presupuesto se define con costos de busqueda, margen, valor esperado y capacidad; no hay datos suficientes para fijar una cantidad responsable ahora.

Tablero mensual: oportunidades calificadas por unidad y canal, cotizaciones emitidas, ventas, tasa de cierre, tiempo de respuesta y costo por oportunidad calificada. Complementar con trafico sin marca, consultas, paginas de entrada, impresiones/citas IA y rendimiento web.

Formulas: tasa de cotizacion = oportunidades cotizadas / oportunidades calificadas; tasa de cierre = oportunidades ganadas / cotizaciones; costo por oportunidad = inversion atribuible / oportunidades calificadas. Acordar periodos y cohortes, porque un proyecto industrial puede cerrar meses despues.

Establecer linea base durante los primeros 30 dias de datos utilizables. Los 90 dias permiten aprender y ajustar; no constituyen una promesa de rankings o ventas.

## 15. Arquitectura tecnica propuesta

Preferir paginas generadas como HTML con interactividad puntual y un endpoint para solicitudes. Seleccionar framework y proveedor durante la fase tecnica segun equipo, edicion requerida y despliegue; no hay stack existente que conservar.

Mantener apps/landing para portada y las tres unidades. packages/ui alojara componentes realmente compartidos; packages/shared, modelos y validaciones reutilizables; packages/config, configuracion comun cuando exista. Evitar crear capas vacias adicionales solo por anticipar crecimiento.

Modelo editorial: Unidad, Servicio, Capacidad, ModeloEquipo, Proyecto, Pregunta y Contacto. Cada registro tendra identificador, propietario, estado de publicacion, fuente y fecha de revision. Relacionar contenidos por identificador para que una especificacion no se copie manualmente en varias paginas.

Si el equipo comercial editara con frecuencia, incorporar CMS con permisos, vista previa y publicacion revisada. Si los cambios iniciales son pocos, contenido estructurado versionado puede bastar. Esto se decide antes de estimar el desarrollo definitivo.

Formularios con validacion del lado servidor, proteccion contra spam, limites de envio, registro duradero y aviso al responsable. Para archivos: tipos y tamanos permitidos, acceso privado, revision y politica de retencion. Recuperar solicitudes si falla la notificacion; el correo no debe ser el unico registro.

Preparar entorno de pruebas protegido, HTTPS, manejo de secretos, respaldo del contenido y recuperacion de despliegue. El aviso de privacidad debe reflejar el flujo real; el propietario valida el texto y la configuracion de consentimiento antes del lanzamiento.

## 16. Rendimiento y accesibilidad

Objetivos de campo: LCP <= 2.5 s, INP <= 200 ms y CLS <= 0.1 en el percentil 75, revisando movil y escritorio. Son umbrales de experiencia; no garantizan posicionamiento. Antes de tener trafico se usan pruebas de laboratorio y despues datos reales. [Fuente: Core Web Vitals](https://web.dev/articles/vitals).

Presupuestos internos iniciales, ajustables al prototipo: JavaScript inicial propio comprimido <= 120 KB; primera carga movil alrededor de 1 MB sin video diferido; imagen principal idealmente <= 250 KB. Medir tambien scripts externos para que no queden fuera del presupuesto real.

Imagenes responsivas con dimensiones reservadas; formatos modernos; priorizar la imagen principal y diferir medios inferiores. Poster estatico para video y descarga posterior; no precargar tres videos por las tres marcas. Cargar mapas y embeds a peticion. Animar transformaciones y opacidad sin bloquear contenido.

Objetivo de accesibilidad: WCAG 2.2 AA. Verificar teclado, foco visible, contraste, etiquetas, mensajes de error, zoom, lector de pantalla, controles tactiles comodos y movimiento reducido. Evitar informacion disponible solo al hover. Revisar pantallas estrechas y anchas, orientacion horizontal y contenido largo.

## 17. Alcance de lanzamiento y fases

Lanzamiento propuesto: portada, tres paginas de unidad, hasta seis paginas comerciales prioritarias, catalogo y fichas de equipos verificados, uno o dos casos autorizados, Nosotros, Contacto y Privacidad. El numero de fichas depende del inventario; congelar ese conteo al estimar. Si una pagina no tiene contenido suficiente, posponerla sin publicar un cascaron.

| Fase | Ventana orientativa | Responsable principal | Entregable y condicion de salida |
| --- | --- | --- | --- |
| 1. Definicion | Semana 1 | Negocio y estrategia | Marcas, cobertura, inventario, dominios, prioridades y responsables definidos |
| 2. Arquitectura y contenido | Semana 2 | UX, SEO y responsables tecnicos | Mapa, consultas priorizadas, fichas y textos validados |
| 3. Diseno y prototipo | Semana 3 | Diseno y cliente | Portada, tres unidades y plantillas movil/escritorio; prueba de recorridos |
| 4. Construccion | Semanas 4 y 5 | Desarrollo y contenido | Sitio funcional, formularios, datos editoriales, SEO y medicion |
| 5. Verificacion y lanzamiento | Semana 6 | QA, ventas y desarrollo | Recepcion real de pruebas, rastreo correcto, accesibilidad y rendimiento revisados |
| 6. Optimizacion | Dias 30, 60 y 90 posteriores | Ventas, SEO y analitica | Ajustes basados en consultas, oportunidades y problemas detectados |

Estimacion de planeacion, condicionada a entrega de material y revision oportuna. Produccion audiovisual, redisenar identidades o integrar un CRM complejo requieren estimacion propia. Trabajo editorial y fotografico puede avanzar en paralelo al prototipo.

Posponer hasta comprobar necesidad: cotizador automatico de precios, reservas en tiempo real, portal de clientes, configurador 3D, chatbot y traduccion completa. La venta de componentes en marketplaces no requiere una tienda web en este alcance.

## 18. Criterios de aceptacion y operacion

- La portada identifica a Integra y permite distinguir las tres unidades sin esperar animaciones.
- Pruebas con al menos cinco personas representativas: encontrar un servicio, comparar un equipo e iniciar contacto. Registrar errores y corregir bloqueos; la muestra es cualitativa.
- Cada pagina comercial tiene datos verificados, propietario, CTA correcto y una intencion diferenciada.
- Formularios y WhatsApp se prueban por unidad; no hay solicitudes perdidas, confirmaciones falsas ni duplicadas.
- El contenido principal y los enlaces existen en HTML; las paginas publicables son rastreables y el entorno de pruebas permanece protegido.
- Se revisan metadatos, canonical, sitemap, datos estructurados, paginas inexistentes y redirecciones necesarias.
- Se completan pruebas moviles, de teclado, movimiento reducido, rendimiento y legibilidad.
- El lanzamiento tiene contactos responsables, respaldo, monitoreo de errores y procedimiento de recuperacion.

Operacion propuesta: ventas revisa entradas diariamente; RENT actualiza cambios de flota cuando ocurren; MET confirma cambios de capacidades; contenido revisa mensualmente solicitudes repetidas y nuevas evidencias; SEO revisa consultas e indexacion; desarrollo atiende errores y dependencias. Revisar trimestralmente identidad, cobertura, contactos y datos tecnicos publicados.

## 19. Siguiente paquete de trabajo

Preparar a partir de este plan: matriz de contenidos y evidencias; investigacion local de palabras clave y competidores; inventario de equipos; wireframes de portada y de las tres unidades; prototipo de una pagina de servicio y una ficha de equipo; especificacion de formularios y tablero comercial. Estas piezas convierten el plan en un alcance estimable antes de producir el sitio completo.

Este documento no supone que existan mediciones, accesos, autorizaciones de imagen o capacidades tecnicas distintas de las que el cliente confirme. Las recomendaciones de arquitectura y diseno son propuestas propias; las fuentes enlazadas respaldan las afirmaciones sobre buscadores y medicion, consultadas el 18 de septiembre de 2026.
