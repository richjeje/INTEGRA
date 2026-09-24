# Integra — base editorial en Astro

Sitio Astro de Integra, Integra Met e Integra Rent. El inicio `/` presenta la familia; `/integra/`, `/met/` y `/rent/` son páginas independientes conectadas por navegación compartida y contacto contextual. Cada empresa tiene su propia jerarquía, imágenes clasificadas y paleta. El inicio conserva el hero fotográfico y el lema «Control total en movimiento». Los prototipos anteriores permanecen en `propuestas/`.

El plan de arquitectura, clasificación de imágenes, orden de contenido y animaciones está en [`docs/plan-landing-3-empresas.md`](../../docs/plan-landing-3-empresas.md). La referencia de especificaciones es [`docs/equipos/FICHAS-TECNICAS-INTEGRA.md`](../../docs/equipos/FICHAS-TECNICAS-INTEGRA.md).

## Desarrollo

Desde `apps/landing`, con Node 24.x:

```sh
npm ci
npm run dev -- --port 4321
npm run check
npm run build
npm run preview -- --port 4322
```

Desarrollo: http://127.0.0.1:4321. Vista del build: http://127.0.0.1:4322.

El build estático se genera en `dist/`. La configuración sigue el flujo de [desarrollo y build de Astro](https://docs.astro.build/en/develop-and-build/). No se ha publicado; el layout incluye `noindex, nofollow` durante esta fase de revisión. Antes del lanzamiento se debe configurar el dominio real y retirar esa directiva.

## Publicación en Vercel

El repositorio incluye configuración para dos raíces de proyecto: `vercel.json` en la raíz compila `apps/landing` y publica únicamente `apps/landing/dist`; si el proyecto ya utiliza `apps/landing` como Root Directory, se aplica el `vercel.json` de esa carpeta y se publica `dist`. Se usa Node 24.x. Las cuatro rutas son HTML estático y no necesitan una reescritura hacia una única página.

No publicar la raíz ni `public/` como salida: contienen fuentes y recursos, no el sitio compilado. `apps/landing/index.html` es un prototipo antiguo; la portada vigente se genera desde `src/pages/index.astro`. Los comandos y la carpeta de salida quedan versionados según la [configuración oficial de Vercel](https://vercel.com/docs/project-configuration/vercel-json). La configuración remota y el despliegue final deben verificarse en el proyecto Vercel correspondiente.

## Intro de corte láser

La portada muestra una entrada de unos 4 segundos que traza el símbolo y el nombre del SVG original, sin el lema pequeño, sobre una placa metálica plateada y fondo blanco. Se reproduce al abrir o recargar la portada, sin depender de la sesión ni de parámetros en la URL. Con movimiento reducido se omite la reproducción automática; el enlace visible «Ver intro» (`/?intro=1`) permite reproducirla voluntariamente incluso con esa preferencia activa. Se puede omitir tocando la pantalla o con Escape, e incluye salida automática de seguridad a los 6,5 segundos. Sin JavaScript la página aparece directamente. No depende de videos, imágenes externas ni solicitudes adicionales para el logo.

Los archivos son `src/components/LaserIntro.astro`, `src/styles/laser-intro.css` y `src/scripts/laser-intro.ts`. `tooling/qa_laser_intro.py` comprueba el trazado, cierre, repetición, tamaños móviles y los casos sin JavaScript o con fallo del script, usando las mismas variables de entorno que la prueba responsive.

## Dónde editar

- `src/pages/index.astro`: portada y accesos a cada empresa.
- `src/pages/integra/index.astro`, `src/pages/met/index.astro`, `src/pages/rent/index.astro`: páginas dedicadas.
- `src/components/CompanyHero.astro`, `CompanyPreviews.astro`: cabeceras de marca y accesos del inicio.
- `src/components/`: introducción, ingeniería, manufactura, equipos, proyectos y pie.
- `src/styles/global.css`: paleta, tipografía, composición, responsive y animaciones.
- `src/styles/responsive.css`: ajustes finales compartidos de portadas, rejillas y navegación para pantallas pequeñas y táctiles.
- `src/data/catalog.js`: capacidades, equipos y condiciones derivadas de las fichas documentales.
- `src/data/images.json`: medidas de las imágenes.
- `src/scripts/site.ts`: pestañas, filtros, menú, animaciones y contexto de WhatsApp.
- `public/equipos/hd/`: imágenes restauradas para uso ilustrativo; los originales siguen en `public/equipos/`.

## Criterios de esta versión

Integra conserva rojo `#CF202E`, amarillo `#FFD12D` y blanco. Met y Rent usan marino `#10243A`, plata `#D8DCE1` y amarillo. Las marcas tipográficas siguen siendo provisionales.

Las especificaciones principales son visibles. Los desplegables conservan las condiciones de uso y los detalles. Se distingue entre espesor ideal y máximo de corte; el doblado conserva la longitud, la matriz y el factor de seguridad documentados. El catálogo público de esta iteración contiene cuatro equipos, como en la propuesta elegida; no implica inventario completo ni disponibilidad.

Un único enlace persistente de WhatsApp usa el número confirmado `524495411077`. Los botones de consulta seleccionan proceso o equipo y enfocan ese enlace; no envían mensajes. La confirmación de selección desaparece tras seis segundos para no tapar contenido, conservando el mensaje preparado.

Animación: entradas de 14 px al desplazarse, cambio breve de panel, estados de hover y un pulso lento y tenue en el contorno del botón verde de WhatsApp, que lleva su icono. Se respetan los bordes ligeramente curvos en tarjetas, fotografías y botones, y `prefers-reduced-motion`, incluso si cambia durante la visita. Los textos y fichas se generan en HTML y siguen disponibles sin JavaScript; los controles que requieren JavaScript se ocultan en ese caso.

## Comprobaciones

`npm run check` y `npm run build`. El script vigente `tooling/qa_responsive.py`, desde la raíz del repositorio, verifica las cuatro páginas de producción en el puerto 4322, en nueve tamaños entre 320 y 1920 px, incluida orientación horizontal. Comprueba contenido de las portadas sin recortes ni superposiciones, imágenes, enlaces internos, menú móvil, filtros de los 11 equipos, teclado, contacto contextual, movimiento reducido, pantallas táctiles y contenido sin JavaScript. Requiere Python con Playwright y Chromium (`python -m playwright install chromium`); se puede indicar un navegador instalado con `PLAYWRIGHT_CHROMIUM_EXECUTABLE` y otra URL con `QA_BASE_URL`. Ejecutar `python tooling/qa_responsive.py`. Las capturas y el informe quedan en `tmp/astro-qa/`. `qa_astro.py` conserva las pruebas del prototipo anterior de una sola página.

La referencia técnica sigue siendo `docs/equipos/FICHAS-TECNICAS-INTEGRA.md`. Las restauraciones con IA no acreditan etiquetas, modelos o geometrías; su procedencia y limitaciones están documentadas en `docs/equipos/MEJORA-IMAGENES.md`.
