import Link from "next/link";
import { getAllGifts } from "@/lib/queries/admin/gifts";
import { ProductCard } from "@/components/admin/ProductCard";

export default async function ProductsPage() {
  const gifts = await getAllGifts();

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <Link
              href="/admin"
              className="hover:text-brand-blue transition-colors"
            >
              Dashboard
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
            <span className="text-gray-900 font-medium">Productos</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Productos</h1>
          <p className="mt-1 text-sm text-gray-500">
            {gifts.length} producto{gifts.length !== 1 ? "s" : ""} en el
            catálogo
          </p>
        </div>
      </div>

      {/* Products grid */}
      {gifts.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gray-50 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9ca3af"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="8" width="18" height="4" rx="1" />
              <path d="M12 8v13" />
              <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
            </svg>
          </div>
          <p className="text-gray-500 text-sm">
            No hay productos en el catálogo
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gifts.map((gift) => (
            <ProductCard key={gift.id} gift={gift} />
          ))}
        </div>
      )}
    </div>
  );
}
