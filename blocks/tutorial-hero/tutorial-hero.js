export default function decorate(block) {
  const rows = [...block.children];
  const getText = (row) => row?.children?.[0]?.textContent?.trim() || '';

  const title = getText(rows[0]);
  const intro = getText(rows[1]);
  const category = getText(rows[2]);

  block.replaceChildren();

  const content = document.createElement('div');
  content.className = 'tutorial-hero-content';

  if (category) {
    const eyebrow = document.createElement('div');
    eyebrow.className = 'tutorial-hero-eyebrow';
    eyebrow.textContent = category;
    content.append(eyebrow);
  }

  if (title) {
    const heading = document.createElement('h1');
    heading.textContent = title;
    content.append(heading);
  }

  if (intro) {
    const description = document.createElement('p');
    description.textContent = intro;
    content.append(description);
  }

  block.append(content);
}