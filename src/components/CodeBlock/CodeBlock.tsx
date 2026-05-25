import { useMemo } from 'react';
import hljs from 'highlight.js';
import './CodeBlock.css';

interface CodeBlockProps {
  title: string;
  code: string;
  language: string;
}

function CodeBlock({ title, code, language }: CodeBlockProps) {
  const highlightedCode = useMemo(() => {
    try {
      return hljs.highlight(code, { language: language.toLowerCase() }).value;
    } catch {
      // Si el lenguaje no es reconocido, usa auto-detect
      return hljs.highlightAuto(code).value;
    }
  }, [code, language]);

  return (
    <div className="code-block-wrapper">
      <div className="code-block-header">
        <h4 className="code-block-title">{title}</h4>
        <p className="code-block-lang">Language: {language}</p>
      </div>
      <pre className="code-block">
        <code
          className={`hljs language-${language.toLowerCase()}`}
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </pre>
    </div>
  );
}

export default CodeBlock;
