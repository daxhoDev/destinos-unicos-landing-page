import ReviewsSlider from "./reviewsSlider";
import { getReviews } from "@/lib/queries/home/getReviews";

export default async function ReviewsSection() {
  const reviews = await getReviews();
  if (!reviews) return null;

  return (
    <section
      className="relative flex flex-col items-center gap-8 py-16 md:py-20 px-4 text-center bg-gradient-to-b from-brand-pink-pale to-white overflow-hidden"
      id="reviews"
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 left-0 w-72 h-72 rounded-full bg-brand-pink-light opacity-20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-56 h-56 rounded-full bg-brand-blue-pale opacity-30 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-3xl">
        <span className="text-3xl mb-2 block" aria-hidden="true">
          ⭐
        </span>
        <h2 className="font-heading text-brand-blue-dark text-3xl md:text-4xl font-bold mb-3">
          Lo que dicen nuestros clientes
        </h2>
        <p className="text-brand-blue-dark/60 text-base md:text-lg mb-10 max-w-md mx-auto">
          La satisfacción de quienes confían en nosotros es nuestro mayor regalo
        </p>
        <ReviewsSlider reviews={reviews} />
      </div>
    </section>
  );
}
