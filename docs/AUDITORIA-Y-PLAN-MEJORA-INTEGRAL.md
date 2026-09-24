# Auditoría y plan de mejora integral del sitio Integra

Fecha: 22 de septiembre de 2026  
Alcance: portada, Integra, Integra Met, Integra Rent, navegación, contacto, responsive, accesibilidad y arquitectura Astro.

## 1. Veredicto general

El sitio ya tiene una dirección visual reconocible y material técnico útil. Los heroes, las paletas, los logos oficiales y la disciplina de no publicar datos inventados forman una base sólida. El problema principal ya no es la falta de secciones: es la falta de edición entre la primera versión y la expansión.

Hay bloques que repiten una decisión, advertencias colocadas más de una vez, interacciones que parecen más complejas de lo que realmente hacen y cierres comerciales que compiten entre sí. La siguiente etapa debe reducir, fusionar y dar jerarquía antes de añadir contenido.

### Evaluación actual

| Área | Estado | Diagnóstico |
|---|---:|---|
| Identidad de marca | 8/10 | Las tres marcas se distinguen y los logos oficiales ya tienen presencia consistente. |
| Narrativa | 6/10 | El recorrido se entiende, pero varias ideas aparecen dos veces o en un orden poco natural. |
| Evidencia visual | 6/10 | Integra y Met tienen fotografías útiles; varias secciones de Rent y aplicaciones siguen siendo contenedores genéricos. |
| Utilidad comercial | 7/10 | Las fichas y datos ayudan; los briefs todavía no producen un resumen suficientemente claro. |
| Interacción | 6/10 | Los módulos principales funcionan, pero algunos controles sólo resaltan contenido que ya está visible. |
| Accesibilidad | 6/10 | Existe contenido sin JavaScript y movimiento reducido, pero faltan patrones completos de teclado y estados activos. |
| Responsive | 7/10 | La retícula tiene breakpoints razonables; faltan pruebas sistemáticas y reducir elementos flotantes que obstruyen contenido. |
| Mantenibilidad | 5/10 | Las expansiones están concentradas en tres componentes grandes y un CSS transversal difícil de ajustar por marca. |

## 2. Qué conservar

- Los cuatro heroes actuales como base compositiva.
- La combinación rojo, amarillo y blanco de Integra.
- Azul marino, plata y amarillo para Met y Rent.
- Los logos vectoriales oficiales y sus versiones claras.
- La secuencia de diseño, fabricación e instalación de Integra.
- El explorador de familias de transportadores.
- Las fichas de proceso de Met y la distinción entre espesor ideal y máximo.
- El catálogo de ocho equipos documentados de Rent.
- El contacto contextual por WhatsApp.
- Las notas que identifican imágenes restauradas como ilustrativas.
- La regla de no publicar capacidades, certificaciones o condiciones comerciales sin fuente.

## 3. Qué debe eliminarse o fusionarse

### Eliminación directa

1. Quitar `met-note` al final de Met. Repite condiciones ya explicadas en materiales y procesos.
2. Quitar `rent-note` al final de Rent. Repite el brief, seguridad y preguntas frecuentes.
3. Quitar la sección genérica de contacto de las páginas de marca cuando exista un cierre contextual completo.
4. Quitar el estado vacío de comparador como sección de pantalla completa.
5. Quitar la interacción de las capas de Integra si sólo cambia el fondo del bloque seleccionado.
6. Quitar frases del pie que no sean identidad legal o comercial confirmada, especialmente “Integración y aplicación estructural” hasta validarla.

### Fusiones recomendadas

1. Fusionar “Panorama de soluciones” con la introducción del proceso de Integra.
2. Fusionar “Condiciones que confirmamos” con el brief de Met.
3. Fusionar “Aplicaciones de Rent” con el selector por tarea o sustituirlo por casos con fotografías reales.
4. Fusionar seguridad y preguntas frecuentes de Rent en un bloque corto de preparación de servicio.
5. Convertir el cierre de cada página y el contexto de WhatsApp en un solo componente.

## 4. Hallazgos transversales

### 4.1 Tipografía demasiado pequeña

Gran parte de la navegación, textos técnicos y descripciones usa tamaños de 9 a 12 px. En una presentación a cliente esto resta autoridad y dificulta la lectura.

