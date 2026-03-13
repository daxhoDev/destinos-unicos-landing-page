import Button from "@/components/button";
import Link from "next/link";
import GiftsList from "./giftsList";
import { getPopularGifts } from "@/lib/queries/home/getPopularGifts";

export default async function GiftsSection() {
  const popularGifts = await getPopularGifts();

  return (
    <section
      className="py-8 px-4 text-center bg-blue-50 flex flex-col items-center"
      id="gifts"
    >
      <h2 className="text-blue-500 mb-8 text-2xl font-bold">
        Nuestros Regalos Destacados
      </h2>

      <GiftsList gifts={popularGifts} />

      <Link className="mt-8" href="/catalog">
        <Button>Ver catálogo completo</Button>
      </Link>
    </section>
  );
}
