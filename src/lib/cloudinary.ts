import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Función para subir una imagen a Cloudinary
export async function uploadImage(imageBuffer: Buffer, folder: string) {
  try {
    // Convertir Buffer a base64
    const base64Image = `data:image/jpeg;base64,${imageBuffer.toString("base64")}`;

    // Subir imagen a Cloudinary
    const result = await cloudinary.uploader.upload(base64Image, {
      folder,
      resource_type: "image",
      //transformation: [{ width: 800, crop: "scale" }], // Opcional: redimensionar a 800px
    });

    return {
      success: true,
      url: result.secure_url,
      publicId: result.public_id,
    };
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    return {
      success: false,
      error: "Error al subir la imagen",
    };
  }
}

// Función para eliminar una imagen de Cloudinary
export async function deleteImage(publicId: string) {
  try {
    await cloudinary.uploader.destroy(publicId);
    return { success: true };
  } catch (error) {
    console.error("Error deleting from Cloudinary:", error);
    return { success: false };
  }
}

// Función para obtener una URL de imagen con parámetros
export function getImageUrl(publicId: string, width: number = 800) {
  return cloudinary.url(publicId, {
    width,
    crop: "scale",
    secure: true,
  });
}