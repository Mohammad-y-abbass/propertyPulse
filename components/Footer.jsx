import React from 'react';
import logo from '@/assets/images/logo.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='py-4 mt-24 bg-gray-200'>
      <div className='container flex flex-col items-center justify-between px-4 mx-auto md:flex-row'>
        <div className='mb-4 md:mb-0'>
          <Image
            src={logo}
            alt='Logo'
            width={80}
            height={80}
            className='w-auto h-8'
          />
        </div>
        <div className='flex flex-wrap justify-center mb-4 md:justify-start md:mb-0'>
          <ul className='flex space-x-4'>
            <li>
              <a href='/properties.html'>Properties</a>
            </li>
            <li>
              <a href='/terms.html'>Terms of Service</a>
            </li>
          </ul>
        </div>
        <div>
          <p className='mt-2 text-sm text-gray-500 md:mt-0'>
            &copy; 2024 PropertyPulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
