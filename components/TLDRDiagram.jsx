/**
 * TL;DR Diagram Component
 * 3D gamified summary diagram for case studies
 */

import React from 'react';
import '../css/tldr-diagrams.css';

const TLDRDiagram = ({ 
  steps = [], 
  metrics = [], 
  achievement = null 
}) => {
  return (
    <section className="tldr-section" aria-label="Quick summary">
      <div className="tldr-header">
        <span className="tldr-badge">TL;DR</span>
        <h2 className="tldr-title">Quick Summary</h2>
      </div>

      {steps.length > 0 && (
        <div className="tldr-flow">
          {steps.map((step, index) => (
            <div key={index} className="tldr-step">
              <span className="tldr-step-number">{index + 1}</span>
              <span className="tldr-step-icon" aria-hidden="true">{step.icon}</span>
              <div className="tldr-step-title">{step.title}</div>
              <div className="tldr-step-desc">{step.description}</div>
            </div>
          ))}
        </div>
      )}

      {metrics.length > 0 && (
        <div className="tldr-metrics">
          {metrics.map((metric, index) => (
            <div key={index} className="tldr-metric">
              <span className="tldr-metric-value">{metric.value}</span>
              <span className="tldr-metric-label">{metric.label}</span>
              {metric.change && (
                <span className="tldr-metric-change">{metric.change}</span>
              )}
            </div>
          ))}
        </div>
      )}

      {achievement && (
        <div className="tldr-achievement">
          <div className="tldr-achievement-title">{achievement.title}</div>
          <div className="tldr-achievement-desc">{achievement.description}</div>
        </div>
      )}
    </section>
  );
};

export default TLDRDiagram;
