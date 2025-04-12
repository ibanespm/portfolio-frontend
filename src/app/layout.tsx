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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`{jetBrainsMono.className} px-20`}>
        <Navbar />
        <SectionLayout>{children}</SectionLayout>
      </body>
    </html>
  );
}
