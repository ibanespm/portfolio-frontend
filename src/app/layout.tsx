"use client";
import { Aside } from "@/components/Aside";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { AuthProvider } from "@/context/AuthContext";
import { HiChevronDoubleLeft } from "react-icons/hi";

import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/700.css";
import { useState } from "react";
import Navbar from "../components/Navbar";
import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [showAside, setShowAside] = useState(false);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content="Portfolio de Franklin Perez Muñoz" />
        <meta
          name="keywords"
          content="Franklin Perez Muñoz, Portfolio, Desarrollador Full Stack"
        />
        <meta name="author" content="Franklin Perez Muñoz" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta property="og:image" content="/assets/profile.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen flex flex-col font-jetbrains-mono bg-radial-[at_25%_25%] from-black via-[#0a0f14] to-[#1c1d1d]">
        <AuthProvider>
          <Navbar />
          <div className="min-h-screen relative">
            {/* Aside para desktop */}
            <Aside className="fixed top-20 left-0 h-[calc(100vh-5rem)] w-[20%] hidden lg:block border-r border-[#10ff2b] p-4 z-40" />

            {/* Aside para móvil */}
            <div
              className={`lg:hidden fixed inset-0 z-30 ${
                showAside ? "block" : "hidden"
              }`}
            >
              <div
                className="absolute inset-0 bg-black/70"
                onClick={() => setShowAside(false)}
              />
              <div className="absolute top-0 left-0 h-full w-3/4 bg-[#0a0f14] border-r border-[#10ff2b] p-4 z-40">
                <Aside />
              </div>
            </div>

            {/* Botón flotante para móvil (solo en móviles) */}
            <button
              onClick={() => setShowAside(!showAside)}
              className="lg:hidden  fixed top-[50vh] left-5 z-200 w-12 h-12  
               flex items-center justify-center text-[#10ff2b] text-4xl font-bold shadow-lg hover:scale-105 transition-transform translate-x-[-50%]"
              aria-label="Toggle menu"
            >
              <HiChevronDoubleLeft size={24} />
            </button>

            <div className="ml-0 lg:ml-[20%] w-full lg:w-[80%]">
              <main className="px-4 lg:px-7 xl:px-10 pt-14">{children}</main>
              <Footer />
            </div>
          </div>
          <WhatsAppFloat />
        </AuthProvider>
      </body>
    </html>
  );
}