Acción:

- Navegación: 14–15 px.
- Texto general: 15–17 px.
- Especificaciones: 13–14 px.
- Etiquetas técnicas: mínimo 11–12 px, reservadas para información secundaria.
- Reducir el uso de mayúsculas espaciadas.

### 4.2 Exceso de espacio sin intención

Algunas secciones usan gran altura para información muy breve. El resultado se siente incompleto en vez de minimalista.

Acción:

- Usar altura amplia sólo cuando exista fotografía, diagrama o decisión principal.
- Reducir entre 20 y 30% el espacio vertical de matrices, perfiles, tareas y estados vacíos.
- Mantener una alternancia clara: sección visual, sección informativa, sección de acción.

### 4.3 WhatsApp obstruye contenido

El botón flotante se superpone a textos, tablas y tarjetas. Además, actualmente es una píldora grande, aunque la dirección solicitada era un control circular verde con el logotipo y una animación latente.

Acción:

- Botón circular de 56–60 px.
- Etiqueta visible como tooltip al enfocar o pasar el cursor.
- Pulso suave limitado al aro exterior y detenido con movimiento reducido.
- Reservar espacio inferior y respetar `safe-area-inset-bottom`.
- Mostrar el contexto seleccionado en el cierre, no dentro de una burbuja flotante grande.

### 4.4 Subnavegación incompleta

La subnavegación es visualmente correcta, pero no marca la sección activa. El observador actual sólo actualiza enlaces de la navegación principal.

Acción:

- Aplicar `aria-current="location"` al enlace interno activo.
- Añadir una línea de marca de 2 px.
- Corregir el desplazamiento de anclas para la altura sticky.
- En móvil, conservar desplazamiento horizontal y llevar el enlace activo a la zona visible.

### 4.5 Interacciones con semántica parcial

Las pestañas principales de Met tienen navegación por flechas, pero materiales y transportadores no completan el mismo patrón. Las capas de Integra se anuncian como botones presionables aunque todo el contenido ya está visible.

Acción:

- Crear una utilidad única de tabs con roles, flechas, Inicio, Fin, foco y paneles asociados.
- Reservar `aria-pressed` para selecciones reales.
- Convertir las capas de Integra en un diagrama estático o en un panel que cambie contenido de forma evidente.
- Mantener el estado legible sin JavaScript.

### 4.6 Cierres repetidos

Las páginas tienen brief, nota heredada, contacto genérico, pie y WhatsApp. Hay demasiadas llamadas cercanas para una sola acción.

Acción:

- Un cierre contextual por página.
- Un pie institucional compacto.
- Un botón flotante único.
- El brief prepara el contexto y el cierre permite revisarlo antes de abrir WhatsApp.

## 5. Auditoría de la portada

### Lo que funciona

- La imagen amarilla es memorable.
- El tratamiento rojo mantiene la identidad madre.
- El lema “Control total en movimiento” aparece correctamente.
- Las tres marcas se reconocen en el primer pliegue.

### Problemas

- Las tres empresas se presentan en las tarjetas del hero y vuelven a presentarse inmediatamente en tres tarjetas con imágenes.
- “Explorar soluciones” conduce a una decisión que ya está visible dentro del mismo hero.
- La portada no explica cómo se relacionan las tres unidades; sólo repite qué hace cada una.
- El rojo cubre casi toda la primera experiencia y reduce la presencia visual del azul marino y plata del grupo.

### Nuevo recorrido

1. **Hero del grupo**: conservar imagen, lema, titular y una acción principal.
2. **Selector compacto de empresas**: conservar las tres marcas del hero, con descriptores más legibles.
3. **Cómo se conectan**: sustituir las tres tarjetas repetidas por una secuencia “Integra diseña / Met fabrica / Rent apoya la instalación”.
4. **Evidencia visual**: una composición panorámica con una imagen por etapa, sin volver a presentar los logos.
5. **Contacto del grupo**: una pregunta breve para dirigir la consulta a la unidad correcta.

## 6. Auditoría de Integra

### Lo que funciona

- Es la página con mayor carácter visual.
- La secuencia del proyecto y el explorador de transportadores son buenos módulos insignia.
- Las cinco familias están respaldadas y se evitan capacidades no documentadas.
- La combinación de rojo y bloque azul oscuro tiene buen ritmo.

