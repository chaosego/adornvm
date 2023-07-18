import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kiubjdmfcguvgiurzqpq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpdWJqZG1mY2d1dmdpdXJ6cXBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgzNzYyOTYsImV4cCI6MjAwMzk1MjI5Nn0.tEPuYlzQa7W1Ofp46gv96NuMllm60DC7xj7p9iFHiN0";

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables");
}
const supabase = createClient(supabaseUrl, supabaseKey, {auth: {persistSession: false}});

export { supabase };

