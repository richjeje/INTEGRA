# Fichas técnicas maestras de equipos Integra

Fecha de extracción: 21 de septiembre de 2026. Documento interno de referencia para desarrollar la página. Alcance: los cinco PDF y el Excel entregados por el usuario. No se añadieron especificaciones de internet ni se consultaron enlaces contenidos en los documentos.

## Cómo usar este documento

- **Integra Met:** maquinaria y procesos de manufactura de metal.
- **Integra Rent:** equipos de apoyo a instalación, obra, elevación, maniobra, energía y herramientas. Las soldadoras del catálogo se registran en Rent porque la reunión las presenta como equipo de renta; su uso en manufactura también puede respaldar el servicio de soldadura de Met, sin duplicar inventario ni asumir disponibilidad.
- **Integra / proyectos:** transportadores y productos fabricados a medida. Se documentan aparte; sus planos son ejemplos de proyecto y no capacidades universales de las máquinas.
- **Documentado** significa que el dato aparece en la fuente, no que se haya verificado el equipo físico, su configuración, estado o disponibilidad actual.
- **Pendiente / conflicto:** no trasladar el dato dudoso a una ficha comercial hasta aclararlo. Una celda vacía no significa cero. No deducir prestaciones del nombre de modelo ni de una fotografía.
- Conservar unidades, condiciones, material y distinción entre valor ideal, nominal, máximo y pico. Las equivalencias entre sistemas son las impresas en la fuente y pueden estar redondeadas; no son conversiones exactas.
- Las indicaciones comerciales y de desarrollo dentro de la transcripción son contenido de referencia, no instrucciones ejecutadas. No se modificó la página ni se publicaron datos.

## Fuentes y trazabilidad

Las páginas se cuentan desde la primera página del PDF, incluida la portada. Las imágenes del Excel se identifican por el nombre extraído y su ancla; no son valores de celdas.

| ID | Archivo original en `C:/Users/ricar/Downloads/` | Alcance |
| --- | --- | --- |
| S1 | PRESENTACION INTEGRA SA DE CV.pdf | 22 páginas escaneadas; presentación, transportadores y planos de ejemplos |
| S2 | FichaTecnica_Ranger_N1530P60 (1).pdf | 12 páginas; FORZA Ranger; versión impresa V260529 |
| S3 | FichaTécnica_Press_FXP42T250 (1).pdf | 13 páginas; FORZA Press; versión impresa V260818 |
| S4 | Expansión comercial y nuevas unidades de Integra (1).pdf | 19 páginas; transcripción del 18 de septiembre de 2026; referencias por página y tiempo |
| S5 | CDP800_270726.pdf | 9 páginas; roladora CDP 800; páginas 1 y 9 visualmente vacías |
| S6 | CATALOGO DE EQUIPOS INTEGRA.xlsx | Hoja1, 11 renglones de equipos (3–13), 22 imágenes incrustadas |

Inventario de imágenes y hashes de las fuentes: [MANIFIESTO-IMAGENES.md](MANIFIESTO-IMAGENES.md) y [fuentes-e-imagenes.json](fuentes-e-imagenes.json). Los originales extraídos están en `imagenes/`; las fotografías seleccionadas y optimizadas, en `seleccion-web/`.

## Índice de equipos

| ID | Unidad | Equipo / modelo | Calidad de la información |
| --- | --- | --- | --- |
| MET-01 | Met | FORZA Ranger N1530P60 | Ficha técnica extensa, con límites por material |
| MET-02 | Met | FORZA Press FXP42T250 | Ficha técnica extensa; capacidades condicionadas a matriz y material |
| MET-03 | Met | Roladora CDP 800 / Rollbend visible en imágenes | Ficha parcial; errores de unidades en tubería |
| RENT-01 | Rent | Zoomlion ZS0808 AC Li | Modelo e imagen; tabla sin valores |
| RENT-02 | Rent | Genie Z-34/22 N | Cinco valores técnicos en imagen |
| RENT-03 | Rent | Broderson IC-80-3F | Tabla de capacidades; contradicción con reunión |
| RENT-04 | Rent | Torre de iluminación Segamac SLT-88D | Tabla técnica; revisar grafía de marca |
| RENT-05 | Rent | UniCarrier MP1F2A25LV | Datos de carga, mástil y combustible |
| RENT-06 | Rent | Miller Deltaweld 451 | Datos eléctricos; confirmar identificación de configuración |
| RENT-07 | Rent | DeWalt D25951K | Datos eléctricos, impacto y peso |
| RENT-08 | Rent | Revolvedora LIDEC, 1 saco | Dimensiones y capacidades; sin modelo específico |
| RENT-09 | Rent | Soldadora Infra, modelo no confirmado | Datos de soldadura; celda de modelo vacía |
| RENT-10 | Rent | Miller Bobcat225 | Foto de Bobcat 250 EFI; datos no atribuibles con certeza al 225 |
| RENT-11 | Rent | ESAB RUFFIAN ES 150G EDW | Datos de soldadura y generación |

También hay equipos mencionados sin ficha o modelo en S4; se registran al final de Rent.

## Integra Met

### MET-01 — Cortadora CNC láser de fibra FORZA Ranger N1530P60

**Fuente:** S2, pp. 1–10. **Forma / aplicación:** mesa rectangular abierta para planchas metálicas, cabezal móvil CNC y control lateral; corte, marcado y perforado. La forma se observa en S2 p. 2. Imagen: [Ranger](seleccion-web/met-01-forza-ranger.webp).

#### Capacidad y movimiento

| Parámetro | Valor de la ficha | Fuente |
| --- | --- | --- |
| Potencia nominal óptica | 6 kW | S2 pp. 3, 5 |
| Área útil | 1520 × 3050 mm; 5 × 10 ft | S2 pp. 3, 7 |
| Recorrido X / Y / Z | 1520 / 3050 / 80 mm; 5 ft / 10 ft / 3.1 in | S2 p. 7 |
| Carga de planchas | Máximo 700 kg; 1540 lb, distribuida en toda la mesa | S2 pp. 3, 7, nota 7 |
| Traslación máxima | 100 m/min; 5.5 ft/s | S2 pp. 3, 7 |
| Aceleración máxima | 1 G; 32.2 ft/s² | S2 p. 7 |
| Corte máximo | 55 m/min; 3 ft/s, sobre inoxidable de 1 mm con aire comprimido | S2 pp. 3, 7, notas 3/6 |
| Posicionamiento X/Y | ±0.05 mm; ±0.002 in | S2 pp. 3, 7 |
| Repetibilidad X/Y | ±0.02 mm; ±0.0008 in | S2 p. 7 |
| Tamaño exterior | 2860 ancho × 4360 largo × 1800 alto mm; 9.4 × 14.3 × 5.9 ft en el orden impreso | S2 pp. 7–8 |
| Peso de máquina | 1590 kg; 3498 lb | S2 p. 7 |

