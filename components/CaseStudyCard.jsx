/**
 * Case Study Card Component
 * Reusable 3D gamified card component
 */

import React from 'react';
import '../css/case-studies.css';

const CaseStudyCard = ({ 
  title, 
  description, 
  href, 
  icon, 
  tags = [], 
  stats = [],
  badge = 'Featured'
}) => {
  return (
    <a 
      href={href} 
      className="case-card"
      aria-label={`${title} case study`}
    >
      {badge && <span className="case-badge">{badge}</span>}
      
      <div className="case-image">
        <span className="case-icon-3d" aria-hidden="true">{icon}</span>
      </div>
      
      <div className="case-content">
        <h2>{title}</h2>
        <p>{description}</p>
        
        {stats.length > 0 && (
          <div className="case-stats">
            {stats.map((stat, index) => (
              <div key={index} className="case-stat">
                <span className="case-stat-value">{stat.value}</span>
                <span className="case-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        )}
        
        {tags.length > 0 && (
          <div className="case-tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
      
      <div className="case-progress">
        <div className="case-progress-bar"></div>
      </div>
    </a>
  );
};

export default CaseStudyCard;
