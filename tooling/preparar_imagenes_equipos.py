from pathlib import Path
import json, hashlib, shutil
from PIL import Image, ImageDraw
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'docs/equipos'; TMP=ROOT/'tmp/extraccion-equipos'
data=json.loads((TMP/'extraction.json').read_text(encoding='utf-8'))
dest=OUT/'seleccion-web'; dest.mkdir(exist_ok=True)
refs=OUT/'referencias'; refs.mkdir(exist_ok=True)
selected=[
 ('met-01-forza-ranger','s2-p02-img03.jpeg','Met: FORZA Ranger N1530P60','S2 p. 2','Imagen de fabricante'),
 ('met-02-forza-press','s3-p02-img03.png','Met: FORZA Press FXP42T250','S3 p. 2','Imagen de fabricante'),
 ('met-03-roladora-vertical','s5-p06-img02.jpeg','Met: roladora CDP 800, vista vertical','S5 p. 6','Fotografía de documento del proveedor'),
 ('met-03-roladora-horizontal','s5-p06-img01.jpeg','Met: roladora CDP 800, vista horizontal','S5 p. 6','Fotografía de documento del proveedor'),
 ('rent-01-zoomlion-tijera','s6-hoja1-img04.png','Rent: plataforma de tijera Zoomlion','S6 Hoja1, imagen 04, G3','Ilustrativa; especificaciones ausentes'),
 ('rent-02-genie-articulada','s6-hoja1-img03.png','Rent: plataforma articulada Genie','S6 Hoja1, imagen 03, G4','Ilustrativa'),
 ('rent-03-broderson-grua','s6-hoja1-img05.png','Rent: grúa Broderson','S6 Hoja1, imagen 05, I5','Ilustrativa; capacidad por confirmar'),
 ('rent-04-torre-iluminacion','s6-hoja1-img16.png','Rent: torre de iluminación','S6 Hoja1, imagen 16, H6','Ilustrativa'),
 ('rent-05-montacargas','s6-hoja1-img08.png','Rent: montacargas UniCarrier','S6 Hoja1, imagen 08, G7','Imagen ilustrativa; no confirma configuración de unidad'),
 ('rent-06-miller-deltaweld','s6-hoja1-img10.png','Rent: soldadora Miller Deltaweld','S6 Hoja1, imagen 10, G8','Ilustrativa'),
 ('rent-07-dewalt-rompedora','s6-hoja1-img12.png','Rent: rompedora DeWalt','S6 Hoja1, imagen 12, G9','Ilustrativa'),
 ('rent-08-revolvedora','s6-hoja1-img13.png','Rent: revolvedora de un saco','S6 Hoja1, imagen 13, G10','Ilustrativa'),
 ('rent-09-infra-soldadora','s6-hoja1-img17.png','Rent: soldadora Infra','S6 Hoja1, imagen 17, H11','Modelo pendiente'),
 ('rent-10-bobcat-modelo-por-confirmar','s6-hoja1-img19.png','Rent: Miller Bobcat, foto 250 EFI','S6 Hoja1, imagen 19, I12','NO asociar a Bobcat225 sin confirmar'),
 ('rent-11-esab-ruffian','s6-hoja1-img20.png','Rent: ESAB Ruffian','S6 Hoja1, imagen 20, O13','Ilustrativa'),
]
entries=[]
for slug,name,label,source,status in selected:
 im=Image.open(OUT/'imagenes'/name)
 im.thumbnail((1600,1600))
 im.save(dest/(slug+'.webp'),format='WEBP',quality=90,method=6)
 entries.append({'file':'seleccion-web/'+slug+'.webp','original':'imagenes/'+name,'label':label,'source':source,'status':status,'width':im.width,'height':im.height})
# Recortes fieles de fotografías dentro de diapositivas, sin generar contenido nuevo.
for slug,page,box,label in [
 ('integra-racks',16,(25,750,1450,1685),'Racks de proyecto'),
 ('integra-dolly',16,(1530,750,2870,1685),'Dolly de proyecto'),
 ('integra-paileria',18,(325,620,2350,1850),'Pailería y bastidores de proyecto'),
]:
 name=f's1-p{page:02}-img01.png'
 im=Image.open(OUT/'imagenes'/name).crop(box)
 im.thumbnail((1600,1600)); im.save(dest/(slug+'.webp'),format='WEBP',quality=90,method=6)
 entries.append({'file':'seleccion-web/'+slug+'.webp','original':'imagenes/'+name,'crop_pixels':box,'label':label,'source':f'S1 p. {page}','status':'Recorte de foto de presentación; proyecto específico','width':im.width,'height':im.height})
