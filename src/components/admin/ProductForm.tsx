"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Gift } from "@/types";
import {
  updateProductAction,
  toggleProductAction,
} from "@/app/(admin)/admin/actions/products";
import Image from "next/image";

const CATEGORY_OPTIONS: { value: Gift["category"]; label: string }[] = [
  { value: "ROMANTIC", label: "Romántico" },
  { value: "SPECIAL_DATE", label: "Fecha Especial" },
  { value: "BIRTHDAY", label: "Cumpleaños" },
];

export function ProductForm({ gift }: { gift: Gift }) {
  const router = useRouter();
  const [name, setName] = useState(gift.name);
  const [description, setDescription] = useState(gift.description);
  const [category, setCategory] = useState<Gift["category"]>(gift.category);
  const [price, setPrice] = useState(gift.price.toString());
  const [isActive, setIsActive] = useState(gift.is_active);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(
    gift.imageUrl || null,
  );
  const [saving, setSaving] = useState(false);
  const [toggling, setToggling] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);
    if (imageFile) {
      formData.append("image", imageFile);
    }

    const result = await updateProductAction(gift.id, formData);

    setSaving(false);

    if (result.success) {
      setMessage({
        type: "success",
        text: "Producto actualizado correctamente",
      });
      router.refresh();
    } else {
      setMessage({ type: "error", text: result.error });
    }
  };

  const handleToggle = async () => {
    setToggling(true);
    setMessage(null);

    const newStatus = !isActive;
    const result = await toggleProductAction(gift.id, newStatus);

    setToggling(false);

    if (result.success) {
      setIsActive(newStatus);
      setMessage({
        type: "success",
        text: newStatus ? "Producto habilitado" : "Producto deshabilitado",
      });
      router.refresh();
    } else {
      setMessage({ type: "error", text: result.error });
    }
  };

  return (
    <div className="space-y-6">
      {/* Status banner */}
      <div
        className={`flex items-center justify-between p-4 rounded-xl border ${
          isActive
            ? "bg-emerald-50 border-emerald-200"
            : "bg-gray-50 border-gray-200"
        }`}
      >
        <div className="flex items-center gap-3">
          <span
            className={`w-3 h-3 rounded-full ${
              isActive ? "bg-emerald-500 animate-pulse" : "bg-gray-400"
            }`}
          />
          <div>
            <p className="text-sm font-semibold text-gray-900">
              {isActive ? "Producto activo" : "Producto inactivo"}
            </p>
            <p className="text-xs text-gray-500">
              {isActive
                ? "Visible para los clientes en el catálogo"
                : "Oculto del catálogo público"}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleToggle}
          disabled={toggling}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-60 ${
            isActive
              ? "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
              : "bg-emerald-600 text-white hover:bg-emerald-700"
          }`}
        >
          {toggling ? "Procesando…" : isActive ? "Deshabilitar" : "Habilitar"}
        </button>
      </div>

      {/* Feedback message */}
      {message && (
        <div
          className={`p-3 rounded-lg text-sm font-medium animate-fade-in-up ${
            message.type === "success"
              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}
        >
          {message.text}
        </div>
      )}

      {/* Edit form */}
      <form onSubmit={handleSave} className="space-y-5">
        {/* Name */}
        <div>
          <label
            htmlFor="product-name"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            Nombre del producto
          </label>
          <input
            id="product-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all duration-200"
          />
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="product-description"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            Descripción
          </label>
          <textarea
            id="product-description"
            required
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all duration-200 resize-none"
          />
        </div>

        {/* Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Imagen del producto
          </label>
          {imagePreview && (
            <div className="mb-3">
              <Image
                src={imagePreview}
                alt="Vista previa"
                width={100}
                height={100}
                className="w-32 h-32 object-cover rounded-xl border border-gray-200 shadow-sm"
              />
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setImageFile(file);
                setImagePreview(URL.createObjectURL(file));
              }
            }}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-blue/10 file:text-brand-blue hover:file:bg-brand-blue/20 cursor-pointer"
          />
        </div>

        {/* Category + Price row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="product-category"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Categoría
            </label>
            <select
              id="product-category"
              value={category}
              onChange={(e) => setCategory(e.target.value as Gift["category"])}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all duration-200"
            >
              {CATEGORY_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="product-price"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Precio (CUP)
            </label>
            <input
              id="product-price"
              type="number"
              required
              min="0"
              step="100"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all duration-200"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-3 rounded-xl text-white text-sm font-semibold bg-gradient-to-r from-brand-blue to-brand-pink hover:shadow-lg hover:shadow-brand-pink/25 focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:ring-offset-2 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
          >
            {saving ? "Guardando…" : "Guardar cambios"}
          </button>

          <button
            type="button"
            onClick={() => router.push("/admin/products")}
            className="px-6 py-3 rounded-xl text-sm font-medium text-gray-600 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 cursor-pointer"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
