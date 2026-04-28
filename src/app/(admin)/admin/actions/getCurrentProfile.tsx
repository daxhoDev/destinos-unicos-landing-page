"use server";

import { getCurrentProfile } from "@/lib/queries/getCurrentProfile";

export async function getCurrentProfileAction() {
  const profile = await getCurrentProfile();
  return profile?.profile;
}
