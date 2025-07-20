import { useState } from "react";
import GiftCard from "@/components/GiftCard";
import GiftModal from "@/components/GiftModal";
import Button from "@/components/Button";

const gifts = [
  { id: 1, name: "Regalo 1", description: "Descripción del Regalo 1" },
  { id: 2, name: "Regalo 2", description: "Descripción del Regalo 2" },
  { id: 3, name: "Regalo 3", description: "Descripción del Regalo 3" },
  { id: 4, name: "Regalo 4", description: "Descripción del Regalo 4" },
  { id: 5, name: "Regalo 5", description: "Descripción del Regalo 5" },
  { id: 6, name: "Regalo 6", description: "Descripción del Regalo 6" },
  { id: 7, name: "Regalo 7", description: "Descripción del Regalo 7" },
  { id: 8, name: "Regalo 8", description: "Descripción del Regalo 8" },
];

export default function GiftsSection() {
  const [isShowingAllGifts, setIsShowingAllGifts] = useState(false);
  const [selectedGift, setSelectedGift] = useState(null);

  const VISIBLE_COUNT = 3;
  const visibleGifts = isShowingAllGifts
    ? gifts
    : gifts.slice(0, VISIBLE_COUNT);
  const hasMoreGifts = gifts.length > VISIBLE_COUNT;

  return (
    <section className="gifts-section" id="gifts">
      <h2>Nuestros Regalos Destacados</h2>
      <div className="gifts-grid">
        {visibleGifts.map((gift) => (
          <GiftCard
            key={gift.id}
            name={gift.name}
            onClick={() => setSelectedGift(gift)}
          />
        ))}
      </div>
      {hasMoreGifts && (
        <Button onClick={() => setIsShowingAllGifts(!isShowingAllGifts)}>
          Ver {isShowingAllGifts ? "menos" : "más"}
        </Button>
      )}
      {selectedGift && (
        <GiftModal gift={selectedGift} onClose={() => setSelectedGift(null)} />
      )}
    </section>
  );
}