**Condiciones:** la precisión y repetibilidad corresponden al sistema de movimiento y control; no son tolerancias garantizadas de la pieza terminada. La pieza depende de material, espesor, dimensiones de lámina y preparación del diseño. No exceder el espesor máximo aunque la mesa soporte el peso. Las medidas exteriores son nominales.

#### Materiales y espesores

Tabla leída de la imagen de S2 p. 9. `—` reproduce ausencia de calibre.

| Material / serie | Ideal mm | Ideal in | Calibre ideal | Máximo mm | Máximo in | Calibre máximo |
| --- | ---: | --- | --- | ---: | --- | --- |
| Acero ASTM A36, “negro o dulce” | 19 | 3/4 | — | 25 | 1 | — |
| Acero inoxidable ASTM 304 | 12 | 15/32 | — | 16 | 5/8 | — |
| Aluminio estructural ASTM 6061 | 9 | 11/32 | — | 12 | 15/32 | — |
| Latón C27200 | 7 | 9/32 | 2 | 10 | 3/8 | — |
| Acero galvanizado ASTM C653, tal como está impreso | 3 | 1/8 | 11 | 5 | 3/16 | 6 |

Los iconos de materiales incluyen aceros negros laminados en frío o caliente, inoxidables, galvanizados, aluminio, latón y bronce. **Bronce no tiene espesor numérico documentado.** Verificar la designación impresa `ASTM C653` antes de usarla comercialmente; no corregirla silenciosamente.

Espesor ideal: acabado de alta calidad con bordes limpios y poca rebaba. Espesor máximo: límite bajo parámetros específicos, menor velocidad, mayor carga térmica y restricciones de geometría; no es criterio recomendado para dimensionar la máquina ni promesa de acabado. Otras series de material pueden cambiar el resultado. Para uso frecuente con materiales reflectivos, la ficha recomienda fuente con protección antirreflexión; no acredita que la máquina entregada tenga esa protección.

#### Fuente láser, cabezal, refrigeración y accionamiento

| Parámetro | Valor | Fuente |
| --- | --- | --- |
| Tecnología / longitud de onda | Láser de fibra, 1080 ±10 nm | S2 p. 5 |
| Operación / interfaz | Continuo CW con salida modulable / QBH | S2 p. 5 |
| Ajuste de potencia / modulación | 10–100 % / ≤20 kHz | S2 p. 5 |
| Indicador rojo | ≥200 µW | S2 p. 5 |
| Fuente | MFSC-6000, Max Photonics | S2 p. 5 |
| Cabezal | BS06K-CAT, RayTools | S2 p. 5 |
| Distancia focal de colimación / enfoque | 100 / 150 mm | S2 p. 5 |
| Ajuste vertical del foco | −17.6 a +17.6 mm | S2 p. 5 |
| Refrigeración | Por agua | S2 p. 5 |
| Caudal nominal | 50 L/min; 13 gpm | S2 p. 5 |
| Precisión de refrigeración | ±1 °C; ±1.8 °F | S2 p. 5 |
| Tanque del enfriador | 100 L; 27 gal, nominal y sujeto a variación del equipo entregado | S2 p. 5, nota 1 |
| Chiller | CWFL-6000, S&A | S2 p. 5 |
| Servomotores | X: 750 W; Y: 850 W ×2; Z: 400 W | S2 p. 5 |
| Accionamiento eléctrico | Schneider Electric | S2 p. 5 |
| Control automático de gases | Aventics, regulación de presión desde control | S2 p. 5 |

#### Electricidad

Fuente: S2 p. 6. Datos de dimensionamiento de la ficha; no equivalen a configuración comprobada de la instalación de Integra.

| Concepto | Valor |
| --- | --- |
| Potencia máxima de fuente láser, consumo eléctrico | 20 kW; distinta de los 6 kW ópticos |
| Potencia máxima de chiller | 10 kW |
| Potencia máxima de extractor | 1.5 kW |
| Potencia máxima de movimiento y control | 5 kW |
| Potencia máxima total | 36.5 kW |
| Potencia de dimensionamiento | 33.25 kW |
| Consumo promedio declarado | 21.9 kWh; estimado como 60 % del consumo horario a potencia máxima |
| Alimentación | 220/240/380/440/480 VAC; trifásica; 50/60 Hz |

La potencia de dimensionamiento suma fuente + chiller + 50 % de las potencias del resto de sistemas.

| VAC, 3 fases | Corriente por línea | Conductores hasta 60 °C, TW/UF | Hasta 90 °C, THHW/THHN | MCCB | EGC cobre |
| ---: | ---: | --- | --- | --- | --- |
| 220 | 97 A | 3 × 1 AWG | 3 × 3 AWG | 100 A | 8 AWG |
| 240 | 88.9 A | 3 × 1 AWG | 3 × 3 AWG | 100 A | 8 AWG |
| 380 | 56.1 A | 4 × 4 AWG | 4 × 6 AWG | 63 A | 10 AWG |
| 440 | 48.5 A | 3 × 6 AWG | 3 × 8 AWG | 50 A | 10 AWG |
| 480 | 44.4 A | 3 × 6 AWG | 3 × 8 AWG | 50 A | 10 AWG |

#### Operación, instalación y software

| Parámetro | Valor | Fuente |
| --- | --- | --- |
| Software / idiomas | FORZA Play / español e inglés | S2 p. 7 |
| Archivos compatibles | AI, DXF, PLT, LXD, G | S2 p. 7 |
| Gases | Aire, nitrógeno N₂ y oxígeno O₂ | S2 p. 7 |
| Presión aire / N₂ | 16–30 bar; 232–435 psi | S2 p. 7 |
| Presión O₂ | 6–9 bar; 87–130 psi | S2 p. 7 |
| Resistencia de piso indicada | 5 T/m²; 7 psi | S2 p. 7 |
| Humedad relativa | 10–85 %, sin condensación | S2 p. 7 |
| Temperatura de trabajo | 10–40 °C, sin condensación | S2 p. 7 |
| Almacenamiento | −10 a 60 °C | S2 p. 7 |
| Certificaciones declaradas de máquina | CE, RoHS; no certificaciones de Integra | S2 p. 7 |

