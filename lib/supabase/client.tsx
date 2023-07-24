import { createClient } from '@supabase/supabase-js';

import { Database } from '../../types/supabase';

export const TEAM_UUID = process.env.NEXT_PUBLIC_TEAM_UUID || '';

const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
);

export default supabase;
