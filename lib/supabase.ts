import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.PUBLISHABLE_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

// For server-side operations that need admin access
export const supabaseAdmin = createClient(
  supabaseUrl,
  process.env.SECRET_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);

