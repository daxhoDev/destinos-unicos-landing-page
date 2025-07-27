export default function AboutCard({ title, text }) {
  return (
    <div className="bg-gradient-to-br from-pink-400 to-blue-500 text-white rounded-xl p-6 shadow-md flex-1">
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p>{text}</p>
    </div>
  );
}
