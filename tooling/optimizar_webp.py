"""Convert referenced catalog PNGs to WebP and update their source references."""
from pathlib import Path
import re
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'apps/landing/src'
PUBLIC = ROOT / 'apps/landing/public'
files = [p for p in SOURCE.rglob('*') if p.suffix in {'.astro', '.ts', '.js', '.css'}]
references = set()
for file in files:
    references.update(re.findall(r'/(?:materiales|perfiles|equipos)/[\w/-]+\.png', file.read_text(encoding='utf-8')))
before = after = 0
for reference in sorted(references):
    original = PUBLIC / reference.lstrip('/')
    if not original.exists():
        raise FileNotFoundError(original)
    destination = original.with_suffix('.webp')
    with Image.open(original) as image:
        image.save(destination, 'WEBP', quality=88, method=6)
    before += original.stat().st_size
    after += destination.stat().st_size
for file in files:
    text = file.read_text(encoding='utf-8')
    updated = text
    for reference in references:
        updated = updated.replace(reference, reference.removesuffix('.png') + '.webp')
    if updated != text:
        file.write_text(updated, encoding='utf-8')
print(f'{len(references)} images: {before:,} -> {after:,} bytes')
