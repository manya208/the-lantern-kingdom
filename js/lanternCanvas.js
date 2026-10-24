/**
 * THE LANTERN KINGDOM - Canvas Environmental Particle Engine
 * Floating golden lanterns, fireflies, twinkling stars, and day pollen.
 */

export class LanternCanvasEngine {
  constructor(canvasId, currentTheme = 'night') {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.theme = currentTheme;
    this.isRunning = false;
    this.animationFrameId = null;

    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.lanterns = [];
    this.fireflies = [];
    this.stars = [];
    this.pollen = [];

    this.maxLanterns = this.width < 768 ? 16 : 32;
    this.maxFireflies = this.width < 768 ? 25 : 55;
    this.maxStars = this.width < 768 ? 40 : 90;
    this.maxPollen = this.width < 768 ? 20 : 45;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());

    // Pause when tab is not visible to preserve battery & CPU
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.stop();
      } else {
        this.start();
      }
    });

    // Populate initial particles
    this.initStars();
    this.initLanterns();
    this.initFireflies();
    this.initPollen();

    this.start();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  setTheme(theme) {
    this.theme = theme;
  }

  initStars() {
    this.stars = [];
    for (let i = 0; i < this.maxStars; i++) {
      this.stars.push({
        x: Math.random() * this.width,
        y: Math.random() * (this.height * 0.6),
        radius: Math.random() * 1.5 + 0.5,
        baseAlpha: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 0.03 + 0.01,
        phase: Math.random() * Math.PI * 2
      });
    }
  }

  initLanterns() {
    this.lanterns = [];
    for (let i = 0; i < this.maxLanterns; i++) {
      this.lanterns.push(this.createLantern(Math.random() * this.height));
    }
  }

  createLantern(startY = null, customX = null) {
    const scale = Math.random() * 0.7 + 0.5; // depth scale
    return {
      x: customX !== null ? customX : Math.random() * this.width,
      y: startY !== null ? startY : this.height + Math.random() * 100,
      scale: scale,
      width: 18 * scale,
      height: 24 * scale,
      speedY: (Math.random() * 0.45 + 0.25) * scale,
      swaySpeed: Math.random() * 0.02 + 0.01,
      swayAmount: Math.random() * 18 + 8,
      phase: Math.random() * Math.PI * 2,
      glowRadius: 35 * scale,
      alpha: Math.random() * 0.4 + 0.6
    };
  }

  releaseCustomLantern(x, y) {
    const lantern = this.createLantern(y || this.height - 40, x || this.width / 2);
    lantern.scale = 1.1;
    lantern.width = 24;
    lantern.height = 32;
    lantern.glowRadius = 55;
    lantern.speedY = 1.0;
    lantern.isUserWish = true;
    this.lanterns.push(lantern);
  }

  initFireflies() {
    this.fireflies = [];
    for (let i = 0; i < this.maxFireflies; i++) {
      this.fireflies.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.6,
        speedY: (Math.random() - 0.5) * 0.6,
        blinkSpeed: Math.random() * 0.04 + 0.015,
        phase: Math.random() * Math.PI * 2
      });
    }
  }

  initPollen() {
    this.pollen = [];
    for (let i = 0; i < this.maxPollen; i++) {
      this.pollen.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: Math.random() * 2.2 + 0.8,
        speedX: Math.random() * 0.5 + 0.2,
        speedY: (Math.random() - 0.3) * 0.4,
        phase: Math.random() * Math.PI * 2
      });
    }
  }

  start() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.render();
    }
  }

  stop() {
    this.isRunning = false;
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  render() {
    if (!this.isRunning) return;

    this.ctx.clearRect(0, 0, this.width, this.height);

    // Render based on current theme
    if (this.theme === 'night') {
      this.drawStars();
      this.drawLanterns();
      this.drawFireflies();
    } else {
      this.drawPollen();
      this.drawLanterns(); // Floating in day mode with soft warm sunlight aesthetic
    }

    this.animationFrameId = requestAnimationFrame(() => this.render());
  }

  drawStars() {
    this.stars.forEach(star => {
      star.phase += star.twinkleSpeed;
      const alpha = star.baseAlpha + Math.sin(star.phase) * 0.3;
      this.ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, Math.min(1, alpha))})`;
      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      this.ctx.fill();
    });
  }

  drawLanterns() {
    for (let i = 0; i < this.lanterns.length; i++) {
      const l = this.lanterns[i];
      l.phase += l.swaySpeed;
      l.y -= l.speedY;
      const currentX = l.x + Math.sin(l.phase) * l.swayAmount;

      // Wrap around when rising past top of screen
      if (l.y < -80) {
        if (l.isUserWish) {
          this.lanterns.splice(i, 1);
          i--;
          continue;
        } else {
          l.y = this.height + 40;
          l.x = Math.random() * this.width;
        }
      }

      this.ctx.save();
      this.ctx.translate(currentX, l.y);

      // Outer Warm Halo Glow
      const glow = this.ctx.createRadialGradient(0, 0, 0, 0, 0, l.glowRadius);
      if (this.theme === 'night') {
        glow.addColorStop(0, `rgba(255, 209, 102, ${0.45 * l.alpha})`);
        glow.addColorStop(0.5, `rgba(255, 158, 0, ${0.2 * l.alpha})`);
        glow.addColorStop(1, 'rgba(255, 158, 0, 0)');
      } else {
        glow.addColorStop(0, `rgba(255, 220, 130, ${0.3 * l.alpha})`);
        glow.addColorStop(1, 'rgba(255, 220, 130, 0)');
      }
      this.ctx.fillStyle = glow;
      this.ctx.beginPath();
      this.ctx.arc(0, 0, l.glowRadius, 0, Math.PI * 2);
      this.ctx.fill();

      // Lantern Body Shape
      const w = l.width;
      const h = l.height;
      
      const bodyGrad = this.ctx.createLinearGradient(-w/2, -h/2, w/2, h/2);
      bodyGrad.addColorStop(0, '#FFEAA7');
      bodyGrad.addColorStop(0.5, '#FFBE3D');
      bodyGrad.addColorStop(1, '#E67E22');

      this.ctx.fillStyle = bodyGrad;
      this.ctx.beginPath();
      this.ctx.ellipse(0, 0, w / 2, h / 2, 0, 0, Math.PI * 2);
      this.ctx.fill();

      // Inner Core Flame
      const coreGrad = this.ctx.createRadialGradient(0, 2, 0, 0, 2, w / 3);
      coreGrad.addColorStop(0, '#FFFFFF');
      coreGrad.addColorStop(0.5, '#FFF275');
      coreGrad.addColorStop(1, 'rgba(255, 190, 61, 0)');
      this.ctx.fillStyle = coreGrad;
      this.ctx.beginPath();
      this.ctx.ellipse(0, 2, w / 3, h / 3, 0, 0, Math.PI * 2);
      this.ctx.fill();

      // Delicate Lantern Rim Details
      this.ctx.strokeStyle = '#D97706';
      this.ctx.lineWidth = 0.8 * l.scale;
      this.ctx.stroke();

      this.ctx.restore();
    }
  }

  drawFireflies() {
    this.fireflies.forEach(f => {
      f.phase += f.blinkSpeed;
      f.x += f.speedX;
      f.y += f.speedY;

      // Wrap boundaries
      if (f.x < 0) f.x = this.width;
      if (f.x > this.width) f.x = 0;
      if (f.y < 0) f.y = this.height;
      if (f.y > this.height) f.y = 0;

      const alpha = (Math.sin(f.phase) + 1) / 2; // 0 to 1 smooth blink
      if (alpha > 0.1) {
        this.ctx.fillStyle = `rgba(255, 238, 140, ${alpha * 0.9})`;
        this.ctx.shadowColor = '#FFD166';
        this.ctx.shadowBlur = 8;
        this.ctx.beginPath();
        this.ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.shadowBlur = 0; // reset
      }
    });
  }

  drawPollen() {
    this.pollen.forEach(p => {
      p.phase += 0.02;
      p.x += p.speedX;
      p.y += p.speedY + Math.sin(p.phase) * 0.3;

      if (p.x > this.width) p.x = 0;
      if (p.y > this.height) p.y = 0;
      if (p.y < 0) p.y = this.height;

      this.ctx.fillStyle = 'rgba(255, 215, 130, 0.45)';
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fill();
    });
  }
}
