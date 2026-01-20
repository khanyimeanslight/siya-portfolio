/**
 * Main JavaScript Entry Point
 * Initializes all functionality
 */

(function() {
  'use strict';

  // Initialize when DOM is ready
  function init() {
    // Mark page as JS-enabled for progressive enhancement
    document.body.classList.add('js-loaded');
    
    // Navigation is handled by navigation.js
    // Animations are handled by animations.js
    
    // Handle smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#!') return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          if (typeof Utils !== 'undefined' && Utils.smoothScrollTo) {
            Utils.smoothScrollTo(target, 100);
          } else {
            // Fallback smooth scroll
            const offset = 100;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }

  // Initialize immediately
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
