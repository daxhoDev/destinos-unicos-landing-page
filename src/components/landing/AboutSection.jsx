import AboutCard from "@/components/landing/AboutCard";

const aboutData = [
  {
    title: "Quién soy",
    text: "Soy Yari, apasionada por sorprender y alegrar a las personas con detalles originales y personalizados.",
  },
  {
    title: "Qué hago",
    text: "Ofrezco regalos y experiencias únicas, pensadas para cada persona y momento especial.",
  },
  {
    title: "Por qué deberías contactarme",
    text: "Te ayudo a crear recuerdos inolvidables y a sorprender a quienes más quieres con detalles únicos y personalizados.",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-white py-12 px-4 text-center" id="about">
      <h2 className="text-blue-500 mb-4 text-2xl font-bold">
        Sobre Destinos Únicos
      </h2>
      <p className="text-gray-900 mb-8 text-lg">
        Creamos momentos inolvidables a través de regalos y experiencias únicas
        para cada ocasión especial.
      </p>
      <div className="flex flex-col gap-8 max-w-3xl mx-auto md:flex-row md:gap-8">
        {aboutData.map((item, idx) => (
          <AboutCard key={idx} title={item.title} text={item.text} />
        ))}
      </div>
    </section>
  );
}
