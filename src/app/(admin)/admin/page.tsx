import { getCurrentProfileAction } from "./actions/getCurrentProfile";
import Link from "next/link";

export default async function AdminDashboard() {
  const currentUser = await getCurrentProfileAction();
  console.log(currentUser);

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Welcome header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Hola, {currentUser?.name} 👋
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Bienvenido al panel de administración de Destinos Únicos
        </p>
      </div>

      {/* Quick actions grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <DashboardCard
          href="/admin/products"
          title="Productos"
          description="Gestiona los productos del catálogo"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="8" width="18" height="4" rx="1" />
              <path d="M12 8v13" />
              <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
              <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
            </svg>
          }
          gradient="from-brand-blue to-brand-blue-light"
        />
      </div>
    </div>
  );
}

function DashboardCard({
  href,
  title,
  description,
  icon,
  gradient,
}: {
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}) {
  return (
    <Link
      href={href}
      className="group relative bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:shadow-brand-blue/5 hover:border-brand-blue-light transition-all duration-300 overflow-hidden"
    >
      <div className="flex items-start gap-4">
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shrink-0`}
        >
          {icon}
        </div>
        <div>
          <h3 className="text-base font-semibold text-gray-900 group-hover:text-brand-blue transition-colors">
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
      </div>

      {/* Arrow */}
      <div className="absolute top-6 right-6 text-gray-300 group-hover:text-brand-blue group-hover:translate-x-1 transition-all duration-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </div>

      {/* Bottom hover indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-blue to-brand-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </Link>
  );
}
