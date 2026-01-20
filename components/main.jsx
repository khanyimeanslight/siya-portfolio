/**
 * React Entry Point
 * For future React integration
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../css/design-system.css';
import '../css/navigation.css';
import '../css/case-studies.css';
import '../css/tldr-diagrams.css';
import '../css/case-study-content.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
