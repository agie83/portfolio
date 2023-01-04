import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.png';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-8 pt-20 md:py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2 pr-0 md:pr-8'>
          <p className='uppercase text-xl tracking-widest text-main-color'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>

          <p className='py-2 text-gray-600'>
          I work as a full stack developer, planning the appearance and functions of websites 
          in consultation with my clients, taking into account the aspects of search engine optimization.
          I have about 10 years&apos; experience building software for clients.
          </p>
          <p className='text-gray-600'>
          Occasionally I also make catalogues, flyers, business cards or even undertake the production of 
          simpler videos from photos, audio and/or video materials.
          </p>

          <Link href='/projects'>
            <p className='pt-5 pb-2 text-gray-600 underline cursor-pointer'>
              Check out some of my projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto  rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
