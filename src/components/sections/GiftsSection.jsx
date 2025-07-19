import { useState } from 'react';
import GiftCard from '@/components/cards/GiftCard';
import GiftModal from '@/components/GiftModal';

const gifts = [
  { id: 1, name: 'Regalo 1', description: 'Descripción del Regalo 1' },
  { id: 2, name: 'Regalo 2', description: 'Descripción del Regalo 2' },
  { id: 3, name: 'Regalo 3', description: 'Descripción del Regalo 3' },
  { id: 4, name: 'Regalo 4', description: 'Descripción del Regalo 4' },
  { id: 5, name: 'Regalo 5', description: 'Descripción del Regalo 5' },
  { id: 6, name: 'Regalo 6', description: 'Descripción del Regalo 6' },
  { id: 7, name: 'Regalo 7', description: 'Descripción del Regalo 7' },
  { id: 8, name: 'Regalo 8', description: 'Descripción del Regalo 8' },
];


export default function GiftsSection() {
  const [showAll, setShowAll] = useState(false);
  const [selectedGift, setSelectedGift] = useState(null);

  const visibleCount = 3;
  const visibleGifts = showAll ? gifts : gifts.slice(0, visibleCount);
  const hasMore = gifts.length > visibleCount && !showAll;
  const canShowLess = showAll && gifts.length > visibleCount;

  return (
    <section className="gifts-section" id="gifts">
      <h2>Nuestros Regalos Destacados</h2>
      <div className="gifts-grid">
        {visibleGifts.map(gift => (
          <GiftCard key={gift.id} name={gift.name} onClick={() => setSelectedGift(gift)} />
        ))}
      </div>
      {hasMore && (
        <div style={{ marginTop: '1.5rem' }}>
          <button className="see-more-btn" onClick={() => setShowAll(true)}>
            Ver más
          </button>
        </div>
      )}
      {canShowLess && (
        <div style={{ marginTop: '1.5rem' }}>
          <button className="see-more-btn" onClick={() => setShowAll(false)}>
            Ver menos
          </button>
        </div>
      )}
      {selectedGift && (
        <GiftModal
          gift={selectedGift}
          onClose={() => setSelectedGift(null)}
        />
      )}
    </section>
  );
}