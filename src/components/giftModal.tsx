"use client";

import Button from "@/components/button";
import Image from "next/image";
import { Gift } from "@/types";

interface Props {
  gift: Gift;
  onCloseModal: () => void;
}

export default function GiftModal({ gift, onCloseModal }: Props) {
  return (
    <div
      className="fixed inset-0 bg-brand-blue-deeper/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onCloseModal}
    >
      <div
        className="animate-scale-in bg-white rounded-3xl shadow-2xl flex flex-col items-center w-full max-w-lg p-0 overflow-hidden md:flex-row md:max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 md:top-5 md:right-5 w-9 h-9 rounded-full bg-white/90 shadow-md flex items-center justify-center text-brand-blue-dark/70 hover:text-brand-pink hover:bg-white cursor-pointer transition-all duration-200 z-10 border-none text-lg font-bold"
          onClick={onCloseModal}
          aria-label="Cerrar"
        >
          ✕
        </button>

        {/* Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto md:min-h-100 relative overflow-hidden bg-linear-to-br from-brand-blue to-brand-pink">
          <Image
            src={gift.imageUrl || "/placeholder.jpg"}
            alt={gift.name}
            className="w-full h-full object-cover"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Details */}
        <div className="flex-1 flex flex-col justify-center items-center p-8 md:p-10">
          <span className="text-3xl mb-2">🎁</span>
          <h3 className="font-heading text-brand-blue-dark text-2xl md:text-3xl font-bold mb-2">
            {gift.name}
          </h3>
          <div className="inline-flex items-center gap-1 mb-4">
            <span className="bg-linear-to-r from-brand-blue to-brand-pink bg-clip-text text-transparent text-2xl font-bold">
              ${gift.price}
            </span>
          </div>
          <p className="text-gray-600 mb-8 leading-relaxed">
            {gift.description}
          </p>
          <div className="flex justify-center items-center gap-3 flex-wrap">
            <Button className="w-full">
              <a
                href={`https://wa.me/+5353540976?text=Hola,%20me%20interesa%20el%20regalo%20"${gift.name.replaceAll(" ", "%20")}"`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar 💬
              </a>
            </Button>
            <button
              className="w-full px-6 py-2.5 rounded-full font-semibold text-brand-blue-dark/60 bg-transparent border-2 border-gray-200 hover:border-brand-pink hover:text-brand-pink transition-all duration-200 cursor-pointer"
              onClick={onCloseModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
