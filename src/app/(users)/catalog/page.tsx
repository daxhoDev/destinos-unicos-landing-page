import GiftsMenu from "@/components/catalog/giftsMenu";
import { getGifts } from "@/lib/queries/getGifts";

export default async function Catalog() {
  const gifts = await getGifts();

  return (
    <section className="pt-24 pb-16 px-4 min-h-[80vh] bg-gradient-to-b from-brand-blue-pale to-white flex flex-col items-center">
      <span className="text-4xl mb-2 block" aria-hidden="true">
        🎁
      </span>
      <h2 className="font-heading text-brand-blue-dark mb-3 text-3xl md:text-4xl font-bold text-center">
        Catálogo de Regalos
      </h2>
      <p className="text-brand-blue-dark/60 text-base md:text-lg mb-10 max-w-lg mx-auto text-center">
        Explora nuestra colección completa de regalos y experiencias
      </p>
      <GiftsMenu gifts={gifts} />
      <div className="mt-12 text-center">
        <p className="text-gray-500 mb-2">¿Buscas algo diferente?</p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://wa.me/+5353540976?text=Hola,%20me%20gustaría%20encargar%20un%20regalo%20personalizado!"
          className="text-brand-pink font-semibold"
        >
          ¡Contáctanos para opciones personalizadas! 💬
        </a>
      </div>
    </section>
  );
}
