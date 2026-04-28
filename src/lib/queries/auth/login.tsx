import { createSupabaseServer } from "@/lib/supabase";

export async function login(email: string, password: string) {
  const supabase = await createSupabaseServer();
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) return { error };
  return { data };
}
