/**
 * Main JavaScript Entry Point
 * Initializes all functionality
 */

(function() {
  'use strict';

  // Initialize when DOM is ready
  function init() {
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
          Utils.smoothScrollTo(target, 100);
        }
      });
    });

    // Add loading states
    document.body.classList.add('js-loaded');
  }

  // Initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
