import { SectionContainer } from '#root/components/SectionContainer';
import { AdditionalExperience as AdditionalExperienceType } from '#root/services/ContentLoader/types';
import React from 'react';

export { AdditionalExperience };

type AdditionalExperienceProps = { additionalExperience: AdditionalExperienceType };
function AdditionalExperience({ additionalExperience }: AdditionalExperienceProps) {
  return (
    <SectionContainer title="Open Source & Projects">
      <ul className="list-disc ml-5 space-y-1.5 mb-2">
        {additionalExperience.map((item, i) => (
          <li key={i} className="leading-snug">{item}</li>
        ))}
      </ul>
    </SectionContainer>
  );
}
