"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/button";

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
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      setIsTransparent(window.scrollY < 1 && pathname === "/");
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  function handleCloseSidebar() {
    setIsSidebarOpen(false);
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-screen z-50 transition-all duration-500 py-3 px-6 md:px-10 flex items-center justify-between ${
        isTransparent ? "bg-transparent" : "glass shadow-lg shadow-brand-blue/5"
      }`}
    >
      {/* Logo / Brand */}
      <Link href="/" className="flex items-center gap-2 no-underline group">
        <span className="text-2xl group-hover:animate-wiggle transition-transform">
          🎁
        </span>
        <span
          className={`font-heading text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${
            isTransparent && pathname === "/"
              ? "text-white"
              : "text-brand-blue-dark"
          }`}
        >
          Destinos Únicos
        </span>
      </Link>

      {/* Mobile Hamburger */}
      {pathname === "/" && (
        <button
          className={`block lg:hidden bg-none border-none text-2xl cursor-pointer focus:outline-none transition-colors duration-200 ${
            isTransparent
              ? "text-white hover:text-brand-pink-light"
              : "text-brand-blue hover:text-brand-pink"
          }`}
          aria-label="Abrir menú"
          onClick={() => setIsSidebarOpen(true)}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      )}

      {/* Desktop Links */}
      <ul className="hidden lg:flex justify-center gap-1 list-none p-0 m-0">
        {pathname === "/" ? (
          navLinks.map((link) => (
            <li key={link.href}>
              <a
                className={`relative font-semibold no-underline text-[0.95rem] px-4 py-2 rounded-full transition-all duration-300 ${
                  isTransparent
                    ? "text-white/90 hover:text-white hover:bg-white/15"
                    : "text-brand-blue-dark/80 hover:text-brand-blue hover:bg-brand-blue-pale"
                }`}
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))
        ) : (
          <Link
            href="/"
            className="text-brand-blue font-semibold no-underline text-[0.95rem] px-4 py-2 rounded-full transition-all duration-300 hover:text-brand-pink hover:bg-brand-pink-pale flex items-center gap-1"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 6L9 12L15 18" />
            </svg>
            Inicio
          </Link>
        )}
      </ul>

      {/* CTA Button */}
      {pathname === "/" && (
        <Link href="/catalog" className="hidden lg:block">
          <Button variant={isTransparent ? "light" : undefined}>
            Ver catálogo
          </Button>
        </Link>
      )}

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-brand-blue-deeper/50 z-50 flex backdrop-blur-sm"
          onClick={handleCloseSidebar}
        >
          <nav
            className="w-72 max-w-[80vw] h-screen shadow-2xl flex flex-col p-0 z-60 animate-slide-in-left bg-white overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            aria-label="Menú lateral"
          >
            {/* Sidebar header */}
            <div className="bg-gradient-to-r from-brand-blue to-brand-pink p-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎁</span>
                <span className="font-heading text-xl font-bold text-white">
                  Destinos Únicos
                </span>
              </div>
              <button
                className="text-white/80 hover:text-white text-2xl bg-transparent border-none cursor-pointer transition-colors"
                onClick={handleCloseSidebar}
                aria-label="Cerrar menú"
              >
                ✕
              </button>
            </div>

            {/* Sidebar links */}
            <ul className="flex flex-col gap-1 list-none p-6 m-0">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    className="text-brand-blue-dark font-semibold no-underline text-lg transition-all duration-200 hover:text-brand-pink px-4 py-3 rounded-xl hover:bg-brand-pink-pale block"
                    href={link.href}
                    onClick={handleCloseSidebar}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Sidebar CTA */}
            <div className="mt-auto p-6 pt-0">
              <Link href="/catalog" onClick={handleCloseSidebar}>
                <Button>Ver catálogo</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </nav>
  );
}
