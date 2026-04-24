import AboutCard from "@/components/aboutCard";

const aboutData = [
  {
    icon: "💝",
    title: "Quién soy",
    text: "Soy Yari, apasionada por sorprender y alegrar a las personas con detalles originales y personalizados.",
  },
  {
    icon: "🎁",
    title: "Qué hago",
    text: "Ofrezco regalos y experiencias únicas, pensadas para cada persona y momento especial.",
  },
  {
    icon: "✨",
    title: "Por qué contactarme",
    text: "Te ayudo a crear recuerdos inolvidables y a sorprender a quienes más quieres con detalles únicos.",
  },
];

export default function AboutSection() {
  return (
    <section
      className="relative bg-white py-16 md:py-20 px-4 text-center overflow-hidden"
      id="about"
    >
      {/* Background decorative elements */}
      <div
        className="absolute top-10 right-10 w-40 h-40 rounded-full bg-brand-pink-pale opacity-40 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-brand-blue-pale opacity-40 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <span className="text-3xl mb-2 block" aria-hidden="true">
          💫
        </span>
        <h2 className="font-heading text-brand-blue-dark text-3xl md:text-4xl font-bold mb-3">
          Sobre Destinos Únicos
        </h2>
        <p className="text-brand-blue-dark/60 text-base md:text-lg mb-12 max-w-lg mx-auto">
          Creamos momentos inolvidables a través de regalos y experiencias
          únicas para cada ocasión especial.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {aboutData.map((item, idx) => (
            <AboutCard
              key={idx}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
