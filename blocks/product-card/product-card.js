export default function decorate(block) {
  const row = block.children[0];
  if (!row) return;
  const cells = [...row.children];
  const image = cells[0]?.querySelector('img');
  const title = cells[1]?.textContent.trim();
  const price = cells[2]?.textContent.trim();
  const oldPrice = cells[3]?.textContent.trim();
  const link = cells.find((cell) => cell.querySelector('a'))?.querySelector('a');
  block.textContent = '';
  const card = document.createElement('article');
  card.className = 'product-card';
  const media = document.createElement('div');
  media.className = 'product-card-media';
  if (image) {
    image.removeAttribute('width');
    image.removeAttribute('height');
    const a = document.createElement('a');
    a.href = link?.href || '#';
    a.append(image);
    media.append(a);
  }
  const body = document.createElement('div');
  body.className = 'product-card-body';
  const heading = document.createElement('h3');
  heading.textContent = title || 'Product';
  body.append(heading);
  const pricing = document.createElement('div');
  pricing.className = 'product-card-pricing';
  if (price) { const current = document.createElement('strong'); current.textContent = price; pricing.append(current); }
  if (oldPrice) { const previous = document.createElement('del'); previous.textContent = oldPrice; pricing.append(previous); }
  body.append(pricing);
  if (link) { const action = link.cloneNode(true); action.className = 'button primary product-card-action'; body.append(action); }
  card.append(media, body);
  block.append(card);
}