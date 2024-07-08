import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import 'highlight.js/styles/github.css';
import content from '../data/content';
import { useTheme } from '../contexts/ThemeContext';
import TableOfContents from './TableOfContents';

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

function Content() {
  const { id } = useParams();
  const pageContent = content[id];
  const { isDarkMode } = useTheme();
  const [headings, setHeadings] = useState([]);
  const contentRef = useRef(null);

  useEffect(() => {
    if (pageContent) {
      const extractedHeadings = extractHeadings(pageContent.body);
      setHeadings(extractedHeadings);
    }
  }, [pageContent]);

  const scrollToHeading = (headingId) => {
    const element = contentRef.current.querySelector(`#${headingId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!pageContent) {
    return <div className={`content ${isDarkMode ? 'dark' : ''}`}>Page not found</div>;
  }

  return (
    <div className={`content-wrapper ${isDarkMode ? 'dark' : ''}`}>
      <div className={`content ${isDarkMode ? 'dark' : ''}`} ref={contentRef}>
        <h1>{pageContent.title}</h1>
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
          {pageContent.body}
        </ReactMarkdown>
      </div>
      <TableOfContents headings={headings} scrollToHeading={scrollToHeading} />
    </div>
  );
}

export default Content;