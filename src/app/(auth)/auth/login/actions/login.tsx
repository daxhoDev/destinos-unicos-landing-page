"use server";

import { login } from "@/lib/queries/auth/login";
import { redirect } from "next/navigation";

export async function handleLogin(
  prevState: { success: boolean; error: string } | null,
  formData: FormData
) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return { success: false, error: "Email y contraseña son requeridos" };
  }

  const result = await login(email as string, password as string);

  if (result.error) {
    console.error("Error al iniciar sesión:", result.error);
    return { success: false, error: result.error.message };
  }

  redirect("/admin");
}
