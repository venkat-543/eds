export default function decorate(block) {
  const rows = [...block.children];
  const list = document.createElement('ol');
  list.className = 'steps-list';

  rows.forEach((row) => {
    const cells = [...row.children];
    const title = cells[0]?.textContent.trim();
    const description = cells[1]?.textContent.trim();

    if (!title) return;

    const item = document.createElement('li');
    const heading = document.createElement('h3');
    heading.textContent = title;
    item.append(heading);

    if (description) {
      const text = document.createElement('p');
      text.textContent = description;
      item.append(text);
    }

    list.append(item);
  });

  block.replaceChildren(list);
}