for src,target in [('S5-p07.png','s5-capacidades-p07.png'),('S5-p08.png','s5-capacidades-p08.png'),('S3-p07.png','s3-instalacion-p07.png'),('S2-p08.png','s2-instalacion-p08.png')]:
 shutil.copyfile(TMP/src,refs/target)
manifest={'sources':[],'selected_images':entries,'original_images':[]}
for s in data:
 manifest['sources'].append({k:v for k,v in s.items() if k in ['id','file','sha256']})
 for p in s.get('pages',[]):
  for im in p['images']: manifest['original_images'].append({'source':s['id'],'page':p['page'],**im})
 for w in s.get('sheets',[]):
  for im in w['images']: manifest['original_images'].append({'source':s['id'],'sheet':w['sheet'],**im})
(OUT/'fuentes-e-imagenes.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2),encoding='utf-8')
lines=['# Imágenes extraídas para Integra','', '18 imágenes seleccionadas: 15 vistas de equipos y 3 recortes de proyectos. Las versiones WebP conservan proporción y no se amplían por encima de la resolución extraída. Las imágenes pequeñas del Excel sirven para tarjetas; no tienen resolución suficiente para un hero de pantalla completa.', '', 'Las fotos del catálogo y fabricante son ilustrativas. La fotografía de Bobcat muestra 250 EFI, distinta de la celda BOBCAT225. No usarla como foto confirmada de ese modelo. No se han insertado imágenes en la página.', '', '## Selección para la web','', '| Imagen | Fuente | Resolución WebP | Estado |','| --- | --- | --- | --- |']
for e in entries:
 lines.append(f'| [{e["label"]}]({e["file"]}) | {e["source"]} | {e["width"]} ×{e["height"]} px | {e["status"]} |')
lines+=['','## Galería','']
for e in entries: lines += [f'### {e["label"]}', '', f'![{e["label"]}]({e["file"]})','',f'{e["source"]}. {e["status"]}.','']
lines+=['## Imágenes originales y evidencia','', 'Se conservaron las 156 imágenes extraídas de tamaño mínimo 100 ×100 px. Incluyen fotografías, diapositivas completas, fondos, dibujos y tablas, no 156 fotografías de equipos distintas. Los fondos repetidos conservan referencia por página. Las tablas pequeñas o vectoriales no extraídas como imagen independiente se preservan en el PDF original y, para los esquemas clave, en `referencias/`. Los originales no son una selección para publicar.', '', '| Archivo | Fuente / ubicación | Tamaño |','| --- | --- | --- |']
for im in manifest['original_images']:
 location=f'p. {im["page"]}' if 'page' in im else f'{im["sheet"]}, ancla fila {im["row"]}, columna {im["col"]}'
 lines.append(f'| [{im["file"]}](imagenes/{im["file"]}) | {im["source"]} {location} | {im["width"]} ×{im["height"]} px |')
lines+=['','## Identidad de las fuentes','', 'SHA-256 de los archivos originales leídos; permite detectar futuras versiones distintas.','']
for s in manifest['sources']: lines += [f'- {s["id"]}: `{s["file"]}` — `{s["sha256"]}`']
(OUT/'MANIFIESTO-IMAGENES.md').write_text('\n'.join(lines)+'\n',encoding='utf-8')
canvas=Image.new('RGB',(1200,280*6),'#eeeeee'); draw=ImageDraw.Draw(canvas)
for i,e in enumerate(entries):
 im=Image.open(OUT/e['file']).convert('RGBA'); im.thumbnail((380,235))
 x=(i%3)*400; y=(i//3)*280
 canvas.paste(im,(x+(400-im.width)//2,y+25),im)
 draw.text((x+5,y+5),Path(e['file']).stem,fill='black')
canvas.save(TMP/'seleccion-contacto.jpg')
print('Selected:',len(entries),'Originals:',len(manifest['original_images']))
