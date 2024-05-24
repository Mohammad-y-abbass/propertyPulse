'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo-white.png';
import profileDefault from '@/assets/images/profile.png';
import { FaGoogle } from 'react-icons/fa';
import NavItems from './NavItems';
import MobileNav from './mobileNav';

const Navbar = () => {
  const [menu, setMenu] = useState('hidden');
  const [profileMenu, setProfileMenu] = useState('hidden');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setMenu(menu === 'hidden' ? 'block' : 'hidden');
  };

  const toggleProfileMenu = () => {
    setProfileMenu(profileMenu === 'hidden' ? 'block' : 'hidden');
  };

  return (
    <nav className='bg-blue-700 border-b border-blue-500'>
      <div className='px-2 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-20'>
          <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
            <button
              type='button'
              id='mobile-dropdown-button'
              className='relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
              onClick={toggleMenu}
            >
              <span className='absolute -inset-0.5'></span>
              <span className='sr-only'>Open main menu</span>
              <svg
                className='block w-6 h-6'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </button>
          </div>

          <div className='flex items-center justify-center flex-1 md:items-stretch md:justify-start'>
            <Link className='flex items-center flex-shrink-0' href='/'>
              <Image
                className='w-auto h-10'
                src={logo}
                width={100}
                height={100}
                alt='PropertyPulse'
              />
              <span className='hidden ml-2 text-2xl font-bold text-white md:block'>
                PropertyPulse
              </span>
            </Link>
            <div className='hidden md:ml-6 md:block'>
              {/* <NavItems flexDirection='flex-row' /> */}
            </div>
          </div>
          {!isLoggedIn && (
            <div className='hidden md:block md:ml-6'>
              <div className='flex items-center'>
                <button className='flex items-center px-3 py-2 text-white bg-gray-700 rounded-md hover:bg-gray-900 hover:text-white'>
                  <FaGoogle className='mr-2 text-white' />
                  <span>Login or Register</span>
                </button>
              </div>
            </div>
          )}
          {isLoggedIn && (
            <div className='absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0'>
              <Link href='/messages' className='relative group'>
                <button
                  type='button'
                  className='relative p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                >
                  <span className='absolute -inset-1.5'></span>
                  <span className='sr-only'>View notifications</span>
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
                    />
                  </svg>
                </button>
                <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full'>
                  2
                </span>
              </Link>
              <div className='relative ml-3'>
                <div>
                  <button
                    type='button'
                    className='relative flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                    id='user-menu-button'
                    aria-expanded='false'
                    aria-haspopup='true'
                    onClick={toggleProfileMenu}
                  >
                    <span className='absolute -inset-1.5'></span>
                    <span className='sr-only'>Open user menu</span>
                    <Image
                      className='w-8 h-8 rounded-full'
                      src={profileDefault}
                      width={40}
                      height={40}
                      alt='Profile Picture'
                    />
                  </button>
                </div>

                <div
                  id='user-menu'
                  className={`absolute right-0 z-10 ${profileMenu} w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                  role='menu'
                  aria-orientation='vertical'
                  aria-labelledby='user-menu-button'
                  tabIndex='-1'
                >
                  <Link
                    href='/profile'
                    className='block px-4 py-2 text-sm text-gray-700'
                    role='menuitem'
                    tabIndex='-1'
                    id='user-menu-item-0'
                  >
                    Your Profile
                  </Link>
                  <Link
                    href='/properties/saved'
                    className='block px-4 py-2 text-sm text-gray-700'
                    role='menuitem'
                    tabIndex='-1'
                    id='user-menu-item-2'
                  >
                    Saved Properties
                  </Link>
                  <button
                    className='block px-4 py-2 text-sm text-gray-700'
                    role='menuitem'
                    tabIndex='-1'
                    id='user-menu-item-2'
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <MobileNav menu={menu} />
    </nav>
  );
};

export default Navbar;
