import { BasicInfo, KernedLetter } from '#root/services/ContentLoader/types';
import React from 'react';

export { Header };

type HeaderProps = { basicInfo: Omit<BasicInfo, 'profiles' | 'email'> };
function Header({ basicInfo }: HeaderProps) {
  return (
    <>
      <header className="grid grid-cols-1 sm:grid-rows-1 grid-rows-2 items-center justify-between sm:grid-cols-6 sm:grid-rows-1 print:grid-cols-6 print:grid-rows-1 items-center">
        <div
          className="order-3 mt-4 text-center justify-center items-center text-lg
        sm:order-none sm:col-start-1 sm:col-end-2 sm:mt-auto sm:justify-self-start sm:text-sm
        print:order-none print:col-start-1 print:col-end-2 print:mt-auto print:justify-self-start print:text-sm"
        >
          <Address>
            {basicInfo.phone} <br />
          </Address>
        </div>
        <div
          className="order-2 mt-6 justify-self-center text-center
        sm:order-none sm:col-start-2 sm:col-end-6 sm:mt-auto
        print:order-none print:col-start-2 print:col-end-6 print:mt-auto"
        >
          <h1 className="text-6xl tracking-tighter text-center title sm:text-left print:text-left">
            <NameKerned kernedLetters={basicInfo.nameKerned} />
          </h1>
        </div>

        <div
          className="order-1 justify-self-center
        sm:relative sm:order-none sm:justify-self-auto
        print:relative print:order-none print:justify-self-auto"
        >
          <div className="sm:absolute sm:-top-12 sm:right-4 print:absolute print:-top-12 print:right-4">
            <ProfilePicture image={basicInfo.image} />
          </div>
        </div>
      </header>
    </>
  );
}

type NameKerned = { kernedLetters: KernedLetter[] };
function NameKerned({ kernedLetters }: NameKerned) {
  const title = kernedLetters.map((letter, index) => {
    return typeof letter === 'string' ? (
      <span key={index}>{letter}</span>
    ) : (
      <span style={{ letterSpacing: letter.letterSpacing }} key={index}>
        {letter.character}
      </span>
    );
  });
  return <>{title}</>;
}

type AddressProps = { children: React.ReactNode };
function Address({ children }: AddressProps) {
  return <address className="not-italic leading-5 text-lg">{children}</address>;
}

type ProfilePictureProps = { image: string };
function ProfilePicture({ image }: ProfilePictureProps) {
  return (
    <img
      className="object-cover object-bottom w-32 h-32 rounded-full sm:w-24 sm:h-24 print:w-24 print:h-24"
      src={image}
    />
  );
}
