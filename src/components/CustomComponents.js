// src/components/CustomComponents.js
import React from 'react';

export const InfoBox = ({ title, type, children }) => (
  <div className={`info-box ${type}`}>
    <h4>{title}</h4>
    {children}
  </div>
);

export const CodeSnippet = ({ language, code }) => (
  <pre>
    <code className={`language-${language}`}>{code}</code>
  </pre>
);

// Add more custom components as needed