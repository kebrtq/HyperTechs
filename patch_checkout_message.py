from pathlib import Path
path = Path('app/checkout/page.tsx')
text = path.read_text(encoding='utf-8')
old = '${items.map(item => `- ${item.product.name} x${item.quantity} = ${(item.product.price * item.quantity).toLocaleString()} IQD`).join("\\n")}'
new = '${items.map(item => `- ${item.product.name} x${item.quantity} = ${((item.product.price || 0) * item.quantity).toLocaleString()} IQD`).join("\\n")}'
if old not in text:
    raise ValueError('old string not found')
path.write_text(text.replace(old, new), encoding='utf-8')
