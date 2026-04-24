import Button from "@/components/button";
import Link from "next/link";
import GiftsList from "./giftsList";
import { getPopularGifts } from "@/lib/queries/home/getPopularGifts";

export default async function GiftsSection() {
  const popularGifts = await getPopularGifts();

  return (
    <section
      className="relative py-16 md:py-20 px-4 text-center bg-brand-blue-pale flex flex-col items-center"
      id="gifts"
    >
      <div className="max-w-5xl mx-auto w-full">
        <span className="text-3xl mb-2 block" aria-hidden="true">
          🎁
        </span>
        <h2 className="font-heading text-brand-blue-dark text-3xl md:text-4xl font-bold mb-3">
          Nuestros Regalos Destacados
        </h2>
        <p className="text-brand-blue-dark/60 text-base md:text-lg mb-10 max-w-lg mx-auto">
          Cada regalo está pensado para crear momentos especiales e
          inolvidables
        </p>

        <GiftsList gifts={popularGifts} />

        <Link className="mt-12 inline-block" href="/catalog">
          <Button>Ver catálogo completo →</Button>
        </Link>
      </div>

      {/* Bottom wave */}
      <div className="wave-divider">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,80 C480,20 960,100 1440,40 L1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
