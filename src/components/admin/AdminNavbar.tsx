import Link from "next/link";
import { LogoutButton } from "./LogoutButton";

export function AdminNavbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left — Brand + nav links */}
          <div className="flex items-center gap-8">
            <Link href="/admin" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-blue to-brand-pink flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="8" width="18" height="4" rx="1" />
                  <path d="M12 8v13" />
                  <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-gray-900 hidden sm:block">
                Panel Admin
              </span>
            </Link>

            <div className="hidden sm:flex items-center gap-1">
              <NavLink href="/admin">Dashboard</NavLink>
              <NavLink href="/admin/products">Productos</NavLink>
            </div>
          </div>

          {/* Right — Logout */}
          <LogoutButton />
        </div>
      </div>

      {/* Mobile nav links */}
      <div className="sm:hidden border-t border-gray-100 px-4 py-2 flex gap-1">
        <NavLink href="/admin">Dashboard</NavLink>
        <NavLink href="/admin/products">Productos</NavLink>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-brand-blue hover:bg-brand-blue-pale rounded-lg transition-all duration-200"
    >
      {children}
    </Link>
  );
}
