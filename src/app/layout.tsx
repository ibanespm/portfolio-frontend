import { ThemeModeScript } from "flowbite-react";
import "./globals.css";
import Navbar from "../components/Navbar";
import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: '--font-jetbrains'
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={jetBrainsMono.className}>
      <head>
        <ThemeModeScript />
        {/* Añade otros meta tags importantes */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${jetBrainsMono.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow bg-gradient-to-br from-black via-[#0a0f14] to-[#1c1d1d]">
          {children}
        </main>
      </body>
    </html>
  );
}