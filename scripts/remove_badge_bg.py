from PIL import Image
import numpy as np

# Load image
img = Image.open('kse.png').convert('RGBA')
arr = np.array(img)

# Background color (beige/tan surrounding the badge)
bg_color = np.array([209, 192, 150, 255], dtype=np.float32)
bg_rgb = bg_color[:3].reshape(1, 1, 3)

# Compute color distance from background
diff = np.linalg.norm(arr[:, :, :3].astype(np.float32) - bg_rgb, axis=2)

# Pixels that are NOT background (badge pixels)
bg_threshold = 45
is_badge = diff >= bg_threshold

# Find bounding box of badge pixels
rows = np.any(is_badge, axis=1)
cols = np.any(is_badge, axis=0)
rmin, rmax = np.where(rows)[0][[0, -1]]
cmin, cmax = np.where(cols)[0][[0, -1]]

# Compute circle center and radius from bounding box
cx = (cmin + cmax) / 2
cy = (rmin + rmax) / 2
radius = min(cmax - cmin, rmax - rmin) / 2

# Create circular mask: inside circle = keep, outside = transparent
h, w = arr.shape[:2]
y, x = np.ogrid[:h, :w]
dist_from_center = np.sqrt((x - cx) ** 2 + (y - cy) ** 2)
circular_mask = dist_from_center <= radius

# Apply mask: keep original pixels inside circle, make outside transparent
out = arr.copy()
out[~circular_mask] = [0, 0, 0, 0]

# Save
result = Image.fromarray(out)
result.save('src/assets/kse.png')
print(f'Circular badge extracted: center=({cx:.1f}, {cy:.1f}), radius={radius:.1f}')
