/**
 * THE LANTERN KINGDOM - Web Audio API Fairytale Synthesizer
 * Zero external audio files; pure procedural crystalline chimes and harp sparkles.
 */

export class AmbientAudioEngine {
  constructor() {
    this.ctx = null;
    this.isEnabled = false;
    this.toggleBtn = document.getElementById('audio-toggle-btn');
    this.init();
  }

  init() {
    if (this.toggleBtn) {
      this.toggleBtn.addEventListener('click', () => this.toggle());
    }
  }

  ensureContext() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.ensureContext();
    this.isEnabled = !this.isEnabled;

    if (this.toggleBtn) {
      if (this.isEnabled) {
        this.toggleBtn.classList.add('playing');
        this.toggleBtn.setAttribute('title', 'Mute fairytale chimes');
        this.toggleBtn.setAttribute('aria-label', 'Mute fairytale chimes');
        this.playSparkleChime();
      } else {
        this.toggleBtn.classList.remove('playing');
        this.toggleBtn.setAttribute('title', 'Enable fairytale chimes');
        this.toggleBtn.setAttribute('aria-label', 'Enable fairytale chimes');
      }
    }
  }

  playSparkleChime() {
    if (!this.isEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    // Soft pentatonic fairy sparkle notes
    const freqs = [523.25, 659.25, 783.99, 880.0, 1046.5]; // C5, E5, G5, A5, C6
    const now = this.ctx.currentTime;

    freqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(0, now + idx * 0.08);
      gain.gain.linearRampToValueAtTime(0.08, now + idx * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 1.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 1.3);
    });
  }

  playHarpGlissando() {
    if (!this.isEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.5, 1318.5]; // C4 to E6
    const now = this.ctx.currentTime;

    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.05);

      gain.gain.setValueAtTime(0, now + idx * 0.05);
      gain.gain.linearRampToValueAtTime(0.07, now + idx * 0.05 + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.05 + 1.5);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + idx * 0.05);
      osc.stop(now + idx * 0.05 + 1.6);
    });
  }
}
