import React from 'react';
import { createClient } from '../utils/supabase/server';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import the LogoutButton to load only on the client-side
const LogoutButton = dynamic(() => import('../components/LogoutButton'), {
  ssr: false,
});

const LogoutOrLogin = async () => {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();

  // If the user is logged in, show the logout button
  if (data.user) {
    return <LogoutButton />;
  }

  // If the user is not logged in, show the login link
  return (
    <Link
      href='/login'
      className='bg-[#77b5d9] text-white py-2 px-4 rounded-lg hover:bg-[#14397d] transition-colors'>
      Login
    </Link>
  );
};

export default LogoutOrLogin;
