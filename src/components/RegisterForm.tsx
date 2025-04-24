"use client";
import { useState } from "react";
import api from "@/services/api";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleGoogleAuth = async (event: any) => {
    event.preventDefault();
    try {
      // Using the NEXT_PUBLIC_ environment variable for client-side access
      const backendUrl = "http://localhost:5000";
      if (!backendUrl) {
        console.error("Backend API URL is not defined");
        setError("Configuration error. Please contact support.");
        return;
      }
      window.location.href = `http://localhost:5000/auth/callback/google`;
    } catch (err) {
      setError("Error al iniciar sesión con Google");
      console.error(err);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/register", {
        name,
        email,
        password,
        role: "user",
      });
      alert("Usuario creado con éxito");
      router.push("/login");
    } catch (err) {
      // Improved error handling
      const errorMessage =
        err.response?.data?.message || "Error al crear el usuario";
      setError(errorMessage);
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="relative p-1 rounded-lg bg-gradient-to-r from-cyan-950 to-black">
        <div className="bg-gradient-to-r from-black to-cyan-950 p-6 rounded-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-red-700 via-orange-500 to-amber-700 bg-clip-text text-transparent">
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
                className="w-full py-2 px-3 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                className="w-full py-2 px-3 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                className="w-full py-2 px-3 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-gradient-to-r from-red-700 via-orange-500 to-amber-700 text-white font-medium rounded hover:opacity-90 transition-opacity"
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
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                fill="#fff"
              />
            </svg>
            Continuar con Google
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
