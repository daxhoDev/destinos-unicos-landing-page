import GiftCard from "@/components/GiftCard";
import Button from "@/components/Button";
import { Link } from "react-router-dom";

export default function GiftsSection({ gifts, setSelectedGift }) {
  const visibleGifts = gifts.slice(0, 3);

  return (
    <section
      className="py-8 px-4 text-center bg-blue-50 flex flex-col items-center"
      id="gifts"
    >
      <h2 className="text-blue-500 mb-8 text-2xl font-bold">
        Nuestros Regalos Destacados
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-3xl mb-8">
        {visibleGifts.map((gift) => (
          <GiftCard
            key={gift.id}
            gift={gift}
            onClick={() => setSelectedGift(gift)}
          />
        ))}
      </div>
      <Link to="/catalog">
        <Button>Ver catálogo completo</Button>
      </Link>
    </section>
  );
}