### Problemas

- “Ingeniería que conecta” y “De la idea a la operación” explican casi el mismo alcance consecutivamente.
- Las capas Campo / Control / Movimiento parecen interactivas, pero la selección no revela información nueva.
- Las aplicaciones se presentan como tres tarjetas iguales; el plan pedía casos editoriales con necesidad, solución y resultado.
- La matriz de mantenimiento usa necesidades generales y no explica claramente preventivo, correctivo, predictivo y retrofit.
- El brief contiene cuatro datos, mientras la información necesaria documentada contempla objetivo, referencia, espacio, condiciones y fecha.

### Nuevo recorrido

1. Hero: “De la idea a la operación”.
2. Proceso vivo con cuatro etapas: diseño, fabricación, instalación y mejora.
3. Explorador de cinco familias de transportadores.
4. Integración y control como diagrama estático claro: señal, decisión y movimiento.
5. Tres casos editoriales alternados: dolly, racks y pailería.
6. Mantenimiento y retrofit: cuatro tipos de intervención con resultado esperado.
7. Brief de cinco datos con resumen visible.
8. Cierre rojo “Conversemos sobre tu proceso”.

### Decisión de interacción

Mantener sólo dos módulos complejos: proceso vivo y explorador de transportadores. El diagrama de integración será estático con una animación de entrada única.

## 7. Auditoría de Integra Met

### Lo que funciona

- Es la página más coherente visualmente.
- La ficha de procesos combina imagen, dato principal, condiciones y detalle.
- El comparador ideal/máximo comunica una diferencia técnica importante.
- Los perfiles de rolado son simples y comprensibles.

### Problemas

- El hero “Precisión que transforma” es genérico y menos directo que “Del plano a la pieza”.
- “3 rodillos” se presenta con la misma jerarquía que 6 kW, 1520 × 3050 mm y 4200 mm, aunque no representa una capacidad equivalente.
- Falta la anatomía de una pieza cotizable planteada en el plan.
- El flujo de fabricación es demasiado abstracto y no muestra cómo una pieza llega a un conjunto.
- El brief sólo contempla cuatro grupos y no separa archivo, material, espesor, cantidad, geometría y acabado.
- La sección final heredada repite la advertencia sobre condiciones.

### Nuevo recorrido

1. Hero: “Del plano a la pieza”.
2. Tres capacidades principales documentadas y un bloque cualitativo separado para rolado.
3. Taller de procesos con corte, doblez, rolado y soldadura.
4. Comparador de materiales ideal/máximo.
5. Anatomía de una pieza cotizable con seis datos.
6. Formas de rolado y flujo al ensamble en una misma historia visual.
7. Brief de cotización con resumen preparado.
8. Cierre azul marino con acción única.

### Decisión de interacción

Mantener dos módulos complejos: taller de procesos y comparador de materiales. La anatomía de la pieza usará focos accesibles simples y conservará todas las etiquetas visibles.

## 8. Auditoría de Integra Rent

### Lo que funciona

- El hero claro diferencia a Rent de las otras marcas.
- El catálogo contiene ocho equipos respaldados.
- Los filtros son fáciles de entender.
- El contenido evita prometer disponibilidad, entrega u operador.

### Problemas

- El selector por tarea tiene cinco bloques grandes y vuelve a conducir a filtros que expresan casi la misma clasificación.
- El comparador vacío ocupa una sección completa antes de aportar valor.
- El comparador mezcla categorías cuyos campos no siempre son equivalentes.
- Las aplicaciones son tres cajas sin imágenes, datos ni decisiones nuevas.
- El catálogo muestra cuatro columnas; en 1024 px la lectura ya empieza a apretarse.
- Existen 34 botones en la página, aumentando carga de decisión.
- Seguridad, FAQ, nota heredada, contacto y WhatsApp repiten mensajes de confirmación.

### Nuevo recorrido

1. Hero con acciones “Elegir por trabajo” y “Consultar disponibilidad”.
2. Selector compacto por tarea integrado con los filtros.
3. Catálogo en tres columnas grandes en escritorio y dos en tableta.
4. Bandeja de comparación colapsada que aparece después de seleccionar el primer equipo.
5. Comparación por grupos compatibles: elevación/carga, energía/soldadura y herramientas/obra.
6. Preparación de renta con trabajo, ubicación, fechas y condición principal.
7. Seguridad y preguntas frecuentes fusionadas.
8. Resumen visible y consulta por WhatsApp.