Esquema de instalación S2 p. 8: cotas globales **>6500 × >5000 mm**, espacio lateral a periféricos **>2000 mm** y paso inferior/frontal **>1500 mm**. Se muestran extractor con cota 500 mm, chiller 550 ×600 mm, estabilizador 500 ×800 mm, transformador 400 ×500 mm y separación >500 mm entre estos últimos. La zona de carga/descarga está señalada; no tiene todas sus cotas propias. Las medidas de periféricos pueden variar por lote/modelo. Conservar el [esquema](imagenes/s2-p08-img05.png) para interpretar orientación y separaciones.

Funciones (S2 p. 4): seguimiento automático del cabezal sobre plancha irregular; selección de gas según material y detección de ausencia; alarmas contra choques y de mantenimiento; detección de bordes; corte de patrones rectangulares/circulares; marcado de líneas, números y letras. La ficha anuncia **hasta 40 % menos desperdicio** y **hasta 60 % menos tiempo** en casos particulares: son afirmaciones del fabricante, sin ensayo de Integra en los archivos.

Incluidos según S2 p. 10: máquina, fuente MFSC-6000, cabezal BS06K-CAT, chiller CWFL-6000, extractor, estabilizador, transformador si aplica, herramientas de instalación y consumibles básicos del cabezal. Licencias: FORZA Play, FORZA Vectors por 1 año, FORZA Academy por 1 año y Soporte Super 7. No se acredita vigencia actual de licencias.

| Consumible | Medida / tipo | Vida útil declarada, S2 p. 10 |
| --- | --- | --- |
| Boquilla | D28-M11 | 200 horas |
| Lente protector inferior | D 37 mm × T 7 mm | 200 horas |
| Lente protector superior | D 24.9 mm × T 1.5 mm | 1000 horas |
| Agua destilada | 100 L; 27 gal | 2 meses |
| Base cerámica del sensor capacitivo | D28-M11 | 1000 horas |
| Aceite de lubricación | 1 L; 0.3 gal | 50 000 metros |
| Espadas de soporte | L 1580 mm; 5.18 ft. T 3 mm; 0.1 in | 300 000 metros |
| Grasa azul de piñones | Grasa de litio | 10 000 metros |

**Pendientes:** configuración efectivamente instalada, consumos de gas, espesor del bronce, parámetros por material, tolerancias de piezas y capacidad diaria. S4 pp. 7–8 contiene medidas verbales contradictorias; prevalece para esta referencia el área 1520 ×3050 mm de S2. El ejemplo de un millón de rondanas al mes es ilustrativo, no una capacidad comprobada.

### MET-02 — Dobladora hidráulica CNC FORZA Press FXP42T250

**Fuente:** S3 pp. 1–11. **Aplicación / forma:** doblado de planchas entre punzón y matriz, bastidor vertical de acero, cortina accionada hidráulicamente y tope trasero CNC. Imagen: [Press](seleccion-web/met-02-forza-press.webp).

| Parámetro | Valor | Fuente |
| --- | --- | --- |
| Fuerza máxima | 2500 kN / 250 Ton, equivalencia nominal impresa | S3 p. 3 |
| Longitud máxima | 4200 mm; 13.8 ft | S3 pp. 3, 5 |
| Ejes | X, Y1, Y2, R + V (4+1) | S3 pp. 3, 9 |
| Precisión angular | ±0.3°~0.5°, tal como se declara | S3 pp. 3, 5 |
| Posicionamiento punzón Y1/Y2 | ±0.01 mm; ±0.0004 in | S3 p. 3 |
| Posicionamiento tope X/R | ±0.03 mm; ±0.0012 in | S3 p. 3 |
| Aproximación / trabajo / retorno | 130 / 0–8 / 120 mm/s; 5.1 / 0–0.3 / 4.7 in/s | S3 p. 5 |
| Entre soportes | 3400 mm; 11.2 ft | S3 p. 5 |
| Garganta | 400 mm; 1.3 ft | S3 p. 5 |
| Apertura | 500 mm; 1.6 ft | S3 p. 5 |
| Carrera del cilindro | 250 mm; 9.8 in | S3 p. 5 |
| Exterior largo × ancho × alto | 4900 ×1730 ×2820 mm; 16.1 ×5.7 ×9.3 ft | S3 pp. 5, 7 |
| Peso | 12 500 kg; 27 560 lb | S3 p. 5 |
| Accionamiento | Cilindros hidráulicos con válvulas proporcionales | S3 p. 5 |
| Tanque hidráulico | 610 L; 161 gal | S3 p. 5 |
| Aceite | ISO 46 hidráulico mineral antidesgaste | S3 p. 5 |
| Control / interfaz | DELEM DA-53T; panel con pantalla integrada | S3 p. 5 |
| Programación | Secuencia de doblado paso a paso | S3 p. 5 |

Ejes: Y1/Y2 posicionan verticalmente el punzón; X mueve longitudinalmente el tope; R lo mueve verticalmente; V compensa deflexión (crowning). Bastidor de placas de alta resistencia tratadas térmicamente, con ranuras de alivio en uniones; hidráulica Bosch-Rexroth; protección por bloqueo láser y válvulas de seguridad (S3 p. 4). **DA58T con programación gráfica 2D es opcional**, no equipamiento confirmado.

#### Espesores a longitud completa

Fuente S3 p. 8. Valores calculados para **doblado en aire, longitud 4200 mm y factor de seguridad 1.25**.

| Material | Espesor máximo | Equivalencia impresa | Matriz V de cálculo |
| --- | --- | --- | --- |
| Acero al carbono ASTM A36 | 6.75 mm | 9/32 in | 60 mm, ≈9 × espesor |
| Inoxidable AISI 304 | 6.5 mm | 1/4 in | 63 mm, ≈10 × espesor |
| Aluminio 6061-T4 | 17 mm | 11/16 in | 200 mm, ≈12 × espesor |

Valores referenciales, dependientes de resistencia real, geometría y herramental. La matriz estándar ilustrada no acredita que existan matrices V63 y V200 instaladas. No prometer esos espesores sin el herramental correspondiente. Los iconos también muestran acero negro laminado frío/caliente, inoxidable, galvanizado, aluminio, latón y bronce, pero **no hay capacidad numérica para latón, bronce ni galvanizado**. La referencia verbal a doblar 1/2 in en S4 p. 5 no fija material, longitud ni matriz; no sustituye esta tabla.

#### Electricidad e instalación

