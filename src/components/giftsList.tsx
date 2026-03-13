"use client";

import { useState } from "react";
import GiftCard from "./giftCard";
import GiftModal from "./giftModal";
import type { Gift } from "@/types";

interface Props {
  selectedCategory?: Gift["category"];
  gifts: Gift[];
}

export default function GiftsList({ selectedCategory, gifts }: Props) {
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);

  function handleSelectGift(gift: Gift) {
    setSelectedGift(gift);
  }

  function handleCloseModal() {
    setSelectedGift(null);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
      {gifts
        .filter((g) => !selectedCategory || g.category === selectedCategory)
        .map((gift) => (
          <GiftCard
            key={gift.id}
            gift={gift}
            onSelectGift={() => handleSelectGift(gift)}
          />
        ))}
      {selectedGift && (
        <GiftModal gift={selectedGift} onCloseModal={handleCloseModal} />
      )}
    </div>
  );
}
