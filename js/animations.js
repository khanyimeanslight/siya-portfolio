/**
 * Animation Utilities
 * Handles scroll animations, intersection observer, and 3D effects
 * WCAG compliant with reduced motion support
 */

class Animations {
  constructor() {
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.observers = new Map();
    this.init();
  }

  init() {
    if (this.reducedMotion) return;

    // Intersection Observer for fade-in animations
    this.setupIntersectionObserver();
    
    // 3D card effects
    this.setup3DCards();
    
    // Progress bar animations
    this.setupProgressBars();
  }

  setupIntersectionObserver() {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    // Observe elements with animation class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }

  setup3DCards() {
    const cards = document.querySelectorAll('.case-card, .tldr-step, .tldr-metric');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', (e) => {
        if (this.reducedMotion) return;
        this.handle3DHover(e.currentTarget, e);
      });

      card.addEventListener('mousemove', (e) => {
        if (this.reducedMotion) return;
        this.handle3DTilt(e.currentTarget, e);
      });

      card.addEventListener('mouseleave', (e) => {
        if (this.reducedMotion) return;
        this.reset3D(e.currentTarget);
      });
    });
  }

  handle3DHover(card, event) {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.setProperty('--rotate-x', `${rotateX}deg`);
    card.style.setProperty('--rotate-y', `${rotateY}deg`);
  }

  handle3DTilt(card, event) {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
  }

  reset3D(card) {
    card.style.transform = '';
    card.style.setProperty('--rotate-x', '0deg');
    card.style.setProperty('--rotate-y', '0deg');
  }

  setupProgressBars() {
    const progressBars = document.querySelectorAll('.case-progress-bar');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const targetWidth = bar.dataset.width || '100';
          bar.style.width = `${targetWidth}%`;
          observer.unobserve(bar);
        }
      });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => {
      observer.observe(bar);
    });
  }
}

// Initialize animations
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new Animations());
} else {
  new Animations();
}
