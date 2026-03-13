"use client";

import ReviewCard from "@/components/home/reviewCard";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Review } from "@/types";

interface Props {
  reviews: Review[];
}

export default function ReviewsSlider({ reviews }: Props) {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 0,
    },
  });

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div ref={sliderRef} className="keen-slider">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
      <div className="flex justify-center gap-4">
        <button
          className="bg-pink-400 hover:bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md"
          onClick={() => instanceRef.current?.prev()}
          aria-label="Anterior"
        >
          &#8592;
        </button>
        <button
          className="bg-pink-400 hover:bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md"
          onClick={() => instanceRef.current?.next()}
          aria-label="Siguiente"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}
