export default function Button({
  onClick,
  children,
  variant,
  className = "",
}: {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "light" | "default";
  className?: string;
}) {
  return (
    <button
      className={`
        relative overflow-hidden rounded-full px-8 py-2.5 text-base font-semibold cursor-pointer
        transition-all duration-300 ease-out
        hover:-translate-y-0.5 hover:shadow-lg
        active:translate-y-0 active:shadow-md
        focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink/50
        ${
          variant === "light"
            ? "border-2 border-white/70 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white hover:shadow-white/15"
            : "btn-shimmer text-white border-none shadow-md shadow-brand-pink/25 hover:shadow-brand-pink/40"
        }
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
