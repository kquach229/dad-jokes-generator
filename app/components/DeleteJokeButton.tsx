'use client';
import React from 'react';
import { deleteJoke } from '../data/joke/actions';

// Define the props for the component
interface DeleteJokeButtonProps {
  jokeId: number;
}

const DeleteJokeButton: React.FC<DeleteJokeButtonProps> = ({ jokeId }) => {
  return (
    <button
      onClick={() => deleteJoke(jokeId)}
      className='bg-[#d9534f] text-white px-4 py-2 rounded-full hover:bg-[#c9302c] transition-colors'>
      ✕
    </button>
  );
};

export default DeleteJokeButton;
