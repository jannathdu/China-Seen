
from pathlib import Path
from PIL import Image

IMAGE_DIR = Path("assets/images/destinations")

png_files = sorted(IMAGE_DIR.glob("*.png"))

if not png_files:
    raise SystemExit("No PNG images found.")

total_original = 0
total_optimized = 0

print(f"Found {len(png_files)} PNG images.\n")

for png_path in png_files:
    webp_path = png_path.with_suffix(".webp")

    with Image.open(png_path) as image:
        image.save(
            webp_path,
            format="WEBP",
            quality=82,
            method=6
        )

    original_size = png_path.stat().st_size
    optimized_size = webp_path.stat().st_size

    total_original += original_size
    total_optimized += optimized_size

    reduction = (
        (1 - optimized_size / original_size) * 100
        if original_size else 0
    )

    print(
        f"{png_path.name}: "
        f"{original_size / 1024:.1f} KB -> "
        f"{optimized_size / 1024:.1f} KB "
        f"({reduction:.1f}% reduction)"
    )

overall_reduction = (
    (1 - total_optimized / total_original) * 100
    if total_original else 0
)

print("\n--- TOTAL ---")
print(f"Original:  {total_original / (1024 * 1024):.2f} MB")
print(f"Optimized: {total_optimized / (1024 * 1024):.2f} MB")
print(f"Reduction: {overall_reduction:.1f}%")