Fuente S3 pp. 5–7. Motor principal **18.5 kW**; dimensionamiento **24 kW**; 220/240/380/440/480 VAC, trifásica, 50/60 Hz. Corrientes calculadas con factor de potencia 0.9. Cable de alimentación: **5 m como máximo**.

| VAC, 3 fases | Corriente por línea | Conductores hasta 60 °C, TW/UF | Hasta 90 °C, THHW/THHN | MCCB | EGC cobre |
| ---: | ---: | --- | --- | --- | --- |
| 220 | 70 A | 3 ×3 AWG | 3 ×4 AWG | 80 A | 10 AWG |
| 240 | 64.2 A | 3 ×3 AWG | 3 ×4 AWG | 80 A | 10 AWG |
| 380 | 40.5 A | 3 ×6 AWG | 3 ×8 AWG | 50 A | 10 AWG |
| 440 | 35 A | 3 ×8 AWG | 3 ×10 AWG | 40 A | 10 AWG |
| 480 | 32.1 A | 3 ×8 AWG | 3 ×10 AWG | 40 A | 10 AWG |

Piso declarado: **2–3 Ton/m² / 2.8–4.3 psi**. Humedad: **20–80 %**. Trabajo: **5–35 °C / 41–95 °F**. Certificaciones de máquina declaradas: **CE, RoHS** (S3 p. 6).

Esquema S3 p. 7: superficie de instalación **6900 ×5730 mm**, con **1000 mm por cada lateral**, **1000 mm detrás** y **3000 mm al frente** para material y operario. Dimensiones nominales, sujetas a pequeñas variaciones.

#### Punzón, matrices, accesorios y consumibles

Fuente S3 p. 10. Tratamiento térmico integral, dureza **HRC47 ±2**; tolerancia dimensional y de planicidad **±0.02 mm**; longitud total formada por secciones según longitud de máquina.

Plano de matriz: sección exterior **60 ×60**, aberturas **50, 35, 22 y 16**, ángulos de **86°**, radios **R2 y R3**. Plano de punzón: altura **150**, cota vertical **120**, tramo **47**, ancho superior **26**, subdivisiones superiores **13 y 7**, cotas **17.5, 8.5, 3.2 y 15**, cotas de punta **10 y 6**, cota local **1**, radio **R0.3**, ángulos **45°, 143° y 86°**. Las cotas lineales se transcriben del dibujo; la imagen no añade una leyenda explícita de unidad. No fabricar herramienta a partir de esta transcripción: conservar [matriz](imagenes/s3-p10-img03.png) y [punzón](imagenes/s3-p10-img04.png) para interpretar las referencias geométricas y solicitar plano original.

Incluidos (S3 p. 11): máquina, DELEM DA-53T, pedales con paro de emergencia, bomba hidráulica, herramientas de instalación, juego de matrices y punzones. Licencias: FORZA Vectors y Academy por 1 año, Soporte Super 7.

| Consumible | Tipo / observación | Vida útil declarada |
| --- | --- | --- |
| Matriz y punzón | Acero 42CrMo; reafilar o reemplazar tras años de uso | No especificada |
| Filtro de aceite | Mantener pureza del sistema hidráulico | 2000–4000 horas |
| Grasa azul de litio | Cojinetes y rieles de guía | 100–500 horas |
| Aceite ISO 68 | Piezas móviles y transmisión | 100–500 horas |
| Aceite hidráulico ISO 46 mineral antidesgaste | Reemplazo o recarga según nivel/calidad | 2000–4000 horas |

### MET-03 — Roladora de perfiles CDP 800

**Fuente:** S5 pp. 2–8. CDP 800 es el modelo indicado en la tabla; **Rollbend** se ve en fotos y marcas de agua, sin una ficha formal de fabricante/serie. Forma: máquina de tres rodillos con tablero independiente; fotos en orientación vertical y horizontal. Imágenes: [vertical](seleccion-web/met-03-roladora-vertical.webp), [horizontal](seleccion-web/met-03-roladora-horizontal.webp).

| Parámetro | Dato documental | Fuente |
| --- | --- | --- |
| Flechas | Acero templado y rectificado | S5 p. 2 |
| Tracción | “Electromagnética”, literal del documento | S5 p. 2 |
| Curvado | Hidráulico | S5 p. 2 |
| Rodamientos | Doble rodillo para alta carga radial | S5 p. 2 |
| Motoreductor | La ficha dice “cuenta con freno electromagnético de 3 HP”; confirmar atribución de potencia | S5 p. 2 |
| Unidad hidráulica | 2 HP | S5 p. 2 |
| Guías | Frontales, reforzadas y templadas, para impedir torsión lateral de perfiles | S5 p. 2 |
| Engranes | Máquina totalmente engranada; aceros templados | S5 p. 2 |
| Orientación de trabajo | Vertical y horizontal | S5 p. 2 |
| Rodillo curvador | Dispositivo reforzado con doble guía que aloja dos rodamientos | S5 p. 2 |
| Mando | Tablero independiente con botones para rodillo curvador y tracción reversible de flechas | S5 p. 2 |
| Alimentación | 220 V, tres fases; la fuente escribe “tres faces” | S5 pp. 2–3 |
| Peso | 1500 kg | S5 p. 3 |
| Rodillos incluidos | Un juego universal templado y rectificado, “60 RHC” de dureza, literal; confirmar nomenclatura | S5 p. 3 |
| Garantía anunciada | Dos años sobre partes mecánicas; vigencia de la unidad no documentada | S5 p. 2 |

Perfiles mencionados: solera, ángulo, PTR, redondo macizo, cuadrado macizo y canal C, entre otros. Los diagramas pp. 4–5 muestran arreglos para L, redondo, U/canal, canal invertido, cuadrado macizo/hueco, T en dos orientaciones y solera de canto/plano. La hoja de rodillos universales indica dimensiones en pulgadas y tolerancias no especificadas **±0.001**; es una nota del plano, no una tolerancia garantizada del perfil rolado.

#### Capacidades por sección y orientación

Fuente S5 p. 7. La denominación de las formas es una lectura del pictograma; conservar la orientación del [cuadro original](referencias/s5-capacidades-p07.png). No son radios ni diámetros mínimos de rolado. `R.U.` aparece sin glosario; probablemente alude a rodillos universales, pero esa expansión no se da por confirmada.

