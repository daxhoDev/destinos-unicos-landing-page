import Link from "next/link";
import Image from "next/image";
import { Gift } from "@/types";

const CATEGORY_LABELS: Record<Gift["category"], string> = {
  ROMANTIC: "Romántico",
  SPECIAL_DATE: "Fecha Especial",
  BIRTHDAY: "Cumpleaños",
};

const CATEGORY_COLORS: Record<Gift["category"], string> = {
  ROMANTIC: "bg-pink-50 text-pink-700",
  SPECIAL_DATE: "bg-purple-50 text-purple-700",
  BIRTHDAY: "bg-amber-50 text-amber-700",
};

export function ProductCard({ gift }: { gift: Gift }) {
  return (
    <Link
      href={`/admin/products/${gift.id}`}
      className="group block bg-white rounded-xl border border-gray-100 hover:border-brand-blue-light hover:shadow-lg hover:shadow-brand-blue/5 transition-all duration-300 overflow-hidden"
    >
      {/* Product image */}
      <div className="relative w-full aspect-4/3 bg-gray-100 overflow-hidden">
        {gift.imageUrl ? (
          <Image
            src={gift.imageUrl}
            alt={gift.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="8" width="18" height="4" rx="1" />
              <path d="M12 8v13" />
              <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
            </svg>
          </div>
        )}

        {/* Status badge overlaid on image */}
        <span
          className={`absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
            gift.is_active
              ? "bg-emerald-500/90 text-white"
              : "bg-gray-800/70 text-gray-200"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              gift.is_active ? "bg-white" : "bg-gray-400"
            }`}
          />
          {gift.is_active ? "Activo" : "Inactivo"}
        </span>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-900 truncate group-hover:text-brand-blue transition-colors">
          {gift.name}
        </h3>
        <p className="mt-1 text-xs text-gray-500 line-clamp-2">
          {gift.description}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <span
            className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${CATEGORY_COLORS[gift.category]}`}
          >
            {CATEGORY_LABELS[gift.category]}
          </span>
          <span className="text-sm font-bold text-gray-900">
            ${gift.price.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Bottom hover indicator */}
      <div className="h-0.5 bg-linear-to-r from-brand-blue to-brand-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </Link>
  );
}
