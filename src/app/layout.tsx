import { ThemeModeScript } from "flowbite-react";
import "./globals.css";
import Navbar from "../components/Navbar";
import SectionLayout from "@/modules/common/layouts/layout";

import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"], // los pesos que quieras
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={jetBrainsMono.className}
    >
      <head>
        <ThemeModeScript />
      </head>
      <body className={`${jetBrainsMono.className} bg-gradient-to-t from-black via-gray-950 to-gray-900`}>
        <Navbar />
        <SectionLayout>{children}</SectionLayout>
      </body>
    </html>
  );
}
