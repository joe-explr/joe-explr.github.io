'use client';

import ReactMarkdown from 'react-markdown';

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <ReactMarkdown
      components={{
        h1: ({ children }) => (
          <h1 className="font-serif text-2xl font-medium text-stone-900 mt-12 mb-5 tracking-tight">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="font-serif text-xl font-medium text-stone-900 mt-12 mb-4 tracking-tight">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="font-serif text-lg font-medium text-stone-800 mt-8 mb-3">
            {children}
          </h3>
        ),
        p: ({ children }) => (
          <p className="mb-5 text-stone-600 leading-relaxed">{children}</p>
        ),
        ul: ({ children }) => (
          <ul className="list-disc list-outside ml-5 mb-5 space-y-2">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal list-outside ml-5 mb-5 space-y-2">
            {children}
          </ol>
        ),
        li: ({ children }) => (
          <li className="text-stone-600 pl-1">{children}</li>
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            className="text-stone-800 underline underline-offset-2 decoration-stone-300 hover:decoration-stone-500 transition-colors"
            target={href?.startsWith('http') ? '_blank' : undefined}
            rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {children}
          </a>
        ),
        code: ({ className, children }) => {
          const isInline = !className;
          if (isInline) {
            return (
              <code className="bg-stone-100 px-1.5 py-0.5 rounded text-sm font-mono text-stone-700">
                {children}
              </code>
            );
          }
          return <code className="text-sm font-mono">{children}</code>;
        },
        pre: ({ children }) => (
          <pre className="bg-stone-100 text-stone-800 p-5 rounded-lg overflow-x-auto mb-5 text-sm">
            {children}
          </pre>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-2 border-stone-300 pl-5 italic text-stone-500 my-6 font-serif">
            {children}
          </blockquote>
        ),
        hr: () => <hr className="my-12 border-stone-200" />,
        img: ({ src, alt }) => (
          <figure className="my-8">
            <img
              src={src}
              alt={alt || ''}
              className="rounded-lg w-full shadow-sm border border-stone-200"
            />
            {alt && (
              <figcaption className="text-center text-sm text-stone-400 mt-3 italic">
                {alt}
              </figcaption>
            )}
          </figure>
        ),
        strong: ({ children }) => (
          <strong className="font-medium text-stone-800">{children}</strong>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
