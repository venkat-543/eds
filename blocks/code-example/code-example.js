export default function decorate(block) {
  const rows = [...block.children];
  const data = {};

  rows.forEach((row) => {
    const cells = [...row.children];
    if (cells.length >= 2) {
      data[cells[0].textContent.trim().toLowerCase()] = cells[1];
    }
  });

  const language = data.language?.textContent.trim() || '';
  const title = data.title?.textContent.trim() || 'Example';
  const source = data.code?.textContent || '';

  block.replaceChildren();

  const header = document.createElement('div');
  header.className = 'code-example-header';

  const heading = document.createElement('strong');
  heading.textContent = title;
  header.append(heading);

  if (language) {
    const badge = document.createElement('span');
    badge.className = 'code-example-language';
    badge.textContent = language;
    header.append(badge);
  }

  const pre = document.createElement('pre');
  const code = document.createElement('code');
  code.textContent = source.trim();
  pre.append(code);

  const copy = document.createElement('button');
  copy.type = 'button';
  copy.className = 'code-example-copy';
  copy.textContent = 'Copy';
  copy.addEventListener('click', async () => {
    await navigator.clipboard.writeText(code.textContent);
    copy.textContent = 'Copied';
    setTimeout(() => { copy.textContent = 'Copy'; }, 1200);
  });

  const wrapper = document.createElement('div');
  wrapper.className = 'code-example-body';
  wrapper.append(pre, copy);
  block.append(header, wrapper);
}