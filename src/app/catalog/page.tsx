import GiftsMenu from "@/components/catalog/giftsMenu";
import { getGifts } from "@/lib/queries/getGifts";

export default async function Catalog() {
  const gifts = await getGifts();

  return (
    <section className="py-12 pt-20 px-4 min-h-[80vh] bg-white flex flex-col items-center">
      <h2 className="text-blue-500 mb-8 text-3xl font-bold text-center">
        Catálogo de Regalos
      </h2>
      <GiftsMenu gifts={gifts} />
      <p className="mt-8 text-gray-500">
        ¿Buscas algo diferente? ¡Contáctanos para opciones personalizadas!
      </p>
    </section>
  );
}
