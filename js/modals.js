/**
 * THE LANTERN KINGDOM - Modal Dialog Management
 * Project Details, Official Certificate Inspector, and Lantern Wish Launcher.
 */

import { KINGDOM_DATA } from './data.js';

export class ModalController {
  constructor(canvasEngine, audioEngine) {
    this.canvasEngine = canvasEngine;
    this.audioEngine = audioEngine;
    this.overlay = document.getElementById('modal-overlay');
    this.contentBox = document.getElementById('modal-content-box');
    this.closeBtn = document.getElementById('modal-close-btn');

    this.init();
  }

  init() {
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    if (this.overlay) {
      this.overlay.addEventListener('click', (e) => {
        if (e.target === this.overlay) {
          this.close();
        }
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.overlay?.classList.contains('open')) {
        this.close();
      }
    });
  }

  open(htmlContent) {
    if (!this.contentBox || !this.overlay) return;
    this.contentBox.innerHTML = htmlContent;
    this.overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  close() {
    if (!this.overlay) return;
    this.overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  openProjectModal(projectId) {
    const project = KINGDOM_DATA.projects.find(p => p.id === projectId);
    if (!project) return;

    if (this.audioEngine) this.audioEngine.playSparkleChime();

    const html = `
      <div class="project-modal-detail">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:18px;">
          <span class="project-category-badge" style="border-color:${project.accentColor}; color:${project.accentColor};">
            ${project.category}
          </span>
          <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-dark);">
            ${project.organization}
          </span>
        </div>

        <h2 style="font-size:1.85rem; color:var(--text-main); margin-bottom:6px;">${project.title}</h2>
        <div style="font-size:1rem; color:var(--royal-lavender); font-style:italic; margin-bottom:20px;">
          ${project.subtitle}
        </div>

        <div style="background:var(--bg-surface); border:1px dashed var(--border-subtle); padding:16px; border-radius:12px; margin-bottom:24px;">
          <div style="font-family:var(--font-serif); font-size:0.78rem; text-transform:uppercase; letter-spacing:0.12em; color:var(--lantern-gold); margin-bottom:4px;">
            ✧ Fairytale Metaphor & Visual Concept
          </div>
          <div style="font-size:0.92rem; color:var(--text-muted); line-height:1.5;">
            ${project.visualConcept}
          </div>
        </div>

        <div style="margin-bottom:20px;">
          <h4 style="font-family:var(--font-serif); font-size:0.85rem; letter-spacing:0.08em; text-transform:uppercase; color:var(--lantern-gold); margin-bottom:8px;">
            Problem & Mission
          </h4>
          <p style="font-size:0.95rem; line-height:1.65; color:var(--text-main);">
            ${project.problemSolved}
          </p>
        </div>

        <div style="margin-bottom:24px;">
          <h4 style="font-family:var(--font-serif); font-size:0.85rem; letter-spacing:0.08em; text-transform:uppercase; color:var(--lantern-gold); margin-bottom:10px;">
            Key Architectural Highlights
          </h4>
          <ul style="list-style:none; display:flex; flex-direction:column; gap:8px;">
            ${project.architecturalHighlights.map(h => `
              <li style="position:relative; padding-left:22px; font-size:0.9rem; color:var(--text-muted);">
                <span style="position:absolute; left:0; color:var(--lantern-gold);">✧</span>
                ${h}
              </li>
            `).join('')}
          </ul>
        </div>

        <div style="margin-bottom:28px;">
          <h4 style="font-family:var(--font-serif); font-size:0.85rem; letter-spacing:0.08em; text-transform:uppercase; color:var(--lantern-gold); margin-bottom:10px;">
            Technologies Utilized
          </h4>
          <div style="display:flex; flex-wrap:wrap; gap:8px;">
            ${project.technologies.map(t => `
              <span class="tech-chip" style="border-color:${project.accentColor}; color:var(--text-main);">
                ${t}
              </span>
            `).join('')}
          </div>
        </div>

        <div style="border-top:1px solid var(--border-subtle); padding-top:20px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
          <span style="font-size:0.8rem; color:var(--text-dark);">
            Verified from Official Resume
          </span>
          <button class="btn-fairytale btn-primary-lantern" id="close-modal-action-btn" style="padding:10px 24px; font-size:0.88rem;">
            Return to Kingdom
          </button>
        </div>
      </div>
    `;

    this.open(html);
    document.getElementById('close-modal-action-btn')?.addEventListener('click', () => this.close());
  }

  openCertificateModal() {
    const cert = KINGDOM_DATA.certifications[0];
    if (this.audioEngine) this.audioEngine.playSparkleChime();

    const html = `
      <div class="certificate-modal-view">
        <div style="text-align:center; margin-bottom:20px;">
          <div class="section-badge-label" style="margin-bottom:10px;">
            <span>✧ OFFICIAL VERIFIED CREDENTIAL ✧</span>
          </div>
          <h2 style="font-size:1.8rem; color:var(--text-main); margin-bottom:6px;">${cert.program}</h2>
          <p style="font-size:0.95rem; color:var(--royal-lavender);">${cert.conductedBy}</p>
        </div>

        <!-- Rendered Authentic Credential Parchment -->
        <div style="background:radial-gradient(circle at 50% 30%, var(--bg-surface-elevated), var(--bg-core)); border:3px double var(--lantern-gold); border-radius:18px; padding:32px 24px; text-align:center; position:relative; box-shadow:0 10px 30px rgba(0,0,0,0.5), inset 0 0 30px rgba(255,198,109,0.15); margin-bottom:24px;">
          
          <div class="cert-royal-seal" style="width:64px; height:64px; margin:0 auto 16px;">
            👑
          </div>

          <div style="font-family:var(--font-serif); font-size:0.75rem; letter-spacing:0.2em; text-transform:uppercase; color:var(--lantern-gold); margin-bottom:12px;">
            CERTIFICATE OF COMPLETION
          </div>

          <div style="font-size:0.95rem; color:var(--text-muted); margin-bottom:8px;">
            This certifies that
          </div>

          <div style="font-family:var(--font-serif); font-size:2.2rem; font-weight:700; color:var(--text-main); letter-spacing:0.04em; margin-bottom:12px; text-shadow:0 0 16px var(--lantern-glow);">
            ${cert.verifiedRecipient}
          </div>

          <div style="font-size:0.92rem; color:var(--text-muted); margin-bottom:12px;">
            has successfully fulfilled the engineering requirements to:
          </div>

          <div style="font-family:var(--font-subheading); font-size:1.25rem; font-style:italic; font-weight:700; color:var(--lantern-gold); margin-bottom:20px; line-height:1.4;">
            "${cert.officialStatement}"
          </div>

          <div style="display:flex; justify-content:center; gap:16px; margin-bottom:24px; flex-wrap:wrap;">
            <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); padding:6px 14px; border-radius:8px; font-size:0.78rem;">
              <span style="color:var(--text-dark);">Lead Conduct:</span> <strong style="color:var(--text-main);">CloudThat</strong>
            </div>
            <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); padding:6px 14px; border-radius:8px; font-size:0.78rem;">
              <span style="color:var(--text-dark);">Completed:</span> <strong style="color:var(--lantern-gold);">${cert.completionDate}</strong>
            </div>
            <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); padding:6px 14px; border-radius:8px; font-size:0.78rem;">
              <span style="color:var(--text-dark);">Academic Partner:</span> <strong style="color:var(--royal-lavender);">NMAMIT Nitte</strong>
            </div>
          </div>

          <div style="border-top:1px dashed var(--border-subtle); padding-top:16px;">
            <div style="font-size:0.78rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--lantern-gold); margin-bottom:10px;">
              Core Competencies Validated
            </div>
            <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:8px;">
              ${cert.competencies.map(c => `
                <span class="cert-comp-chip" style="font-size:0.75rem;">${c}</span>
              `).join('')}
            </div>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
          <span style="font-size:0.8rem; color:var(--text-dark);">
            Verified Academic Credential
          </span>
          <button class="btn-fairytale btn-primary-lantern" id="close-cert-btn" style="padding:10px 24px; font-size:0.88rem;">
            Close Credential
          </button>
        </div>
      </div>
    `;

    this.open(html);
    document.getElementById('close-cert-btn')?.addEventListener('click', () => this.close());
  }

  openWishModal() {
    if (this.audioEngine) this.audioEngine.playSparkleChime();

    const html = `
      <div class="wish-modal-view" style="text-align:center;">
        <div class="about-avatar-emblem" style="width:70px; height:70px; margin:0 auto 16px; font-size:1.8rem;">
          🏮
        </div>

        <h2 style="font-size:1.85rem; color:var(--text-main); margin-bottom:8px;">Release Your Lantern</h2>
        <p style="font-size:0.95rem; color:var(--royal-lavender); font-style:italic; max-width:480px; margin:0 auto 24px;">
          "Every dream begins with a little curiosity." Write your aspiration, wish, or hello to launch into the kingdom sky.
        </p>

        <div style="margin-bottom:20px; text-align:left;">
          <label style="display:block; font-size:0.8rem; font-weight:600; text-transform:uppercase; letter-spacing:0.08em; color:var(--text-muted); margin-bottom:6px;">
            Your Name / Kingdom Traveler
          </label>
          <input type="text" id="wish-user-name" placeholder="e.g. Fellow Adventurer" class="form-control-input" style="margin-bottom:14px;" />

          <label style="display:block; font-size:0.8rem; font-weight:600; text-transform:uppercase; letter-spacing:0.08em; color:var(--text-muted); margin-bottom:6px;">
            Your Dream, Wish, or Collaboration Note
          </label>
          <textarea id="wish-user-text" rows="3" placeholder="I wish for inspiring discoveries in AI and cybersecurity..." class="form-control-input"></textarea>
        </div>

        <div style="display:flex; justify-content:center; gap:14px; flex-wrap:wrap;">
          <button class="btn-fairytale btn-secondary-fairytale" id="cancel-wish-btn" style="padding:10px 22px;">
            Cancel
          </button>
          <button class="btn-fairytale btn-primary-lantern" id="launch-wish-btn" style="padding:10px 28px;">
            🏮 Launch Lantern into the Sky
          </button>
        </div>
      </div>
    `;

    this.open(html);

    document.getElementById('cancel-wish-btn')?.addEventListener('click', () => this.close());
    document.getElementById('launch-wish-btn')?.addEventListener('click', () => {
      const name = document.getElementById('wish-user-name')?.value || 'Kingdom Traveler';
      const wish = document.getElementById('wish-user-text')?.value || 'May your curiosity lead you to wonderful dreams!';

      // Launch 3 custom lanterns on canvas
      if (this.canvasEngine) {
        this.canvasEngine.releaseCustomLantern(window.innerWidth * 0.35);
        setTimeout(() => this.canvasEngine.releaseCustomLantern(window.innerWidth * 0.5), 300);
        setTimeout(() => this.canvasEngine.releaseCustomLantern(window.innerWidth * 0.65), 600);
      }

      if (this.audioEngine) this.audioEngine.playHarpGlissando();

      this.close();

      // Show toast confirmation
      this.showToast(`🏮 Lantern released into the heavens for ${name}!`);
    });
  }

  showToast(message) {
    const existing = document.getElementById('kingdom-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'kingdom-toast';
    toast.innerHTML = message;
    toast.style.cssText = `
      position: fixed;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--bg-surface-elevated);
      color: var(--lantern-gold);
      border: 1px solid var(--border-active);
      box-shadow: 0 10px 30px rgba(0,0,0,0.6), 0 0 20px var(--lantern-glow);
      padding: 12px 24px;
      border-radius: 9999px;
      font-family: var(--font-sans);
      font-size: 0.92rem;
      font-weight: 600;
      z-index: 100000;
      animation: floatBounce 2s infinite ease-in-out;
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.6s ease';
      setTimeout(() => toast.remove(), 600);
    }, 4000);
  }
}
