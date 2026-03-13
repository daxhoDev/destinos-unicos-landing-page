"use client";

import HeroSection from "@/components/HeroSection";
import GiftsSection from "@/components/GiftsSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import { gifts } from "@/data";
import GiftCard from "@/components/GiftCard";
import { useState } from "react";
import { Gift } from "@/types";
import GiftModal from "@/components/GiftModal";

export default function Home() {
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);

  function handleSelectGift(gift: Gift) {
    setSelectedGift(gift);
  }

  function handleCloseModal() {
    setSelectedGift(null);
  }

  return (
    <main>
      <HeroSection />
      <GiftsSection>
        {gifts.slice(0, 3).map((gift) => (
          <GiftCard
            key={gift.id}
            gift={gift}
            onSelectGift={() => handleSelectGift(gift)}
          />
        ))}
        {selectedGift && (
          <GiftModal gift={selectedGift} onCloseModal={handleCloseModal} />
        )}
      </GiftsSection>
      <AboutSection />
      <ReviewsSection />
    </main>
  );
}
