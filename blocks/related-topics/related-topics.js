export default function decorate(block) {
  const rows = [...block.children];
  const cards = document.createElement('div');
  cards.className = 'related-topics-grid';

  rows.forEach((row) => {
    const cells = [...row.children];
    const link = cells[0]?.querySelector('a');
    const title = cells[0]?.textContent.trim();
    const description = cells[1]?.textContent.trim();

    if (!title) return;

    const card = document.createElement('a');
    card.className = 'related-topic-card';
    if (link) card.href = link.href;

    const heading = document.createElement('strong');
    heading.textContent = title;
    card.append(heading);

    if (description) {
      const text = document.createElement('span');
      text.textContent = description;
      card.append(text);
    }

    cards.append(card);
  });

  block.replaceChildren(cards);
}