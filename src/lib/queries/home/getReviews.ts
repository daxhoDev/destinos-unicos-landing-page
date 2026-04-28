import {createSupabaseServer } from "@/lib/supabase";
import { Review } from "@/types";

export async function getReviews() {
  const supabase = await createSupabaseServer();
  const { data, error } = await supabase
    .from("reviews")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: false });
  if (error) return [];

  const serializedData = data.map((review) => ({
    id: review.id,
    text: review.text,
    client: review.client,
    imageUrl: review.image_url,
  }));

  return serializedData as Review[];
};