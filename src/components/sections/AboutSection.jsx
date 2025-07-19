import AboutCard from '@/components/cards/AboutCard';

const aboutData = [
  {
    title: 'Quién soy',
    text: 'Soy Yari, apasionada por sorprender y alegrar a las personas con detalles originales y personalizados.'
  },
  {
    title: 'Qué hago',
    text: 'Ofrezco regalos y experiencias únicas, pensadas para cada persona y momento especial.'
  },
  {
    title: 'Por qué deberías contactarme',
    text: 'Te ayudo a crear recuerdos inolvidables y a sorprender a quienes más quieres con detalles únicos y personalizados.'
  }
];

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <h2>Sobre Destinos Únicos</h2>
      <p className="about-description">Creamos momentos inolvidables a través de regalos y experiencias únicas para cada ocasión especial.</p>
      <div className="about-subsections">
        {aboutData.map((item, idx) => (
          <AboutCard key={idx} title={item.title} text={item.text} />
        ))}
      </div>
    </section>
  );
} 