import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import content from '../data/content';
import { useTheme } from '../contexts/ThemeContext';

function Sidebar() {
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className={`sidebar ${isDarkMode ? 'dark' : ''}`}>
      <div className="sidebar-header">
        <h2>My DocuBook</h2>
        <button onClick={toggleTheme} className="theme-toggle">
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>
      <ul className="sidebar-nav">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        {Object.entries(content).map(([id, item]) => (
          <li key={id} className={location.pathname === `/content/${id}` ? 'active' : ''}>
            <Link to={`/content/${id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;