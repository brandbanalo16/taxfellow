/**
 * MEGA MENU — Vanilla JavaScript Engine
 * ──────────────────────────────────────────────────────────
 * Pure ES6. No jQuery, no GSAP, no external dependencies.
 * All content is driven by megaMenuData.js (single source).
 *
 * Features:
 *  - CLICK to open/close panel
 *  - Hover on left category → right panel updates instantly
 *  - Sub-category labels link to sub-category pages
 *  - "View All →" link in panel header for main category page
 *  - Showcases services grouped by subcategory (column-wise)
 *  - Clean vector check-circle icon before each service link
 * ──────────────────────────────────────────────────────────
 */

import { MEGA_MENU_DATA } from './megaMenuData.js';

/* ── State ─────────────────────────────────────────── */
let activeMenuId = null;   // currently open panel id
let backdrop = null;   // shared backdrop element
let panelsRoot = null;   // container injected into <body>
const panelsMap = {};     // id → panel DOM element

/* ════════════════════════════════════════════════════
   BUILD HELPERS — create DOM from data
 ════════════════════════════════════════════════════ */

const checkIconSvg = `
<svg class="mm-svc-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="width: 15px; height: 15px; flex-shrink: 0; margin-right: 8px; color: #1E5EFF;">
  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 8.59L10 15.17L7.41 12.59L6 14L10 18L18 10L16.59 8.59Z" fill="currentColor"/>
</svg>
`;

/** Create the right-panel services panel for one category, grouped by subcategories */
function buildServicesPanel(category, isFirst) {
  const wrap = document.createElement('div');
  wrap.className = 'mm-services-panel' + (isFirst ? ' mm-services-active' : '');
  wrap.dataset.catId = category.id;

  const h = document.createElement('div');
  h.className = 'mm-services-heading-wrap';

  const hText = document.createElement('p');
  hText.className = 'mm-services-heading';

  // If the category has its own page, make heading a link
  if (category.href) {
    const hLink = document.createElement('a');
    hLink.href = category.href;
    hLink.textContent = category.label;
    hLink.className = 'mm-services-heading-link';
    hLink.style.cssText = 'color: inherit; text-decoration: none;';
    hLink.addEventListener('mouseenter', () => hLink.style.textDecoration = 'underline');
    hLink.addEventListener('mouseleave', () => hLink.style.textDecoration = 'none');
    hText.appendChild(hLink);
  } else {
    hText.textContent = category.label;
  }

  h.appendChild(hText);

  if (category.href) {
    const viewAll = document.createElement('a');
    viewAll.href = category.href;
    viewAll.className = 'mm-view-all-cat';
    viewAll.innerHTML = 'View All <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="12" height="12"><path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    h.appendChild(viewAll);
  }

  wrap.appendChild(h);

  /* Showcase subcategories in columns */
  const grid = document.createElement('div');
  grid.className = 'mm-subcat-grid';

  category.subcategories.forEach(sub => {
    const col = document.createElement('div');
    col.className = 'mm-subcat-column';

    const subTitle = document.createElement('h6');
    subTitle.className = 'mm-subcat-title';
    subTitle.textContent = sub.label;
    col.appendChild(subTitle);

    const list = document.createElement('div');
    list.className = 'mm-subcat-services';

    sub.services.forEach(svc => {
      const a = document.createElement('a');
      a.className = 'mm-service-link';
      a.href = svc.href || '#';
      a.innerHTML = `${checkIconSvg}<span class="mm-service-text">${svc.label}</span>`;
      a.title = svc.label;
      list.appendChild(a);
    });

    col.appendChild(list);
    grid.appendChild(col);
  });

  wrap.appendChild(grid);
  return wrap;
}

