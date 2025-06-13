// components/Aside.tsx
import React from "react";

interface AsideProps {
  className?: string;
}

export const Aside: React.FC<AsideProps> = ({ className = "" }) => {
  return (
    <aside className={`   h-screen border-r border-[#10ff2b] text-white  ${className}`}>
    <nav className="space-y-4">
        <h2 className="text-lg font-semibold mb-4">Menú</h2>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-400">Inicio</a></li>
          <li><a href="#" className="hover:text-blue-400">Proyectos</a></li>
          <li><a href="#" className="hover:text-blue-400">Sobre mí</a></li>
          <li><a href="#" className="hover:text-blue-400">Contacto</a></li>
        </ul>
      </nav>
    </aside>
  );
};
