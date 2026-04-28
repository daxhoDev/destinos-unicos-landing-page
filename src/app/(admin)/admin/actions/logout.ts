"use server";

import { createSupabaseServer } from "@/lib/supabase";
import { redirect } from "next/navigation";

export async function logoutAction() {
  const supabase = await createSupabaseServer();
  await supabase.auth.signOut();
  redirect("/auth/login");
}
