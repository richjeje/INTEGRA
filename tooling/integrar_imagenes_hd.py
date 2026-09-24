"""Copy image_gen outputs and encode WebP; no image restoration in this script."""
from pathlib import Path
import json, shutil, html
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
rows = json.loads((ROOT/'tmp/calidad-imagenes-final.json').read_text(encoding='utf-8'))
master = ROOT/'docs/equipos/restauradas'
web = ROOT/'apps/landing/public/equipos/hd'
master.mkdir(parents=True, exist_ok=True)
web.mkdir(parents=True, exist_ok=True)
cards = []
for row in rows:
    name = row['id']
    folder = master/('revision' if row['review_only'] else 'master')
    folder.mkdir(exist_ok=True)
    target = folder/(name+'.png')
    shutil.copy2(row['generated_source'], target)
    with Image.open(ROOT/'docs/equipos/seleccion-web'/(name+'.webp')) as im:
        row['original_size'] = list(im.size)
    with Image.open(target) as im:
        row['restored_size'] = list(im.size)
        if not row['review_only']:
            im.save(web/(name+'.webp'), 'WEBP', quality=94, method=6)
    row['master'] = target.relative_to(ROOT).as_posix()
    row['status'] = 'No usar: etiquetas reconstruidas incorrectamente' if row['review_only'] else 'Uso ilustrativo; no evidencia técnica'
    row['web'] = None if row['review_only'] else (web/(name+'.webp')).relative_to(ROOT).as_posix()
    before = '../public/equipos/'+name+'.webp'
    after = '../../../'+row['master'] if row['review_only'] else '../public/equipos/hd/'+name+'.webp'
    dims = lambda values: ' × '.join(str(v) for v in values)+' px'
    status = 'EXCLUIDA · Etiquetas alteradas' if row['review_only'] else 'VERSIÓN ILUSTRATIVA · IA'
    cards.append(f'<article><h2>{html.escape(name)}</h2><p class="status">{status}</p><div class="pair"><figure><a href="{before}"><img src="{before}" loading="lazy" alt="Original de {name}"></a><figcaption>Original · {dims(row["original_size"])}</figcaption></figure><figure><a href="{after}"><img src="{after}" loading="lazy" alt="Restauración de {name}"></a><figcaption>Restauración · {dims(row["restored_size"])}</figcaption></figure></div></article>')

(master/'prompts-y-resultados.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2),encoding='utf-8')
md = '# Mejora de imágenes para las propuestas\n\nFecha: 2026-09-22.\n\nSe procesaron las 18 imágenes seleccionadas para web con la herramienta integrada image_gen. Se incorporan 14 versiones ilustrativas de mayor resolución al banco web. Cuatro restauraciones de soldadoras quedan excluidas por cambios en etiquetas/modelos. Los originales permanecen en `docs/equipos/seleccion-web/` y `apps/landing/public/equipos/`. Las 156 extracciones documentales y las fichas técnicas no se modificaron.\n\nLa restauración generativa reconstruye detalles: no garantiza geometría, letras ni componentes idénticos. Las imágenes mejoradas sirven para las propuestas visuales y no para verificar modelos, dimensiones o configuraciones. Para fotografía documental fiel se necesitan originales de mayor resolución. La fuente de especificaciones sigue siendo FICHAS-TECNICAS-INTEGRA.md.\n\nSe conservan los másteres PNG en `restauradas/master/`, los resultados excluidos en `restauradas/revision/` y el conjunto de prompts y procedencia en [prompts-y-resultados.json](restauradas/prompts-y-resultados.json). Las copias WebP se codifican a calidad 94 sin otro reescalado.\n\n| Imagen | Original (px) | Restauración (px) | Uso |\n|---|---:|---:|---|\n'
for row in rows:
    md += f'| {row["id"]} | {" × ".join(map(str,row["original_size"]))} | {" × ".join(map(str,row["restored_size"]))} | {row["status"]} |\n'
(ROOT/'docs/equipos/MEJORA-IMAGENES.md').write_text(md,encoding='utf-8')
page = '''<!doctype html><html lang="es"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Calidad de imágenes · Integra</title><style>*{box-sizing:border-box}body{margin:0;background:#f2f3f5;color:#10243a;font:16px/1.6 system-ui}main{max-width:1280px;margin:auto;padding:45px 24px}a{color:inherit}h1{font-size:clamp(32px,5vw,60px);line-height:1.1;letter-spacing:-.04em}header p{max-width:850px}article{background:white;padding:24px;margin:30px 0;border:1px solid #d8dce1}h2{font-size:18px;overflow-wrap:anywhere}.status{font-size:12px;font-weight:700;color:#8c3914}.pair{display:grid;grid-template-columns:1fr 1fr;gap:24px}figure{margin:0;min-width:0}img{display:block;width:100%;height:400px;object-fit:contain;background:white}figcaption{border-top:1px solid #ddd;padding:14px 0;font-size:13px}@media(max-width:600px){.pair{grid-template-columns:1fr}img{height:300px}article{padding:16px}}</style><main><header><a href="index.html">← Ver las tres propuestas</a><h1>Más definición.<br>La fuente, siempre a la vista.</h1><p>Comparación de las 18 imágenes del banco web. Se incorporaron 14 versiones restauradas con IA al banco de las propuestas. Las cuatro soldadoras señaladas se excluyeron porque la restauración alteró sus etiquetas.</p><p>Las versiones mejoradas son ilustrativas: pueden reconstruir detalles que no se distinguían en las fuentes. Los originales y las especificaciones técnicas se conservan. Pulsa una imagen para verla completa.</p></header>'''+''.join(cards)+'</main></html>'
(ROOT/'apps/landing/propuestas/calidad-imagenes.html').write_text(page,encoding='utf-8')
print(json.dumps({'processed':len(rows),'web':sum(not r['review_only'] for r in rows),'excluded':sum(r['review_only'] for r in rows)},ensure_ascii=False))
