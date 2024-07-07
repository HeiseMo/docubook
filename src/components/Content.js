import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import content from '../data/content';

function Content() {
  const { id } = useParams();
  const pageContent = content[id];

  if (!pageContent) {
    return <div className="content">Page not found</div>;
  }

  return (
    <div className="content">
      <h1>{pageContent.title}</h1>
      <ReactMarkdown>{pageContent.body}</ReactMarkdown>
    </div>
  );
}

export default Content;