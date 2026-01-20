/**
 * Google Charts Loader
 * Creates beautiful data visualizations for hero section
 */

(function() {
  'use strict';

  // Load Google Charts
  google.charts.load('current', { 'packages': ['corechart', 'bar'] });

  google.charts.setOnLoadCallback(drawCharts);

  function drawCharts() {
    drawImpactChart();
    drawTimelineChart();
    animateMetrics();
  }

  function drawImpactChart() {
    const data = google.visualization.arrayToDataTable([
      ['Metric', 'Value'],
      ['User Satisfaction', 98],
      ['Compliance Rate', 100],
      ['Platform Efficiency', 95],
      ['Design System Adoption', 92],
    ]);

    const options = {
      title: '',
      backgroundColor: 'transparent',
      colors: ['#0066FF', '#00D4AA', '#FF6B6B', '#F59E0B'],
      legend: { position: 'none' },
      hAxis: {
        textStyle: { color: '#4A5568', fontSize: 12 },
        gridlines: { color: '#E2E8F0' }
      },
      vAxis: {
        textStyle: { color: '#4A5568', fontSize: 12 },
        gridlines: { color: '#E2E8F0' },
        minValue: 0,
        maxValue: 100,
        format: '#\'%\''
      },
      chartArea: {
        left: '15%',
        top: '10%',
        width: '75%',
        height: '70%'
      },
      animation: {
        startup: true,
        easing: 'out',
        duration: 1000,
      },
    };

    const chart = new google.visualization.ColumnChart(document.getElementById('impact-chart'));
    chart.draw(data, options);
  }

  function drawTimelineChart() {
    const data = google.visualization.arrayToDataTable([
      ['Year', 'Projects', 'Impact'],
      ['2017', 2, 15],
      ['2018', 4, 28],
      ['2019', 5, 42],
      ['2020', 6, 58],
      ['2021', 7, 72],
      ['2022', 8, 85],
      ['2023', 9, 92],
      ['2024', 10, 98],
    ]);

    const options = {
      title: '',
      curveType: 'function',
      legend: {
        position: 'bottom',
        textStyle: { color: '#4A5568', fontSize: 12 }
      },
      backgroundColor: 'transparent',
      colors: ['#0066FF', '#00D4AA'],
      hAxis: {
        textStyle: { color: '#4A5568', fontSize: 12 },
        gridlines: { color: '#E2E8F0' }
      },
      vAxis: {
        textStyle: { color: '#4A5568', fontSize: 12 },
        gridlines: { color: '#E2E8F0' }
      },
      chartArea: {
        left: '15%',
        top: '10%',
        width: '75%',
        height: '65%'
      },
      animation: {
        startup: true,
        easing: 'out',
        duration: 1500,
      },
    };

    const chart = new google.visualization.LineChart(document.getElementById('timeline-chart'));
    chart.draw(data, options);
  }

  function animateMetrics() {
    const metricValues = document.querySelectorAll('.metric-value-enhanced');
    
    metricValues.forEach(el => {
      const text = el.textContent.trim();
      const target = parseInt(text.replace(/\D/g, ''));
      const suffix = text.includes('%') ? '%' : '+';
      
      if (isNaN(target)) return;
      
      el.textContent = '0' + suffix;
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          el.textContent = target + suffix;
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(current) + suffix;
        }
      }, 16);
    });
  }

  // Redraw charts on window resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      drawCharts();
    }, 250);
  });
})();
