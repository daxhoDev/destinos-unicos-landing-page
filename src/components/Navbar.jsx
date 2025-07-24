import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "@/components/Button";

const navLinks = [
  { href: "#hero", label: "Inicio" },
  { href: "#gifts", label: "Regalos" },
  { href: "#about", label: "Sobre mí" },
  { href: "#reviews", label: "Opiniones" },
  { href: "#footer", label: "Contacto" },
];

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const location = useLocation();

  useEffect(() => {
    function handleScroll() {
      setIsTransparent(window.scrollY < 1 && location.pathname === "/");
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  function handleCloseSidebar() {
    setIsSidebarOpen(false);
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-screen z-10 transition-colors duration-300 py-2 px-8 flex items-center justify-between ${
        isTransparent ? "bg-transparent" : "bg-white shadow-md"
      }`}
    >
      {location.pathname === "/" ? (
        <button
          className={`block md:hidden bg-none border-none text-3xl cursor-pointer focus:outline-none ${
            isTransparent && location.pathname === "/"
              ? "text-white hover:text-pink-200 active:text-pink-200"
              : "text-blue-500 hover:text-pink-400 active:text-pink-400"
          }`}
          aria-label="Abrir menú"
          onClick={() => setIsSidebarOpen(true)}
        >
          &#9776;
        </button>
      ) : (
        <Link
          to="/"
          className="block md:hidden cursor-pointer focus:outline-none text-blue-500 hover:text-pink-400 active:text-pink-400"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 6L9 12L15 18"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
      )}
      <ul className="hidden md:flex justify-center gap-8 list-none p-0 m-0">
        {location.pathname === "/" ? (
          navLinks.map((link) => (
            <li key={link.href}>
              <a
                className={`font-bold no-underline text-lg transition-colors duration-200 ${
                  isTransparent
                    ? "text-white hover:text-pink-200 active:text-pink-200"
                    : "text-blue-500 hover:text-pink-400 active:text-pink-400"
                }`}
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))
        ) : (
          <Link
            to="/"
            className="text-blue-500 font-bold no-underline text-lg transition-colors duration-200 hover:text-pink-400"
          >
            Inicio
          </Link>
        )}
      </ul>
      {location.pathname === "/" && (
        <Link to="/catalog">
          <Button variant={isTransparent ? "light" : undefined}>
            Ver catálogo
          </Button>
        </Link>
      )}
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
