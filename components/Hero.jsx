import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import './hero.css';

const Hero = () => {
  const [metrics, setMetrics] = useState({
    projects: 0,
    impact: 0,
    years: 0,
    clients: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Animate metrics
    const animateValue = (target, setter, duration = 2000) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };

    setTimeout(() => {
      animateValue(25, (val) => setMetrics(prev => ({ ...prev, projects: val })));
      animateValue(98, (val) => setMetrics(prev => ({ ...prev, impact: val })));
      animateValue(8, (val) => setMetrics(prev => ({ ...prev, years: val })));
      animateValue(15, (val) => setMetrics(prev => ({ ...prev, clients: val })));
    }, 500);
  }, []);

  // Impact metrics chart data
  const impactChartData = [
    ['Metric', 'Value'],
    ['User Satisfaction', 98],
    ['Compliance Rate', 100],
    ['Platform Efficiency', 95],
    ['Design System Adoption', 92],
  ];

  const impactChartOptions = {
    chart: {
      title: 'Platform Impact Metrics',
      subtitle: 'Senior-level design outcomes',
    },
    backgroundColor: 'transparent',
    colors: ['#0066FF', '#00D4AA', '#FF6B6B', '#F59E0B'],
    legend: { position: 'none' },
    hAxis: { textStyle: { color: '#4A5568' } },
    vAxis: { 
      textStyle: { color: '#4A5568' },
      minValue: 0,
      maxValue: 100
    },
    animation: {
      startup: true,
      easing: 'out',
      duration: 1000,
    },
  };

  // Project timeline data
  const timelineData = [
    ['Year', 'Projects', 'Impact'],
    ['2017', 2, 15],
    ['2018', 4, 28],
    ['2019', 5, 42],
    ['2020', 6, 58],
    ['2021', 7, 72],
    ['2022', 8, 85],
    ['2023', 9, 92],
    ['2024', 10, 98],
  ];

  const timelineOptions = {
    title: 'Growth Trajectory',
    curveType: 'function',
    legend: { position: 'bottom', textStyle: { color: '#4A5568' } },
    backgroundColor: 'transparent',
    colors: ['#0066FF', '#00D4AA'],
    hAxis: { textStyle: { color: '#4A5568' } },
    vAxis: { textStyle: { color: '#4A5568' } },
    animation: {
      startup: true,
      easing: 'out',
      duration: 1500,
    },
  };

  return (
    <section className={`hero-premium ${isVisible ? 'visible' : ''}`} id="main">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-particles"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content-premium">
          <div className="hero-badge-premium">
            <span className="badge-icon">✨</span>
            <span className="badge-text">Senior Product Design Manager</span>
            <span className="badge-accent">Staff Level</span>
          </div>

          <h1 className="hero-title-premium">
            <span className="title-line">Designing Financial Platforms</span>
            <span className="title-line-accent">That Build Trust & Scale</span>
          </h1>

          <p className="hero-subtitle-premium">
            I transform complex regulatory requirements into elegant, user-centered experiences 
            for banking, lending, and wealth management platforms at enterprise scale.
          </p>

          <p className="hero-description-premium">
            As founder of <a href="https://www.elevexaworks.com/" rel="noopener" className="hero-link">Elevexa Works</a>, 
            I partner with fintech teams to design systems that balance compliance, user clarity, and business growth. 
            Every decision is grounded in systems thinking, regulatory understanding, and human empathy.
          </p>

          {/* Impact Metrics */}
          <div className="hero-metrics">
            <div className="metric-card">
              <div className="metric-value">{metrics.projects}+</div>
              <div className="metric-label">Platform Projects</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">{metrics.impact}%</div>
              <div className="metric-label">User Satisfaction</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">{metrics.years}+</div>
              <div className="metric-label">Years Experience</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">{metrics.clients}+</div>
              <div className="metric-label">Enterprise Clients</div>
            </div>
          </div>

          <div className="hero-cta-premium">
            <a href="#work" className="btn-premium btn-primary-premium">
              <span>View My Work</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact" className="btn-premium btn-secondary-premium">
              <span>Let's Connect</span>
            </a>
          </div>
        </div>

        <div className="hero-visual-premium">
          <div className="hero-charts-container">
            {/* Impact Metrics Chart */}
            <div className="chart-card">
              <div className="chart-header">
                <h3 className="chart-title">Platform Impact</h3>
                <span className="chart-badge">Real Metrics</span>
              </div>
              <Chart
                chartType="ColumnChart"
                data={impactChartData}
                options={impactChartOptions}
                width="100%"
                height="300px"
              />
            </div>

            {/* Growth Timeline Chart */}
            <div className="chart-card">
              <div className="chart-header">
                <h3 className="chart-title">Growth Trajectory</h3>
                <span className="chart-badge">8 Years</span>
              </div>
              <Chart
                chartType="LineChart"
                data={timelineData}
                options={timelineOptions}
                width="100%"
                height="300px"
              />
            </div>
          </div>

          {/* Floating Stats */}
          <div className="floating-stats">
            <div className="floating-stat">
              <div className="stat-icon">📊</div>
              <div className="stat-content">
                <div className="stat-value">$2.5B+</div>
                <div className="stat-label">Platform Assets</div>
              </div>
            </div>
            <div className="floating-stat">
              <div className="stat-icon">👥</div>
              <div className="stat-content">
                <div className="stat-value">500K+</div>
                <div className="stat-label">Active Users</div>
              </div>
            </div>
            <div className="floating-stat">
              <div className="stat-icon">⚡</div>
              <div className="stat-content">
                <div className="stat-value">98%</div>
                <div className="stat-label">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
