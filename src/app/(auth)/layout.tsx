import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh flex bg-brand-blue-pale">
      {/* ─── Decorative Side Panel (hidden on mobile) ─── */}
      <aside className="hidden lg:flex lg:w-[45%] relative overflow-hidden flex-col justify-between p-10">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-pink to-brand-blue-dark" />

        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating decorative circles */}
        <div className="absolute top-[15%] left-[10%] w-64 h-64 rounded-full bg-white/10 blur-2xl animate-float" />
        <div className="absolute bottom-[20%] right-[15%] w-48 h-48 rounded-full bg-brand-pink-light/20 blur-xl animate-float-delay" />
        <div className="absolute top-[55%] left-[50%] w-32 h-32 rounded-full bg-brand-blue-light/15 blur-lg animate-float-slow" />

        {/* Content */}
        <div className="relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Volver al inicio
          </Link>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center gap-6">
          {/* Gift icon */}
          <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center animate-pulse-soft">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="8" width="18" height="4" rx="1" />
              <path d="M12 8v13" />
              <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
              <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
            </svg>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">
              Destinos Únicos
            </h1>
            <p className="mt-3 text-white/75 text-base leading-relaxed max-w-xs mx-auto">
              Regalos y experiencias que dejan huella en quienes más quieres
            </p>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="relative z-10 text-center">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Destinos Únicos
          </p>
        </div>
      </aside>

      {/* ─── Main Content Area ─── */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 sm:px-6 lg:px-12">
        {/* Mobile-only back link */}
        <div className="lg:hidden self-start mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-brand-blue hover:text-brand-blue-dark transition-colors text-sm font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Volver
          </Link>
        </div>

        {/* Card container for form content */}
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl shadow-brand-blue/5 border border-gray-100 p-8 sm:p-10 animate-fade-in-up">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