| Fila de arriba abajo | Forma observada / descripción | Capacidad literal |
| --- | --- | --- |
| 1 | Solera, cara ancha horizontal | 4 ×3/4 in R.U. |
| 2 | Solera, de canto | 5 ×5/8 in R.U. |
| 3 | Sección cuadrada; el pictograma no aclara macizo/hueco | 2 ×2 ×1/4 in R.U. |
| 4 | Tubular rectangular, PTR | 4 1/2 ×2 ×1/8 in R.U. |
| 5 | Tubular cuadrado, PTR | 3 ×3 ×1/8 in R.U. |
| 6 | Perfil T, primera orientación | 3 ×3 ×1/4 in R.U. |
| 7 | Perfil T, orientación inversa | 3 ×3 ×1/4 in R.U. |
| 8 | Canal, primera orientación | 6 ×3 ×1/4 in R.U. |
| 9 | Canal, orientación inversa | 6 ×3 ×1/4 in R.U. |
| 10 | Solera de canto, segundo registro distinto del de fila 2 | 6 ×5/8 in R.U. |
| 11 | Redondo macizo | 2 in R.U. |

S5 p. 8 contiene datos con errores o ambigüedades que deben conservarse como **pendientes**, sin corregir unidades ni añadir decimales:

| Elemento | Texto de fuente | Estado |
| --- | --- | --- |
| Tubo | `3” CÉDULA 40` / `Ø EXTERIOR 3500”` / `ESPESOR.` | Diámetro con decimal/unidad dudosos; espesor sin valor |
| Mismo bloque de tubo | `4” CEDULA 30` / `Ø REAL EXTERIOR 4000MM DE ESPESOR. R.S.` | Texto dimensional inconsistente |
| Segundo pictograma tubular | `4” Ø REAL EXTERIOR 4000”` | Texto dimensional inconsistente |
| Ángulo, orientación primera | `3 X 3 X 3/8” R.U.` | Medida legible, confirmar orientación contra pictograma |
| Ángulo, orientación inversa | `3 X 3 X ¼·” R.U.` | Fracción 1/4 con marca adicional en original |

**No documentado:** tamaño exterior de máquina, diámetro de flechas/rodillos, radio mínimo por perfil, velocidad de rolado, material/resistencia para los máximos, tolerancia final, frecuencia eléctrica, amperaje y capacidad de IPR. La mención de IPR en S4 p. 6, 00:15:30 no aporta tamaño ni condición de operación.

## Integra Rent

Para todos los equipos siguientes faltan, salvo indicación expresa, números de serie, año, cantidad por modelo, comprobación de estado actual, disponibilidad, condiciones de transporte y manual de operación. Las formas se describen visualmente; no añaden dimensiones.

### RENT-01 — Plataforma de tijera Zoomlion ZS0808 AC Li

**Fuente:** S6 Hoja1 A3:C3; imágenes 01 y 04. La celda dice `ZOOM LION (PLATAFORMA DE TIJERA)` y modelo `ZS0808 AC Li`.

La imagen 01 solo contiene los títulos **altura de trabajo, capacidad, alimentación, altura de plataforma y peso de máquina**, sin valores. Por tanto, esos cinco campos están **no documentados**; tampoco hay dimensiones, autonomía ni alcance. No derivar altura o batería del nombre de modelo. Forma: chasis rodante, elevación en tijera y plataforma superior con barandillas. [Imagen](seleccion-web/rent-01-zoomlion-tijera.webp).

### RENT-02 — Plataforma articulada Genie Z-34/22 N

**Fuente:** S6 Hoja1 A4:C4; imagen 02 de valores e imagen 03 de equipo. Los cinco valores están en el mismo orden que los encabezados de imagen 01 de la fila anterior; la tabla de Genie no repite las etiquetas. Asociación por orden y contexto del catálogo, no ficha independiente de fabricante.

| Parámetro | Valor |
| --- | --- |
| Altura de trabajo | 12.52 m; 41 ft |
| Capacidad | 227 kg; 500 lb |
| Alimentación | Eléctrica |
| Altura de plataforma | 10.52 m; 34 ft |
| Peso de máquina | 5178 kg; 11 415 lb |

Forma: brazo articulado sobre chasis rodante, cesta superior con barandal. [Imagen](seleccion-web/rent-02-genie-articulada.webp). No hay dimensiones replegada, alcance horizontal, pendiente admisible ni autonomía. No usar el “179” de S4 p. 11, 00:28:24: no tiene unidad ni modelo inequívoco.

### RENT-03 — Grúa Broderson IC-80-3F

**Fuente:** S6 Hoja1 A5:C5; imágenes 06 (tabla) y 05 (foto). [Imagen](seleccion-web/rent-03-broderson-grua.webp). Forma: grúa móvil compacta sobre ruedas, pluma telescópica y gancho.

| Etiqueta de tabla | Valor literal |
| --- | --- |
| Carga útil máxima | 8.16 t |
| Alcance pluma | 1.5 m |
| Capacidad de carga | 1.07 t |
| Al máximo alcance | 8.5 m |
| Pluma estándar máxima / mínima | 9 m / 1.5 m |
| Energía | Diésel |
| Velocidad | 35 km/h |
| Rendimiento de motor | 55 kW |
| Fabricante / modelo motor | Cummins / B 3.3L EPA |
| Cilindrada / cilindros | 3.3 L / 4 |
| Neumáticos estándar | 8.25x15 |
| Emisiones declaradas | Tier 4i |

La tabla empareja visualmente 8.16 t con alcance 1.5 m y 1.07 t con alcance 8.5 m. **No contiene diagrama de cargas, configuración de estabilizadores, ángulo, contrapeso ni condiciones de izaje.** No representar 8.16 t como capacidad en cualquier alcance. La reunión S4 p. 11, 00:29:31 menciona “12 toneladas, nominal, con seguridad de 9”: contradice esta tabla y no se adopta como capacidad. Faltan dimensiones y peso total.

### RENT-04 — Torre de iluminación Segamac SLT-88D

**Fuente:** S6 Hoja1 A6:C6, imágenes 15–16. La celda escribe `SEGAMAC`; la foto parece mostrar `SEGAMAC`, pendiente de placa para normalizar la marca. [Imagen](seleccion-web/rent-04-torre-iluminacion.webp). Forma: torre sobre remolque de dos ruedas, mástil y cuatro módulos de iluminación, con estabilizadores.

