import "./globals.css";
import Navbar from "../components/Navbar";
import { AuthProvider } from "@/context/AuthContext";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/700.css";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Aside } from "@/components/Aside";
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
      <body className="min-h-screen flex flex-col font-jetbrains-mono bg-radial-[at_25%_25%] from-black via-[#0a0f14] to-[#1c1d1d]">
        <AuthProvider>
          <Navbar />
          <div className="min-h-screen">
  <Aside className="fixed top-20 left-0 h-[calc(100vh-5rem)] w-[20%] hidden md:block border-r border-[#10ff2b] p-4 z-40" />

  <div className="ml-0 md:ml-[20%] w-full md:w-[80%]">
    <main className="px-4 md:px-7 xl:px-10 py-20">
      {children}
    </main>
    <Footer />
  </div>
</div>

        </AuthProvider>
      </body>
    </html>
  );
}
