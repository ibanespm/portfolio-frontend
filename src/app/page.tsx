"use client";

import Link from "next/link";
import Image from "next/image";
import api from "@/services/api";
import axios from "axios";


export default function Page() {
  return (
    <div className={`flex flex-col min-h-screen mx-10 py-30`}>
      {/* Sección Hero */}
      <div className="relative  dark:bg-neutral-900 mx-4 mt-4 rounded-xl overflow-hidden">
        {/* Contenido principal */}
        <div className="relative z-10 max-w-4xl mx-auto text-center p-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-[#10ff2b] to-[#00d1b2] bg-clip-text text-transparent break-words leading-tight">
            Aprende Machine Learning y Desarrollo Web
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
            Aprende a desarrollar proyectos web con tutoriales y cursos
            enfocados en crear software reales que puedes monetizar, vender o
            usar para tus propios proyectos.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/content">
              <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-neutral-600 transition font-medium border-2 border-white dark:border-gray-700">
                Ver Contenido
              </button>
            </Link>
            <Link href="advice">
              <button className="px-8 py-3 font-medium border-2 border-black dark:border-gray-300 text-black dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                Asesorías →
              </button>
            </Link>
          </div>
        </div>

        {/* Imagen de fondo */}
        <div className="absolute inset-0 opacity-10 z-0">
          <Image
            src="https://wallpapers.com/images/hd/programming-hd-binary-code-map-jnb1a5krewais09o.jpg"
            alt="Background"
            fill
            quality={75}
            priority={false}
            className="object-cover"
            style={{
              //opacity: 0.9,
            }}
            unoptimized={true} // Opcional: si tienes problemas con la optimización
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 px-4">
        {[
          {
            name: "Artículos Medium",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-notepad-text-icon lucide-notepad-text"
              >
                <path d="M8 2v4" />
                <path d="M12 2v4" />
                <path d="M16 2v4" />
                <rect width="16" height="18" x="4" y="4" rx="2" />
                <path d="M8 10h6" />
                <path d="M8 14h8" />
                <path d="M8 18h5" />
              </svg>
            ),
          },
          {
            name: "Videos",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="23 7 16 12 23 17 23 7" />
                <rect width="15" height="14" x="1" y="5" rx="2" ry="2" />
              </svg>
            ),
          },
          {
            name: "Kaggle",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                <line x1="4" x2="4" y1="22" y2="15" />
              </svg>
            ),
          },
          {
            name: "Docker Hub",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z" />
                <path d="M10 21.9V14L2.1 9.1" />
                <path d="m10 14 11.9-6.9" />
                <path d="M14 19.8v-8.1" />
                <path d="M18 17.5V9.4" />
              </svg>
            ),
          },
        ].map((item) => (
          <div
            key={item.name}
            className="h-40 bg-gradient-to-br from-black via-[#1111]  shadow-sm shadow-[#10ff2b]  rounded-lg flex flex-col items-center justify-center gap-2"
          >
            <div className="text-white py-4 ">{item.icon}</div>
            <span className=" text-md whitespace-wrap font-bold text-[#10ff2b] ">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
