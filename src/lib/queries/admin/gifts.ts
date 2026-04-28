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
