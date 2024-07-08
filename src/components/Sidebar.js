import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import content from '../data/content';
import { useTheme } from '../contexts/ThemeContext';

function Sidebar() {
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const overlayRef = useRef(null);

  const openOverlaySearch = () => {
    setIsOverlayOpen(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        setIsOverlayOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className={`sidebar ${isDarkMode ? 'dark' : ''}`}>
        <div className="sidebar-header">
          <h2>My DocuBook</h2>
          <button onClick={toggleTheme} className="theme-toggle">
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
        <div className="sidebar-search">
          <input 
            type="text" 
            placeholder="Search..." 
            onClick={openOverlaySearch}
          />
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
      
      {isOverlayOpen && (
        <div className="search-overlay">
          <div className="search-container" ref={overlayRef}>
            <input 
              type="text" 
              placeholder="Search..." 
              id="overlay-search-input"
              autoFocus
            />
            <div className="search-results">
              {/* Search results will be populated here */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;