| Parámetro | Valor |
| --- | --- |
| Lámparas | LED, 4 ×200 W; IP65 |
| Flujo luminoso | 88 000 lm; la imagen añade “equivalente aproximado 800 watts” |
| Potencia disponible de salida | 5.5 kW |
| Generador | 6 kW |
| Motor | Hyundai, 10 hp, diésel |
| Receptáculos | Un GFI dúplex 20 A /120 VCA; uno 16 A /220 VCA, “2 phases” literal |
| Combustible | 26.41 gal; 100 L |
| Rueda | 13 in; 33 cm |
| Clasificación del eje | 2000 lb; 907 kg |
| Peso de la lengüeta en transporte | 141 lb; 64 kg; etiqueta original de traducción poco clara |
| Peso total sin combustible | 948 lb; 430 kg |

No hay altura del mástil, dimensiones, área iluminada ni autonomía. No confundir clasificación del eje con carga útil ni presentar la equivalencia de lúmenes/watts como conversión física.

### RENT-05 — Montacargas UniCarrier MP1F2A25LV

**Fuente:** S6 Hoja1 A7:C7 e imágenes 07–08. Celda C7 e imagen 07: **MP1F2A25LV**, lectura comprobada ampliando la tabla. [Imagen](seleccion-web/rent-05-montacargas.webp), ilustrativa; no acredita configuración/modelo.

| Parámetro | Valor de imagen 07 |
| --- | --- |
| Capacidad | 5000 libras |
| Tipo | “NEUMÁTICA”, literal; no se detalla categoría del campo |
| Horas | “Nuevo”, texto comercial, no horómetro actual |
| Mástil | 3 etapas, elevación libre completa |
| Altura de mástil bajo | 84 in |
| Altura de mástil elevado | 187 in |
| Motor / combustible | Gas L.P. |
| Adjunto | Desplazador lateral |
| Tamaño de horquilla | 42 in |

Forma: montacargas contrabalanceado con mástil frontal y horquillas. No hay centro de carga, tabla de capacidad residual, altura de elevación de horquillas separada de altura de mástil, dimensiones totales, peso ni potencia. No convertir “187 in de mástil elevado” en altura de trabajo garantizada.

### RENT-06 — Soldadora Miller Deltaweld 451

**Fuente:** S6 Hoja1 A8:C8, imágenes 09–10. Celda B8: `MICRO TUBO MILLER`; no se normaliza a un proceso de soldadura distinto sin confirmación. [Imagen](seleccion-web/rent-06-miller-deltaweld.webp). Forma: fuente de soldadura con alimentador visible, sobre carro; la imagen no confirma qué accesorios se rentan.

| Parámetro | Valor de tabla |
| --- | --- |
| Voltaje de entrada | 200 /230 /460 V |
| Amperaje de entrada | 81 /70 /35 A, en el mismo orden |
| Potencia indicada | 23 kW |
| Fases de entrada | 3 |
| Voltaje de salida | 38 V |
| Amperaje de salida | 450 A |
| Ciclo de trabajo | 100 % |
| OCV máximo | 48 V |
| Rango de voltaje | 14–38 V |

No hay medidas, peso, diámetros de alambre, frecuencia ni espesores soldables. No extrapolar el ciclo a cualquier ajuste; conservar conjuntamente los valores nominales de la tabla.

### RENT-07 — Rompedora de concreto DeWalt D25951K

**Fuente:** S6 Hoja1 A9:C9, imágenes 11–12. [Imagen](seleccion-web/rent-07-dewalt-rompedora.webp). Forma: herramienta manual alargada con cuerpo motor y empuñaduras.

| Parámetro | Valor |
| --- | --- |
| Potencia | 1500 W |
| Voltaje / frecuencia | 120 V /60 Hz |
| Corriente | 15 A |
| Vibración declarada | 9 m/s² |
| Impactos | 1620 BPM, impactos por minuto |
| Energía de impacto | 24 J |
| Portabrocas | SDS max |
| Peso | 13.3 kg |

Dimensiones y rendimiento de demolición no documentados. Se preservan 1500 W y 15 A como valores declarados independientes, sin sustituir uno mediante multiplicación.

### RENT-08 — Revolvedora / mezcladora LIDEC de un saco

**Fuente:** S6 Hoja1 A10:C10, imágenes 13–14. La ficha de texto imagen 14 está anclada en **D9**, aunque describe inequívocamente una revolvedora; se asocia por contenido y foto, no únicamente por fila. C10 dice `LIDEC`, sin modelo específico. [Imagen](seleccion-web/rent-08-revolvedora.webp).

| Parámetro | Valor |
| --- | --- |
| Capacidad comercial | 1 saco; masa del saco no indicada |
| Capacidad máxima | 360 L |
| Producción estimada | 5.0 m³ de concreto/h |
| Ciclo de producción | 3 minutos |
| Velocidad de olla | 27–31 rpm |
| Motor | 9 HP; combustible/modelo no especificados |
| Peso | 200 kg **sin motor** |
| Dimensiones | 57 in alto ×40 in ancho ×69 in largo |
| Llanta | Rin 13 in; eje y masa con balero |
| Yugo | PTR 3 ×3 in, de una sola pieza |
| Cremallera | Reforzada, de una sola pieza |
| Chasis | Estable y reforzado en “Y” |
| Gabinete | Estándar |
| Descarga | Multiposicionamiento |

Forma: olla basculante, volante lateral y bastidor sobre dos ruedas. No confundir 360 L máximos con rendimiento útil de mezcla por ciclo; no calcular producción usando volumen nominal × ciclos porque la fuente distingue producción estimada.

### RENT-09 — Soldadora Infra, modelo pendiente

**Fuente:** S6 Hoja1 A11:B11, C11 vacía; imágenes 17–18. [Imagen](seleccion-web/rent-09-infra-soldadora.webp). La leyenda del modelo en fotografía es insuficiente para establecer identidad inequívoca; no asignarla como modelo confirmado.

| Parámetro | Valor |
| --- | --- |
| Categoría / trabajo | TIG GTAW / industrial |
| Alimentación | 220/440 V |
| Amperaje de soldadura | 30–300 A, CA/CD |
| Ciclo de trabajo | 50 %, sin amperaje de referencia separado |
| SMAW | Electrodo revestido con CA y CD, 1/16 a 1/4 in |
| TIG GTAW | CA y CD, alta frecuencia integrada para arranque del arco |
| Corte / escopleo | Electrodo de carbón y chorro de aire, hasta 5 mm (3/16 in) |

Forma: fuente de soldadura en gabinete con mandos frontales y ruedas. Faltan modelo, tamaño, peso, fases, consumo y capacidad por espesor/material. Los 5 mm corresponden al **electrodo**, no al espesor de corte.

### RENT-10 — Soldadora y generador Miller Bobcat, identificación contradictoria

