import { createSupabaseServer } from "@/lib/supabase";
import { Gift } from "@/types";

/** Fetches a single gift by ID */
export async function getGiftById(id: number) {
  const supabase = await createSupabaseServer();
  const { data, error } = await supabase
    .from("gifts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching gift:", error);
    return null;
  }

  return {
    id: data.id,
    name: data.name,
    description: data.description,
    category: data.category,
    price: data.price,
    imageUrl: data.image_url,
    is_active: data.is_active,
  } as Gift;
}