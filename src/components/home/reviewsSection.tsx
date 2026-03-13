import ReviewsSlider from "./reviewsSlider";
import { getReviews } from "@/lib/queries/home/getReviews";

export default async function ReviewsSection() {
  const reviews = await getReviews();
  if (!reviews) return null;

  return (
    <section
      className="flex flex-col content-center gap-8 pt-8 px-4 pb-16 text-center bg-pink-50"
      id="reviews"
    >
      <h2 className="text-pink-400 text-2xl font-bold">
        Lo que dicen nuestros clientes
      </h2>
      <ReviewsSlider reviews={reviews} />
    </section>
  );
}
