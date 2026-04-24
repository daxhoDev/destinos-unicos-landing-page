"use client";

import { useState } from "react";
import LoadingSpinner from "@/components/loadingSpinner";
import Image from "next/image";
import { Review } from "@/types";

interface Props {
  review: Review;
}

export default function ReviewCard({ review }: Props) {
  const [loading, setLoading] = useState(true);
  return (
    <div
      key={review.id}
      className="keen-slider__slide w-full flex justify-center px-3 py-4"
    >
      <div className="relative quote-decoration bg-white rounded-2xl shadow-lg shadow-brand-pink/5 p-8 flex flex-col items-center w-full h-full max-w-xl border border-brand-pink-light/30">
        {/* Avatar with gradient border */}
        <div className="w-20 h-20 md:w-28 md:h-28 rounded-full mb-4 p-[3px] bg-gradient-to-br from-brand-blue to-brand-pink">
          <div className="w-full h-full rounded-full overflow-hidden bg-white relative">
            {loading && <LoadingSpinner color="pink" />}
            <Image
              width={112}
              height={112}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                loading ? "opacity-0" : "opacity-100"
              }`}
              src={review.imageUrl || "/placeholder.jpg"}
              alt={`Foto de ${review.client}`}
              onLoad={() => setLoading(false)}
            />
          </div>
        </div>

        {/* Review text */}
        <p className="text-gray-600 md:text-lg italic mb-4 flex-1 flex items-center justify-center text-center leading-relaxed">
          &ldquo;{review.text}&rdquo;
        </p>

        {/* Client name */}
        <div className="flex items-center gap-2">
          <span className="w-6 h-[2px] bg-gradient-to-r from-brand-pink to-brand-blue rounded-full" />
          <span className="text-brand-blue-dark font-semibold">
            {review.client}
          </span>
          <span className="w-6 h-[2px] bg-gradient-to-r from-brand-blue to-brand-pink rounded-full" />
        </div>
      </div>
    </div>
  );
}
