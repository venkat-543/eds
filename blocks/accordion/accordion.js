export default function decorate(block) {
  const rows = [...block.children];
  const fragment = document.createDocumentFragment();

  rows.forEach((row) => {
    const cells = [...row.children];
    const title = cells[0]?.textContent.trim();
    const content = cells[1]?.textContent.trim();

    if (!title) return;

    const details = document.createElement('details');
    const summary = document.createElement('summary');
    summary.textContent = title;
    details.append(summary);

    if (content) {
      const body = document.createElement('div');
      body.className = 'accordion-content';
      body.textContent = content;
      details.append(body);
    }

    fragment.append(details);
  });

  block.replaceChildren(fragment);
}