import { SectionContainer } from '#root/components/SectionContainer';
import { Awards } from '#root/services/ContentLoader/types';
import React from 'react';

export { AwardsSection };

type AwardsSectionProps = { awards: Awards };
function AwardsSection({ awards }: AwardsSectionProps) {
  return (
    <SectionContainer title="Notable Achievements">
      <ul className="list-disc ml-5 space-y-0.5 mb-2">
        {awards.map((item, i) => (
          <li key={i} className="leading-snug">{item}</li>
        ))}
      </ul>
    </SectionContainer>
  );
}
