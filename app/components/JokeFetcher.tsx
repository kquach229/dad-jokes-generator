'use client';

import { useEffect, useState } from 'react';
import { saveJoke } from '../data/joke/actions';
import { User } from '@supabase/supabase-js';

interface JokeFetcherProps {
  user: User | null;
}

const JokeFetcher = ({ user }: JokeFetcherProps) => {
  const [joke, setJoke] = useState<string>('');

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          Accept: 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      console.error('Error fetching joke:', error);
      setJoke('Failed to fetch joke'); // Optional: handle errors gracefully
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  const saveJokeText = user ? 'Save Joke' : 'Login to Start Saving Jokes';

  return (
    <div className='w-full flex flex-col items-center justify-center min-h-screen bg-[#d7eaf3] text-[#14397d] p-4'>
      <div className='bg-[#77b5d9] text-white p-6 rounded-lg shadow-lg w-full max-w-xl text-center'>
        <p className='text-lg mb-4'>{joke || '...loading joke...'}</p>
        <p className='flex justify-center gap-2 m-auto'>
          <button
            onClick={fetchJoke}
            className='bg-[#14397d] text-white py-2 px-6 rounded-lg hover:bg-[#0f2f6a] transition-colors'>
            Next Joke
          </button>
          <button
            onClick={async () => {
              // Save joke function
              if (!user) return;
              await saveJoke(joke);
              alert('joke saved!');
            }}
            disabled={!user}
            className={`${
              !user ? 'bg-gray-700 hover:bg-gray-700' : 'bg-[#14397d]'
            }  text-white py-2 px-6 rounded-lg hover:bg-[#0f2f6a] transition-colors`}>
            {saveJokeText}
          </button>
        </p>
      </div>
    </div>
  );
};

export default JokeFetcher;
