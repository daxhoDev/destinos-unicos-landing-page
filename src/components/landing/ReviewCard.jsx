import { useState } from "react";

export default function ReviewCard({ picture, text, client }) {
  const [loading, setLoading] = useState(true);
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center border-pink-100 md:justify-between w-full min-h-[320px] max-w-xl mx-auto">
      <div className="w-24 h-24 md:w-40 md:h-40 rounded-full mb-2 overflow-hidden bg-gray-100 flex items-center justify-center relative">
        {loading && (
          <div className="flex items-center justify-center w-full h-full absolute top-0 left-0">
            <svg
              className="animate-spin h-10 w-10 text-pink-400"
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
          </div>
        )}
        <img
          className={`w-full h-full object-cover flex items-center justify-center transition-opacity duration-300 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
          src={picture}
          alt={client}
          onLoad={() => setLoading(false)}
        />
      </div>
      <div className="text-blue-500 text-lg italic mb-2 flex-1 flex items-center justify-center text-center break-words">
        “{text}”
      </div>
      <div className="text-pink-400 font-bold mt-2">- {client}</div>
    </div>
  );
}
