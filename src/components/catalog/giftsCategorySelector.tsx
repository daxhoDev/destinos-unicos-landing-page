import { Gift } from "@/types";

const categories: { key: Gift["category"]; label: string }[] = [
  { key: "ROMANTIC", label: "Románticos" },
  { key: "SPECIAL_DATE", label: "Fechas Especiales" },
  { key: "BIRTHDAY", label: "Cumpleaños" },
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
    <div className="flex gap-4 mb-8 flex-wrap justify-center">
      {categories.map((cat) => (
        <button
          key={cat.key}
          className={`px-6 py-2 rounded-full font-bold border-2 transition-colors duration-200 text-lg cursor-pointer ${
            selectedCategory === cat.key
              ? "bg-linear-to-r from-blue-500 to-pink-400 text-white border-blue-500"
              : "bg-white text-blue-500 border-blue-300 hover:bg-blue-50"
          }`}
          onClick={() => setSelectedCategory(cat.key)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
