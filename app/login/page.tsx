'use client';

import { useState } from 'react';
import { login, signup } from './actions';

export default function LoginPage() {
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [clickedSignUp, setClickedSignUp] = useState(false);

  const handleClick = () => {
    if (isSigningUp) {
      setClickedSignUp(true);
    }
  };
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-[#d7eaf3] p-4'>
      <form className='bg-white p-8 rounded-lg shadow-lg max-w-sm w-full'>
        <h2 className='text-2xl font-bold text-[#14397d] mb-6 text-center'>
          {isSigningUp ? 'Sign Up' : 'Login'}
        </h2>
        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block text-lg font-semibold text-[#14397d] mb-2'>
            Email:
          </label>
          <input
            id='email'
            name='email'
            type='email'
            required
            className='text-black w-full p-2 border border-[#77b5d9] rounded focus:outline-none focus:ring-2 focus:ring-[#77b5d9]'
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='password'
            className='block text-lg font-semibold text-[#14397d] mb-2'>
            Password:
          </label>
          <input
            id='password'
            name='password'
            type='password'
            required
            className='text-black w-full p-2 border border-[#77b5d9] rounded focus:outline-none focus:ring-2 focus:ring-[#77b5d9]'
          />
        </div>
        <div className='flex space-x-4 mb-4'>
          <button
            onClick={handleClick}
            formAction={isSigningUp ? signup : login}
            className='w-full bg-[#77b5d9] text-white py-2 rounded hover:bg-[#14397d] transition-colors'>
            {isSigningUp ? 'Sign up' : 'Log in'}
          </button>
        </div>
        {clickedSignUp && (
          <div className='text-sm text-[#14397d] mt-4'>
            Sign-up link sent! Please check your email to confirm.
          </div>
        )}
      </form>
      <div className='mt-4 text-center'>
        {isSigningUp ? (
          <p className='text-[#14397d]'>
            Already have an account?{' '}
            <button
              onClick={() => setIsSigningUp(false)}
              className='text-[#77b5d9] underline hover:text-[#14397d]'>
              Log In
            </button>
          </p>
        ) : (
          <p className='text-[#14397d]'>
            Don’t have an account?{' '}
            <button
              onClick={() => setIsSigningUp(true)}
              className='text-[#77b5d9] underline hover:text-[#14397d]'>
              Sign Up
            </button>
          </p>
        )}
      </div>
    </div>
  );
}
