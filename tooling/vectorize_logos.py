"""Prepare transparent crops and vector traces from the supplied logo references."""

from pathlib import Path
import sys
from collections import deque
import re

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
VTRACER_PATH = ROOT / "tmp" / "vectorize" / "python"
sys.path.insert(0, str(VTRACER_PATH))
import vtracer  # type: ignore  # noqa: E402

SOURCES = {
    "integra-met": Path(r"C:\Users\ricar\AppData\Local\Temp\codex-clipboard-e0a71d54-76d7-40c9-bc2a-1a78dfcc5996.jpg"),
    "integra": Path(r"C:\Users\ricar\AppData\Local\Temp\codex-clipboard-3e2891b0-6708-4d20-ab36-c0f0d4894d10.jpg"),
    "integra-rent": Path(r"C:\Users\ricar\AppData\Local\Temp\codex-clipboard-bfb81a1d-7ff3-4b8a-a337-ffd6664beb0d.jpg"),
}

OUTPUT = ROOT / "apps" / "landing" / "public" / "brand"
PREPARED = ROOT / "tmp" / "vectorize" / "prepared"
OUTPUT.mkdir(parents=True, exist_ok=True)
PREPARED.mkdir(parents=True, exist_ok=True)


def transparent_crop(source: Path, destination: Path) -> None:
    image = Image.open(source).convert("RGBA")
    data = np.asarray(image).copy()
    rgb = data[:, :, :3].astype(np.int16)
    neutral_light = (rgb.min(axis=2) > 180) & ((rgb.max(axis=2) - rgb.min(axis=2)) < 34)
    height, width = neutral_light.shape
    background = np.zeros((height, width), dtype=bool)
    queue: deque[tuple[int, int]] = deque()
    for x in range(width):
        if neutral_light[0, x]: queue.append((0, x))
        if neutral_light[height - 1, x]: queue.append((height - 1, x))
    for y in range(height):
        if neutral_light[y, 0]: queue.append((y, 0))
        if neutral_light[y, width - 1]: queue.append((y, width - 1))
    while queue:
        y, x = queue.popleft()
        if background[y, x] or not neutral_light[y, x]:
            continue
        background[y, x] = True
        if y: queue.append((y - 1, x))
        if y + 1 < height: queue.append((y + 1, x))
        if x: queue.append((y, x - 1))
        if x + 1 < width: queue.append((y, x + 1))
    foreground = ~background
    ys, xs = np.where(foreground)
    if not len(xs):
        raise ValueError(f"No foreground detected in {source}")
    margin = 10
    left = max(0, int(xs.min()) - margin)
    top = max(0, int(ys.min()) - margin)
    right = min(image.width, int(xs.max()) + margin + 1)
    bottom = min(image.height, int(ys.max()) + margin + 1)
    data = data[top:bottom, left:right]
    cropped_background = background[top:bottom, left:right]
    data[:, :, 3] = np.where(cropped_background, 0, 255).astype(np.uint8)
    data[cropped_background, :3] = 255
    Image.fromarray(data, "RGBA").save(destination)


def flatten_palette(name: str, path: Path) -> None:
    data = np.asarray(Image.open(path).convert("RGBA")).copy()
    rgb = data[:, :, :3].astype(np.int16)
    alpha = data[:, :, 3]
    visible = alpha > 0
    light_neutral = visible & (rgb.min(axis=2) > 190) & ((rgb.max(axis=2) - rgb.min(axis=2)) < 38)

    keep_white = np.zeros_like(visible)
    if name == "integra-rent":
        # Preserve the enclosed hook, the largest light component in the upper mark.
        seen = np.zeros_like(visible)
        components: list[list[tuple[int, int]]] = []
        height, width = visible.shape
        for y, x in zip(*np.where(light_neutral & (np.indices(visible.shape)[0] < height * .72))):
            if seen[y, x]:
                continue
            queue = deque([(int(y), int(x))])
            component: list[tuple[int, int]] = []
            while queue:
                cy, cx = queue.popleft()
                if cy < 0 or cy >= height or cx < 0 or cx >= width or seen[cy, cx] or not light_neutral[cy, cx]:
                    continue
                seen[cy, cx] = True
                component.append((cy, cx))
                queue.extend(((cy - 1, cx), (cy + 1, cx), (cy, cx - 1), (cy, cx + 1)))
            if component:
                components.append(component)
        if components:
            for y, x in max(components, key=len):
                keep_white[y, x] = True

    data[light_neutral & ~keep_white, 3] = 0
    visible = data[:, :, 3] > 0
    rgb = data[:, :, :3].astype(np.int16)
    if name == "integra":
        y_grid = np.indices(visible.shape)[0]
        red = visible & (y_grid >= visible.shape[0] * .52) & (y_grid < visible.shape[0] * .845)
        data[visible] = [242, 111, 7, 255]
        data[red] = [246, 20, 32, 255]
    else:
        yellow = visible & (rgb[:, :, 0] > 150) & (rgb[:, :, 1] > 90) & (rgb[:, :, 2] < 135)
        navy = visible & ~yellow & (rgb[:, :, 2] - rgb[:, :, 0] > 10)
        data[visible] = [86, 89, 93, 255]
        data[navy] = [6, 31, 52, 255]
        data[yellow] = [253, 185, 24, 255]
        data[keep_white] = [255, 255, 255, 255]
        if name == "integra-rent":
            y_grid, x_grid = np.indices(visible.shape)
            upper_r = visible & (y_grid < visible.shape[0] * .68) & (x_grid > visible.shape[1] * .43) & ~yellow & ~keep_white
            data[upper_r] = [86, 89, 93, 255]
    Image.fromarray(data, "RGBA").save(path)


for name, source in SOURCES.items():
    prepared = PREPARED / f"{name}.png"
    target = OUTPUT / f"{name}.svg"
    transparent_crop(source, prepared)
    flatten_palette(name, prepared)
    vtracer.convert_image_to_svg_py(
        str(prepared),
        str(target),
        colormode="color",
        hierarchical="stacked",
        mode="spline",
        filter_speckle=5,
        color_precision=6,
        layer_difference=24,
        corner_threshold=55,
        length_threshold=3.5,
        max_iterations=10,
        splice_threshold=45,
        path_precision=3,
    )
    white_target = OUTPUT / f"{name}-white.svg"
    white_svg = re.sub(r'fill="#[0-9A-Fa-f]{6}"', 'fill="#FFFFFF"', target.read_text(encoding="utf-8"))
    white_target.write_text(white_svg, encoding="utf-8")
    print(target)
