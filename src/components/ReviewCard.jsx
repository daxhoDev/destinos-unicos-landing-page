import { useState } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function ReviewCard({ review }) {
  const [loading, setLoading] = useState(true);
  return (
    <div className="keen-slider__slide w-full flex justify-center px-2 py-4">
      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center border-pink-100 md:justify-between w-full h-full max-w-xl">
        <div className="w-24 h-24 md:w-40 md:h-40 rounded-full mb-2 overflow-hidden bg-gray-100 flex items-center justify-center relative">
          {loading && <LoadingSpinner color="pink" />}
          <img
            className={`w-full h-full object-cover flex items-center justify-center transition-opacity duration-300 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
            src={review.picture}
            alt={`Picture of ${review.client}`}
            onLoad={() => setLoading(false)}
          />
        </div>
        <div className="text-blue-500 md:text-lg italic mb-2 flex-1 flex items-center justify-center text-center break-words">
          “{review.text}”
        </div>
        <div className="text-pink-400 font-bold mt-2">- {review.client}</div>
      </div>
    </div>
  );
}
