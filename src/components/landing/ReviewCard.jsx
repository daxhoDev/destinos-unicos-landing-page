export default function ReviewCard({ picture, text, client }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center border-pink-100 w-full min-h-[320px] max-w-xl mx-4 mb-4">
      <img
        className="w-24 h-24 md:w-40 md:h-40 rounded-full object-cover mb-2"
        src={picture}
        alt={client}
      />
      <div className="text-blue-500 text-lg italic mb-2 flex-1 flex items-center justify-center text-center break-words">
        “{text}”
      </div>
      <div className="text-pink-400 font-bold mt-2">- {client}</div>
    </div>
  );
}
