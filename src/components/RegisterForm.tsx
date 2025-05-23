

"use client";
import { useState } from "react";
import api from "@/services/api";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FormEvent } from "react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleGoogleAuth = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      // Using the NEXT_PUBLIC_ environment variable for client-side access
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
      if (!backendUrl) {
        console.error("Backend API URL is not defined");
        setError("Configuration error. Please contact support.");
        return;
      }
      window.location.href = `${backendUrl}/auth/callback/google`;
    } catch (error) {
      setError("Error al iniciar sesión con Google");
      console.error(error);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", {
        name,
        email,
        password,
        role: "user",
      });
      alert("Usuario creado con éxito");
      router.push("/login");
    } catch (error) {
      // Improved error handling
      setError("Error al crear el usuario");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="relative p-1 rounded-lg bg-gradient-to-r from-[#10ff2b] via-[#00d1b2] to-[#10ff2b]">
        <div className="bg-gradient-to-r from-black to-cyan-950 p-6 rounded-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-[#10ff2b] via-[#00d1b2] to-[#10ff2b] bg-clip-text text-transparent">
            Registro de Usuario
          </h1>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 text-gray-300">
                Nombre:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full py-2 px-3 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-gray-300">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-2 px-3 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 text-gray-300">
                Contraseña:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full py-2 px-3 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-gradient-to-r from-[#10ff2b] via-[#00d1b2] to-[#10ff2b] text-white font-medium rounded hover:opacity-90 transition-opacity"
            >
              Registrarse
            </button>
          </form>

          <div className="my-4 flex items-center">
            <div className="flex-1 border-t border-gray-700"></div>
            <span className="px-4 text-sm text-gray-400">O</span>
            <div className="flex-1 border-t border-gray-700"></div>
          </div>

          <button
            onClick={handleGoogleAuth}
            className="w-full flex items-center justify-center py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors border border-gray-700"
          >
            <FcGoogle />
           <span className="px-2">  Continuar con Google</span>
          </button>

          <div className="mt-4 text-center text-gray-400">
            ¿Ya tienes cuenta?{" "}
            <Link href="/login" className="text-orange-500 hover:underline">
              Inicia sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
