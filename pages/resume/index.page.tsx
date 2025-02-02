import React from 'react';
import { Header } from './components/Header';
import { AddressBar, NavLink } from './components/AddressBar';
import { EmploymentSection } from './components/EmploymentSection';
import { AwardsSection } from './components/AwardsSection';
import { EducationSection } from './components/EducationSection';
import { DocumentProps, PageProps } from '#root/renderer/types';
import {
  AdditionalExperience as AdditionalExperienceType,
  Awards,
  BasicInfo,
  Education,
  Work,
} from '#root/services/ContentLoader/types';
import { AdditionalExperience } from './components/AdditionalExperience';
export { Page };
export { ShowcaseLayout as Layout } from '#root/layouts/ShowcaseLayout';
export { SideTags as OutOfLayout } from './components/SideTags';
export { DeploymentInfo as Footer } from './components/DeploymentInfo';

export const documentProps: DocumentProps = {
  title: 'Kamal Eddin Alhumsi - Résumé',
  description:
    'The résumé of Kamal Eddin Alhumsi - Built using vite-plugin-ssr and react.',
};

export type ResumePageProps = PageProps & {
  basicInfo: BasicInfo;
  work: Work[];
  awards: Awards;
  education: Education[];
  additionalExperience: AdditionalExperienceType;
};

function Page({
  basicInfo,
  work,
  awards,
  education,
  additionalExperience,
}: ResumePageProps) {
  const { profiles, email, ...basicInfoNoProfiles } = basicInfo;

  return (
    <>
      <base target="_blank"></base>
      <Header basicInfo={basicInfoNoProfiles} />
      <div className='grid grid-cols-3 grid-rows-1 mt-4 mb-4 sm:mt-10 print:mt-11'>
        <div className='flex col-span-1'>
          <NavLink href={email.url} icon={email.icon}>
            {email.username}
          </NavLink>
          <div className='flex justify-center w-full'>
            <span className="invisible sm:visible print:visible">|</span>
          </div>
        </div>
        <div className='col-span-2'>
          <AddressBar links={profiles} />
        </div>
      </div>
      <EmploymentSection work={work} />
      <AwardsSection awards={awards} />
      <AdditionalExperience additionalExperience={additionalExperience} />
    </>
  );
}
