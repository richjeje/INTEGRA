# Actualización de Integra Rent — catálogo del cliente V1

Fuente: «Catálogo de Equipos Integra V1.pdf», 5 páginas, recibido el 22 de octubre de 2026. Cambios de contenido aplicados al proyecto local; no implica publicación ni disponibilidad de inventario.

## Implementación

- Se conservan las 11 fichas individuales existentes y se agregan Genie GR-12, montacargas eléctrico de 2.5 t y cama baja con capacidad nominal de 15 t: 14 opciones en total.
- El catálogo V1 agrupa las soldadoras; se mantienen sus cuatro modelos individuales y sus condiciones técnicas anteriores.
- Se agregan aplicaciones por equipo, alcance horizontal de 6.8 m para Genie Z-34/22N y fichas desplegables con condiciones de uso. Se conserva 12.52 m de altura de trabajo documentada para la Genie: el PDF presenta 12.5 m redondeados.
- Modalidades de renta por día, semana, mes o proyecto; transporte con cama baja propia y coordinación de herramientas complementarias.
- Nuevo filtro de transporte, sección de entrega y recolección, conteos derivados de los datos y mensajes de WhatsApp con equipo, trabajo, fechas, ubicación y duración.
- Se retira la promesa pública de flete gratuito, pendiente de confirmar si sigue vigente. La web pide cotizar las condiciones del traslado.
- Se conserva el teléfono actual: +52 449 541 1077. No se publican los contactos de ejemplo del PDF.
- Las tres altas usan una presentación tipográfica de modelo y capacidad. No se asignan fotos de otro equipo. La descarga del PDF para extracción de imágenes falló por resolución DNS del host; quedan pendientes las fotografías correspondientes.

## Confirmaciones pendientes del cliente

| Tema | Fuente anterior / web | Catálogo V1 | Tratamiento aplicado |
| --- | --- | --- | --- |
| UniCarrier | MP1F2A25LV, 5000 lb | 3500 kg y dos unidades pareadas | Conservar ficha anterior. Confirmar si hay modelos adicionales, placas y cantidades antes de publicar 3.5 t. |
| Broderson | IC-80-3F, 8.16 t a 1.5 m; 1.07 t a 8.5 m | IC-80, hasta 8.5 t | Conservar capacidades condicionadas anteriores. Solicitar modelo y tabla de cargas. |
| Cama baja | Alta nueva | Encabezado 8 m; descripción 9 m útiles | Mostrar capacidad nominal de 15 t; no publicar longitud. Confirmar plataforma, carga aplicable, ruta y accesos por servicio. |
| Montacargas eléctrico | Alta nueva | 2500 kg, sin marca ni modelo | Mostrar equipo genérico eléctrico de 2.5 t. Confirmar modelo, altura, dimensiones y fotografía. |
| Genie GR-12 | Alta nueva | Plataforma 3.45 m, trabajo 5.45 m, 227 kg | Incorporar esos valores. Confirmar dimensiones, configuración, fotografía y acceso al sitio. |
| Permiso de acceso a plantas | No acreditado en esta revisión | Acceso inmediato certificado, con Nissan como ejemplo | No publicar esta afirmación hasta confirmar vigencia y alcance. |
| Maniobras simultáneas | Cantidades por modelo sin confirmar | Dos montacargas pareados | No sumar capacidades ni anunciar operación conjunta sin evaluación. |
| Remolque de vehículos | Alcance sin definir | «Remolcamos vehículos» | Pendiente de confirmar tipos de vehículo y alcance; no anunciar todavía. |
| Flete gratuito | Promoción anterior visible | No establece gratuidad | Sustituir por cotización de entrega y recolección; confirmar cobertura, costos y promoción. |
| Identidad y contacto | Logos del sitio y WhatsApp existente | «Integra *****», «LOGO», teléfono y correo con asteriscos | Conservar identidad actual. Confirmar nombre comercial, correo y contacto específico de Rent. |

Las imágenes actuales de los otros equipos conservan su carácter ilustrativo. La plataforma Zoomlion mantiene los límites diferenciados de interior y exterior ya presentes en el sitio.

## Verificación

- `npm run check`: cero errores, advertencias o sugerencias.
- `npm run build`: compilación estática correcta de las tres páginas actuales.
- Pruebas en Chromium sobre los archivos compilados, con recursos servidos desde disco mediante interceptación de solicitudes, porque el entorno bloquea los sockets HTTP locales. Se revisaron nueve tamaños de pantalla entre 320 y 1920 px, incluida orientación horizontal.
- Verificados: 14 opciones, seis filtros y restablecimiento, conteos en vivo, apertura de fichas, contexto y campos de WhatsApp, imágenes disponibles, enlaces de sección, menú móvil, uso táctil, movimiento reducido y funcionamiento sin JavaScript. Comprobación básica adicional de Integra y Met.
- Sin errores de JavaScript ni recursos locales faltantes. Capturas e informe en `tmp/astro-qa/catalogo-v1/` (temporales, fuera de Git).
- No se enviaron mensajes ni se publicó el sitio. La disponibilidad y los datos señalados en la tabla siguen sujetos a confirmación del cliente.
