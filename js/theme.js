/* =========================================================
   EDUPULSE ENGLISH - ĐỔI THEME GIAO DIỆN
   Thêm theme mới: khai báo [data-theme="tên"] trong css/style.css
   rồi thêm một dòng vào THEMES bên dưới.
   ========================================================= */

const DEFAULT_THEME = 'pop';   // đổi dòng này để đổi theme mặc định

const THEMES = [
    { id: 'pop',   name: 'Tím hồng',  dots: ['#7c3aed', '#ec4899'] },
    { id: 'ocean', name: 'Biển xanh', dots: ['#0d9488', '#0ea5e9'] },
    { id: 'candy', name: 'Kẹo ngọt',  dots: ['#e11d48', '#f97316'] },
    { id: 'night', name: 'Ban đêm',   dots: ['#1b1933', '#8b5cf6'] }
];

function getSavedTheme() {
    try {
        const t = localStorage.getItem('edupulse_theme');
        return THEMES.some(x => x.id === t) ? t : DEFAULT_THEME;
    } catch (e) { return DEFAULT_THEME; }
}

// Áp dụng ngay khi tải để không bị nháy màu
document.documentElement.setAttribute('data-theme', getSavedTheme());

function setTheme(id) {
    document.documentElement.setAttribute('data-theme', id);
    try { localStorage.setItem('edupulse_theme', id); } catch (e) {}
    document.querySelectorAll('.theme-swatch').forEach(b =>
        b.setAttribute('aria-checked', String(b.dataset.theme === id)));
}

function toggleThemeMenu(force) {
    const menu = document.getElementById('theme-menu');
    if (!menu) return;
    menu.classList.toggle('hidden', force === false ? true : undefined);
}

document.addEventListener('DOMContentLoaded', () => {
    const anchor = document.getElementById('btn-collapse-header');
    if (!anchor) return;

    const wrap = document.createElement('div');
    wrap.className = 'relative';
    wrap.innerHTML = `
        <button id="theme-trigger" type="button" title="Đổi giao diện" aria-haspopup="true"
            class="p-2.5 rounded-xl bg-slate-100 border border-slate-200 hover:bg-indigo-50 hover:text-indigo-600 text-slate-600 transition">
            <i class="fa-solid fa-palette text-xs"></i>
        </button>
        <div id="theme-menu" role="radiogroup" aria-label="Chọn giao diện"
            class="hidden absolute right-0 mt-2 w-44 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50">
            ${THEMES.map(t => `
                <button type="button" role="radio" class="theme-swatch" data-theme="${t.id}">
                    <span class="theme-dot" style="background:linear-gradient(135deg,${t.dots[0]} 50%,${t.dots[1]} 50%)"></span>
                    ${t.name}
                </button>`).join('')}
        </div>`;
    anchor.parentNode.insertBefore(wrap, anchor);

    wrap.querySelector('#theme-trigger').addEventListener('click', () => toggleThemeMenu());
    wrap.querySelectorAll('.theme-swatch').forEach(b =>
        b.addEventListener('click', () => { setTheme(b.dataset.theme); toggleThemeMenu(false); }));
    window.addEventListener('click', e => { if (!wrap.contains(e.target)) toggleThemeMenu(false); });

    setTheme(getSavedTheme());
});
