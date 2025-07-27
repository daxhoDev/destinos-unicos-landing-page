import { useState } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function Gift({ gift, onSelectGift }) {
  const [loading, setLoading] = useState(true);
  return (
    <div
      className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4 items-center border border-blue-100 cursor-pointer transition-transform duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:border-pink-400"
      onClick={onSelectGift}
    >
      <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center relative">
        {loading && <LoadingSpinner color="blue" />}
        <img
          src={gift.image}
          alt={gift.name}
          className={`w-full h-full object-cover flex items-center justify-center transition-opacity duration-300 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setLoading(false)}
        />
      </div>
      <div className="text-blue-500 text-lg font-semibold">{gift.name}</div>
    </div>
  );
}
