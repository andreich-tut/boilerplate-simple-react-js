import React from 'react';
import ReactMarkdown from 'react-markdown';
import sanitizeHtml from 'sanitize-html';

const linkRenderer = (props) => (
  <a href={props.href} target="_blank" rel="noopener noreferrer">
    {props.children}
  </a>
);

const Markdown = ({ children, allowParagraphs, allowExternalLinks, options, ...props }) => {
  let propsMD = props;

  if (!allowParagraphs) {
    propsMD = {
      disallowedTypes: ['paragraph'],
      ...props,
    };
  }

  if (allowExternalLinks) {
    propsMD = {
      renderers: {
        link: linkRenderer,
      },
      ...propsMD,
    };
  }

  propsMD = {
    ...propsMD,
    ...options,
  };

  return (
    <ReactMarkdown
      children={sanitizeHtml(children)}
      escapeHtml={false}
      unwrapDisallowed
      {...propsMD}
    />
  );
};

export default Markdown;
