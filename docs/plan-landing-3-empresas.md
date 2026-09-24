# Plan y contenido — landing en tres empresas

## Arquitectura acordada para ejecutar

Un solo proyecto Astro mantiene las marcas en la misma experiencia y les da páginas independientes:

- `/` es el inicio común con la promesa de Integra y tres accesos claros.
- `/integra/` explica ingeniería e integración de procesos.
- `/met/` organiza las capacidades y fichas de manufactura.
- `/rent/` presenta la selección de renta y sus especificaciones.

La navegación común conecta las cuatro rutas. Cada página tiene una llamada a WhatsApp precontextualizada. No se envían mensajes automáticamente.

## Imagen y color por página

| Ruta | Enfoque y uso de imagen | Identidad |
|---|---|---|
| Inicio | Foto de dolly y racks de proyecto como entrada a la familia. | Rojo, blanco y amarillo. |
| Integra | Foto de bastidores y pailería; debajo, ejemplos de racks y dollies. | Rojo, blanco y amarillo. |
| Met | Roladora CDP 800 en ambiente industrial; cuatro procesos con imágenes de equipo correspondientes. | Marino, plata y amarillo. |
| Rent | Plataforma Genie como imagen recortada, sobre gris claro para conservar visible el equipo aislado. Cuatro fichas de muestra. | Marino, plata y amarillo. |

Los másteres fotográficos se conservan bajo `apps/landing/public/equipos/hd/`; se muestran como ilustraciones mejoradas por IA, no como verificación de modelo o configuración. Las fuentes técnicas y las cuatro imágenes excluidas no cambian.

## Jerarquía de contenido

- **Inicio:** lema «Control total en movimiento», una frase de posicionamiento, tres puertas a las empresas y una breve línea de proceso.
- **Integra:** ingeniería industrial, transportadores, automatización y control, mantenimiento y retrofit. Se explican las etapas diseño → fabricación → integración → mantenimiento. No se publican capacidades cuantitativas sin fuente.
- **Integra Met:** corte láser, doblado CNC, rolado CDP 800 y soldadura/fabricación. Cada proceso muestra primero los datos útiles y deja tablas y condiciones dentro de su ficha ampliable. Se conserva la diferencia entre espesores ideal y máximo y las condiciones de herramental.
- **Integra Rent:** cuatro ejemplos de equipo del inventario documentado, filtro por aplicación y ficha desplegable con las especificaciones recuperadas. La selección no representa el inventario completo ni confirma disponibilidad.

## Guion de animación ejecutable

| Momento | Movimiento | Duración y límite |
|---|---|---|
| Primera entrada a página | Lema, titular y llamada entran suavemente en secuencia sobre la imagen fija. | 450–650 ms; desplazamiento máximo 12 px; una vez por carga. |
| Primer vistazo a una sección | Titular, texto e imagen aparecen en ese orden al entrar al viewport. | 350–500 ms; desplazamiento máximo 12 px; no retrasar la lectura ni el salto a ancla. |
| Elegir proceso de Met | Cambia solo el panel del proceso y los estados de pestaña. | 220–300 ms; sin reescalar la maquinaria. |
| Explorar ficha de Rent | La ficha nativa abre con sus detalles y controles. | Cambio corto de opacidad y alto del navegador; conservar `details` si falla JavaScript. |
| Recorrer tarjetas | Borde y foto reaccionan al pasar el cursor; también conservan foco visible al usar teclado. | 180–250 ms; ninguna información depende del hover. |
| Contacto | Un aro sutil respira alrededor del botón verde de WhatsApp; pausa con hover/foco. | Un ciclo cada 3.8 s; no hacer vibrar la etiqueta ni mover el layout. |

No usar scroll-jacking, parallax, reproducción de video, rebote, cuenta regresiva ni animación infinita en las fotos. `prefers-reduced-motion` apaga entrada, revelado, transiciones y pulso; el contenido sigue completo en HTML sin JavaScript.

## Criterios de entrega

Cuatro rutas coherentes, navegación entre ellas, imágenes clasificadas por empresa, capacidades y unidades alineadas con la ficha técnica maestra, contacto contextual, layout móvil, animaciones con reducción de movimiento y build estático de Astro. El proyecto permanece `noindex` mientras dominio, logotipos oficiales y autorización final de fotografías estén pendientes.
