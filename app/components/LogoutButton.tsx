'use client';
import React from 'react';
import { logout } from '../logout/actions';

const LogoutButton = () => {
  return (
    <button
      onClick={() => logout()}
      className='bg-[#77b5d9] text-white py-2 px-4 rounded-lg hover:bg-[#14397d] transition-colors'>
      Logout
    </button>
  );
};

export default LogoutButton;
