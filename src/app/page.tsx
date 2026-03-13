"use client";

import HeroSection from "@/components/heroSection";
import GiftsSection from "@/components/giftsSection";
import AboutSection from "@/components/aboutSection";
import ReviewsSection from "@/components/reviewsSection";
import { gifts } from "@/data";
import GiftCard from "@/components/giftCard";
import { useState } from "react";
import { Gift } from "@/types";
import GiftModal from "@/components/giftModal";

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
