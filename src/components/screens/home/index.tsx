import React from 'react';
import { ContactFormDialog } from './ContactFormDialog';

const Index = () => {
  return (
    <>
      <div className="relative min-h-screen w-full flex flex-col justify-end items-center lg:items-end overflow-hidden">
        {/* Background for Mobile */}
        <div
          className="absolute inset-0 bg-cover bg-center lg:hidden"
          style={{
            backgroundImage: `url('/images/mobile-background.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        {/* Background for screens between 1025px to 1300px */}
        <div
          className="absolute inset-0 hidden lg:block xl:hidden bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/background.jpg')`, // Image for screens between 1025px and 1300px
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        {/* Background for screens above 1300px */}
        <div
          className="absolute inset-0 hidden xl:block bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/desktop-background.jpg')`,  
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        {/* Content Container */}
        <div className="relative z-10 text-darkGreyColor flex flex-col items-center lg:items-start text-left max-w-sm lg:max-w-lg pb-20 bottom-12 lg:right-48 xl:right-52 
        2xl:right-64 2xl:bottom-20  xl-2:right-96 xl-2:bottom-44 ">
          <h1 className="text-3xl lg:text-5xl xl:text-6xl xl-2:text-7xl   md:text-4xl font-bold mb-4">Cloud Shapers</h1>
          <p className="md:text-lg lg:text-xl mb-7 xl-2:text-3xl">Imagine the future, then build it</p>
          <ContactFormDialog />
        </div>
      </div>
    </>
  );
};

export default Index;
