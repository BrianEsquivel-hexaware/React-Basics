interface CodeBlockProps {
  title: string;
  code: string;
  language: string;
}

function CodeBlock({ title, code, language }: CodeBlockProps) {
  return (
    <div className="code-block-wrapper">
      <div className="code-block-header">
        <h4 className="code-block-title">{title}</h4><br/>
        <span className="code-block-lang">Language: {language}</span>
      </div>
      <pre className="code-block">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default CodeBlock;
