# Propuestas de landing page con identidad de color

Fecha: 22 de septiembre de 2026.

La nueva indicación del usuario sustituye la fase monocromática de `direccion-visual-v2.md`. Se prepararon tres direcciones visuales completas para la misma familia de empresas. Cada propuesta incluye Integra, Met y Rent; no son tres páginas aisladas, una por empresa.

## Paleta propuesta

Los nombres de color fueron indicados por el usuario; estos tonos HEX son la propuesta concreta de implementación, pendientes de contrastar con los manuales oficiales.

| Empresa | Principal | Apoyo | Acento |
| --- | --- | --- | --- |
| Integra | Rojo `#CF202E` | Blanco `#FFFFFF` | Amarillo `#FFD12D` |
| Integra Met | Azul marino `#10243A` | Gris plateado `#D8DCE1` | Amarillo `#FFD12D` |
| Integra Rent | Azul marino `#10243A` | Gris plateado `#D8DCE1` | Amarillo `#FFD12D` |

Neutros de lectura: tinta `#18222B`, texto secundario `#59636E`, fondo cálido `#F5F4EF`. El amarillo se usa con texto marino, no con texto blanco. El plateado se interpreta como tono sólido de interfaz, sin degradado metálico que dificulte la lectura.

## Rutas

Comparador: `apps/landing/propuestas/index.html`.

| Propuesta | Archivo | Composición y jerarquía |
| --- | --- | --- |
| 01. Industrial editorial | `editorial.html` | Hero dividido, titular condensado, fotografía de proyecto, énfasis rojo. Recorrido: Integra → Met → Rent. |
| 02. Precisión técnica | `precision.html` | Hero marino con equipo sobre blanco y capacidades visibles, acentos amarillos. Recorrido: Met → Integra → Rent. |
| 03. Tres especialidades | `empresas.html` | Introducción editorial con serif, tres entradas simultáneas por empresa; Rent sobre plata, Met sobre marino, Integra sobre rojo. Recorrido posterior: Rent → Integra → Met. |

Las marcas tipográficas son provisionales y no se presentan como rediseños de logotipos oficiales. Se utilizaron fuentes del sistema para que los prototipos no dependan de descargas externas.

## Contenido e imágenes

Referencia: [fichas técnicas maestras](equipos/FICHAS-TECNICAS-INTEGRA.md) y [manifiesto de imágenes](equipos/MANIFIESTO-IMAGENES.md).

Las imágenes se copiaron a `apps/landing/public/equipos/` desde la selección WebP. Los tres diseños utilizan fotografías de proyectos y equipos documentados. No se generaron imágenes de máquinas ni se inventaron resultados de clientes.

- Met incluye corte láser, doblado, rolado y soldadura. Las capacidades del corte distinguen espesor ideal y máximo; el doblado conserva las condiciones de material, longitud, matriz y factor de seguridad.
- Rent muestra una selección de cuatro equipos para evaluar el diseño: Genie, montacargas UniCarrier, torre de iluminación y rompedora. No es todavía una publicación del inventario completo.
- Bobcat, capacidades contradictorias de grúa y datos ausentes de Zoomlion no se utilizan como reclamos comerciales.
- Las fotografías de catálogo se identifican como referencia. No se afirma disponibilidad de inventario.
- La fecha de inicio 2001 procede de la presentación S1 p. 2.

## Interacciones

- Barra superior para comparar las tres propuestas y volver al índice. Es una herramienta de revisión, no parte de la futura web pública.
- Navegación por anclas, con menú desplegable en móvil.
- Cuatro procesos de Met, controles accesibles por clic y flechas de teclado, capacidades desplegables.
- Filtros de Rent por altura, carga, energía y herramientas; contador anunciado.
- Fichas de equipo en un diálogo nativo, cierre con Escape y retorno de foco.
- Un solo enlace persistente de WhatsApp al número confirmado `+52 449 541 1077`. Actualiza el mensaje por empresa o equipo; no envía mensajes automáticamente. El botón “Consultar este equipo” selecciona contexto, cierra la ficha y enfoca ese mismo enlace.
- Alternativa de movimiento reducido.

## Verificación

Probado en Chromium local a 1440, 1024, 760, 390 y 320 px: carga de imágenes, ausencia de errores JavaScript y desbordamientos horizontales, navegación móvil, pestañas de Met, filtros de Rent, diálogo y contexto de WhatsApp. Se revisaron capturas de escritorio y móvil. Son pruebas funcionales de prototipo, no una auditoría completa de accesibilidad ni pruebas en todos los navegadores.

QA reproducible: `tooling/qa_propuestas.py`, con Playwright instalado localmente en `tmp/browser-tools` y Chromium disponible en el equipo. Capturas: `apps/landing/propuestas/previews/`. Resultado de ejecución: `tmp/qa-propuestas.json`.

Para ejecutar desde la raíz, servir el directorio por HTTP y abrir `/apps/landing/propuestas/index.html`. Durante esta revisión se usó `http://127.0.0.1:8765`. Los borradores `index.html` y `v2.html` originales de `apps/landing/` se conservan. No se desplegó el sitio.
