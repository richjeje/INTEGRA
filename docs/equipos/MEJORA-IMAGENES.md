# Mejora de imágenes para las propuestas

Fecha: 2026-09-22.

Se procesaron las 18 imágenes seleccionadas para web con la herramienta integrada image_gen. Se incorporan 14 versiones ilustrativas de mayor resolución al banco web. Cuatro restauraciones de soldadoras quedan excluidas por cambios en etiquetas/modelos. Los originales permanecen en `docs/equipos/seleccion-web/` y `apps/landing/public/equipos/`. Las 156 extracciones documentales y las fichas técnicas no se modificaron.

La restauración generativa reconstruye detalles: no garantiza geometría, letras ni componentes idénticos. Las imágenes mejoradas sirven para las propuestas visuales y no para verificar modelos, dimensiones o configuraciones. Para fotografía documental fiel se necesitan originales de mayor resolución. La fuente de especificaciones sigue siendo FICHAS-TECNICAS-INTEGRA.md.

Se conservan los másteres PNG en `restauradas/master/`, los resultados excluidos en `restauradas/revision/` y el conjunto de prompts y procedencia en [prompts-y-resultados.json](restauradas/prompts-y-resultados.json). Las copias WebP se codifican a calidad 94 sin otro reescalado.

| Imagen | Original (px) | Restauración (px) | Uso |
|---|---:|---:|---|
| integra-dolly | 1340 × 935 | 1501 × 1047 | Uso ilustrativo; no evidencia técnica |
| integra-paileria | 1600 × 972 | 1609 × 978 | Uso ilustrativo; no evidencia técnica |
| integra-racks | 1425 × 935 | 1548 × 1016 | Uso ilustrativo; no evidencia técnica |
| met-01-forza-ranger | 1600 × 751 | 1829 × 860 | Uso ilustrativo; no evidencia técnica |
| met-02-forza-press | 844 × 551 | 1553 × 1013 | Uso ilustrativo; no evidencia técnica |
| met-03-roladora-horizontal | 1024 × 576 | 1672 × 941 | Uso ilustrativo; no evidencia técnica |
| met-03-roladora-vertical | 591 × 859 | 1040 × 1512 | Uso ilustrativo; no evidencia técnica |
| rent-01-zoomlion-tijera | 141 × 256 | 931 × 1689 | Uso ilustrativo; no evidencia técnica |
| rent-02-genie-articulada | 205 × 261 | 1111 × 1415 | Uso ilustrativo; no evidencia técnica |
| rent-03-broderson-grua | 229 × 318 | 1064 × 1478 | Uso ilustrativo; no evidencia técnica |
| rent-04-torre-iluminacion | 360 × 435 | 1141 × 1378 | Uso ilustrativo; no evidencia técnica |
| rent-05-montacargas | 515 × 346 | 1531 × 1027 | Uso ilustrativo; no evidencia técnica |
| rent-06-miller-deltaweld | 347 × 427 | 1131 × 1391 | No usar: etiquetas reconstruidas incorrectamente |
| rent-07-dewalt-rompedora | 652 × 320 | 1791 × 878 | Uso ilustrativo; no evidencia técnica |
| rent-08-revolvedora | 573 × 534 | 1299 × 1211 | Uso ilustrativo; no evidencia técnica |
| rent-09-infra-soldadora | 456 × 451 | 1254 × 1254 | No usar: etiquetas reconstruidas incorrectamente |
| rent-10-bobcat-modelo-por-confirmar | 355 × 386 | 1203 × 1308 | No usar: etiquetas reconstruidas incorrectamente |
| rent-11-esab-ruffian | 458 × 384 | 1369 × 1149 | No usar: etiquetas reconstruidas incorrectamente |
