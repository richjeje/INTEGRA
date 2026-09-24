# Integra — base editorial en Astro

Sitio Astro de Integra, Integra Met e Integra Rent. El inicio `/` presenta la familia; `/integra/`, `/met/` y `/rent/` son páginas independientes conectadas por navegación compartida y contacto contextual. Cada empresa tiene su propia jerarquía, imágenes clasificadas y paleta. El inicio conserva el hero fotográfico y el lema «Control total en movimiento». Los prototipos anteriores permanecen en `propuestas/`.

El plan de arquitectura, clasificación de imágenes, orden de contenido y animaciones está en [`docs/plan-landing-3-empresas.md`](../../docs/plan-landing-3-empresas.md). La referencia de especificaciones es [`docs/equipos/FICHAS-TECNICAS-INTEGRA.md`](../../docs/equipos/FICHAS-TECNICAS-INTEGRA.md).

## Desarrollo

Desde `apps/landing`, con Node compatible con la versión fijada en `package-lock.json`:

```sh
npm ci
npm run dev -- --port 4321
npm run check
npm run build
npm run preview -- --port 4322
```

Desarrollo: http://127.0.0.1:4321. Vista del build: http://127.0.0.1:4322.

El build estático se genera en `dist/`. La configuración sigue el flujo de [desarrollo y build de Astro](https://docs.astro.build/en/develop-and-build/). No se ha publicado; el layout incluye `noindex, nofollow` durante esta fase de revisión. Antes del lanzamiento se debe configurar el dominio real y retirar esa directiva.

## Dónde editar

- `src/pages/index.astro`: portada y accesos a cada empresa.
- `src/pages/integra/index.astro`, `src/pages/met/index.astro`, `src/pages/rent/index.astro`: páginas dedicadas.
- `src/components/CompanyHero.astro`, `CompanyPreviews.astro`: cabeceras de marca y accesos del inicio.
- `src/components/`: introducción, ingeniería, manufactura, equipos, proyectos y pie.
- `src/styles/global.css`: paleta, tipografía, composición, responsive y animaciones.
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

`npm run check` y `npm run build`. El script `tooling/qa_astro.py`, desde la raíz del repositorio, verifica la vista de producción en el puerto 4322: carga y decodificación de imágenes, capacidades, pestañas por teclado, filtros, fichas, un único contacto contextual, menú móvil, ausencia de flechas y de desbordamientos entre 320 y 1920 px, movimiento reducido y contenido sin JavaScript. Utiliza el runtime Python/Playwright local preparado para este proyecto; las capturas y el informe quedan en `tmp/astro-qa/`.

La referencia técnica sigue siendo `docs/equipos/FICHAS-TECNICAS-INTEGRA.md`. Las restauraciones con IA no acreditan etiquetas, modelos o geometrías; su procedencia y limitaciones están documentadas en `docs/equipos/MEJORA-IMAGENES.md`.
