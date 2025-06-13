"use client";

import Image from "next/image";
// components/Aside.tsx
import React from "react";
import { FaDownload, FaMedium, FaWhatsapp } from "react-icons/fa";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

interface AsideProps {
  className?: string;
  //   onLanguageChange: (lang: string) => void;
  //   onThemeChange: (theme: string) => void;
}

export const Aside: React.FC<AsideProps> = ({ className = "" }) => {
  return (
    <aside
      className={` border-r border-[#10ff2b]/50 text-gray-400 ${className} `}
    >
      <div className="p-4 space-y-8">
        <div className="flex justify-center">
          <div className="relative">
            <Image
              src="/assets/profile.png"
              alt="Foto de perfil"
              width={200}
              height={200}
              className="h-80 w-60 rounded-2xl border-b-[#10ff2b]/50 object-cover"
            />
          </div>
        </div>

        <div className="text-center">
          <h2 className={`text-2xl font-bold text-[#10ff2b] `}>
            Franklin Perez Muñoz
          </h2>
          <p className="text-sm">Desarrollador Full Stack</p>
        </div>

        {/* Botones de CV */}
        <a
          className={`bg-gradient-to-r gap-2 from-[#10ff2b] via-[#11aa2b] to-[#11fa2b]  text-black  border-b-amber-400 py-3 rounded-lg flex items-center justify-center  transition-all duration-200`}
          href="assets/FranklinCV.pdf"
          target="_blank"
          download
        >
          <FaDownload size={24} />
          <span className="font-medium text-lg  ">Descargar CV</span>
        </a>

        {/* Enlaces de contacto */}
        <div className="pt-4">
          <div className="flex justify-center gap-5">
            <a
              href="ibanesp59@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative hover:text-[#10ff2b] transition-colors"
              title="Gmail"
            >
              <SiGmail size={24} className="text-red-400" />
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-[#0a0f14] text-[#10ff2b] text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Gmail
              </span>
            </a>
            <a
              href="https://linkedin.com/in/ibanespm"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative hover:text-[#10ff2b] transition-colors"
              title="LinkedIn"
            >
              <SiLinkedin size={24} className="text-blue-500" />
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-[#0a0f14] text-[#10ff2b] text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                LinkedIn
              </span>
            </a>
            <a
              href="https://github.com/ibanespm"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative hover:text-[#10ff2b] transition-colors"
              title="GitHub"
            >
              <SiGithub size={24} className="text-gray-300" />
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-[#0a0f14] text-[#10ff2b] text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                GitHub
              </span>
            </a>
            <a
              href="https://wa.me/+51926689920"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative hover:text-[#10ff2b] transition-colors"
              title="WhatsApp"
            >
              <FaWhatsapp size={24} className="text-green-400" />
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-[#0a0f14] text-[#10ff2b] text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                WhatsApp
              </span>
            </a>
            <a
              href="https://medium.com/@ibaesperezmuoz"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative hover:text-[#10ff2b] transition-colors"
              title="Medium"
            >
              <FaMedium size={24} />
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-[#0a0f14] text-[#10ff2b] text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Medium
              </span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};
