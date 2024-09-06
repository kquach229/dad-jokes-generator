'use server';

import { createClient } from '@/app/utils/supabase/server';
import { revalidatePath } from 'next/cache';

export async function saveJoke(joke: string) {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();

  const user = data.user;

  if (!user) {
    throw Error('Must be an authenticted user to perform this aciton.');
  }

  try {
    const { data, error } = await supabase
      .from('joke')
      .insert([{ user_id: user.id, joke_text: joke }]);

    if (error) {
      throw error;
    }
    revalidatePath('/saved-jokes');
    return data;
  } catch (error) {
    throw error;
  }
}

export async function deleteJoke(jokeId: number) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  const user = data.user;

  if (!user) {
    throw Error('must be an authenticated user to perform this action.');
  }

  try {
    const { data, error } = await supabase
      .from('joke')
      .delete()
      .match({ id: jokeId, user_id: user.id });
    if (error) throw error;

    revalidatePath('/saved-joke');
    return data;
  } catch (error) {
    throw error;
  }
}
