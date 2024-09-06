import JokeFetcher from './components/JokeFetcher';
import { createClient } from './utils/supabase/server';
import { User } from '@supabase/supabase-js';

export default async function Home() {
  const supabase = createClient();

  // Fetch user data
  const { data } = await supabase.auth.getUser();

  // Type for `data` from Supabase
  const user: User | null = data?.user ?? null;

  return (
    <main className='bg-gray-800 min-h-screen flex items-center justify-center text-center text-white'>
      <JokeFetcher user={user} />
    </main>
  );
}
