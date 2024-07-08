import React from 'react';

function TableOfContents({ headings, scrollToHeading }) {
  if (!headings || headings.length === 0) {
    return null;
  }

  return (
    <nav className="table-of-contents">
      <h2>Page Contents</h2>
      <ul>
        {headings.map((heading, index) => (
          <li key={index} className={`toc-h${heading.level}`}>
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToHeading(heading.id);
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TableOfContents;