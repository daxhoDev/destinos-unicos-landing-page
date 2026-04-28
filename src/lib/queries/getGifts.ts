import { createSupabaseServer } from "@/lib/supabase";
import { Gift } from "@/types";

export async function getGifts() {
  const supabase = await createSupabaseServer();
  const { data, error } = await supabase
    .from("gifts")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: false });
  if (error) {
    console.error("Error fetching gifts:", error);
    return [];
  }

  const serializedData = data.map((gift) => ({
    id: gift.id,
    name: gift.name,
    description: gift.description,
    category: gift.category,
    price: gift.price,
    imageUrl: gift.image_url,
  }));

  return serializedData as Gift[];
};