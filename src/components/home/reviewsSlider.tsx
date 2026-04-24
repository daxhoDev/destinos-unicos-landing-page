"use client";

import ReviewCard from "@/components/home/reviewCard";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { Review } from "@/types";

interface Props {
  reviews: Review[];
}

export default function ReviewsSlider({ reviews }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 0,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div ref={sliderRef} className="keen-slider">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-6 mt-4">
        <button
          className="w-10 h-10 rounded-full bg-white border-2 border-brand-pink/30 text-brand-pink hover:bg-brand-pink hover:text-white hover:border-brand-pink flex items-center justify-center shadow-sm transition-all duration-200 cursor-pointer"
          onClick={() => instanceRef.current?.prev()}
          aria-label="Anterior"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              className={`rounded-full transition-all duration-300 cursor-pointer border-none ${
                currentSlide === idx
                  ? "w-8 h-3 bg-gradient-to-r from-brand-pink to-brand-blue"
                  : "w-3 h-3 bg-brand-pink/25 hover:bg-brand-pink/50"
              }`}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              aria-label={`Ir a opinión ${idx + 1}`}
            />
          ))}
        </div>

        <button
          className="w-10 h-10 rounded-full bg-white border-2 border-brand-pink/30 text-brand-pink hover:bg-brand-pink hover:text-white hover:border-brand-pink flex items-center justify-center shadow-sm transition-all duration-200 cursor-pointer"
          onClick={() => instanceRef.current?.next()}
          aria-label="Siguiente"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
