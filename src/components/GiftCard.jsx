export default function Gift({ gift, onClick }) {
  return (
    <div
      className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center border border-blue-100 cursor-pointer transition-transform duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:border-pink-400"
      onClick={onClick}
    >
      <div className="w-40 h-40 rounded-full mb-4 overflow-hidden bg-gray-100">
        <img
          src={gift.image}
          alt={gift.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-blue-500 text-lg font-semibold">{gift.name}</div>
    </div>
  );
}
