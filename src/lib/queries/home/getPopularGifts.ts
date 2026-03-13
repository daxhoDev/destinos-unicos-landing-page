import supabase from "@/supabase";
import { Gift } from "@/types";

export const getPopularGifts = async () => {
  const { data, error } = await supabase
    .from("gifts")
    .select("*")
    .eq("is_active", true)
    .eq("is_popular", true)
    .limit(3)
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