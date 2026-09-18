export default function decorate(block) {
  const rows = [...block.children];
  const type = rows[0]?.textContent.trim().toLowerCase() || 'note';
  const title = rows[1]?.textContent.trim() || '';
  const body = rows[2]?.textContent.trim() || '';

  block.replaceChildren();

  const content = document.createElement('div');
  content.className = 'callout-content';

  if (title) {
    const heading = document.createElement('strong');
    heading.textContent = title;
    content.append(heading);
  }

  if (body) {
    const text = document.createElement('p');
    text.textContent = body;
    content.append(text);
  }

  block.classList.add(`callout-${type}`);
  block.append(content);
}