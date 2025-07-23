export default function Button({ onClick, children, variant }) {
  return (
    <button
      className={
        variant === "light"
          ? "border border-white text-white bg-transparent rounded-full px-8 py-2 text-lg font-bold cursor-pointer shadow-md transition-transform duration-200 hover:bg-white/10 hover:-translate-y-0.5 hover:scale-105 focus:outline-none"
          : "bg-gradient-to-r from-blue-500 via-blue-400 to-pink-400 text-white border-none rounded-full px-8 py-2 text-lg font-bold cursor-pointer shadow-md transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 focus:outline-none"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}
