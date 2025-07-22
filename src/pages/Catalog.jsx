import GiftCard from "@/components/GiftCard";
import { useState } from "react";

const gifts = [
  {
    id: 1,
    name: "Rosa Eterna",
    description: "Una rosa preservada para siempre.",
    category: "romanticos",
  },
  {
    id: 2,
    name: "Caja de Chocolates",
    description: "Dulces para compartir en pareja.",
    category: "romanticos",
  },
  {
    id: 3,
    name: "Taza Personalizada",
    description: "Ideal para cumpleaños.",
    category: "cumpleaños",
  },
  {
    id: 4,
    name: "Kit de Spa",
    description: "Perfecto para fechas especiales.",
    category: "fechas",
  },
  {
    id: 5,
    name: "Álbum de Recuerdos",
    description: "Para guardar momentos únicos.",
    category: "fechas",
  },
  {
    id: 6,
    name: "Globo con Mensaje",
    description: "Sorpresa para cumpleaños.",
    category: "cumpleaños",
  },
  {
    id: 7,
    name: "Cena Romántica",
    description: "Experiencia para dos.",
    category: "romanticos",
  },
  {
    id: 8,
    name: "Caja Sorpresa",
    description: "Llena de detalles para cualquier ocasión.",
    category: "fechas",
  },
];

const categories = [
  { key: "romanticos", label: "Románticos" },
  { key: "fechas", label: "Fechas Especiales" },
  { key: "cumpleaños", label: "Cumpleaños" },
];

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState("romanticos");
  return (
    <section className="py-12 pt-20 px-4 min-h-[80vh] bg-white flex flex-col items-center">
      <h2 className="text-blue-500 mb-8 text-3xl font-bold text-center">
        Catálogo de Regalos
      </h2>
      <div className="flex gap-4 mb-8 flex-wrap justify-center">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`px-6 py-2 rounded-full font-bold border-2 transition-colors duration-200 text-lg cursor-pointer ${
              selectedCategory === cat.key
                ? "bg-gradient-to-r from-blue-500 to-pink-400 text-white border-blue-500"
                : "bg-white text-blue-500 border-blue-300 hover:bg-blue-50"
            }`}
            onClick={() => setSelectedCategory(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {gifts
          .filter((g) => g.category === selectedCategory)
          .map((gift) => (
            <GiftCard key={gift.id} name={gift.name} onClick={() => {}} />
          ))}
      </div>
      <p className="mt-8 text-gray-500">
        ¿Buscas algo diferente? ¡Contáctanos para opciones personalizadas!
      </p>
    </section>
  );
}