### Decisión de interacción

El selector y los filtros formarán una sola interacción. El comparador será la segunda. Se elimina la sección de aplicaciones mientras no existan fotografías o casos que agreguen evidencia real.

## 9. Sistema visual corregido

### Densidad

- Una idea dominante por pantalla.
- Máximo dos secciones densas consecutivas.
- Reducir el número de matrices de tarjetas.
- Usar composiciones editoriales con imagen y texto para casos reales.
- Dejar el amarillo para selección, dato principal y acción.

### Bordes

- Radio de 10–14 px para fotografías y paneles principales.
- Radio completo sólo para filtros y controles pequeños.
- Evitar bordes en cada bloque cuando el fondo ya separa la sección.

### Movimiento

- Mantener entradas de 8–14 px y 350–500 ms.
- Proceso de Integra: reproducción única.
- Tabs: 180–240 ms.
- WhatsApp: pulso exterior suave cada varios segundos, sin escalar el botón.
- Nada de movimiento continuo en fotografías.

## 10. Arquitectura técnica propuesta

### Componentes compartidos

- `SectionIntro.astro`
- `BrandSubnav.astro` con estado activo.
- `ContextCTA.astro`
- `BriefBuilder.astro`
- `AccessibleTabs.ts`
- `TechnicalDisclosure.astro`

### Componentes por marca

- Integra: `ProjectJourney`, `TransportSystems`, `IntegrationDiagram`, `ApplicationStory`, `MaintenanceModes`.
- Met: `CapabilityMap`, `ProcessWorkshop`, `MaterialComparison`, `PartAnatomy`, `ProfileFlow`.
- Rent: `TaskCatalog`, `EquipmentCard`, `CompareTray`, `RentalBrief`, `RentalFAQ`.

### Datos

- Eliminar la dependencia residual de `catalog.js`.
- Mantener archivos separados por marca.
- Cada dato técnico debe incluir estado: `documentado`, `condicionado`, `pendiente` o `no_publicar`.
- Añadir referencia de fuente interna por equipo o proceso.
- Generar tarjeta, detalle y comparador desde el mismo objeto.

### CSS

- Separar tokens, estructura común y estilos por marca.
- Sustituir reglas extensas de una sola línea por bloques mantenibles.
- Definir escalas de espacio y tipografía en variables.
- Evitar que `global.css`, `companies.css` y `expansion.css` compitan por el mismo selector.

## 11. Responsive y accesibilidad

Probar explícitamente 320, 390, 430, 768, 1024, 1366, 1440 y 1920 px.

Criterios:

- Sin texto comercial menor de 14 px.
- Controles táctiles de aproximadamente 44 px.
- Sin contenido cubierto por WhatsApp.
- Subnavegación desplazable con elemento activo visible.
- Tabs con flechas, Inicio, Fin, foco y panel asociado.
- Tabla de comparación navegable y legible a 320 px.
- Zoom a 200% sin pérdida de acciones.
- Todas las transiciones anuladas o reducidas con `prefers-reduced-motion`.
- Imágenes diferidas que carguen correctamente al entrar mediante un enlace con ancla.

## 12. Rendimiento

Estado actual:

- JavaScript generado: aproximadamente 6.7 kB.
- CSS generado: aproximadamente 52.5 kB.
- La imagen más pesada ronda 435 kB.
- Las cuatro rutas construyen correctamente.

El peso general no es el problema principal. Aun así se debe:

- Generar variantes de imagen acordes a móvil y escritorio.
- Usar `srcset` y `sizes`.
- Mantener dimensiones declaradas.
- Reservar carga eager sólo para el hero.
- Evitar enviar imágenes de aplicaciones ocultas antes de que se necesiten.

## 13. Fases de ejecución

### Fase 1 — Edición y limpieza

1. Eliminar bloques heredados y cierres duplicados.
2. Reordenar las cuatro páginas.
3. Corregir textos genéricos y titulares.
4. Reducir tarjetas y espacios vacíos.

