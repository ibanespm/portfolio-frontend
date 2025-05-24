export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="  shadow-sm py-4  bg-gradient-to-b from-black  to-[#1c1d1d]">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center ">
          {currentYear}{" "}
          <a href="#" className="hover:underline">
            Portafolio Franklin™
          </a>
          . Todos los derechos reservados.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-600  sm:mt-0">
          <li>
            <a href="/about" className="hover:underline me-4 md:me-6">Sobre mí -
            </a>
          </li>
          <li>
            <a href="/privacy" className="hover:underline me-4 md:me-6">Política de privacidad -
            </a>
          </li>
          <li>
            <a href="/licensing" className="hover:underline me-4 md:me-6">Licencias -
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">Contacto
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
