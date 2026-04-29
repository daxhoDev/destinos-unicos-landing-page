import { createSupabaseServer } from "@/lib/supabase";
import { Gift } from "@/types";

/** Fetches ALL gifts including inactive ones (for admin use) */
export async function getAllGifts() {
  const supabase = await createSupabaseServer();
  const { data, error } = await supabase
    .from("gifts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching all gifts:", error);
    return [];
  }

  const serializedData = data.map((gift) => ({
    id: gift.id,
    name: gift.name,
    description: gift.description,
    category: gift.category,
    price: gift.price,
    imageUrl: gift.image_url,
    is_active: gift.is_active,
  }));

  return serializedData as Gift[];
}