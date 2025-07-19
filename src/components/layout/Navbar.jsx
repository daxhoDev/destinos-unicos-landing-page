import { useState } from 'react';

const navLinks = [
  { href: '#hero', label: 'Inicio' },
  { href: '#gifts', label: 'Regalos' },
  { href: '#about', label: 'Sobre mí' },
  { href: '#reviews', label: 'Opiniones' },
  { href: '#footer', label: 'Contacto' },
];

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <nav className="navbar">
      <button
        className="navbar-hamburger"
        aria-label="Abrir menú"
        onClick={() => setSidebarOpen(true)}
      >
        &#9776;
      </button>
      <ul>
        {navLinks.map(link => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      {sidebarOpen && (
        <div className="navbar-sidebar-backdrop" onClick={closeSidebar}>
          <nav
            className="navbar-sidebar"
            onClick={e => e.stopPropagation()}
            aria-label="Menú lateral"
          >
            <ul>
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeSidebar}
                  >
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