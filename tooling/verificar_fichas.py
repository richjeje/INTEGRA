from pathlib import Path
import json,re,hashlib
from PIL import Image
import pymupdf as fitz
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'docs/equipos'
data=json.loads((ROOT/'tmp/extraccion-equipos/extraction.json').read_text(encoding='utf-8'))
# Reponer máscaras alfa de imágenes PDF, sobre blanco como en la página original.
fixed=0
for s in data:
 if 'pages' not in s: continue
 doc=fitz.open(Path.home()/'Downloads'/s['file'])
 for page in s['pages']:
  smasks={im[0]:im[1] for im in doc[page['page']-1].get_images(full=True)}
  for im in page['images']:
   smask=smasks.get(im['xref'])
   if not smask: continue
   pix=fitz.Pixmap(doc,im['xref'])
   if pix.alpha: pix=fitz.Pixmap(pix,0)
   pix=fitz.Pixmap(pix,fitz.Pixmap(doc,smask))
   if pix.colorspace.n != 3: pix=fitz.Pixmap(fitz.csRGB,pix)
   rgba=Image.frombytes('RGBA',(pix.width,pix.height),pix.samples)
   rgb=Image.new('RGB',rgba.size,'white'); rgb.paste(rgba,mask=rgba.getchannel('A'))
   rgb.save(OUT/'imagenes'/im['file']); fixed+=1
print('PDF image masks restored:',fixed)
for md in OUT.glob('*.md'):
 broken=[]
 for target in re.findall(r'\]\(([^)]+)\)',md.read_text(encoding='utf-8')):
  if '://' not in target and not target.startswith('#') and not (md.parent/target).exists(): broken.append(target)
 assert not broken,(md.name,broken)
 print(md.name,'links OK')
for s in data:
 assert hashlib.sha256((Path.home()/'Downloads'/s['file']).read_bytes()).hexdigest()==s['sha256']
text=(OUT/'FICHAS-TECNICAS-INTEGRA.md').read_text(encoding='utf-8')
assert len(re.findall(r'^### (MET|RENT)-\d+',text,re.M))==14
print('14 main equipment sections; 6 unchanged source files; PDF pages:',sum(len(s.get('pages',[])) for s in data))
