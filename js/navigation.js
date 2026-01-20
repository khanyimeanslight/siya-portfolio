/**
 * Navigation Utilities
 * Handles mobile menu, sticky nav, and accessibility
 */

class Navigation {
  constructor() {
    this.navWrapper = document.querySelector('.nav-wrapper');
    this.navToggle = document.querySelector('.nav-toggle');
    this.navMenu = document.querySelector('.nav-menu');
    this.init();
  }

  init() {
    if (!this.navWrapper) return;

    // Mobile menu toggle
    if (this.navToggle && this.navMenu) {
      this.navToggle.addEventListener('click', () => this.toggleMenu());
      
      // Close menu when clicking links
      this.navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => this.closeMenu());
      });

      // Close menu on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.navMenu.classList.contains('active')) {
          this.closeMenu();
        }
      });
    }

    // Sticky nav scroll effect
    this.handleScroll();
    window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
  }

  toggleMenu() {
    const isActive = this.navToggle.classList.toggle('active');
    this.navMenu.classList.toggle('active');
    this.navToggle.setAttribute('aria-expanded', isActive);
    
    // Prevent body scroll when menu is open
    if (isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenu() {
    this.navToggle.classList.remove('active');
    this.navMenu.classList.remove('active');
    this.navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  handleScroll() {
    if (!this.navWrapper) return;
    
    const scrolled = window.scrollY > 10;
    this.navWrapper.classList.toggle('scrolled', scrolled);
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new Navigation());
} else {
  new Navigation();
}
