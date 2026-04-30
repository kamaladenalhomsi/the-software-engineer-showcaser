import React from 'react';
import ReactMarkdown from 'react-markdown';

export { SummarySection };

type SummarySectionProps = { summary: string };
function SummarySection({ summary }: SummarySectionProps) {
  return (
    <section className="mb-4 text-sm text-gray-700 space-y-2">
      <ReactMarkdown
        components={{
          p: ({ children }) => <p className="leading-snug">{children}</p>,
          a: ({ href, children }) => (
            <a href={href} target="_blank" className="underline">
              {children}
            </a>
          ),
        }}
      >
        {summary}
      </ReactMarkdown>
    </section>
  );
}
