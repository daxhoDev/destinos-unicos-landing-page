import "@/styles/globals.css";

export const metadata = {
  title: "Destinos Únicos — Regalos y Experiencias que Dejan Huella",
  description:
    "Descubre regalos originales y experiencias personalizadas para sorprender a quienes más quieres. Envíos en La Habana, Cuba.",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-white min-h-dvh flex flex-col">{children}</body>
    </html>
  );
}