/** Build a MEGA panel (left categories + right services grouped in columns) */
function buildMegaPanel(menu) {
  const panel = document.createElement('div');
  panel.className = 'mm-panel';
  panel.dataset.panelId = menu.id;
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', menu.label);

  /* Title bar with View All link */
  const header = document.createElement('div');
  header.className = 'mm-panel-header';

  const title = document.createElement('p');
  title.className = 'mm-panel-title';
  title.textContent = menu.label;
  header.appendChild(title);

  if (menu.viewAllHref) {
    const viewAll = document.createElement('a');
    viewAll.href = menu.viewAllHref;
    viewAll.className = 'mm-view-all-link';
    viewAll.innerHTML = `View All ${menu.label} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="13" height="13"><path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    header.appendChild(viewAll);
  }

  panel.appendChild(header);

  /* Body: left + right */
  const body = document.createElement('div');
  body.className = 'mm-body';

  /* Left — category list */
  const left = document.createElement('div');
  left.className = 'mm-left';

  /* Right — services area */
  const right = document.createElement('div');
  right.className = 'mm-right';

  menu.categories.forEach((cat, idx) => {
    /* Category button — wraps link + label */
    const btnWrap = document.createElement('div');
    btnWrap.className = 'mm-cat-btn-wrap' + (idx === 0 ? ' mm-cat-active' : '');
    btnWrap.dataset.catId = cat.id;

    const btnText = document.createElement('span');
    btnText.className = 'mm-cat-btn-text';
    btnText.textContent = cat.label;
    btnWrap.appendChild(btnText);

    if (cat.href) {
      const catLink = document.createElement('a');
      catLink.href = cat.href;
      catLink.className = 'mm-cat-page-link';
      catLink.title = `View all ${cat.label} services`;
      catLink.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="12" height="12"><path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
      btnWrap.appendChild(catLink);
    }

    /* Hover → switch right panel instantly */
    btnWrap.addEventListener('mouseenter', () => {
      activateCategory(panel, cat.id);
    });

    left.appendChild(btnWrap);

    /* Corresponding right panel */
    right.appendChild(buildServicesPanel(cat, idx === 0));
  });

  body.appendChild(left);
  body.appendChild(right);
  panel.appendChild(body);
  return panel;
}

/** Build a SIMPLE panel (no left panel — Bookkeeping) */
function buildSimplePanel(menu) {
  const panel = document.createElement('div');
  panel.className = 'mm-panel mm-panel--simple';
  panel.dataset.panelId = menu.id;
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', menu.label);

  /* Title bar with View All link */
  const header = document.createElement('div');
  header.className = 'mm-panel-header';

  const title = document.createElement('p');
  title.className = 'mm-panel-title';
  title.textContent = menu.label;
  header.appendChild(title);

  if (menu.viewAllHref) {
    const viewAll = document.createElement('a');
    viewAll.href = menu.viewAllHref;
    viewAll.className = 'mm-view-all-link';
    viewAll.innerHTML = `View All ${menu.label} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="13" height="13"><path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    header.appendChild(viewAll);
  }

  panel.appendChild(header);

  /* Heading with link */
  const headWrap = document.createElement('div');
  headWrap.className = 'mm-services-heading-wrap';
  const h = document.createElement('p');
  h.className = 'mm-services-heading';

  if (menu.headingHref) {
    const hLink = document.createElement('a');
    hLink.href = menu.headingHref;
    hLink.textContent = menu.heading;
    hLink.className = 'mm-services-heading-link';
    hLink.style.cssText = 'color: inherit; text-decoration: none;';
    hLink.addEventListener('mouseenter', () => hLink.style.textDecoration = 'underline');
    hLink.addEventListener('mouseleave', () => hLink.style.textDecoration = 'none');
    h.appendChild(hLink);
  } else {
    h.textContent = menu.heading;
  }

  headWrap.appendChild(h);

  if (menu.headingHref) {
    const viewAll = document.createElement('a');
    viewAll.href = menu.headingHref;
    viewAll.className = 'mm-view-all-cat';
    viewAll.innerHTML = 'View All <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="12" height="12"><path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    headWrap.appendChild(viewAll);
  }

  panel.appendChild(headWrap);

  /* Grid of subcategories */
  const grid = document.createElement('div');
  grid.className = 'mm-subcat-grid';

  menu.subcategories.forEach(sub => {
    const col = document.createElement('div');
    col.className = 'mm-subcat-column';

    const subTitle = document.createElement('h6');
    subTitle.className = 'mm-subcat-title';
    subTitle.textContent = sub.label;
    col.appendChild(subTitle);

    const list = document.createElement('div');
    list.className = 'mm-subcat-services';

    sub.services.forEach(svc => {
      const a = document.createElement('a');
      a.className = 'mm-service-link';
      a.href = svc.href || '#';
      a.innerHTML = `${checkIconSvg}<span class="mm-service-text">${svc.label}</span>`;
      a.title = svc.label;
      list.appendChild(a);
    });

    col.appendChild(list);
    grid.appendChild(col);
  });

  panel.appendChild(grid);
  return panel;
}

/* ── PANEL POSITIONING ── */
function positionPanels() {
  const header = document.querySelector('.header-two') || document.querySelector('header');
  if (!header) return;
  const rect = header.getBoundingClientRect();
  const topPx = rect.bottom + 8;
  Object.values(panelsMap).forEach(panel => {
    panel.style.top = topPx + 'px';
  });
}

/* ── OPEN / CLOSE LOGIC (PURE CLICK-DRIVEN) ── */
function openPanel(menuId) {
  const panel = panelsMap[menuId];
  const trigger = document.querySelector(`.mm-has-menu[data-menu="${menuId}"] .mm-nav-btn`);
  if (!panel) return;

  if (activeMenuId && activeMenuId !== menuId) {
    closePanelImmediate(activeMenuId);
  }

  panel.classList.add('mm-panel-open');
  if (trigger) {
    trigger.classList.add('mm-active');
    trigger.setAttribute('aria-expanded', 'true');
  }
  backdrop && backdrop.classList.add('mm-backdrop-visible');
  activeMenuId = menuId;
  positionPanels();
}

