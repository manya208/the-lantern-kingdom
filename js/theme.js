/**
 * THE LANTERN KINGDOM - Centralized Theme System
 * Coordinates Day and Night transformation with smooth environmental shifts.
 */

export class ThemeEngine {
  constructor(onThemeChangeCallback) {
    this.storageKey = 'lantern_kingdom_theme';
    this.currentTheme = 'night'; // Default to night as requested
    this.onThemeChange = onThemeChangeCallback;
    this.toggleBtn = document.getElementById('theme-toggle-btn');
    this.iconContainer = document.getElementById('theme-toggle-icon');
    this.labelSpan = document.getElementById('theme-toggle-label');

    this.init();
  }

  init() {
    // Check saved preference or default to night
    const saved = localStorage.getItem(this.storageKey);
    if (saved === 'day' || saved === 'night') {
      this.currentTheme = saved;
    } else {
      this.currentTheme = 'night';
    }

    this.applyTheme(this.currentTheme, false);

    // Event listener on button
    if (this.toggleBtn) {
      this.toggleBtn.addEventListener('click', () => this.toggle());
    }
  }

  toggle() {
    const nextTheme = this.currentTheme === 'night' ? 'day' : 'night';
    this.applyTheme(nextTheme, true);
  }

  applyTheme(theme, animate = true) {
    this.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.storageKey, theme);

    // Update button visual
    this.renderButtonState();

    // Notify listeners (e.g. canvas particle engine)
    if (typeof this.onThemeChange === 'function') {
      this.onThemeChange(theme);
    }
  }

  renderButtonState() {
    if (!this.iconContainer || !this.labelSpan) return;

    if (this.currentTheme === 'night') {
      // Moon & Stars Icon
      this.iconContainer.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="#BFA2FF" stroke="#BFA2FF"></path>
          <circle cx="19" cy="5" r="1" fill="#FFD166" stroke="none"></circle>
        </svg>
      `;
      this.labelSpan.textContent = 'Night';
      this.toggleBtn.setAttribute('aria-label', 'Switch to Day mode');
      this.toggleBtn.setAttribute('title', 'Switch to Day mode');
    } else {
      // Radiant Golden Sun Icon
      this.iconContainer.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5" fill="#FFD166" stroke="#D97706"></circle>
          <line x1="12" y1="1" x2="12" y2="3" stroke="#D97706"></line>
          <line x1="12" y1="21" x2="12" y2="23" stroke="#D97706"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="#D97706"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="#D97706"></line>
          <line x1="1" y1="12" x2="3" y2="12" stroke="#D97706"></line>
          <line x1="21" y1="12" x2="23" y2="12" stroke="#D97706"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="#D97706"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="#D97706"></line>
        </svg>
      `;
      this.labelSpan.textContent = 'Day';
      this.toggleBtn.setAttribute('aria-label', 'Switch to Night mode');
      this.toggleBtn.setAttribute('title', 'Switch to Night mode');
    }
  }

  getTheme() {
    return this.currentTheme;
  }
}
