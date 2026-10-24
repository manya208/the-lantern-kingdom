/**
 * THE LANTERN KINGDOM - Main Application Orchestrator
 * Master module rendering dynamic sections, filters, and interactivity.
 */

import { KINGDOM_DATA } from './data.js';
import { ThemeEngine } from './theme.js';
import { LanternCanvasEngine } from './lanternCanvas.js';
import { NavigationController } from './navigation.js';
import { ModalController } from './modals.js';
import { AmbientAudioEngine } from './ambientAudio.js';

class LanternKingdomApp {
  constructor() {
    this.activeProjectFilter = 'all';
    this.roleIndex = 0;
    this.roleCharIndex = 0;
    this.isRoleDeleting = false;
    this.roleTimer = null;

    this.init();
  }

  init() {
    // 1. Initialize Audio Synthesizer
    this.audioEngine = new AmbientAudioEngine();

    // 2. Initialize Canvas Engine
    this.canvasEngine = new LanternCanvasEngine('kingdom-canvas', 'night');

    // 3. Initialize Theme Engine (coordinates Day/Night)
    this.themeEngine = new ThemeEngine((theme) => {
      this.canvasEngine.setTheme(theme);
    });

    // 4. Initialize Modals Controller
    this.modalController = new ModalController(this.canvasEngine, this.audioEngine);

    // 5. Initialize Navigation
    this.navigation = new NavigationController();

    // 6. Dynamic DOM Rendering
    this.initRoleTicker();
    this.setupHeroInteractions();
    this.renderSkills();
    this.renderExperience();
    this.renderProjects();
    this.renderObservatory();
    this.renderCertifications();
    this.renderAchievements();
    this.setupContactSection();
    this.setupGlobalShortcuts();

    console.log("✨ Welcome to The Lantern Kingdom for Manya K N!");
  }

  /* -------------------------------------------------------------------------
     Hero Role Typewriter / Ticker
     ------------------------------------------------------------------------- */
  initRoleTicker() {
    const tickerEl = document.getElementById('role-ticker-text');
    if (!tickerEl) return;

    const roles = KINGDOM_DATA.profile.roles;
    const currentRole = roles[this.roleIndex];

    if (this.isRoleDeleting) {
      tickerEl.textContent = currentRole.substring(0, this.roleCharIndex - 1);
      this.roleCharIndex--;
    } else {
      tickerEl.textContent = currentRole.substring(0, this.roleCharIndex + 1);
      this.roleCharIndex++;
    }

    let speed = this.isRoleDeleting ? 45 : 90;

    if (!this.isRoleDeleting && this.roleCharIndex === currentRole.length) {
      speed = 2200; // Pause at full word
      this.isRoleDeleting = true;
    } else if (this.isRoleDeleting && this.roleCharIndex === 0) {
      this.isRoleDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % roles.length;
      speed = 400; // Brief pause before typing next
    }

    this.roleTimer = setTimeout(() => this.initRoleTicker(), speed);
  }

