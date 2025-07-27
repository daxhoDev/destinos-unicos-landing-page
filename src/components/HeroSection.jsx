import background from "@/assets/gifts-bg.png";

export default function HeroSection() {
  return (
    <section
      className="h-dvh pt-16 px-4 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 text-center md:text-left bg-gradient-to-tl from-pink-400/90 via-blue-500/90 to-blue-400/90 bg-cover bg-center bg-no-repeat text-white"
      id="hero"
      style={{
        backgroundImage: `linear-gradient(to top left, rgba(255, 111, 163, 0.7), rgba(58, 141, 222, 0.7) 60%), url(${background})`,
      }}
    >
      <div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-wider text-shadow-md">
          Destinos Únicos
        </h1>
        <p className="text-lg md:text-2xl text-shadow-md">
          ¡Regalos y experiencias que dejan huella en cada ocasión!
        </p>
      </div>
    </section>
  );
}
