/**
 * THE LANTERN KINGDOM - Navigation & Scroll Controller
 */

export class NavigationController {
  constructor() {
    this.navbar = document.getElementById('kingdom-navbar');
    this.navLinks = document.querySelectorAll('.nav-link, .mobile-menu-link');
    this.mobileToggle = document.getElementById('mobile-nav-toggle');
    this.mobileDrawer = document.getElementById('mobile-drawer');
    this.mobileClose = document.getElementById('mobile-drawer-close');
    this.mobileBackdrop = document.getElementById('mobile-backdrop');
    this.sections = document.querySelectorAll('section[id], header[id]');

    this.init();
  }

  init() {
    // Window scroll listener for glassmorphism
    window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
    this.handleScroll();

    // Mobile drawer toggling
    if (this.mobileToggle) {
      this.mobileToggle.addEventListener('click', () => this.openDrawer());
    }
    if (this.mobileClose) {
      this.mobileClose.addEventListener('click', () => this.closeDrawer());
    }
    if (this.mobileBackdrop) {
      this.mobileBackdrop.addEventListener('click', () => this.closeDrawer());
    }

    // Smooth scroll for all hash links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href').substring(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          e.preventDefault();
          this.closeDrawer();
          const navHeight = this.navbar ? this.navbar.offsetHeight : 70;
          const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight + 10;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    // Keyboard support: Escape closes mobile drawer
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.mobileDrawer?.classList.contains('open')) {
        this.closeDrawer();
      }
    });

    // Scroll spy for active link highlighting
    this.setupScrollSpy();
  }

  handleScroll() {
    if (!this.navbar) return;
    if (window.scrollY > 40) {
      this.navbar.classList.add('scrolled');
    } else {
      this.navbar.classList.remove('scrolled');
    }
  }

  setupScrollSpy() {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          this.setActiveNavLink(currentId);
        }
      });
    }, observerOptions);

    this.sections.forEach(section => observer.observe(section));
  }

  setActiveNavLink(id) {
    this.navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${id}`) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }

  openDrawer() {
    if (this.mobileDrawer) this.mobileDrawer.classList.add('open');
    if (this.mobileBackdrop) this.mobileBackdrop.classList.add('open');
    if (this.mobileToggle) this.mobileToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  closeDrawer() {
    if (this.mobileDrawer) this.mobileDrawer.classList.remove('open');
    if (this.mobileBackdrop) this.mobileBackdrop.classList.remove('open');
    if (this.mobileToggle) this.mobileToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
}