function closePanelImmediate(menuId) {
  const panel = panelsMap[menuId];
  const trigger = document.querySelector(`.mm-has-menu[data-menu="${menuId}"] .mm-nav-btn`);
  if (!panel) return;

  panel.classList.remove('mm-panel-open');
  if (trigger) {
    trigger.classList.remove('mm-active');
    trigger.setAttribute('aria-expanded', 'false');
  }
  backdrop && backdrop.classList.remove('mm-backdrop-visible');
  if (activeMenuId === menuId) {
    activeMenuId = null;
  }
}

function closeAllPanels() {
  if (activeMenuId) {
    closePanelImmediate(activeMenuId);
  }
  backdrop && backdrop.classList.remove('mm-backdrop-visible');
  activeMenuId = null;
}

/* ── CATEGORY SWITCHING ── */
function activateCategory(panel, catId) {
  panel.querySelectorAll('.mm-cat-btn-wrap').forEach(btn => {
    btn.classList.toggle('mm-cat-active', btn.dataset.catId === catId);
  });
  panel.querySelectorAll('.mm-cat-btn').forEach(btn => {
    btn.classList.toggle('mm-cat-active', btn.dataset.catId === catId);
  });
  panel.querySelectorAll('.mm-services-panel').forEach(sp => {
    sp.classList.toggle('mm-services-active', sp.dataset.catId === catId);
  });
}

/* ── INITIALISE ── */
export function initMegaMenu() {
  if (document.getElementById('mm-panels-root')) return () => { };

  backdrop = document.createElement('div');
  backdrop.className = 'mm-backdrop';
  backdrop.id = 'mm-backdrop';
  backdrop.addEventListener('click', closeAllPanels);
  document.body.appendChild(backdrop);

  panelsRoot = document.createElement('div');
  panelsRoot.id = 'mm-panels-root';
  document.body.appendChild(panelsRoot);

  MEGA_MENU_DATA.forEach(menu => {
    const panel = menu.type === 'simple'
      ? buildSimplePanel(menu)
      : buildMegaPanel(menu);

    panelsMap[menu.id] = panel;
    panelsRoot.appendChild(panel);
  });

  positionPanels();

  /* ── CLICK on nav items to open/close menu ── */
  document.querySelectorAll('.mm-has-menu').forEach(item => {
    const menuId = item.dataset.menu;
    const btn = item.querySelector('.mm-nav-btn');
    if (!btn) return;

    btn.addEventListener('click', e => {
      e.stopPropagation();
      if (activeMenuId === menuId) {
        closeAllPanels();
      } else {
        openPanel(menuId);
      }
    });
  });

  /* Close on Escape key */
  const onKeydown = e => {
    if (e.key === 'Escape') closeAllPanels();
  };
  document.addEventListener('keydown', onKeydown);

  /* Close when clicking outside */
  const onDocClick = e => {
    if (
      !e.target.closest('.mm-has-menu') &&
      !e.target.closest('.mm-panel')
    ) {
      closeAllPanels();
    }
  };
  document.addEventListener('click', onDocClick);

  const onScrollResize = () => positionPanels();
  window.addEventListener('scroll', onScrollResize, { passive: true });
  window.addEventListener('resize', onScrollResize);

  return function cleanup() {
    document.removeEventListener('click', onDocClick);
    document.removeEventListener('keydown', onKeydown);
    window.removeEventListener('scroll', onScrollResize);
    window.removeEventListener('resize', onScrollResize);
    backdrop?.remove();
    panelsRoot?.remove();
    Object.keys(panelsMap).forEach(k => delete panelsMap[k]);
    activeMenuId = null;
  };
}

/* ── MOBILE SIDEBAR ACCORDION INIT ── */
export function initMobileAccordion() {
  document.querySelectorAll('.mm-mob-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const isOpen = trigger.classList.contains('mm-mob-open');
      const targetId = trigger.dataset.target;
      const body = document.getElementById(targetId);
      if (!body) return;

      document.querySelectorAll('.mm-mob-trigger.mm-mob-open').forEach(t => {
        if (t !== trigger) {
          t.classList.remove('mm-mob-open');
          const b = document.getElementById(t.dataset.target);
          if (b) b.classList.remove('mm-mob-cats-open');
        }
      });

      trigger.classList.toggle('mm-mob-open', !isOpen);
      body.classList.toggle('mm-mob-cats-open', !isOpen);
    });
  });

  document.querySelectorAll('.mm-mob-cat-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const isOpen = trigger.classList.contains('mm-mob-cat-open');
      const targetId = trigger.dataset.target;
      const body = document.getElementById(targetId);
      if (!body) return;

      const parent = trigger.closest('.mm-mob-cats, .mm-mob-simple-services');
      if (parent) {
        parent.querySelectorAll('.mm-mob-cat-trigger.mm-mob-cat-open').forEach(t => {
          if (t !== trigger) {
            t.classList.remove('mm-mob-cat-open');
            const b = document.getElementById(t.dataset.target);
            if (b) b.classList.remove('mm-mob-services-open');
          }
        });
      }

      trigger.classList.toggle('mm-mob-cat-open', !isOpen);
      body.classList.toggle('mm-mob-services-open', !isOpen);
    });
  });
}
