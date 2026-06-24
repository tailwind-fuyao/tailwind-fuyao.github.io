"""Liang-Peng-style mentor avatar pipeline.

Goal: every portrait shows the same identity layout — a dark-red avatar circle
inscribed in a square white canvas, with the person centered inside the circle.

Strategy:
  1. If the canvas is already roughly square (within 10%), keep the original
     framing — just crop to the largest centered square and resize.
  2. If the canvas is over-sized (e.g. the photo was composited into a corner of
     a giant white background, like the original kai-zheng / michael-zhu /
     ming-wu portraits), find the dark-red circle's bounding box and crop a
     padded square around it so the rendered avatar matches the others.
  3. Resize to OUTPUT_SIZE × OUTPUT_SIZE.

Run from repo root:  python scripts/crop_mentor_avatars.py
"""
from pathlib import Path
import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
MENTORS_DIR = ROOT / "public" / "images" / "mentors"

OUTPUT_SIZE = 560
SQUARE_TOLERANCE = 0.10        # canvas counts as "square" if w/h within 10%
RED_CIRCLE_PADDING_RATIO = 0.04  # tiny white margin so the circle isn't clipped


def find_red_bbox(img: Image.Image) -> tuple[int, int, int, int] | None:
    """Bounding box of dark-red avatar pixels."""
    arr = np.asarray(img.convert("RGB"))
    r, g, b = arr[..., 0], arr[..., 1], arr[..., 2]
    mask = (r > 70) & (r < 170) & (g < 60) & (b < 60)
    if not mask.any():
        return None
    ys, xs = np.where(mask)
    return int(xs.min()), int(ys.min()), int(xs.max()), int(ys.max())


def center_square_crop(img: Image.Image) -> Image.Image:
    """Largest centered square crop of the canvas."""
    w, h = img.size
    side = min(w, h)
    left = (w - side) // 2
    top = (h - side) // 2
    return img.crop((left, top, left + side, top + side))


def red_bbox_square_crop(img: Image.Image, bbox: tuple[int, int, int, int]) -> Image.Image:
    """Square crop around the red circle with a small white margin.

    Subjects often wear light-colored clothing that masks the bottom of the red
    circle, so the *width* of the detected red region is a much more reliable
    estimate of the circle's diameter than the height. We center horizontally on
    the bbox midline and place the vertical center at y0 + radius (top is
    reliable, bottom is not).
    """
    x0, y0, x1, y1 = bbox
    diameter = x1 - x0
    if (y1 - y0) > diameter:
        diameter = y1 - y0  # tall regions also handled, just in case
    radius = diameter / 2
    cx = (x0 + x1) / 2
    cy = y0 + radius
    pad = int(diameter * RED_CIRCLE_PADDING_RATIO)
    side = int(diameter + pad * 2)
    half = side / 2
    w, h = img.size
    left = max(int(cx - half), 0)
    top = max(int(cy - half), 0)
    right = min(int(cx + half), w)
    bottom = min(int(cy + half), h)
    side2 = min(right - left, bottom - top)
    return img.crop((left, top, left + side2, top + side2))


def is_canvas_square(img: Image.Image) -> bool:
    w, h = img.size
    ratio = max(w, h) / min(w, h)
    return ratio <= 1 + SQUARE_TOLERANCE


def main() -> None:
    for path in sorted(MENTORS_DIR.glob("*.png")):
        img = Image.open(path)
        original_size = img.size

        if is_canvas_square(img):
            cropped = center_square_crop(img)
            method = f"square canvas {original_size} → center crop"
        else:
            bbox = find_red_bbox(img)
            if bbox is None:
                cropped = center_square_crop(img)
                method = f"oversized {original_size} no red detected → center crop"
            else:
                cropped = red_bbox_square_crop(img, bbox)
                method = f"oversized {original_size} → red-bbox crop bbox={bbox}"

        out = cropped.resize((OUTPUT_SIZE, OUTPUT_SIZE), Image.LANCZOS)
        out.save(path, "PNG", optimize=True)
        print(f"{path.name:<22}  {method}")


if __name__ == "__main__":
    main()
