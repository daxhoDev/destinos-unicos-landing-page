"use client";

import Button from "@/components/button";
import Link from "next/link";
import { useState } from "react";
import { Gift } from "@/types";
import GiftModal from "./giftModal";
import { gifts } from "@/data";
import GiftCard from "./giftCard";

export default function GiftsSection() {
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);

  function handleSelectGift(gift: Gift) {
    setSelectedGift(gift);
  }

  function handleCloseModal() {
    setSelectedGift(null);
  }

  return (
    <section
      className="py-8 px-4 text-center bg-blue-50 flex flex-col items-center"
      id="gifts"
    >
      <h2 className="text-blue-500 mb-8 text-2xl font-bold">
        Nuestros Regalos Destacados
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-3xl mb-8">
        {gifts.slice(0, 3).map((gift) => (
          <GiftCard
            key={gift.id}
            gift={gift}
            onSelectGift={() => handleSelectGift(gift)}
          />
        ))}
      </div>
      <Link href="/catalog">
        <Button>Ver catálogo completo</Button>
      </Link>
      {selectedGift && (
        <GiftModal gift={selectedGift} onCloseModal={handleCloseModal} />
      )}
    </section>
  );
}
