import Link from 'next/link';
import React from 'react';
import LogoutOrLogin from './LogoutOrLogin';

const Navbar = () => {
  return (
    <nav className='bg-[#14397d] text-white p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <ul className='flex space-x-4'>
          <li>
            <Link href='/' className='hover:text-[#77b5d9] transition-colors'>
              Home
            </Link>
          </li>
          <li>
            <Link
              href='/saved-jokes'
              className='hover:text-[#77b5d9] transition-colors'>
              Saved Jokes
            </Link>
          </li>
        </ul>
        <div>
          <LogoutOrLogin />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
