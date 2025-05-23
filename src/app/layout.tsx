import "./globals.css";
import Navbar from "../components/Navbar";
import { AuthProvider } from "@/context/AuthContext";
import jetBrains from "next/font/google";
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen flex flex-col jetbrains">
        <AuthProvider>
          <Navbar />
          <main className="flex-grow bg-gradient-to-br from-black via-[#0a0f14] to-[#1c1d1d]">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}