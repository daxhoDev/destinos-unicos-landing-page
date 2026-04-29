import Link from "next/link";
import { notFound } from "next/navigation";
import { getGiftById } from "@/lib/queries/admin/getGiftById";
import { ProductForm } from "@/components/admin/ProductForm";

export default async function ProductEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const gift = await getGiftById(Number(id));

  if (!gift) {
    notFound();
  }

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Link href="/admin" className="hover:text-brand-blue transition-colors">
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
        <Link
          href="/admin/products"
          className="hover:text-brand-blue transition-colors"
        >
          Productos
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
        <span className="text-gray-900 font-medium truncate max-w-[200px]">
          {gift.name}
        </span>
      </div>

      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Editar producto</h1>
        <p className="mt-1 text-sm text-gray-500">
          Modifica la información de &quot;{gift.name}&quot;
        </p>
      </div>

      {/* Form card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 max-w-2xl">
        <ProductForm gift={gift} />
      </div>
    </div>
  );
}
