import background from "@/assets/gifts-bg.png";
import Link from "next/link";
import Button from "@/components/button";

const floatingEmojis = [
  {
    emoji: "🎁",
    className: "top-[15%] left-[10%] text-4xl animate-float opacity-60",
  },
  {
    emoji: "🎀",
    className: "top-[25%] right-[15%] text-3xl animate-float-delay opacity-50",
  },
  {
    emoji: "✨",
    className: "top-[60%] left-[20%] text-2xl animate-float-slow opacity-40",
  },
  {
    emoji: "🎉",
    className: "top-[70%] right-[10%] text-3xl animate-float opacity-50",
  },
  {
    emoji: "💝",
    className: "top-[40%] left-[5%] text-2xl animate-float-delay opacity-40",
  },
  {
    emoji: "🎊",
    className: "top-[20%] right-[30%] text-2xl animate-float-slow opacity-30",
  },
  {
    emoji: "🎁",
    className: "bottom-[25%] right-[25%] text-3xl animate-float opacity-35",
  },
  {
    emoji: "✨",
    className: "top-[50%] right-[5%] text-xl animate-sparkle opacity-50",
  },
];

export default function HeroSection() {
  return (
    <section
      className="relative min-h-dvh pt-16 px-4 flex flex-col justify-center items-center text-center text-white overflow-hidden"
      id="hero"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(30, 58, 95, 0.85), rgba(59, 130, 246, 0.8) 40%, rgba(244, 114, 182, 0.8) 100%), url(${background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Floating decorative emojis */}
      {floatingEmojis.map((item, i) => (
        <span
          key={i}
          className={`absolute pointer-events-none select-none ${item.className}`}
          aria-hidden="true"
        >
          {item.emoji}
        </span>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <span className="inline-block text-5xl md:text-6xl mb-4 animate-fade-in-up animate-wiggle">
          🎁
        </span>
        <h1 className=" text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight animate-fade-in-up-delay-1 drop-shadow-2xl ">
          Destinos Únicos
        </h1>
        <p className="text-lg md:text-2xl mb-10 animate-fade-in-up-delay-2 text-white max-w-xl mx-auto leading-relaxed drop-shadow-2xl">
          Regalos y experiencias que dejan{" "}
          <span className="font-bold  ">huella en cada ocasión</span>
        </p>
        <div className="animate-fade-in-up-delay-3">
          <Link href="#gifts">
            <Button variant="light">Descubre Nuestros Regalos ✨</Button>
          </Link>
        </div>
      </div>

      {/* Wave divider at the bottom */}
      <div className="wave-divider">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,70 L1440,120 L0,120 Z"
            fill="var(--color-brand-blue-pale)"
          />
        </svg>
      </div>
    </section>
  );
}
