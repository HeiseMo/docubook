import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Home from './pages/Home';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import initialContent from './data/content';
import './App.css';
import TableOfContents from './components/TableOfContents';

function extractHeadings(markdown) {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    headings.push({
      level: match[1].length,
      text: match[2],
      id: match[2].toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')
    });
  }

  return headings;
}

function AppContent() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [headings, setHeadings] = useState([]);
  const contentRef = useRef(null);
  const [contentState, setContentState] = useState(() => {
    const savedContent = localStorage.getItem('docuBookContent');
    return savedContent ? JSON.parse(savedContent) : initialContent;
  });
  const [editMode, setEditMode] = useState(false);
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    localStorage.setItem('docuBookContent', JSON.stringify(contentState));
    console.log('Updated content for content.js:');
    console.log(JSON.stringify(contentState, null, 2));
  }, [contentState]);

  const scrollToHeading = (headingId) => {
    const element = contentRef.current.querySelector(`#${headingId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCreatePage = (newId, title) => {
    setContentState(prevState => ({
      ...prevState,
      [newId]: {
        title,
        body: `# ${title}\n\nStart writing your content here...`
      }
    }));
    navigate(`/content/${newId}`);
  };

  const handleEditorChange = ({ text }) => {
    setMarkdown(text);
    const extractedHeadings = extractHeadings(text);
    setHeadings(extractedHeadings);
  };

  const handleSave = (id) => {
    setContentState(prevState => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        body: markdown
      }
    }));
    setEditMode(false);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : ''}`}>
      <Sidebar onCreatePage={handleCreatePage} contentState={contentState} />
      <main className={`main-content ${isDarkMode ? 'dark' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/content/:id" 
            element={
              <Content 
                contentState={contentState}
                setContentState={setContentState}
                editMode={editMode}
                setEditMode={setEditMode}
                markdown={markdown}
                setMarkdown={setMarkdown}
                handleEditorChange={handleEditorChange}
                handleSave={handleSave}
                headings={headings}
                setHeadings={setHeadings}
                contentRef={contentRef}
              />
            } 
          />
        </Routes>
      </main>
      <aside className="gitbook-toc">
        <TableOfContents headings={headings} scrollToHeading={scrollToHeading} />
      </aside>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;