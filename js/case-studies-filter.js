// Case Studies Filter Functionality
class CaseStudiesFilter {
  constructor() {
    this.filterButtons = document.querySelectorAll('.filter-btn');
    this.caseCards = document.querySelectorAll('.case-card');
    this.emptyState = document.getElementById('casesEmpty');
    this.grid = document.getElementById('casesGrid');
    this.init();
  }

  init() {
    // Set up filter button listeners
    this.filterButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = button.dataset.filter;
        this.filterCases(filter);
        this.updateActiveButton(button);
      });
    });

    // Initialize fade-in animations
    this.initAnimations();
  }

  filterCases(category) {
    let visibleCount = 0;

    this.caseCards.forEach(card => {
      const cardCategory = card.dataset.category;
      const shouldShow = category === 'all' || cardCategory === category;

      if (shouldShow) {
        card.style.display = '';
        card.classList.add('fade-in');
        visibleCount++;
        
        // Trigger animation
        setTimeout(() => {
          card.classList.add('visible');
        }, 50);
      } else {
        card.style.display = 'none';
        card.classList.remove('visible', 'fade-in');
      }
    });

    // Show/hide empty state
    if (visibleCount === 0) {
      this.emptyState.style.display = 'block';
      this.grid.style.display = 'none';
    } else {
      this.emptyState.style.display = 'none';
      this.grid.style.display = 'grid';
    }
  }

  updateActiveButton(activeButton) {
    this.filterButtons.forEach(button => {
      button.classList.remove('active');
    });
    activeButton.classList.add('active');
  }

  initAnimations() {
    // Observe fade-in elements
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    // Observe case cards
    this.caseCards.forEach(card => {
      observer.observe(card);
    });
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new CaseStudiesFilter();
});
