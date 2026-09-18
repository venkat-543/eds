export default function decorate(block) {
  const rows = [...block.children];
  const table = document.createElement('table');

  rows.forEach((row, index) => {
    const tr = document.createElement('tr');
    [...row.children].forEach((cell) => {
      const el = document.createElement(index === 0 ? 'th' : 'td');
      el.textContent = cell.textContent.trim();
      tr.append(el);
    });
    table.append(tr);
  });

  const wrapper = document.createElement('div');
  wrapper.className = 'comparison-scroll';
  wrapper.append(table);
  block.replaceChildren(wrapper);
}