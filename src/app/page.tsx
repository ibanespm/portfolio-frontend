"use client";

import Link from "next/link";
import Image from "next/image";
import {
  SiReact,
  SiNestjs,
  SiDjango,
  SiJavascript,
  SiDocker,
  SiPostgresql,
  SiLinux,
  SiPython,
  SiGit,
  SiGithub,
} from "react-icons/si";

export default function Page() {
  return (
    <div
      className={`flex flex-col min-h-screen mx-1 md:mx-7 xl:mx-10 py-20 md:py-25 xl:py-20`}
    >
      {/* Sección Hero */}
      <div className="relative  dark:bg-neutral-900 mx-4 mt-4 rounded-xl overflow-hidden">
        {/* Contenido principal */}
        <div className="relative z-10 max-w-5xl mx-auto text-center p-2 pb-5">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-4 bg-gradient-to-r from-[#10ff2b] to-[#00d1b2] bg-clip-text text-transparent break-words leading-tight">
            Desarrollador de Software
          </h1>

          <p className="text-2x md:text-md text-gray-600 dark:text-gray-300 mb-8">
            Soy desarrollador Fullstack en React, NestJS, Django y
            JavaScript.También trabajo con Docker y bases de datos SQL para
            construir aplicaciones escalables. En este portafolio comparto
            artículos, blogs y fragmentos de código. Si quieres aprender a
            programar o colaborar, estaré encantado de ayudarte.
          </p>
          <div className="my-4 border-2 border-[#10ff2b] rounded-lg">
            <h2 className="text-2xl font-semibold text-[#10ff2b] mb-4">
              Tecnologías
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-6 gap-6 text-center text-white p-3">
              <div className="flex flex-col items-center">
                <SiReact size={32} color="#61DAFB" />
                <span className="mt-2 text-sm">React</span>
              </div>
              <div className="flex flex-col items-center">
                <SiNestjs size={32} color="#E0234E" />
                <span className="mt-2 text-sm">NestJS</span>
              </div>
              <div className="flex flex-col items-center">
                <SiDjango size={32} color="#092E20" />
                <span className="mt-2 text-sm">Django</span>
              </div>
              <div className="flex flex-col items-center">
                <SiJavascript size={32} color="#F7DF1E" />
                <span className="mt-2 text-sm">JavaScript</span>
              </div>
              <div className="flex flex-col items-center">
                <SiDocker size={32} color="#2496ED" />
                <span className="mt-2 text-sm">Docker</span>
              </div>
              <div className="flex flex-col items-center">
                <SiPostgresql size={32} color="#336791" />
                <span className="mt-2 text-sm">PostgreSQL</span>
              </div>
              <div className="flex flex-col items-center">
                <SiLinux size={32} color="#FCC624" />
                <span className="mt-2 text-sm">Linux</span>
              </div>
              <div className="flex flex-col items-center">
                <SiPython size={32} color="#3776AB" />
                <span className="mt-2 text-sm">Python</span>
              </div>
              <div className="flex flex-col items-center">
                <SiGit size={32} color="#F05032" />
                <span className="mt-2 text-sm">Git</span>
              </div>
              <div className="flex flex-col items-center">
                <SiGithub size={32} color="#ffffff" />
                <span className="mt-2 text-sm">GitHub</span>
              </div>

              <div className="flex flex-col items-center">
                <Image
                  src="/assets/scikit-learn.png"
                  alt="Scikit-learn"
                  width={32}
                  height={32}
                />
                <span className="mt-2 text-sm">Scikit-learn</span>
              </div>
              {/* <div className="flex flex-col items-center">
                <Image
                  src="/assets/tensorflow.png"
                  alt="TensorFlow"
                  width={32}
                  height={32}
                />
                <span className="mt-2 text-sm">TensorFlow</span>
              </div> */}
              <div className="flex flex-col items-center">
                <Image
                  src="/assets/pandas.png"
                  alt="Pandas"
                  width={32}
                  height={32}
                />
                <span className="mt-2 text-sm">Pandas</span>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/assets/numpy.png"
                  alt="NumPy"
                  width={32}
                  height={32}
                />
                <span className="mt-2 text-sm">NumPy</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/content">
              <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-neutral-600 transition font-medium border-2 border-white dark:border-gray-700">
                Ver Contenido
              </button>
            </Link>
            <Link href="advice">
              <button className="px-8 py-3 font-medium border-2 border-black dark:border-gray-300 text-black dark:text-white rounded-lg hover:text-black hover:border-[#10ff2b] dark:hover:border-black dark:hover:bg-[#10ff2b] transition">
                Asesorías →
              </button>
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 opacity-10 z-0">
          <Image
            src="assets/mapa.jpg"
            alt="Background"
            fill
            quality={75}
            priority={false}
            className="object-cover"
            style={
              {
                //opacity: 0.9,
              }
            }
            unoptimized={true} // Opcional: si tienes problemas con la optimización
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 px-4  text-center">
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
