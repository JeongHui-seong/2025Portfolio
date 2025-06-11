import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabase = createClient('https://yyyteojoqgajfcbkmhdu.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5eXRlb2pvcWdhamZjYmttaGR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2NDExODgsImV4cCI6MjA2NTIxNzE4OH0.w-e8t4YmIgzUO-TjuICPDfA5DqJlX8vvboQkv-Bllc8');

export default supabase;