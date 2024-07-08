// src/remarkConfig.js
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeReact from 'rehype-react';
import React from 'react';

const processor = unified()
  .use(remarkParse)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeReact, {
    createElement: React.createElement,
    Fragment: React.Fragment,
    components: {
      // You can add custom components here if needed
    }
  });

export default processor;