**Fuente:** S6 Hoja1 A12:C12; imagen 22 (datos) e imagen 19 (equipo). C12 dice **BOBCAT225**; la foto rotula **Bobcat 250 EFI**. Las prestaciones siguientes pertenecen a la tabla adjunta del catálogo y **no deben publicarse como especificaciones verificadas de Bobcat225** hasta confirmar variante y placa. [Imagen en revisión](seleccion-web/rent-10-bobcat-modelo-por-confirmar.webp).

| Parámetro | Dato de imagen 22 |
| --- | --- |
| Ralentí | 2300 rpm |
| Régimen de soldadura | 3600 rpm |
| Combustible / tanque | Gasolina /45.4 L, 12 gal |
| Potencia de motor | 23.5 HP |
| Metales soldables listados | Acero al carbono, inoxidable y aluminio |
| Generador monofásico, continuo | 9500 W |
| Generador monofásico, pico | 11 000 W |
| Sonido declarado | 72.5 dB; sin distancia ni condición de medición |
| Corriente de salida | AC/DC |
| Rango de amperaje | 40–260 A |

Forma: equipo autónomo con motor y panel frontal. No hay dimensiones, peso, ciclo de trabajo ni voltajes de tomas en esta tabla. Potencia pico no equivale a potencia continua.

### RENT-11 — Soldadora y generador ESAB Ruffian ES 150G EDW

**Fuente:** S6 Hoja1 A13:C13, imágenes 20–21. [Imagen](seleccion-web/rent-11-esab-ruffian.webp). Forma: conjunto motor/generador en bastidor tubular, con ruedas y agarraderas.

| Parámetro | Valor |
| --- | --- |
| Motor | Kohler, 14 HP |
| Generador AC | Hasta 4.5 kW **de arranque**, no potencia continua acreditada |
| Enchufes | 120 VCA y 240 VCA |
| Ciclo de trabajo 1 | 60 % a 150 A /26 V |
| Ciclo de trabajo 2 | 100 % a 115 A /24.6 V |
| Espesor soldable declarado | Hasta 3/8 in, sin material/condiciones detallados |
| Electrodo máximo | 5/32 in |
| Control | Pantalla digital; Arc Force ajustable, especialmente para electrodo 6010 |
| Protección | Térmica para soldadora y generador |

Aplicaciones listadas: agricultura, construcción, reparación, mantenimiento y fabricación ligera. La ficha menciona alimentar luces, rectificadoras, herramientas y equipos ligeros de plasma/MIG/TIG, sin detallar combinaciones de cargas. No hay tamaño, peso, tanque, autonomía ni potencia continua. S4 p. 12 habla de equipos a gasolina sin vinculación inequívoca por modelo; no se usa para completar este campo.

### Equipos adicionales mencionados sin ficha individual

| Equipo / referencia | Unidad | Lo documentado | Lo pendiente |
| --- | --- | --- | --- |
| Camión de transporte | Rent | S4 p. 10, 00:25:29 y p. 15, 00:37:24: transporte de maquinaria/grúa | Marca, modelo, dimensiones, carga útil, plataforma, disponibilidad |
| Montacargas eléctrico y otro montacargas comprado | Rent | S4 p. 11, 00:29:47 | Identidad, cantidad exacta diferenciada, capacidad, alturas, baterías; no confundir con UniCarrier a gas |
| Generadores adicionales | Rent | S4 p. 12, 00:30:24: “110 y 220”, contexto de voltajes | Modelos, potencia, fases, frecuencia, combustible, cantidad |
| Otro modelo de soldadora no listado | Rent | S4 p. 12, 00:30:24: falta otro modelo | Identidad y todas sus prestaciones |
| Equipo de elevación por llegar | Rent | S4 p. 11, 00:27:40–00:28:38 | Modelo, recepción y disponibilidad; “179” sin unidad no utilizable |
| Tortugas / patines de maniobra | Rent, clasificación funcional provisional | S4 p. 17, 00:43:04: usados para mover maquinaria | Capacidad, dimensiones, cantidad; no acredita oferta de renta |

Los comentarios “tenemos dos” de S4 p. 11 dependen de imágenes señaladas durante la conversación; no permiten asignar dos unidades a cada modelo. “Camioneta de tres y media toneladas” en S4 p. 15 es ejemplo de cliente, no capacidad del camión de Integra.

## Integra: transportadores, fabricación y geometrías de proyecto

Estos son sistemas y piezas fabricados a medida, no equipos adicionales con inventario o capacidad normalizada. El proceso de fabricación puede apoyarse en Met, pero los proyectos de integración pertenecen a Integra.

### Familias de transportadores

| Sistema | Características documentadas | Fuente |
| --- | --- | --- |
| Power & Free elevado | Cadena de alta velocidad, alimentación continua de estaciones, recorridos con inclinaciones y curvas verticales/horizontales | S1 p. 5 |
| Power & Free invertido | Soportes de pedestal; acceso al producto de casi 360°; mecanismos debajo del producto; montaje sobre o bajo piso | S1 p. 6 |
| Flat-Top de piso | Movimiento continuo, transportador ahogado en piso, una o dos ramas, acceso lateral del operario | S1 p. 7 |
| Dragchain y Chain-on-Edge | Flujo continuo, cadena que puede ahogarse en piso, elementos de movimiento debajo del producto | S1 p. 7 |
| Sistema de fricción | Rueda horizontal en contacto con barra del dolly; convergencias, divergencias/cambios de vía | S4 p. 3, 00:06:25–00:07:51 |

No hay cargas, velocidades numéricas, radios mínimos ni dimensiones estándar de transportadores. “Casi un kilómetro” en S4 p. 3, 00:07:40 corresponde a un proyecto relatado, no a una capacidad por hora. “Bajo voltaje, abajo de 24 voltios” en S4 p. 3, 00:08:14 es comentario de contexto del control, no especificación universal de tableros.

### Planos y productos a medida de la presentación

Lectura visual de S1 pp. 15–19 a partir de imágenes originales de 3000 ×2250 px. Las cotas siguientes se conservan como **referencias internas de un diseño específico**. No son dimensiones ofertadas de catálogo. Donde la unidad no es inequívoca se deja sin asignar. Las listas de materiales y algunos rótulos pequeños no son legibles con fiabilidad; solicitar DWG/PDF original para fabricación. Los cajetines contienen avisos de propiedad/reproducción: mantener los planos como referencia interna hasta confirmar uso público.

