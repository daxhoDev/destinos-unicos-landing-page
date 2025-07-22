export default function Gift({ name, onClick }) {
  return (
    <div
      className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center border border-blue-100 cursor-pointer transition-transform duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:border-pink-400"
      onClick={onClick}
    >
      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-blue-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold mb-4 text-lg">
        Imagen de regalo
      </div>
      <div className="text-blue-500 text-lg font-semibold">{name}</div>
    </div>
  );
}
