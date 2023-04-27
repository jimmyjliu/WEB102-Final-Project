import { createClient } from '@supabase/supabase-js'
const URL = 'https://jjgxtkrvgdeqafijdjah.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqZ3h0a3J2Z2RlcWFmaWpkamFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI1NjIyMDcsImV4cCI6MTk5ODEzODIwN30.avq9__UBoCz6AB11ZrnS1NSlV_OMl5e7IaoqZcM_eCw';

export const supabase = createClient(URL, API_KEY);