| Ejemplo | Geometría y detalles legibles | Fuente |
| --- | --- | --- |
| Dollie de llantas | Carro con ruedas, bastidor rectangular, divisiones de soporte y timón; vista de dos carros y detalle de enganche | S1 p. 15; repetido p. 17 |
| Cotas del dollie, vista superior izquierda p. 15 | 1720.95, 1927.18, 1727.18, 812.98, 1067.20, 2788.15, 628.71 y 348.71; detalle A: 40.00 y 21.49°. Son cotas parciales en una escena de dos carros, no largo ×ancho ×alto | S1 p. 15 |
| Racks y dolly | Fotografías de bastidores metálicos negros/amarillos con apoyos y ruedas; sin medidas numéricas | S1 p. 16 |
| Estructura modular elevador | Viga W10#26, viga W12#26; nota de sustitución a W10#30 lb/ft; guía THK GHR20; rodamiento lineal THK con sufijo de lectura no segura; topes con sufridera de uretano; gato hidráulico y elevadores mecánicos con bloqueo; clips dobles con espárrago 3/4 in NC y placa 5/8 in | S1 p. 17, superior izquierda |
| Engine Line | Estructura de cuatro columnas, IPR/columna existente, ángulo L4 ×4 ×3/8 in y placa de cierre 3/8 in; cotas legibles 5000.00, 4501.00, 4936.50, 3175.05, 114.30 y 12.70; no interpretar todas como dimensiones exteriores | S1 p. 17, superior derecha |
| Pieza Nylamid azul | Disco escalonado con agujero central y dos taladros avellanados; material bruto explícito Ø88.90 mm ×22.70 mm de largo, requisito 1 pieza; plano titulado Nylamid Azul 3-1/2 in | S1 p. 17, inferior izquierda |
| Cotas Nylamid | Ø exterior 88.90, Ø central 31.75, círculo de centros Ø69.85, resalte Ø50.80; espesores 10.00 y 12.70; 2 ×Ø6.76 pasantes con avellanado Ø12.88 ×82°; valores lineales del dibujo consistentes con el material en mm | S1 p. 17 |
| Pailería | Fotografía de bastidores estructurales rectangulares de acero sobre piso; sin capacidades ni dimensiones | S1 p. 18 |
| Dolly rack | Bastidor rectangular con apoyos, maneral/pedal, refuerzo de baleros y resorte de tope de pedal | S1 p. 19 |
| Cotas dolly rack | Vista superior: 1700.10, 798.30 y 210.00; vista frontal: 870.00, 282.00, NPT 226.10 y NPT 188.00; unidades no inequívocas en el cajetín disponible, no asignar capacidad de carga | S1 p. 19 |

S1 pp. 2–4, 8–14 y 20–22 aportan descripción institucional, servicios, clientes, marcas y contacto, sin fichas adicionales de maquinaria. Las marcas Keyence, Rockwell/Allen-Bradley, Siemens, Schneider, Omron y Mitsubishi de S1 p. 21 no acreditan modelos ni existencias específicas. Las imágenes robóticas de portada son ilustrativas, sin modelo o capacidad.

S4 también menciona soldadura estructural y de tubería de gas/aire (p. 4, 00:10:41–00:10:57), maquinado, pintura, automatización, neumática, hidráulica y naves industriales. No aporta procedimientos, certificaciones verificables, tolerancias ni maquinaria adicional identificada; no convertir esas menciones en prestaciones certificadas.

## Registro de discrepancias y reglas para cargar la página

| Prioridad | Dato | Qué conservar / qué confirmar |
| --- | --- | --- |
| Alta | Área de corte | S2: 1520 ×3050 mm. Descartar como dato técnico las expresiones contradictorias 4 ×10 ft, 1.22 ×2.44 “mm” y 1.22 ×3.05 m de S4 pp. 7–8 |
| Alta | Corte hasta 1 in | S2 imprime 25 mm /1 in. No elevar a 25.4 mm por la conversión verbal de S4; indicar límite 25 mm y condición de material |
| Alta | Grúa | S6 8.16 t y 1.07 t en alcances distintos frente a relato de 12/9 t. Exigir placa y tabla de cargas antes de afirmar capacidades operativas |
| Alta | Bobcat | C12 BOBCAT225 frente a foto 250 EFI; confirmar modelo y correspondencia de toda la tabla |
| Alta | Zoomlion | No hay números: no copiar los de Genie ni deducirlos del modelo |
| Alta | Tubos CDP 800 | Corregir con proveedor los literales 3500 in, 4000MM y 4000 in; no añadir decimales por intuición |
| Alta | Doblado | Espesores máximos asociados a 4200 mm, material, V60/V63/V200 y factor 1.25; no prometer 1/2 in universal |
| Media | Etiqueta del galvanizado | “ASTM C653” literal en S2, pendiente de confirmar designación |
| Media | Roladora | “60 RHC”, tracción electromagnética y potencia de “freno de 3 HP” requieren aclaración de fabricante |
| Media | Soldadora Infra | Falta modelo; foto no basta para darlo por confirmado |
| Media | Inventario y recepción | La reunión menciona equipos llegando, en renta y en compra; no acredita disponibilidad actual |
| Media | Certificaciones | CE/RoHS son declaraciones de fichas de máquina. La reunión no adjunta certificados de soldadura ni alcance para Integra |
| Media | Fotos | Fabricante/catálogo = imagen ilustrativa, no prueba fotográfica de la unidad propiedad de Integra. Bobcat requiere reemplazo o confirmación |
| Media | Planos de proyectos | Cotas particulares y algunos textos ilegibles; no usar como capacidad de producción ni publicar planos con avisos de propiedad sin revisar su uso |

## Datos mínimos que faltan para completar futuras fichas

Por equipo: fotografía de placa, modelo exacto, número de serie, inventario disponible y fotos actuales. Para elevación: tabla de carga, altura/alcance según configuración, dimensiones replegadas y transporte. Para Met: materiales y espesores realmente habilitados, herramental entregado, tolerancias alcanzables de pieza y radios mínimos de rolado. Para energía/soldadura: potencia continua/pico, ciclo a cada ajuste, alimentación y accesorios incluidos.

## Cobertura de la extracción

Se revisaron las **75 páginas de los cinco PDF**, las **11 filas del catálogo** y sus **22 imágenes**. S1 se leyó visualmente y con OCR auxiliar; S2/S3 combinan texto y tablas/planos en imagen; S5 contiene tablas con pictogramas; S6 guarda especificaciones principalmente como imágenes. Se conservaron los datos legibles y se identificaron los faltantes. No se reconstruyeron números ilegibles ni dimensiones a escala a partir de fotografías.
