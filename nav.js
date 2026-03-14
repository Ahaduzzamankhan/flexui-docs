// FlexUI Docs — Navigation, Theme, Mobile Menu

const LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="8" fill="#2563eb"/>
  <polygon points="19,4 8,17 15.5,17 13,28 24,15 16.5,15" fill="white"/>
</svg>`;

// SVG icons for nav items
const ICONS = {
  home: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 6.5L8 2l6 4.5V14H10v-3H6v3H2z"/></svg>`,
  rocket: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 2c2 0 4 1.5 4 5 0 2-1 3.5-2.5 4.5L8 14l-1.5-2.5C5 10.5 4 9 4 7c0-3.5 2-5 4-5z"/><circle cx="8" cy="7" r="1.5" fill="currentColor" stroke="none"/><path d="M5.5 11.5L3 14M10.5 11.5L13 14"/></svg>`,
  folder: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 4.5h4l1.5 1.5H14v7H2z"/></svg>`,
  settings: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="2.5"/><path d="M8 1.5v1M8 13.5v1M1.5 8h1M13.5 8h1M3.3 3.3l.7.7M12 12l.7.7M3.3 12.7l.7-.7M12 4l.7-.7"/></svg>`,
  component: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="5" height="5" rx="1"/><rect x="9" y="2" width="5" height="5" rx="1"/><rect x="2" y="9" width="5" height="5" rx="1"/><rect x="9" y="9" width="5" height="5" rx="1"/></svg>`,
  hook: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 2v6a3 3 0 0 0 3 3h0a3 3 0 0 1 0 6"/><circle cx="8" cy="2" r="1.5" fill="currentColor" stroke="none"/></svg>`,
  context: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="3"/><circle cx="8" cy="8" r="6.5"/></svg>`,
  lifecycle: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 8A6 6 0 1 1 8 2"/><path d="M8 2l2.5 2.5L8 7"/></svg>`,
  vdom: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="6" y="1" width="4" height="3" rx="1"/><rect x="1" y="7" width="4" height="3" rx="1"/><rect x="11" y="7" width="4" height="3" rx="1"/><rect x="6" y="13" width="4" height="2" rx="1"/><path d="M8 4v3M3 10v1.5c0 .8.7 1.5 1.5 1.5H6M13 10v1.5c0 .8-.7 1.5-1.5 1.5H10"/></svg>`,
  router: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 4h5l3 4h4M11 4l3 4"/><circle cx="2" cy="4" r="1.5" fill="currentColor" stroke="none"/><circle cx="14" cy="12" r="1.5" fill="currentColor" stroke="none"/></svg>`,
  render: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="12" height="9" rx="1.5"/><path d="M5 14h6M8 11v3"/></svg>`,
  stream: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 8c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6"/><path d="M5 8c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2"/><path d="M1 8h2"/></svg>`,
  seo: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="7" cy="7" r="5"/><path d="M11 11l3 3"/></svg>`,
  server: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="3" width="14" height="4" rx="1"/><rect x="1" y="9" width="14" height="4" rx="1"/><circle cx="12" cy="5" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="11" r="1" fill="currentColor" stroke="none"/></svg>`,
  build: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 12l4-8 4 8"/><path d="M3.5 9.5h5"/><path d="M12 4v8M10 10l2 2 2-2"/></svg>`,
  cli: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="2" width="14" height="12" rx="2"/><path d="M4 6l2.5 2L4 10M8 10h4"/></svg>`,
  puzzle: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2h4v2.5c.5-.3 1-.5 1.5-.5 1.1 0 2 .9 2 2s-.9 2-2 2c-.5 0-1-.2-1.5-.5V10H7.5c.3.5.5 1 .5 1.5 0 1.1-.9 2-2 2s-2-.9-2-2c0-.5.2-1 .5-1.5H2V6h2.5c-.3-.5-.5-1-.5-1.5 0-1.1.9-2 2-2 .5 0 1 .2 1.5.5V2z"/></svg>`,
  wrench: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10.5 2a3.5 3.5 0 0 0-3.4 4.3L2 11.5l.5 2L4 14l4.7-5.1A3.5 3.5 0 0 0 14 5.5a3.5 3.5 0 0 0-1.1-2.6L11 4.8 10.2 4l1.9-1.9A3.5 3.5 0 0 0 10.5 2z"/></svg>`,
  ts: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1.5" y="1.5" width="13" height="13" rx="2"/><path d="M5 7.5h6M8 5.5v5"/></svg>`,
  npm: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="4" width="14" height="9" rx="1"/><path d="M5 13V7h3v4h2V7"/></svg>`,
  git: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="5" cy="4" r="2"/><circle cx="5" cy="12" r="2"/><circle cx="11" cy="4" r="2"/><path d="M5 6v4M9 4h-2M7 4c2 0 4 1 4 4v2"/></svg>`,
  changelog: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="1" width="10" height="14" rx="1.5"/><path d="M6 5h4M6 8h4M6 11h2"/></svg>`,
};

// favicon injection
(function() {
  const blob = new Blob([LOGO_SVG], { type: 'image/svg+xml' });
  const url  = URL.createObjectURL(blob);
  let link = document.querySelector('link[rel="icon"]');
  if (!link) { link = document.createElement('link'); link.rel = 'icon'; link.type = 'image/svg+xml'; document.head.appendChild(link); }
  link.href = url;
})();

const NAV = [
  { label: 'Getting Started', items: [
    { href: 'index.html',             icon: 'home',      label: 'Introduction' },
    { href: 'getting-started.html',   icon: 'rocket',    label: 'Quick Start' },
    { href: 'project-structure.html', icon: 'folder',    label: 'Project Structure' },
    { href: 'configuration.html',     icon: 'settings',  label: 'Configuration' },
  ]},
  { label: 'Core API', items: [
    { href: 'components.html',        icon: 'component', label: 'Components' },
    { href: 'hooks.html',             icon: 'hook',      label: 'Hooks' },
    { href: 'context.html',           icon: 'context',   label: 'Context' },
    { href: 'lifecycle.html',         icon: 'lifecycle', label: 'Lifecycle' },
    { href: 'virtual-dom.html',       icon: 'vdom',      label: 'Virtual DOM' },
  ]},
  { label: 'Routing', items: [
    { href: 'router.html',            icon: 'router',    label: 'Router' },
  ]},
  { label: 'Rendering', items: [
    { href: 'rendering-modes.html',   icon: 'render',    label: 'CSR / SSR / SSG' },
    { href: 'streaming.html',         icon: 'stream',    label: 'Streaming & Islands' },
  ]},
  { label: 'Production', items: [
    { href: 'seo.html',               icon: 'seo',       label: 'SEO Tools' },
    { href: 'server.html',            icon: 'server',    label: 'Dev & Prod Server' },
    { href: 'build.html',             icon: 'build',     label: 'Build System' },
    { href: 'cli.html',               icon: 'cli',       label: 'CLI Reference' },
  ]},
  { label: 'Utilities', items: [
    { href: 'builtin-components.html',icon: 'puzzle',    label: 'Built-in Components' },
    { href: 'utilities.html',         icon: 'wrench',    label: 'Utility Functions' },
    { href: 'typescript.html',        icon: 'ts',        label: 'TypeScript' },
  ]},
  { label: 'Publishing', items: [
    { href: 'npm-publish.html',       icon: 'npm',       label: 'NPM Publishing' },
    { href: 'git-setup.html',         icon: 'git',       label: 'Git Setup' },
  ]},
  { label: 'Reference', items: [
    { href: 'changelog.html',         icon: 'changelog', label: 'Changelog' },
  ]},
];

function renderNav(currentPage) {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;
  let html = '';
  for (const section of NAV) {
    html += `<div class="nav-section"><div class="nav-section-label">${section.label}</div>`;
    for (const item of section.items) {
      const active = currentPage === item.href ? ' active' : '';
      const icon = ICONS[item.icon] || '';
      html += `<a class="nav-item${active}" href="${item.href}"><span class="nav-icon">${icon}</span>${item.label}</a>`;
    }
    html += '</div>';
  }
  sidebar.innerHTML = html;
}

function renderLogoMark() {
  document.querySelectorAll('.logo-mark').forEach(el => {
    el.innerHTML = LOGO_SVG;
    const svg = el.querySelector('svg');
    if (svg) svg.style.cssText = 'width:100%;height:100%;display:block;border-radius:inherit;';
  });
}

// Theme
function initTheme() {
  const stored = localStorage.getItem('flexui-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(stored || (prefersDark ? 'dark' : 'light'));
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('flexui-theme', theme);
  const btn = document.getElementById('theme-btn');
  if (btn) {
    btn.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    btn.innerHTML = theme === 'dark'
      ? `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="3"/><path d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3.3 3.3l1 1M11.7 11.7l1 1M3.3 12.7l1-1M11.7 4.3l1-1"/></svg>`
      : `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2a6 6 0 1 0 8 8 4.5 4.5 0 0 1-8-8z"/></svg>`;
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

// Mobile menu
function initMobileMenu() {
  const btn = document.getElementById('menu-btn');
  const sidebar = document.getElementById('sidebar');
  if (!btn || !sidebar) return;
  btn.addEventListener('click', (e) => { e.stopPropagation(); sidebar.classList.toggle('open'); });
  document.addEventListener('click', (e) => {
    if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && e.target !== btn) {
      sidebar.classList.remove('open');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  const page = location.pathname.split('/').pop() || 'index.html';
  renderNav(page);
  renderLogoMark();
  initMobileMenu();
  const themeBtn = document.getElementById('theme-btn');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
});
