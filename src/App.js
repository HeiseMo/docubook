import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Home from './pages/Home';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import './App.css';

function AppContent() {
  const { isDarkMode } = useTheme();

  return (
    <Router>
      <div className={`app ${isDarkMode ? 'dark' : ''}`}>
        <Sidebar />
        <main className={`main-content ${isDarkMode ? 'dark' : ''}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/content/:id" element={<Content />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;