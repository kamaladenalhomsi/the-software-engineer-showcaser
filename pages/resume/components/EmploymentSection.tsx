import { SectionContainer } from '#root/components/SectionContainer';
import { Work } from '#root/services/ContentLoader/types';
import {
  differenceInMonths,
  differenceInYears,
  startOfYear,
  format,
} from 'date-fns';
import React, { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';

export { EmploymentSection };

type EmploymentSectionProps = { work: Work[] };
function EmploymentSection({ work }: EmploymentSectionProps) {
  const subSections = work.map((job, index) => {
    const jobEndDate =
      job.endDate === 'PRESENT' ? new Date() : new Date(job.endDate);
    const jobStartDate = new Date(job.startDate);

    const diffInYears = useMemo(
      () => differenceInYears(jobEndDate, jobStartDate),
      [job],
    );
    const diffInMonths = useMemo(() => {
      const months =
        differenceInMonths(
          jobEndDate,
          diffInYears > 0 ? startOfYear(jobEndDate) : jobStartDate,
        ) + 1;
      return months + (months === 1 ? ' month' : ' months');
    }, [job]);

    const duration = useMemo(
      () => `${diffInYears > 0 ? diffInYears + ' years ' : ''}${diffInMonths}`,
      [diffInYears, diffInMonths],
    );

    const startLabel = format(jobStartDate, 'MMM yyyy');
    const endLabel =
      job.endDate === 'PRESENT' ? 'Present' : format(jobEndDate, 'MMM yyyy');

    return (
      <div className="mb-5" key={index}>
        <div className="flex items-baseline justify-between">
          <p className="font-bold text-lg">
            {job.position}
            <span className="text-lg font-normal text-gray-400 mx-2">|</span>
            {job.name}
          </p>
          <p className="text-xs sm:text-sm print:text-sm whitespace-nowrap ml-4 shrink-0">
            {startLabel} – {endLabel}
          </p>
        </div>

        {job.location && (
          <p className="italic text-xs sm:text-sm print:text-sm text-gray-600 mb-1">
            {job.location}
            {job.endDate !== 'PRESENT' && ` · ${duration}`}
          </p>
        )}

        <ul className="list-disc ml-5 mt-1 space-y-0.5">
          {job.highlights.map((point, i) => (
            <li key={i} className="leading-snug">
              <ReactMarkdown
                components={{ p: ({ children }) => <>{children}</> }}
              >
                {point}
              </ReactMarkdown>
            </li>
          ))}
        </ul>

        {job.stack && (
          <p className="italic text-xs sm:text-sm print:text-sm mt-1 text-gray-700">
            Stack: {job.stack}
          </p>
        )}
      </div>
    );
  });

  return (
    <SectionContainer title="Work Experience">{subSections}</SectionContainer>
  );
}
