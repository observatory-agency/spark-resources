import { createClient } from "@supabase/auth-helpers-sveltekit";
const PUBLIC_SUPABASE_URL = "https://qrytkwokbmeokwucomyj.supabase.co";
const PUBLIC_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFyeXRrd29rYm1lb2t3dWNvbXlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA5NTQzNjcsImV4cCI6MTk4NjUzMDM2N30.Ohw6AAWF0O6q12_TCwAaN7_Is8CGfFKv1hofxYJUGYA";
createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);
