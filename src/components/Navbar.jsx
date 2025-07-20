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
    <nav className="navbar">
      <button
        className="burger-button"
        aria-label="Abrir menú"
        onClick={() => setIsSidebarOpen(true)}
      >
        &#9776;
      </button>
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a className="link" href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      {isSidebarOpen && (
        <div className="sidebar-backdrop" onClick={handleCloseSidebar}>
          <nav
            className="sidebar"
            onClick={(e) => e.stopPropagation()}
            aria-label="Menú lateral"
          >
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={handleCloseSidebar}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </nav>
  );
}
