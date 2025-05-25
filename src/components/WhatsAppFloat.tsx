"use client";
import { useState } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "51926689920";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {isHovered && (
          <div className="absolute right-16 bottom-0 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
            ¡Contáctanos!
          </div>
        )}
        <Link
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-lg"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <FaWhatsapp className="text-white text-2xl" />
        </Link>
      </div>
    </div>
  );
}