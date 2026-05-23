import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://dchuorjrnigzlprzstqc.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjaHVvcmpybmlnemxwcnpzdHFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxNzYwNDksImV4cCI6MjA5NDc1MjA0OX0.h6tuUYCDdmYEulr1VVYLTvBbIywmxeQBHZA4f95Ct-A';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
