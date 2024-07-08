import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import 'highlight.js/styles/github.css';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { useTheme } from '../contexts/ThemeContext';
import TableOfContents from './TableOfContents';
import customPlugin from '../utils/customMarkdownPlugin';

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

function Content({ 
  contentState, 
  setContentState, 
  editMode, 
  setEditMode, 
  markdown, 
  setMarkdown, 
  handleEditorChange, 
  handleSave, 
  headings, 
  setHeadings, 
  contentRef 
}) {
  const { id } = useParams();
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const pageContent = contentState[id];
    if (pageContent) {
      setMarkdown(pageContent.body);
      const extractedHeadings = extractHeadings(pageContent.body);
      setHeadings(extractedHeadings);
    }
    setEditMode(false);
  }, [id, contentState, setMarkdown, setHeadings, setEditMode]);

  const mdParser = new MarkdownIt().use(customPlugin);

  if (!contentState[id]) {
    return <div className={`content ${isDarkMode ? 'dark' : ''}`}>Page not found</div>;
  }

  const MarkdownContent = () => (
    <ReactMarkdown 
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, rehypeHighlight, rehypeSlug]}
      components={{
        table: ({node, ...props}) => <table className="markdown-table" {...props} />,
        img: ({node, ...props}) => <img className="markdown-image" {...props} alt={props.alt || ''} />,
        blockquote: ({node, ...props}) => <blockquote className="feature-block" {...props} />,
        code: ({node, inline, ...props}) => 
          inline ? <code className="inline-code" {...props} /> : <pre><code {...props} /></pre>,
        a: ({node, ...props}) => <a className="markdown-link" {...props} target="_blank" rel="noopener noreferrer" />,
        ul: ({node, ...props}) => <ul className="markdown-list" {...props} />,
        ol: ({node, ...props}) => <ol className="markdown-list" {...props} />,
        hr: ({node, ...props}) => <hr className="markdown-hr" {...props} />
      }}
    >
      {markdown}
    </ReactMarkdown>
  );

  return (
    <div className={`gitbook-layout ${isDarkMode ? 'dark' : ''}`}>
      <main className="gitbook-main">
        <div className="content-header">
          <h1>{contentState[id].title}</h1>
          <button onClick={() => setEditMode(!editMode)} className="edit-toggle">
            {editMode ? 'View' : 'Edit'}
          </button>
          <button onClick={() => handleSave(id)} className="save-button">Save</button>
        </div>
        <div className="content-body" ref={contentRef}>
          {editMode ? (
            <MdEditor
              style={{ height: 'calc(100vh - 120px)' }}
              renderHTML={(text) => mdParser.render(text)}
              onChange={handleEditorChange}
              value={markdown}
            />
          ) : (
            <MarkdownContent />
          )}
        </div>
      </main>
    </div>
  );
}

export default Content;