"use client";

import { useState } from "react";
import LoadingSpinner from "@/components/loadingSpinner";
import Image from "next/image";
import type { Gift } from "@/types";

interface Props {
  gift: Gift;
  onSelectGift: () => void;
}

export default function GiftCard({ gift, onSelectGift }: Props) {
  const [loading, setLoading] = useState(true);
  return (
    <div
      className="card-shine gradient-border bg-white rounded-2xl p-6 flex flex-col gap-4 items-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
      onClick={onSelectGift}
    >
      {/* Image with gradient ring */}
      <div className="relative w-44 h-44 rounded-2xl overflow-hidden bg-gradient-to-br from-brand-blue-pale to-brand-pink-pale flex items-center justify-center p-1">
        <div className="w-full h-full rounded-xl overflow-hidden bg-white relative">
          {loading && <LoadingSpinner color="blue" />}
          <Image
            width={176}
            height={176}
            src={gift.imageUrl || "/placeholder.jpg"}
            alt={gift.name}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={() => setLoading(false)}
          />
        </div>
      </div>

      {/* Name */}
      <h3 className="font-heading text-brand-blue-dark text-lg font-bold transition-colors duration-200 group-hover:text-brand-pink">
        {gift.name}
      </h3>

      {/* Price badge */}
      <span className="inline-flex items-center gap-1 bg-gradient-to-r from-brand-blue to-brand-pink text-white text-sm font-semibold px-4 py-1 rounded-full">
        ${gift.price}
      </span>
    </div>
  );
}
