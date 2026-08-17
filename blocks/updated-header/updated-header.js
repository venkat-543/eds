export default async function decorate(block) {
  const row = block.children[0];

  const logo = row.children[0];
  const company = row.children[1];
  const about = row.children[2];
  const contact = row.children[3];
  const login = row.children[4];

  logo.classList.add('header-logo');
  company.classList.add('header-company');
  about.classList.add('header-link');
  contact.classList.add('header-link');
  login.classList.add('header-link');

  const left = document.createElement('div');
  left.classList.add('header-left');

  const right = document.createElement('nav');
  right.classList.add('header-right');

  left.append(logo, company);
  right.append(about, contact, login);
  row.append(left, right);
}
