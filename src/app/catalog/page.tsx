"use client";

import GiftCard from "@/components/giftCard";
import { useState } from "react";
import { gifts } from "@/data";
import type { Gift } from "@/types";
import GiftModal from "@/components/giftModal";

const categories = [
  { key: "romanticos", label: "Románticos" },
  { key: "fechas", label: "Fechas Especiales" },
  { key: "cumpleaños", label: "Cumpleaños" },
];

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState("romanticos");
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);

  function handleSelectGift(gift: Gift) {
    setSelectedGift(gift);
  }

  function handleCloseModal() {
    setSelectedGift(null);
  }

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
                ? "bg-linear-to-r from-blue-500 to-pink-400 text-white border-blue-500"
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
            <GiftCard
              key={gift.id}
              gift={gift}
              onSelectGift={() => handleSelectGift(gift)}
            />
          ))}
      </div>
      <p className="mt-8 text-gray-500">
        ¿Buscas algo diferente? ¡Contáctanos para opciones personalizadas!
      </p>
      {selectedGift && (
        <GiftModal gift={selectedGift} onCloseModal={handleCloseModal} />
      )}
    </section>
  );
}
