# Direccion visual de Integra: tipografia, marcas y movimiento

Fecha: 18 de septiembre de 2026.
Estado: propuesta de diseno sobre apps/landing/v2.html. No implementada en el prototipo.

Actualización, 22 de septiembre de 2026: el usuario autorizó incorporar colores, imágenes y fichas técnicas. La indicación de conservar el monocromo de este documento corresponde a la fase anterior. Las tres propuestas actuales y la paleta se documentan en [propuestas-landing-color.md](propuestas-landing-color.md).

## 1. Objetivo de la composicion

Transmitir capacidad tecnica, orden y experiencia industrial. La estructura debe permitir reconocer las tres empresas, encontrar un servicio y comenzar una conversacion por WhatsApp con facilidad. La personalidad proviene de proporciones, tipografia, evidencia real y detalles de alineacion; el movimiento confirma acciones y explica relaciones.

Conservar el borrador monocromatico durante esta fase. Las aplicaciones de color y fotografia se desarrollaran cuando se disponga de identidades y material reales. Los esquemas actuales son referencias de composicion, no dibujos tecnicos de los equipos.

La portada usa tres areas contiguas con un ancho inicial aproximado de 44/28/28 en escritorio. Integra representa la actividad principal, pero MET y RENT conservan el mismo nivel de legibilidad y acceso. Las tres son visibles sin esperar una animacion. En movil, tres filas compactas mantienen el nombre, la especialidad y un acceso claro.

## 2. Jerarquia de visibilidad

| Prioridad | Que debe reconocerse | Tratamiento |
| --- | --- | --- |
| 1 | Empresa, unidad y especialidad | Logo oficial, nombre y descriptor literal |
| 2 | Servicio o equipo que resuelve la necesidad | Enlaces de servicios visibles, texto legible y titulos concretos |
| 3 | Evidencia de capacidad | Proyecto real y alcance; despues capacidades verificadas |
| 4 | Contacto | Un boton constante de WhatsApp, contextual y reconocible |
| 5 | Informacion complementaria | Preguntas, relaciones entre unidades y datos institucionales |

La conversion permanece disponible en todo momento aunque no sea el elemento mas grande. No usar movimiento continuo para elevar su prioridad.

Corregir en V2: enlaces comerciales de 11-12 px, anotaciones demasiado pequenas, repeticion de INTEGRA en varias escalas y presencia excesiva del rótulo de version. La comparacion entre borradores pertenece solo al prototipo.

## 3. Sistema tipografico

Propuesta: IBM Plex como familia tipografica del sitio. Elegir Sans para lectura y controles, Sans Condensed para titulos seleccionados y Mono para una cantidad reducida de referencias tecnicas. Es una eleccion estetica propia para Integra, no una adopcion del sistema de marca de IBM.

