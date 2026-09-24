from pathlib import Path
import json, hashlib
import pymupdf as fitz
from openpyxl import load_workbook
from PIL import Image, ImageOps, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'docs/equipos'
TMP = ROOT / 'tmp/extraccion-equipos'
IMG = OUT / 'imagenes'
for p in (OUT, TMP, IMG): p.mkdir(parents=True, exist_ok=True)
sources = [
 ('S1','PRESENTACION INTEGRA SA DE CV.pdf'),
 ('S2','FichaTecnica_Ranger_N1530P60 (1).pdf'),
 ('S3','FichaTécnica_Press_FXP42T250 (1).pdf'),
 ('S4','Expansión comercial y nuevas unidades de Integra (1).pdf'),
 ('S5','CDP800_270726.pdf'),
]
data = []
for sid, name in sources:
 p = Path.home()/'Downloads'/name
 doc = fitz.open(p)
 pages=[]
 for i,page in enumerate(doc,1):
  txt=page.get_text(sort=True)
  (TMP/f'{sid}-p{i:02}.txt').write_text(txt,encoding='utf-8')
  page.get_pixmap(matrix=fitz.Matrix(1.4,1.4)).save(str(TMP/f'{sid}-p{i:02}.png'))
  ims=[]
  for j,im in enumerate(page.get_images(full=True),1):
   xref=im[0]; obj=doc.extract_image(xref)
   if min(obj['width'],obj['height'])<100: continue
   dest=IMG/f'{sid.lower()}-p{i:02}-img{j:02}.{obj["ext"]}'
   if im[1]:
    pix=fitz.Pixmap(doc,xref)
    if pix.alpha: pix=fitz.Pixmap(pix,0)
    pix=fitz.Pixmap(pix,fitz.Pixmap(doc,im[1]))
    if pix.colorspace.n != 3: pix=fitz.Pixmap(fitz.csRGB,pix)
    rgba=Image.frombytes('RGBA',(pix.width,pix.height),pix.samples)
    rgb=Image.new('RGB',rgba.size,'white'); rgb.paste(rgba,mask=rgba.getchannel('A'))
    rgb.save(dest)
   else: dest.write_bytes(obj['image'])
   ims.append({'file':dest.name,'width':obj['width'],'height':obj['height'],'xref':xref})
  pages.append({'page':i,'text':txt,'images':ims})
 data.append({'id':sid,'file':name,'sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'pages':pages})
 print(sid, name, len(pages), 'pages', sum(len(x['text']) for x in pages),'chars')
bookpath=Path.home()/'Downloads/CATALOGO DE EQUIPOS INTEGRA.xlsx'
book=load_workbook(bookpath,data_only=False)
cached=load_workbook(bookpath,data_only=True)
sheets=[]
for ws in book:
 rows=[]
 for row in ws:
  vals=[{'cell':c.coordinate,'value':str(c.value),'cached':str(cached[ws.title][c.coordinate].value) if c.data_type=='f' else None} for c in row if c.value is not None]
  if vals: rows.append(vals)
 images=[]
 for i,im in enumerate(ws._images,1):
  dest=IMG/f's6-{ws.title.lower().replace(" ","-")}-img{i:02}.{im.format}'
  dest.write_bytes(im._data())
  a=im.anchor._from
  images.append({'file':dest.name,'row':a.row+1,'col':a.col+1,'width':im.width,'height':im.height})
 sheets.append({'sheet':ws.title,'rows':rows,'images':images,'merged':[str(x) for x in ws.merged_cells.ranges]})
 print('S6',ws.title,ws.max_row,ws.max_column,len(images),'images')
data.append({'id':'S6','file':bookpath.name,'sha256':hashlib.sha256(bookpath.read_bytes()).hexdigest(),'sheets':sheets})
(TMP/'extraction.json').write_text(json.dumps(data,ensure_ascii=False,indent=2),encoding='utf-8')
with (TMP/'all-text.txt').open('w',encoding='utf-8') as f:
 for s in data:
  f.write('\n### '+s['id']+' '+s['file']+'\n')
  for p in s.get('pages',[]): f.write('\nPAGE '+str(p['page'])+'\n'+p['text'])
  for w in s.get('sheets',[]):
   f.write('\nSHEET '+w['sheet']+'\n')
   for row in w['rows']: f.write(' | '.join(c['cell']+'='+c['value'] for c in row)+'\n')
   f.write(json.dumps(w['images'],ensure_ascii=False)+'\n')
renders=list(TMP.glob('S*-p*.png'))
for start in range(0,len(renders),12):
 group=renders[start:start+12]
 canvas=Image.new('RGB',(1200,330*((len(group)+2)//3)),'#dddddd'); d=ImageDraw.Draw(canvas)
 for n,p in enumerate(group):
  im=Image.open(p); im.thumbnail((390,300))
  x=(n%3)*400; y=(n//3)*330
  canvas.paste(im,(x,y+25)); d.text((x+5,y+5),p.stem,fill='black')
 canvas.save(TMP/f'contact-{start//12+1}.jpg')
