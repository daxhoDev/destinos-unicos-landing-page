export default function Footer() {
  return (
    <footer
      className="md:text-lg md:text-left bg-blue-950 text-white py-8 px-4 md:px-8 text-center flex flex-col gap-6 lg:flex-row md:justify-between md:gap-8 mt-auto"
      id="footer"
    >
      <div>
        <strong>Teléfono:</strong>{" "}
        <a
          href="tel:+53 53540976"
          className="hover:text-pink-200 transition-colors"
        >
          +5353540976
        </a>
      </div>
      <div>
        <strong>Redes sociales:</strong>
        <ul className="flex flex-col gap-1">
          <li>
            <a
              href="https://www.instagram.com/yaritzar8011?igsh=MTBscDF0bmw3OXJw"
              className="hover:text-pink-200 transition-colors"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/share/175uXcUorm/"
              className="hover:text-pink-200 transition-colors"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
      <div>
        <strong>Dirección:</strong> Calle 250 entre 25 y 27 Número 25A08
        Interior, San Agustín, La Lisa, La Habana, Cuba
      </div>
      <div>
        <strong>Correo electrónico:</strong>{" "}
        <a
          href="mailto:yrd261180@gmail.com"
          className="hover:text-pink-200 transition-colors"
        >
          yrd261180@gmail.com
        </a>
      </div>
    </footer>
  );
}
