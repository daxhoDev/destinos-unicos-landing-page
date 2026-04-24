"use client";

import { Gift } from "@/types";

const categories: { key: Gift["category"]; label: string; emoji: string }[] = [
  { key: "ROMANTIC", label: "Románticos", emoji: "💕" },
  { key: "SPECIAL_DATE", label: "Fechas Especiales", emoji: "🎉" },
  { key: "BIRTHDAY", label: "Cumpleaños", emoji: "🎂" },
];

interface Props {
  selectedCategory: Gift["category"];
  setSelectedCategory: (category: Gift["category"]) => void;
}

export default function GiftsCategorySelector({
  selectedCategory,
  setSelectedCategory,
}: Props) {
  return (
    <div className="flex gap-3 mb-10 flex-wrap justify-center">
      {categories.map((cat) => (
        <button
          key={cat.key}
          className={`px-6 py-2.5 rounded-full font-semibold border-2 transition-all duration-300 text-[0.95rem] cursor-pointer flex items-center gap-2 ${
            selectedCategory === cat.key
              ? "btn-shimmer text-white border-transparent shadow-md shadow-brand-pink/20"
              : "bg-white text-brand-blue-dark border-gray-200 hover:border-brand-pink hover:text-brand-pink hover:shadow-sm"
          }`}
          onClick={() => setSelectedCategory(cat.key)}
        >
          <span>{cat.emoji}</span>
          {cat.label}
        </button>
      ))}
    </div>
  );
}
