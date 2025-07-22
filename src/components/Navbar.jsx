import { useState } from "react";

const navLinks = [
  { href: "#hero", label: "Inicio" },
  { href: "#gifts", label: "Regalos" },
  { href: "#about", label: "Sobre mí" },
  { href: "#reviews", label: "Opiniones" },
  { href: "#footer", label: "Contacto" },
];

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function handleCloseSidebar() {
    setIsSidebarOpen(false);
  }

  return (
    <nav className="fixed top-0 left-0 w-screen z-10 bg-white shadow-md py-2 flex items-center">
      <button
        className="block md:hidden bg-none border-none text-3xl text-blue-500 ml-4 cursor-pointer hover:text-pink-400 focus:outline-none"
        aria-label="Abrir menú"
        onClick={() => setIsSidebarOpen(true)}
      >
        &#9776;
      </button>
      <ul className="hidden md:flex flex-1 justify-center gap-8 list-none p-0 m-0">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              className="text-blue-500 font-bold no-underline text-lg transition-colors duration-200 hover:text-pink-400"
              href={link.href}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      {isSidebarOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black/40 z-20 flex"
          onClick={handleCloseSidebar}
        >
          <nav
            className="w-60 max-w-[80vw] bg-white h-screen shadow-lg flex flex-col p-8 gap-8 z-30 animate-slide-in"
            onClick={(e) => e.stopPropagation()}
            aria-label="Menú lateral"
          >
            <ul className="flex flex-col gap-6 list-none p-0 m-0">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    className="text-blue-500 font-bold no-underline text-xl transition-colors duration-200 hover:text-pink-400"
                    href={link.href}
                    onClick={handleCloseSidebar}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
      <style>{`
        @keyframes slide-in {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in { animation: slide-in 0.2s; }
      `}</style>
    </nav>
  );
}
