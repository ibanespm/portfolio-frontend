"use client";

import { useEffect, useState } from "react";

import api from "@/services/api";
import Image from "next/image";

interface ContentItem {
  _id: string;
  title: string;
  type: "image" | "video" | "gif";
  url: string;
  likes: number;
  category?: string;
  tags: string[];
  description?: string;
  isLiked?: boolean; // Nuevo campo para rastrear si el usuario dio like
}

export default function ContentList() {
  const [content, setContent] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleLike = async (id: string) => {
    try {
      // Encontrar el item actual
      const itemIndex = content.findIndex((item) => item._id === id);
      if (itemIndex === -1) return;

      const currentItem = content[itemIndex];
      const isCurrentlyLiked = currentItem.isLiked;

      // Optimistic UI update
      const updatedContent = [...content];
      updatedContent[itemIndex] = {
        ...currentItem,
        likes: isCurrentlyLiked ? currentItem.likes - 1 : currentItem.likes + 1,
        isLiked: !isCurrentlyLiked,
      };
      setContent(updatedContent);

      // Hacer la petición al backend
      if (isCurrentlyLiked) {
        await api.delete(`/content/${id}/like`);
      } else {
        await api.post(`/content/${id}/like`);
      }

      // Recargar datos para asegurar sincronización
      fetchContent();
    } catch (error) {
      console.error("Error al dar like:", error);
      // Revertir cambios si hay error
      fetchContent();
    }
  };

  const fetchContent = async () => {
    try {
      const response = await api.get("/content");
      // Agregar propiedad isLiked basada en tu lógica de autenticación
      // (Aquí asumimos que el backend podría devolver esta información)
      const contentWithLikes = response.data.map((item: ContentItem) => ({
        ...item,
        isLiked: false, // Esto debería venir del backend o de tu estado de autenticación
      }));
      setContent(contentWithLikes);
    } catch (err) {
      setError("Error al cargar el contenido");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  if (loading) return <div className="space-y-4">Cargando artículos...</div>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (content.length === 0) return <p>No hay contenido disponible.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 sm:px-5 md:px-10 lg:px-15 gap-10 mx-5 mt-5">
      {content.map((item) => (
        <article
          key={item._id}
          className="bg-gradient-to-br to-[#0a0f14] from-[#000000] rounded-md border border-[#ffffff] shadow-md w-full max-w-md flex flex-col justify-between h-full "
        >
          {item.type === "video" ? (
            <video
              controls
              className="w-full h-48 object-cover rounded-lg mb-4"
            >
              <source src={item.url} />
            </video>
          ) : (
            <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden">
              <Image
                src={item.url}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          )}

          <div className="flex flex-col flex-grow justify-between px-5 pb-3">
            <div>
              <div className="flex justify-between items-start mb-2 text-white">
                <h2 className="text-2xl font-bold">{item.title}</h2>
              </div>

              {item.description && (
                <p className="text-gray-400 text-sm mb-3">{item.description}</p>
              )}

              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#10ff2f] text-gray-800 text-xs px-3 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>Likes: {item.likes}</span>
              <button
                onClick={() => handleLike(item._id)}
                className="hover:scale-110 transition-transform"
                aria-label={item.isLiked ? "Quitar me gusta" : "Dar me gusta"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill={item.isLiked ? "red" : "none"}
                  stroke={item.isLiked ? "red" : "currentColor"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-heart cursor-pointer"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </button>
            </div>
            <span className="bg-gradient-to-br from-[#0a0f14] via-[#0a0f25] text-white text-center  text-xs px-2 py-1 rounded">
              {item.category}
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}