  /* -------------------------------------------------------------------------
     Hero Interactions (Enter My World, Wish Modal, etc.)
     ------------------------------------------------------------------------- */
  setupHeroInteractions() {
    const enterBtn = document.getElementById('hero-enter-world-btn');
    if (enterBtn) {
      enterBtn.addEventListener('click', () => {
        this.audioEngine.playSparkleChime();
        const aboutEl = document.getElementById('about');
        if (aboutEl) {
          aboutEl.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    const discoverBtn = document.getElementById('hero-discover-work-btn');
    if (discoverBtn) {
      discoverBtn.addEventListener('click', () => {
        const projectsEl = document.getElementById('projects');
        if (projectsEl) {
          projectsEl.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    const wishBanner = document.getElementById('release-lantern-banner');
    if (wishBanner) {
      wishBanner.addEventListener('click', () => {
        this.modalController.openWishModal();
      });
    }

    // Double-click or tap on empty hero sky to launch a lantern directly
    const heroWrap = document.querySelector('.hero-scene-wrap');
    if (heroWrap) {
      heroWrap.addEventListener('dblclick', (e) => {
        this.canvasEngine.releaseCustomLantern(e.clientX, e.clientY);
        this.audioEngine.playSparkleChime();
      });
    }
  }

  /* -------------------------------------------------------------------------
     Render Skills - The Garden of Discoveries
     ------------------------------------------------------------------------- */
  renderSkills() {
    const container = document.getElementById('skills-garden-container');
    if (!container) return;

    container.innerHTML = KINGDOM_DATA.skillsCategories.map(cat => `
      <div class="skill-category-card">
        <div class="skill-card-header">
          <div class="skill-card-title-group">
            <div class="skill-rune-symbol" style="border-color:${cat.accent};">
              ${cat.flowerRune}
            </div>
            <div>
              <h3 class="skill-category-name">${cat.name}</h3>
              <div class="skill-floral-theme">${cat.floralTheme}</div>
            </div>
          </div>
        </div>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:16px;">
          ${cat.description}
        </p>
        <div class="skill-list-items">
          ${cat.skills.map(skill => `
            <div class="skill-item-row">
              <span class="skill-item-name">${skill.name}</span>
              <span class="skill-item-context">${skill.context}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  /* -------------------------------------------------------------------------
     Render Experience - The Royal Chronicle
     ------------------------------------------------------------------------- */
  renderExperience() {
    const container = document.getElementById('chronicle-timeline-container');
    if (!container) return;

    container.innerHTML = KINGDOM_DATA.experiences.map((exp, index) => `
      <div class="chronicle-node-item">
        <div class="chronicle-lantern-bullet" style="border-color:${exp.accentColor}; box-shadow:0 0 14px ${exp.accentColor};">
          🏮
        </div>
        <div class="chronicle-card">
          <div class="chronicle-top-meta">
            <span class="chronicle-chapter-tag">${exp.flowerSign}</span>
            <span class="chronicle-dates">${exp.dates}</span>
          </div>
          <h3 class="chronicle-role-title">${exp.role}</h3>
          <div class="chronicle-org-name">${exp.organization} — <span style="font-size:0.85rem; color:var(--text-dark);">${exp.location}</span></div>
          <p class="chronicle-summary">${exp.summary}</p>
          <ul class="chronicle-bullets">
            ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
          </ul>
          <div class="chronicle-tech-tags">
            ${exp.technologies.map(t => `<span class="tech-chip">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  /* -------------------------------------------------------------------------
     Render Projects - The Gallery of Creations
     ------------------------------------------------------------------------- */
  renderProjects() {
    this.setupProjectFilterButtons();
    this.renderFilteredProjects();
  }

  setupProjectFilterButtons() {
    const filterContainer = document.getElementById('project-filters-wrap');
    if (!filterContainer) return;

    const filters = [
      { key: 'all', label: 'All Inventions' },
      { key: 'web', label: 'Web Development' },
      { key: 'aiml', label: 'AI / ML & NLP' },
      { key: 'security', label: 'Cybersecurity' },
      { key: 'networking', label: 'Networking' }
    ];

    filterContainer.innerHTML = filters.map(f => `
      <button class="btn-pill ${f.key === this.activeProjectFilter ? 'active' : ''}" data-filter="${f.key}">
        ${f.label}
      </button>
    `).join('');

    filterContainer.querySelectorAll('.btn-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        filterContainer.querySelectorAll('.btn-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeProjectFilter = btn.getAttribute('data-filter');
        this.renderFilteredProjects();
      });
    });
  }

  renderFilteredProjects() {
    const container = document.getElementById('projects-masonry-grid');
    if (!container) return;

    const filtered = this.activeProjectFilter === 'all'
      ? KINGDOM_DATA.projects
      : KINGDOM_DATA.projects.filter(p => p.categoryKey === this.activeProjectFilter);

    container.innerHTML = filtered.map(p => `
      <div class="project-creation-card" data-project-id="${p.id}" tabindex="0" role="button" aria-label="View details for ${p.title}">
        <div>
          <div class="project-card-header">
            <div class="project-art-emblem" style="color:${p.accentColor};">
              ✧
            </div>
            <span class="project-category-badge" style="border-color:${p.accentColor}; color:${p.accentColor};">
              ${p.category}
            </span>
          </div>
          <h3 class="project-title">${p.title}</h3>
          <div class="project-subtitle">${p.subtitle}</div>
          <p class="project-description">${p.description}</p>
        </div>
        <div class="project-card-footer">
          <div class="chronicle-tech-tags">
            ${p.technologies.slice(0, 3).map(t => `<span class="tech-chip">${t}</span>`).join('')}
            ${p.technologies.length > 3 ? `<span class="tech-chip">+${p.technologies.length - 3}</span>` : ''}
          </div>
          <button class="project-inspect-btn" tabindex="-1">
            <span>Inspect</span> →
          </button>
        </div>
      </div>
    `).join('');

    // Attach click and enter listeners to project cards
    container.querySelectorAll('.project-creation-card').forEach(card => {
      const id = card.getAttribute('data-project-id');
      card.addEventListener('click', () => this.modalController.openProjectModal(id));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.modalController.openProjectModal(id);
        }
      });
    });
  }

  /* -------------------------------------------------------------------------
     Render Observatory - The Hidden Observatory (Research)
     ------------------------------------------------------------------------- */
  renderObservatory() {
    const studyContainer = document.getElementById('observatory-study-card');
    const interestsCol = document.getElementById('observatory-interests-col');
    if (!studyContainer || !interestsCol) return;

    const research = KINGDOM_DATA.researchObservatory;
    const completed = research.completedResearch;

    studyContainer.innerHTML = `
      <div class="research-study-badge">✧ ${completed.status}</div>
      <h3 class="research-study-title">${completed.title}</h3>
      <div class="research-institution-tag">${completed.institution} | ${completed.investigationScope}</div>
      <p style="font-size:0.95rem; line-height:1.65; margin-bottom:16px;">${completed.summary}</p>
      
      <div style="font-family:var(--font-serif); font-size:0.8rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--starlight-blue); margin-bottom:8px;">
        Key Investigation Dimensions
      </div>
      <ul class="methodology-list">
        ${completed.methodologyPoints.map(m => `<li>${m}</li>`).join('')}
      </ul>

      <div style="background:var(--bg-surface); border-left:3px solid var(--starlight-blue); padding:12px 16px; border-radius:0 8px 8px 0; margin-top:20px; font-style:italic; font-size:0.88rem; color:var(--text-main);">
        "${completed.keyTakeaway}"
      </div>
    `;

    interestsCol.innerHTML = research.researchInterests.map(item => `
      <div class="research-interest-box">
        <div class="research-interest-icon" style="color:${item.color};">
          ✧
        </div>
        <div>
          <h4 style="font-size:1.05rem; color:var(--text-main); margin-bottom:4px;">${item.title}</h4>
          <p style="font-size:0.86rem; color:var(--text-muted); margin-bottom:0; line-height:1.5;">${item.description}</p>
        </div>
      </div>
    `).join('');
  }

  /* -------------------------------------------------------------------------
     Render Certifications - The Lantern Archive
     ------------------------------------------------------------------------- */
  renderCertifications() {
    const container = document.getElementById('certificate-card-slot');
    if (!container) return;

    const cert = KINGDOM_DATA.certifications[0];
    container.innerHTML = `
      <div class="certificate-parchment-card">
        <div class="cert-corner-ornament cert-tl"></div>
        <div class="cert-corner-ornament cert-tr"></div>
        <div class="cert-corner-ornament cert-bl"></div>
        <div class="cert-corner-ornament cert-br"></div>

        <div class="cert-royal-seal">👑</div>

        <div class="section-badge-label" style="margin-bottom:14px;">
          <span>${cert.status}</span>
        </div>

        <h3 class="cert-program-heading">${cert.program}</h3>

        <div class="cert-collaborators-bar">
          ${cert.collaborators.map(c => `<span class="cert-collab-pill">${c}</span>`).join('')}
        </div>

        <div class="cert-statement-quote">
          "${cert.officialStatement}"
        </div>

        <div class="cert-competency-grid">
          ${cert.competencies.map(comp => `<span class="cert-comp-chip">${comp}</span>`).join('')}
        </div>

        <div style="display:flex; justify-content:center; gap:16px; align-items:center; flex-wrap:wrap;">
          <button class="btn-fairytale btn-primary-lantern" id="view-official-cert-btn">
            📜 Inspect Official Credential Details
          </button>
        </div>
      </div>
    `;

    document.getElementById('view-official-cert-btn')?.addEventListener('click', () => {
      this.modalController.openCertificateModal();
    });
  }

  /* -------------------------------------------------------------------------
     Render Achievements - The Festival of Dreams
     ------------------------------------------------------------------------- */
  renderAchievements() {
    const scoresCol = document.getElementById('academic-scores-col');
    const guildsCol = document.getElementById('campus-guilds-col');
    if (!scoresCol || !guildsCol) return;

    scoresCol.innerHTML = KINGDOM_DATA.achievements.academics.map(item => `
      <div class="academic-crown-card">
        <div class="academic-score-circle" style="border-color:${item.accent};">
          <span class="score-digit">${item.score}</span>
        </div>
        <div>
          <div style="font-family:var(--font-serif); font-size:0.75rem; letter-spacing:0.12em; text-transform:uppercase; color:${item.accent}; margin-bottom:4px;">
            ${item.benchmark}
          </div>
          <h4 style="font-size:1.15rem; color:var(--text-main); margin-bottom:4px;">${item.title}</h4>
          <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0;">${item.description}</p>
        </div>
      </div>
    `).join('');

    guildsCol.innerHTML = KINGDOM_DATA.achievements.campusActivities.map(guild => `
      <div class="guild-crest-card">
        <div class="guild-header-row">
          <div class="guild-icon-wrap" style="color:${guild.accent};">
            ✧
          </div>
          <div>
            <h4 class="guild-title">${guild.organization}</h4>
            <div class="guild-role-tag">${guild.role}</div>
          </div>
        </div>
        <p class="guild-description">${guild.description}</p>
      </div>
    `).join('');
  }

  /* -------------------------------------------------------------------------
     Contact Section (Form & Copy Email)
     ------------------------------------------------------------------------- */
  setupContactSection() {
    const copyBtn = document.getElementById('copy-email-btn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(KINGDOM_DATA.profile.contact.email)
          .then(() => {
            this.modalController.showToast('📋 Email copied to clipboard: ' + KINGDOM_DATA.profile.contact.email);
            this.audioEngine.playSparkleChime();
          })
          .catch(() => {
            window.location.href = `mailto:${KINGDOM_DATA.profile.contact.email}`;
          });
      });
    }

    const form = document.getElementById('kingdom-contact-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contact-name')?.value || 'Friend';
        const email = document.getElementById('contact-email')?.value;
        const msg = document.getElementById('contact-message')?.value;

        // Open mail client with prefilled details
        const subject = encodeURIComponent(`The Lantern Kingdom: Inquiry from ${name}`);
        const body = encodeURIComponent(`Hello Manya,\n\n${msg}\n\nFrom: ${name} (${email})`);
        window.open(`mailto:${KINGDOM_DATA.profile.contact.email}?subject=${subject}&body=${body}`);

        this.modalController.showToast(`✨ Thank you, ${name}! Your message is prepared in your mail client.`);
        form.reset();
      });
    }
  }

  setupGlobalShortcuts() {
    // Release a lantern on pressing 'L'
    document.addEventListener('keydown', (e) => {
      if ((e.key === 'l' || e.key === 'L') && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        this.canvasEngine.releaseCustomLantern();
        this.audioEngine.playSparkleChime();
        this.modalController.showToast('🏮 You released a glowing lantern into the night sky!');
      }
    });
  }
}

// Start application once DOM is fully ready
document.addEventListener('DOMContentLoaded', () => {
  window.kingdomApp = new LanternKingdomApp();
});