### Fase 2 — Sistema compartido

1. Ajustar escala tipográfica.
2. Crear subnavegación activa.
3. Rediseñar WhatsApp circular.
4. Unificar cierres y briefs.
5. Separar estilos y componentes compartidos.

### Fase 3 — Integra

1. Fusionar panorama y proceso.
2. Añadir mantenimiento como cuarta etapa.
3. Convertir integración en diagrama claro.
4. Rediseñar aplicaciones como historias editoriales.
5. Completar brief de cinco datos.

### Fase 4 — Met

1. Cambiar hero y jerarquía de capacidades.
2. Construir anatomía de pieza.
3. Integrar perfiles con flujo al ensamble.
4. Completar brief de seis datos.

### Fase 5 — Rent

1. Integrar selector y filtros.
2. Reorganizar catálogo en tres columnas.
3. Sustituir comparador vacío por bandeja contextual.
4. Eliminar aplicaciones genéricas.
5. Fusionar preparación, seguridad y FAQ.

### Fase 6 — Validación

1. Teclado y lector de pantalla.
2. Responsive en los ocho anchos definidos.
3. Movimiento reducido.
4. Verificación de unidades y fuentes.
5. Build estático y revisión visual completa.

## 14. Prioridades

### P0 — Corregir antes de mostrar al cliente

- Duplicación de empresas en portada.
- Bloques `met-note` y `rent-note`.
- Sección vacía del comparador.
- Aplicaciones de Rent sin evidencia.
- WhatsApp cubriendo contenido.
- Cierres comerciales repetidos.
- Texto demasiado pequeño.

### P1 — Mejorar la comprensión

- Subnavegación activa.
- Casos editoriales de Integra.
- Anatomía de pieza en Met.
- Comparación por categorías compatibles en Rent.
- Briefs con resumen visible.
- Integración de Integra como diagrama real.

### P2 — Pulido

- Variantes responsivas de imagen.
- Eventos de medición.
- Afinar transiciones.
- Preparar metadatos para publicación y retirar `noindex` sólo al lanzar.

## 15. Criterios de aceptación de la mejora

- Ninguna página repite una misma advertencia o llamada comercial.
- Cada sección aporta evidencia, una decisión o una acción distinta.
- La portada explica la relación entre las tres unidades.
- Integra tiene dos interacciones principales y casos visuales editoriales.
- Met permite entender capacidad, proceso y requisitos de cotización sin repetir contenido.
- Rent permite filtrar y comparar sin mostrar una gran sección vacía.
- El contexto preparado es visible antes de abrir WhatsApp.
- La navegación interna marca la sección actual.
- El sitio es legible a 320 px y con zoom al 200%.
- Todas las cifras visibles mantienen su fuente y condición.
- `astro check` y `astro build` terminan sin errores.

## 16. Resultado esperado

La mejora reducirá la cantidad aparente de bloques sin reducir información útil. Integra se sentirá como una empresa de sistemas, Met como una capacidad de fabricación precisa y Rent como una herramienta clara de selección. El usuario llegará al contacto después de comprender la propuesta y con una consulta mejor preparada.

## 17. Estado de ejecución

Implementado el 22 de septiembre de 2026:

- Portada convertida de una segunda selección repetida a un flujo diseño–fabricación–instalación.
- Eliminación de notas heredadas y cierres duplicados en Met y Rent.
- Contacto contextual de cada marca enlazado a su brief correspondiente.
- WhatsApp circular, verde, con pulso reducido y etiqueta al enfocar o pasar el cursor.
- Subnavegación con sección activa.
- Integra con proceso de cuatro etapas y casos editoriales. La matriz independiente de mantenimiento y el diagrama conceptual de integración se retiraron durante la revisión visual.
- Met con hero “Del plano a la pieza”, anatomía de seis datos y brief completo. La franja independiente de capacidad instalada se retiró durante la revisión visual.
- Rent con catálogo de tres columnas, comparador condicionado a una selección y preparación responsable fusionada con FAQ.
- Resúmenes visibles en los tres briefs.
- Patrón de teclado compartido para materiales y transportadores.
- Rutas, anclas e identificadores validados sin faltantes ni duplicados.
- `astro check` y `astro build` completados sin errores ni advertencias.
