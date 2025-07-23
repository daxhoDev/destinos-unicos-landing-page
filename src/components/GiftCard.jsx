import { useState } from "react";

export default function Gift({ gift, onClick }) {
  const [loading, setLoading] = useState(true);
  return (
    <div
      className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center border border-blue-100 cursor-pointer transition-transform duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:border-pink-400"
      onClick={onClick}
    >
      <div className="w-40 h-40 rounded-full mb-4 overflow-hidden bg-gray-100 flex items-center justify-center relative">
        {loading && (
          <svg
            className="animate-spin h-10 w-10 text-blue-400 absolute"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        )}
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