La familia oficial incluye esas variantes y soporte de lenguas latinas. Obtener los archivos desde la distribucion oficial y conservar su licencia OFL al integrarlos. [Familia oficial](https://www.ibm.com/design/language/typography/typeface/) y [repositorio oficial](https://github.com/IBM/plex).

| Uso | Familia y peso | Escritorio | Movil |
| --- | --- | --- | --- |
| Titulo principal de pagina | Plex Sans Condensed 600 | 64 px / 68 px | 40 px / 44 px |
| Nombre editorial de una unidad | Plex Sans 600 | 36 px / 40 px | 28 px / 32 px |
| Titulo de seccion | Plex Sans Condensed 500 | 40 px / 44 px | 30 px / 34 px |
| Servicio o equipo | Plex Sans 500 | 22 px / 28 px | 20 px / 26 px |
| Parrafo principal | Plex Sans 400 | 17 px / 27 px | 16 px / 25 px |
| Navegacion y enlaces comerciales | Plex Sans 500 | 15 px / 22 px | 15 px / 22 px |
| Especificaciones | Plex Sans 400/500 | 14 px / 21 px | 14 px / 21 px |
| Referencia tecnica secundaria | Plex Mono 400 | 12 px / 18 px | 12 px / 18 px |

Los pares indican tamano e interlineado. Son tokens iniciales, no una obligacion de forzar texto largo dentro de una caja. Usar saltos naturales, anchos controlados y variantes menores para titulos extensos; probar especialmente Transportadores industriales y Plataformas de elevacion a 320 px y con zoom. No escalar tipografia continuamente con el ancho de pantalla ni comprimir el texto mediante transformaciones.

Letter-spacing: 0. Mayusculas solo para etiquetas cortas; parrafos y servicios en escritura normal. Longitud de lectura aproximada de 45 a 70 caracteres cuando el espacio lo permita. El nombre escrito con una fuente editorial nunca reemplaza el archivo del logotipo.

Primero probar Sans 400/500/600, Condensed 600 y Mono 400; evaluar el peso 500 de Condensed durante la prueba tipografica. Evitar descargar familias completas. Servir WOFF2 local, precargar solo la variante realmente critica y mantener fallback legible. Comprobar peso total y saltos de texto al cargar; si Mono aporta poco, sustituirlo por Sans antes de agregar recursos innecesarios.

## 4. Ubicacion de logotipos

### Cabecera global

Logotipo oficial de Integra arriba a la izquierda, enlazado al inicio. Caja inicial orientativa: hasta 150 x 40 px en escritorio y 120 x 32 px en movil, siempre preservando proporcion y legibilidad. Las medidas finales dependen de la geometria real del archivo. Navegacion de empresas a continuacion, sin colocar tres logos pequenos compitiendo en la misma cabecera.

Mantener una version de cabecera consistente al cambiar de unidad. Para recorridos largos, probar cabecera sticky de altura constante; en movil una barra de empresas compacta debe dejar suficiente espacio junto al contacto inferior. Desactivar fijacion superior en pantallas muy bajas si reduce demasiado el area util.

### Portada

El gran INTEGRA escrito del borrador representa un espacio de marca, no un logotipo definitivo. Al recibir el archivo oficial, probar dos escalas y reducir la repeticion con la cabecera. Una sola expresion de marca domina; no redibujar el logo con Plex ni incorporar la flecha del borrador al simbolo oficial.

Al inicio de cada una de las tres areas colocar el logotipo de su unidad y debajo un descriptor:

- Integra: Automatizacion e integracion industrial.
- Integra MET: Manufactura y soluciones en metal.
- Integra RENT: Renta de equipo industrial.

Area de logo orientativa de 180 x 56 px, ajustada opticamente para que las marcas tengan presencia comparable. Igualar el peso visual, no el ancho de todos los archivos. Si un logotipo incluye su nombre, no repetir de inmediato otra version tipografica igual; usar un encabezado accesible o descriptor segun la estructura.

### Interiores y pie

La cabecera conserva Integra como acceso global. El encabezado interior muestra la marca de la unidad una vez; los detalles usan el nombre del servicio como H1 y una referencia secundaria a su unidad. MET y RENT deben seguir visibles como opciones de navegacion sin aparecer como publicidad dentro de cada ficha.

En el pie basta la marca madre y enlaces textuales a las unidades. Los logos de clientes o certificaciones viven junto al caso o dato que respaldan, solo con autorizacion y alcance confirmado. No convertirlos en un carrusel automatico ni presentarlos como alianzas si solo fueron clientes de un proyecto.

Usar SVG oficial accesible o PNG transparente de calidad suficiente. Respetar el area de proteccion del manual de marca. En ausencia de manual, reservar provisionalmente margen equivalente a la mitad de la altura del simbolo y revisarlo con el cliente. No deformar, recolorear sin permiso, animar trazos arbitrarios ni superponer lineas tecnicas sobre el logo.

### Transicion del logo antiguo al nuevo

El cliente menciono una transformacion continua. Proponer una pieza independiente en la presentacion institucional de Integra: mostrar ambas versiones y, cuando esten aprobadas, una transicion breve opcional. Mantener el logo de navegacion estable. No realizar morphing hasta tener ambos vectores y comprobar que sus formas permiten una transformacion limpia.

## 5. Plan de movimiento

Los tiempos siguientes son decisiones de diseno para probar, no requisitos de un estandar. Las respuestas a clic, toque y teclado son inmediatas; cualquier efecto visual acompana ese cambio.

| Elemento | Activacion | Efecto | Duracion | Repeticion / alternativa |
| --- | --- | --- | --- | --- |
| Contenido principal y logos | Carga | Visible directamente | 0 ms | Nunca ocultarlo a la espera de JS o scroll |
| Enlaces a unidades | Hover o foco | Flecha se desplaza 3 px; subrayado aparece | 140-180 ms | Sin cambiar el ancho o la altura del enlace |
| Lineas de conexion secundarias | Primera entrada al viewport | Una linea horizontal se extiende desde su origen | 350-450 ms | Una vez por sesion; estatico con movimiento reducido |
| Etapas de Integra | Seleccionar etapa | Indicador cambia; esquema hace un fundido breve | 200-240 ms | Sin animar el texto letra por letra; contenedor estable |
| Procesos de MET | Seleccionar proceso | Indicador activo cambia y muestra el nuevo contenido | 140-180 ms | Mantener indice y posicion; cambio inmediato en modo reducido |
| Filtros de RENT | Clic o toque | Resultados se actualizan y contador confirma | 0-140 ms | Sin trayectorias de tarjetas o reordenamiento animado |
| Especificaciones desplegables | Clic, Enter o espacio | Apertura nativa | 0 ms inicialmente | Evaluar animacion solo si mejora claridad |
| WhatsApp | Hover o foco | Cambio breve de fondo/borde y flecha | 140 ms | Sin pulsos, rebotes ni movimientos automaticos |

Movimiento protagonista: limitarlo a la explicacion de las etapas del proyecto Integra. MET y RENT necesitan especial claridad para consultar procesos y equipos; no requieren una animacion protagonista adicional.

No ejecutar simultaneamente animaciones grandes en las tres empresas. Un esquema puede explicar un proceso al interactuar, pero no presentar mecanicas ilustrativas como una simulacion del funcionamiento real. En movil, reducir traslaciones y conservar solo cambios de estado breves. No usar paralaje, secuestro del scroll, precargadores de marca o efectos de escritura.

Definir una curva suave de salida para entradas y una curva simetrica para cambios entre estados. Valores iniciales: cubic-bezier(0.22, 1, 0.36, 1) en entradas, ease-in-out en fundidos. No animar tamanos de tipografia ni dimensiones de paneles que desplacen controles.

Priorizar transform y opacity, revisar el coste de otras propiedades y no mantener will-change de forma global. [Referencia de rendimiento](https://web.dev/articles/animations-guide).

## 6. Ajustes por recorrido

### Portada

En el primer vistazo deben distinguirse el grupo, las tres unidades y al menos un servicio de cada una. Elevar enlaces a 15 px; eliminar referencias repetidas que no ayuden a elegir. Los dibujos de linea conservan valor orientador durante el borrador; posteriormente fotografias reales pueden sustituirlos sin alterar toda la reticula.

Evitar que el encabezado ocupe tanto espacio que el tercer negocio quede bajo el boton de WhatsApp. Verificar a 1366 x 768, 1440 x 900, 1920 x 1080 y en moviles de 320, 390 y 430 px de ancho. La estructura de marca debe seguir funcionando aunque el usuario aumente el texto y necesite desplazarse.

### Integra

Prioridad: alcance integral y evidencia real. La pieza central muestra un proyecto con tres etapas seleccionables. Titulos, contenido y entregables mantienen una posicion estable. Los servicios permanecen accesibles sin recorrer todas las etapas. Una pagina de mantenimiento necesita contenido y evidencia correspondientes, no repetir siempre un transportador como si fuera el servicio seleccionado.

### MET

Prioridad: proceso y capacidad. El indice mantiene posicion y el nombre de proceso queda junto a sus especificaciones. Al cambiar de proceso, conservar el foco y la vista dentro del area de trabajo; evitar reiniciar el scroll al principio como hace el prototipo actual. En movil, permitir acceso a los cuatro procesos con controles de tamano comodo, usando dos filas si es necesario para no ocultar opciones.

### RENT

Prioridad: tipo de equipo, criterio de seleccion y consulta de fechas. Cada ficha debe incluir modelo y cifras tecnicas cuando esten confirmados. Los filtros conservaran su estado al volver. Evitar que un cambio de filtro haga saltar el contexto del usuario; mantener el foco en el control y anunciar cantidad de resultados. No afirmar disponibilidad por una animacion, un punto de estado o una etiqueta no conectada a inventario.

## 7. WhatsApp como unico contacto

Un solo boton en barra inferior, con WhatsApp siempre escrito y un icono reconocible. Mantener su ancho estable por breakpoint para que etiquetas contextuales no muevan el boton.

Textos propuestos: Hablemos en portada; Consultar proyecto en Integra; Cotizar piezas en MET; Consultar equipo en RENT. En todos los casos el mismo destino confirmado: +52 449 541 1077. El mensaje incluye contexto y el visitante decide enviarlo.

En escritorio, referencia de unidad a la izquierda y boton a la derecha. En movil, priorizar el boton; eliminar texto secundario del dock si reduce demasiado el espacio de lectura. Considerar safe-area-inset-bottom, reservar espacio final y scroll-padding-bottom para que controles enfocados no queden tapados. Evitar duplicar WhatsApp en cabecera y dentro de cada seccion.

El clic abre WhatsApp, no confirma una cotizacion ni envia un mensaje. El estado de la pagina no debe simular esos resultados.

## 8. Calidad y accesibilidad

Contraste de texto normal al menos 4.5:1 y texto grande 3:1 segun la definicion de WCAG; controles y estados relevantes deben ser distinguibles. No adoptar los grises suaves de las guias de dibujo para informacion comercial. Objetivo interno de areas tactiles: 44 x 44 px, sin presentarlo como el minimo universal de WCAG 2.2 AA. [Referencia WCAG 2.2](https://www.w3.org/TR/WCAG22/).

Respetar prefers-reduced-motion: retirar desplazamientos y trazados, manteniendo contenido y estado final. La posibilidad de desactivar animacion de interaccion corresponde al criterio 2.3.3 AAA; aqui se adopta como decision de producto adicional al objetivo AA. [Guia de movimiento reducido](https://web.dev/articles/prefers-reduced-motion).

Revisar teclado y lector de pantalla: botones reales, enlaces reales, nombres accesibles en iconos y estados de seleccion anunciados. El foco nunca depende solo de una animacion y no debe desaparecer cuando se reemplaza contenido. Los estados hover no agregan informacion inaccesible al tacto.

Comprobar con fuentes cargadas y fallidas, zoom al 200%, movimiento reducido, textos largos, enlaces visitados y pantallas bajas. El resultado tiene que seguir siendo legible en una captura estatica. Mantener los objetivos de rendimiento del plan maestro y medir cambios de layout al cargar fuentes y cambiar procesos.

## 9. Orden de ejecucion

1. Recibir logos oficiales de las tres empresas, versiones de marca y reglas existentes; recopilar archivos de logo antiguo/nuevo solo si se trabajara la transicion.
2. Probar la familia Plex y los tamanos en portada, una pagina de proceso y una ficha de equipo con los textos mas largos.
3. Ajustar jerarquia, proporciones, legibilidad, espacio de logos y barra de WhatsApp sin movimiento.
4. Estabilizar navegacion y foco al cambiar de procesos, etapas y filtros.
5. Incorporar microinteracciones y un unico momento explicativo de movimiento en Integra.
6. Verificar escritorio/movil, teclado, contraste, movimiento reducido y rendimiento; despues revisar el resultado visual con los archivos reales.

Pendientes que no se deben inventar: logotipos oficiales, manual de identidad, nombres comerciales finales, evidencias de clientes y capacidades tecnicas. Mientras llegan, se pueden preparar tipografia, espaciado y especificacion de movimiento con los nombres actuales.
