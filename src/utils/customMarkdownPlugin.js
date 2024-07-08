// src/utils/customMarkdownPlugin.js
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { InfoBox, CodeSnippet } from '../components/CustomComponents';

export default function customPlugin(md) {
  const defaultRender = md.renderer.rules.fence || function(tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

  md.renderer.rules.fence = function(tokens, idx, options, env, self) {
    const token = tokens[idx];
    if (token.info.startsWith('component-')) {
      const componentType = token.info.split('-')[1];
      const componentData = JSON.parse(token.content);
      
      switch (componentType) {
        case 'infobox':
          return ReactDOMServer.renderToString(
            <InfoBox title={componentData.title} type={componentData.type}>
              {componentData.content}
            </InfoBox>
          );
        case 'codesnippet':
          return ReactDOMServer.renderToString(
            <CodeSnippet language={componentData.language} code={componentData.code} />
          );
        // Add more cases for other custom components
        default:
          return defaultRender(tokens, idx, options, env, self);
      }
    }
    return defaultRender(tokens, idx, options, env, self);
  };
}