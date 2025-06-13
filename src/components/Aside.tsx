"use client";

// components/Aside.tsx
import React, { useState } from "react";
import { FaDownload, FaMedium, FaWhatsapp } from "react-icons/fa";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

interface AsideProps {
  className?: string;
//   onLanguageChange: (lang: string) => void;
//   onThemeChange: (theme: string) => void;
}

export const Aside: React.FC<AsideProps> = ({ className = "" }) => {

  const handleDownloadCV = (language: "es" | "en") => {
    // Lógica para descargar el CV según el idioma
    console.log(`Descargando CV en ${language}`);
    // En una implementación real, aquí iría la lógica para descargar el archivo
    const cvUrl = language === "es" ? "/FranklinCV.pdf" : "/cv_en.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = `FranklinCV.pdf`;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    


  };


  return (
    <aside
      className={` border-r border-[#10ff2b]/50 text-gray-400 ${className} `}
    >
      <div className="p-4 space-y-8">
        <div className="flex justify-center">
          <div className="relative">
            <img
              src="assets/profile.png"
              alt="Foto de perfil"
              className="h-80 w-60 rounded-2xl border-b-[#10ff2b]/50  object-cover "
            />
          </div>
        </div>

        {/* Nombre y título */}
        <div className="text-center">
          <h2
            className={`text-2xl font-bold text-[#10ff2b] `}
          >
            Franklin Perez Muñoz
          </h2>
          <p className="text-sm">Desarrollador Full Stack</p>
        </div>

        {/* Botones de CV */}
        <button
          onClick={() => handleDownloadCV("es")}
          className={`w-full  text-gray-400 bg-black border-b-amber-400 py-3 rounded-lg flex items-center justify-center  transition-all duration-200`}
        >
          <FaDownload />
          <span className="font-medium text-lg  " >Descargar CV</span>
        </button>

        {/* Enlaces de contacto */}
        <div className="pt-4">
          
          <div className="flex justify-center space-x-4">
            <a
              href="ibanesp59@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#10ff2b] transition-colors"
            >
              <SiGmail size={24} className="text-red-400" />
            </a>
            <a
              href="https://linkedin.com/in/tuperfil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#10ff2b] transition-colors"
            >
              <SiLinkedin size={24} className="text-blue-500" />
            </a>
            <a
              href="https://github.com/tuperfil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#10ff2b] transition-colors"
            >
              <SiGithub size={24} className="text-gray-300" />
            </a>
            <a
              href="https://wa.me/+51926689920"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#10ff2b] transition-colors"
            >
              <FaWhatsapp size={24} className="text-green-400" />
            </a>
            <a
              href="https://medium.com/@ibaesperezmuoz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#10ff2b] transition-colors"
            >
              <FaMedium size={24} />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};
