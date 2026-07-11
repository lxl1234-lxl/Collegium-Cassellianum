import re

with open('dist/index.html', 'r', encoding='utf-8') as f:
    c = f.read()

# Remove type="module" for mobile compatibility
c = c.replace(' type="module" crossorigin', '')

# Write output
with open('卡塞尔学院守夜人社区.html', 'w', encoding='utf-8') as f:
    f.write(c)

print('Patched OK')