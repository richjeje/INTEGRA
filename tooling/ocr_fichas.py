from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
import subprocess, zipfile, xml.etree.ElementTree as ET
ROOT=Path(__file__).resolve().parents[1]
TMP=ROOT/'tmp/extraccion-equipos'
def ocr(p):
 r=subprocess.run(['tesseract',str(p),'stdout','-l','spa+eng'],capture_output=True)
 (TMP/(p.stem+'-ocr.txt')).write_bytes(r.stdout)
 return p.stem
with ThreadPoolExecutor(max_workers=4) as ex:
 print(list(ex.map(ocr,sorted(TMP.glob('S1-p*.png')))))
with zipfile.ZipFile(Path.home()/'Downloads/CATALOGO DE EQUIPOS INTEGRA.xlsx') as z:
 for n in z.namelist():
  if n.endswith('.xml') and ('drawings/' in n or 'richData/' in n):
   root=ET.fromstring(z.read(n))
   texts=[e.text for e in root.iter() if e.tag.endswith('}t') and e.text]
   if texts: print(n,texts)
