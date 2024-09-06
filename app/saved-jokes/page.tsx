import DeleteJokeButton from '../components/DeleteJokeButton';
import { createClient } from '../utils/supabase/server';

interface IJoke {
  id: number;
  created_at: string;
  joke_text: string;
  user_id: string;
}

const SavedJokes = async () => {
  const supabase = createClient();
  const { data: userData } = await supabase.auth.getUser();
  let jokes = [];
  if (userData.user) {
    const { data: jokesData, error } = await supabase.from('joke').select('*');
    if (error) {
      console.error('error fetching jokes:', error);
    }
    console.log('jokesData', jokesData);
    jokes = jokesData || [];
  }

  let header = 'Saved Jokes';

  if (!jokes.length) {
    header = 'Save some jokes to see your jokes';
  }

  if (!userData.user) {
    header = 'Login to see your favorite jokes';
  }

  return (
    <main className='flex flex-col items-center justify-center min-h-screen bg-[#d7eaf3] p-6'>
      <h1 className='text-3xl font-bold text-[#14397d] mb-6'>{header}</h1>
      <ul className='bg-white w-full max-w-2xl rounded-lg shadow-lg p-6 space-y-4'>
        {jokes.length ? (
          jokes.map((item) => (
            <li
              key={item.id}
              className='bg-[#77b5d9] text-white p-4 rounded-lg flex justify-between'>
              {item.joke_text}
              <DeleteJokeButton jokeId={item.id} />
            </li>
          ))
        ) : (
          <li className='text-[#14397d] text-center'>
            {userData.user
              ? 'No jokes saved yet!'
              : 'Please log in to view jokes.'}
          </li>
        )}
      </ul>
    </main>
  );
};

export default SavedJokes;
