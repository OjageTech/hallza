import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wsydktapaafwfxzswymw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndzeWRrdGFwYWFmd2Z4enN3eW13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA3OTgyMDEsImV4cCI6MTk4NjM3NDIwMX0.fpmZeKAkNkuLaEYQdGPHEDI246bV_iT418zQ93A7agE';

export default createClient(supabaseUrl, supabaseAnonKey);
