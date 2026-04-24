export default function AboutCard({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="gradient-border bg-white rounded-2xl p-8 flex-1 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
      <span className="text-4xl mb-4 block group-hover:animate-wiggle transition-transform">
        {icon}
      </span>
      <h3 className="text-brand-blue-dark text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-[0.95rem]">{text}</p>
    </div>
  );
}
