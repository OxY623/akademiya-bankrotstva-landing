import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ApplicationData {
  name: string;
  phone: string;
  email: string;
  city?: string;
  consent: boolean;
}

export async function submitApplication(data: ApplicationData) {
  const { error } = await supabase.from('applications').insert([
    {
      name: data.name,
      phone: data.phone,
      email: data.email,
      city: data.city || null,
      created_at: new Date().toISOString(),
    },
  ]);

  if (error) {
    console.error('Error submitting application:', error);
    throw error;
  }
}
