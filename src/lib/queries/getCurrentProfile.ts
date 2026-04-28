import { Profile } from "@/types";
import { createSupabaseServer } from "../supabase";

export async function getCurrentProfile() {
  const supabase = await createSupabaseServer();
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.error("Error fetching user:", error.message);
    return null;
  }

  const { data: profileData, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", data.user?.id)
    .single();

  if (profileError) {
    console.error("Error fetching profile:", profileError.message);
    return null;
  }

  const profile: Profile = {
    created_at: profileData.created_at,
    id: profileData.id,
    name: profileData.name,
    email: data.user.email as string,
    role: profileData.role,
  };

  return {
    profile,
  };
}