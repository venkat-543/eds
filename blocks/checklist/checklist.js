export default function decorate(block) {
  const items = [...block.children];
  const list = document.createElement('ul');
  list.className = 'checklist-list';

  items.forEach((row) => {
    const text = row.textContent.trim();
    if (!text) return;
    const item = document.createElement('li');
    item.textContent = text;
    list.append(item);
  });

  block.replaceChildren(list);
}