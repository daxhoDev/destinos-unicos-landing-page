export default function HeroSection() {
  return (
    <section
      className="h-dvh px-4 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 text-center md:text-left bg-gradient-to-tl from-pink-400/90 via-blue-500/90 to-blue-400/90 bg-cover bg-center bg-no-repeat text-white"
      id="hero"
      style={{
        backgroundImage:
          "linear-gradient(to top left, rgba(255, 111, 163, 0.9), rgba(58, 141, 222, 0.9) 60%), url(/src/img/gifts-bg.png)",
      }}
    >
      <div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-wider">
          Destinos Únicos
        </h1>
        <p className="text-lg md:text-2xl">
          ¡Regalos y experiencias que dejan huella en cada ocasión!
        </p>
      </div>
      <div className="w-full max-w-xs md:max-w-sm h-52 md:h-64 bg-gradient-to-br from-pink-400 to-blue-500 rounded-3xl flex items-center justify-center font-bold text-lg md:text-xl mt-4 md:mt-0 shadow-lg">
        {/* Placeholder para imagen de Yari sosteniendo un regalo */}
        <span>Yari sosteniendo un regalo (Imagen de ejemplo)</span>
      </div>
    </section>
  );
}
