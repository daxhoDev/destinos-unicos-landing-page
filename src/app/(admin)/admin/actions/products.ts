"use server";

import { createSupabaseServer } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function updateProductAction(
  id: number,
  formData: {
    name: string;
    description: string;
    category: "ROMANTIC" | "SPECIAL_DATE" | "BIRTHDAY";
    price: number;
  },
) {
  const supabase = await createSupabaseServer();

  const { error } = await supabase
    .from("gifts")
    .update({
      name: formData.name,
      description: formData.description,
      category: formData.category,
      price: formData.price,
    })
    .eq("id", id);

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath("/admin/products");
  revalidatePath(`/admin/products/${id}`);
  revalidatePath(`/`);
  revalidatePath(`/catalog`)
  return { success: true, error: "" };
}

export async function toggleProductAction(id: number, is_active: boolean) {
  const supabase = await createSupabaseServer();

  const { error } = await supabase
    .from("gifts")
    .update({ is_active })
    .eq("id", id);

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath("/admin/products");
  revalidatePath(`/admin/products/${id}`);
  revalidatePath(`/`);
  revalidatePath(`/catalog`)
  return { success: true, error: "" };
}
