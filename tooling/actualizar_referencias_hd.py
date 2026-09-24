from pathlib import Path
root=Path(__file__).resolve().parents[1]/'apps/landing/propuestas'
p=root/'propuestas.js'
s=p.read_text(encoding='utf-8')
s=s.replace('Imágenes de referencia del catálogo. Configuración y disponibilidad sujetas a consulta.', 'Imágenes ilustrativas restauradas con IA a partir del catálogo. Configuración y disponibilidad sujetas a consulta.')
s=s.replace('<small>Integra · Integración y aplicación estructural</small>', '<small>Integra · Integración y aplicación estructural · Fotografías mejoradas con IA para estas propuestas. <a href="calidad-imagenes.html">Ver originales y restauraciones</a></small>')
p.write_text(s,encoding='utf-8')
p=root/'propuestas.css'
s=p.read_text(encoding='utf-8').replace('.hero-photo>img{transform:scale(1.14)}','.hero-photo>img{transform:none}')
p.write_text(s,encoding='utf-8')
p=root/'index.html'
s=p.read_text(encoding='utf-8').replace('Fotografía real, titulares', 'Fotografía restaurada, titulares')
s=s.replace('Se utilizan imágenes y datos de los documentos entregados.', 'Datos de los documentos entregados e imágenes restauradas con IA. <a href="calidad-imagenes.html">Comparar originales y versiones mejoradas →</a>')
for name in ['editorial','precision','empresas']:
    s=s.replace(f'previews/{name}-desktop.png"',f'previews/{name}-desktop.png?v=hd1"')
p.write_text(s,encoding='utf-8')
# New resource URL prevents an old cached renderer from selecting low-resolution files.
for name in ['editorial','precision','empresas']:
    p=root/(name+'.html')
    s=p.read_text(encoding='utf-8').replace('propuestas.js"','propuestas.js?v=hd1"').replace('propuestas.css"','propuestas.css?v=hd1"')
    p.write_text(s,encoding='utf-8')
