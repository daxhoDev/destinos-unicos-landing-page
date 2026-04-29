"use server";

import { createSupabaseServer } from "@/lib/supabase";
import { revalidatePath } from "next/cache";
import { deleteImage, uploadImage } from "@/lib/cloudinary";

export async function updateProductAction(
  id: number,
  formData: FormData,
) {
  const supabase = await createSupabaseServer();

  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const category = formData.get("category") as string;
  const price = parseFloat(formData.get("price") as string);
  const image = formData.get("image") as File | null;

  const updateData: any = {
    name,
    description,
    category,
    price,
  };

  let uploadedPublicId: string | null = null;

  if (image && image.size > 0) {
    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const uploadResult = await uploadImage(buffer, "destinos-unicos/gifts");
    
    if (uploadResult.success && uploadResult.url) {
      updateData.image_url = uploadResult.url;
      uploadedPublicId = uploadResult.publicId;
    } else {
      return { success: false, error: uploadResult.error || "Error al subir la imagen" };
    }
  }

  const { error } = await supabase
    .from("gifts")
    .update(updateData)
    .eq("id", id);

  if (error) {
    if (uploadedPublicId) await deleteImage(uploadedPublicId);
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
