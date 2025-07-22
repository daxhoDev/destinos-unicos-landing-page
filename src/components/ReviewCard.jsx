export default function ReviewCard({ picture, text, client }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center border-pink-100 md:justify-between">
      <img
        className="w-24 h-24 rounded-full object-cover mb-2"
        src={picture}
        alt={client}
      />
      <div className="text-blue-500 text-lg italic mb-2">“{text}”</div>
      <div className="text-pink-400 font-bold">- {client}</div>
    </div>
  );
}
