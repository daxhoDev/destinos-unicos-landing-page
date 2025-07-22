export default function Footer() {
  return (
    <footer
      className="bg-gradient-to-r from-blue-500 via-blue-400 to-pink-400 text-white py-8 px-4 lg:px-8 text-center flex flex-col gap-6 lg:flex-row md:justify-between md:gap-8 mt-auto"
      id="footer"
    >
      <div className="text-lg md:text-left">
        <strong>Teléfono:</strong> +53 53540976
      </div>
      <div className="text-lg md:text-left">
        <strong>Redes sociales:</strong> [Enlaces a redes sociales]
      </div>
      <div className="text-lg md:text-left">
        <strong>Dirección:</strong> [Dirección]
      </div>
      <div className="text-lg md:text-left">
        <strong>Correo electrónico:</strong> [Correo electrónico]
      </div>
    </footer>
  );
}
