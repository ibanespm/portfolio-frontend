"use client";

import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp, FaMedium } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const contacts = [
  {
    icon: <FaInstagram size={24} className="text-pink-500" />,
    title: "Instagram",
    description: "Publico avances y contenido sobre proyectos.",
    url: "https://instagram.com/ibanes_13",
  },
  {
    icon: <FaGithub size={24} className="text-gray-300" />,
    title: "GitHub",
    description: "Repositorio de mis proyectos y código abierto.",
    url: "https://github.com/ibanespm",
  },
  {
    icon: <FaLinkedin size={24} className="text-blue-500" />,
    title: "LinkedIn",
    description: "Conecta conmigo profesionalmente.",
    url: "https://linkedin.com/in/tu_usuario",
  },
  {
    icon: <FaWhatsapp size={24} className="text-green-400" />,
    title: "WhatsApp",
    description: "Contáctame directamente por mensajes.",
    url: "https://wa.me/+51926689920",
  },
  {
    icon: <SiGmail size={24} className="text-red-400" />,
    title: "Correo",
    description: "Puedes escribirme a mi correo personal.",
    url: "ibanesp59@gmail.com",
  },
  {
    icon:<FaMedium size={24} />,
    title:"Medium",
    description:"Medium para publicar Articulos relacionado a Machine Learning Aplicado a Desarrollo de Software",
    url:"https://medium.com/@ibaesperezmuoz"

  }
];

export default function ContactCards() {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10 mx-4`}>
      {contacts.map((contact) => (
        <a
          key={contact.title}
          href={contact.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-br from-[#0a0f14] to-[#000000] border border-white/20 hover:border-white/40 rounded-lg p-5 flex flex-col gap-3 shadow-md transition hover:scale-[1.02]"
        >
          <div className="flex items-center gap-3">
            {contact.icon}
            <h2 className="text-[#10ff2f] sm text-xl font-semibold">{contact.title}</h2>
          </div>
          <p className="text-sm text-gray-400">{contact.description}</p>
        </a>
      ))}
    </div>
  );
}
