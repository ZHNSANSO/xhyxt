import React, { useMemo, ElementType } from 'react';
import katex from 'katex';

interface MathRendererProps {
  content: string;
  className?: string;
  as?: ElementType;
}

const MathRenderer: React.FC<MathRendererProps> = ({ content, className, as: Component = 'div' }) => {
  // Use useMemo to process the string only when content changes
  const html = useMemo(() => {
    // Regex to find content between $ delimiters
    // We expect content like: "This is a formula $E=mc^2$ in text."
    return content.replace(/\$([^$]+)\$/g, (match, math) => {
      try {
        return katex.renderToString(math, {
          throwOnError: false,
          displayMode: false, // Inline math by default for smoother text flow
        });
      } catch (err) {
        console.error("KaTeX rendering error:", err);
        return match;
      }
    });
  }, [content]);

  return (
    <Component 
      className={className} 
      dangerouslySetInnerHTML={{ __html: html }} 
    />
  );
};

export default MathRenderer;