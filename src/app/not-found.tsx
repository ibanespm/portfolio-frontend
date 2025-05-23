"use client"

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center font-jetbrains-mono bg-gradient-to-br from-gray-900 to-black">
      <div className="text-center">
        <h1 className="text-8xl font-bold mb-4 text-red-500">404</h1>
        <h2 className="text-4xl font-semibold mb-4 text-white">Página no encontrada</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Lo siento, la página que estás buscando no existe. 
          Por favor, verifica la URL o usa el menú de navegación para encontrar lo que necesitas.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
