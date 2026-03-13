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
      className="keen-slider__slide w-full flex justify-center px-2 py-4"
    >
      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center border-pink-100 md:justify-between w-full h-full max-w-xl">
        <div className="w-24 h-24 md:w-40 md:h-40 rounded-full mb-2 overflow-hidden bg-gray-100 flex items-center justify-center relative">
          {loading && <LoadingSpinner color="pink" />}
          <Image
            width={160}
            height={160}
            className={`w-full h-full object-cover flex items-center justify-center transition-opacity duration-300 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
            src={review.imageUrl || "/placeholder.jpg"}
            alt={`Picture of ${review.client}`}
            onLoad={() => setLoading(false)}
          />
        </div>
        <div className="text-blue-500 md:text-lg italic mb-2 flex-1 flex items-center justify-center text-center wrap-break-word">
          “{review.text}”
        </div>
        <div className="text-pink-400 font-bold mt-2">- {review.client}</div>
      </div>
    </div>
  );
}
