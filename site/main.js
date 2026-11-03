'use strict';
const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
const panels = [...document.querySelectorAll('.panel')];
const tabs = [...document.querySelectorAll('[data-panel]')];
const pageLinks = document.querySelector('#page-links');

function closeMenu() {
  menu.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('open');
}
function showPanel() {
  const id = window.location.hash.slice(1) || 'overview';
  const target = document.getElementById(id);
  // A sidebar anchor (such as #dates) should not switch the current panel.
  const current = panels.find((panel) => !panel.hidden);
  const selected = target?.closest('.panel') || current || panels[0];
  panels.forEach((panel) => { panel.hidden = panel !== selected; });
  tabs.forEach((tab) => {
    if (tab.dataset.panel === selected.id) tab.setAttribute('aria-current', 'page');
    else tab.removeAttribute('aria-current');
  });
  navigation.querySelectorAll('a').forEach((link) => {
    if (link.hash === '#' + selected.id) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  const headings = [...selected.querySelectorAll('h2[id], h3[id]')];
  pageLinks.replaceChildren(...headings.map((heading) => {
    const link = document.createElement('a');
    link.href = '#' + heading.id;
    link.textContent = heading.textContent;
    return link;
  }));
  if (target && selected.contains(target) && window.location.hash) {
    requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
  }
}
menu.addEventListener('click', () => {
  const expanded = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!expanded));
  navigation.classList.toggle('open', !expanded);
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menu.focus();
  }
});
window.addEventListener('hashchange', showPanel);
showPanel();
document.documentElement.classList.add('js');
