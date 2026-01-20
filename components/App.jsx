/**
 * Main React App Component
 * Entry point for React-based portfolio
 */

import React from 'react';
import Hero from './Hero';
import CaseStudyCard from './CaseStudyCard';
import TLDRDiagram from './TLDRDiagram';

const App = () => {
  return (
    <div className="app">
      <Hero />
    </div>
  );
};

export default App;
