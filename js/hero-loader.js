/**
 * Hero Component Loader
 * Dynamically loads React Hero component
 */

(function() {
  'use strict';

  // Check if React is available
  function loadHeroComponent() {
    // For now, we'll use a simpler approach - enhance the existing hero with premium styles
    // Full React integration requires build step (see README)
    
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
      heroSection.classList.add('hero-premium-enhanced');
      
      // Add metrics animation
      const metricsHTML = `
        <div class="hero-metrics-enhanced">
          <div class="metric-card-enhanced">
            <div class="metric-value-enhanced" data-target="25">0</div>
            <div class="metric-label-enhanced">Platform Projects</div>
          </div>
          <div class="metric-card-enhanced">
            <div class="metric-value-enhanced" data-target="98">0</div>
            <div class="metric-label-enhanced">User Satisfaction</div>
          </div>
          <div class="metric-card-enhanced">
            <div class="metric-value-enhanced" data-target="8">0</div>
            <div class="metric-label-enhanced">Years Experience</div>
          </div>
          <div class="metric-card-enhanced">
            <div class="metric-value-enhanced" data-target="15">0</div>
            <div class="metric-label-enhanced">Enterprise Clients</div>
          </div>
        </div>
      `;
      
      const heroContent = heroSection.querySelector('.hero-content');
      if (heroContent) {
        const cta = heroContent.querySelector('.hero-cta');
        if (cta) {
          cta.insertAdjacentHTML('beforebegin', metricsHTML);
        }
      }
      
      // Animate metrics
      setTimeout(() => {
        const metricValues = document.querySelectorAll('.metric-value-enhanced');
        metricValues.forEach(el => {
          const target = parseInt(el.dataset.target);
          const duration = 2000;
          const increment = target / (duration / 16);
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              el.textContent = target + (el.dataset.target.includes('%') ? '%' : '+');
              clearInterval(timer);
            } else {
              el.textContent = Math.floor(current) + (el.dataset.target.includes('%') ? '%' : '+');
            }
          }, 16);
        });
      }, 500);
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadHeroComponent);
  } else {
    loadHeroComponent();
  }
})();
