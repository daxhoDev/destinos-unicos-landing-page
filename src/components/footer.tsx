export default function Footer() {
  return (
    <footer className="relative mt-auto text-white overflow-hidden" id="footer">
      {/* Wave top divider */}
      <div className="w-full leading-none overflow-hidden -mb-px">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="block w-full h-12.5 md:h-17.5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 C360,100 720,0 1080,50 C1260,75 1380,65 1440,55 L1440,100 L0,100 Z"
            fill="#0F1D35"
          />
        </svg>
      </div>

      {/* Footer content */}
      <div className="bg-brand-blue-deeper px-6 md:px-12 pb-8 pt-4">
        <div className="max-w-6xl mx-auto">
          {/* Top row: brand + info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-10">
            {/* Brand */}
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
                <span className="text-2xl">🎁</span>
                <span className="font-heading text-xl font-bold">
                  Destinos Únicos
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                Regalos y experiencias que dejan huella en cada ocasión
                especial.
              </p>
            </div>

            {/* Contact */}
            <div className="text-center md:text-left">
              <h4 className="font-heading text-lg font-bold mb-3 text-brand-pink-light">
                Contacto
              </h4>
              <ul className="flex flex-col gap-2 text-sm list-none p-0 m-0">
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <span aria-hidden="true">📞</span>
                  <a
                    href="tel:+5353540976"
                    className="text-white/70 hover:text-brand-pink-light transition-colors duration-200 no-underline"
                  >
                    +53 53540976
                  </a>
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <span aria-hidden="true">📧</span>
                  <a
                    href="mailto:yrd261180@gmail.com"
                    className="text-white/70 hover:text-brand-pink-light transition-colors duration-200 no-underline"
                  >
                    yrd261180@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start text-white/70">
                  <span aria-hidden="true">📍</span>
                  <span>
                    Calle 250 e/ 25 y 27, No. 25A08, San Agustín, La Lisa, La
                    Habana
                  </span>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className="text-center md:text-left">
              <h4 className="font-heading text-lg font-bold mb-3 text-brand-pink-light">
                Redes Sociales
              </h4>
              <div className="flex gap-3 justify-center md:justify-start">
                <a
                  target="_blank"
                  href="https://www.instagram.com/yaritzar8011?igsh=MTBscDF0bmw3OXJw"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-brand-pink hover:text-white transition-all duration-200 no-underline"
                  aria-label="Instagram"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1.5"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/share/175uXcUorm/"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-brand-blue hover:text-white transition-all duration-200 no-underline"
                  aria-label="Facebook"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

          {/* Copyright */}
          <div className="text-center text-white/40 text-xs">
            © {new Date().getFullYear()} Destinos Únicos. Todos los derechos
            reservados. Hecho con 💝 por Dax{`'`}ho.
          </div>
        </div>
      </div>
    </footer>
  );
}
