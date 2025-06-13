"use client";

import { useEffect, useState } from "react";

import api from "@/services/api";
import Image from "next/image";
import Link from "next/link";

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

interface ContentListProps {
  filters: {
    category: string;
    type: string;
    tags: string[];
  };
}

export default function ContentList({ filters }: ContentListProps) {
  const [content, setContent] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);

      try {
        const params = new URLSearchParams();
        if (filters.category) params.append("category", filters.category);
        if (filters.type) params.append("type", filters.type);
        if (filters.tags.length > 0) {
          filters.tags.forEach((tag) => params.append("tags", tag));
        }

        const response = await api(`content?${params.toString()}`);
        setContent(response.data);
      } catch (error) {
        console.error("Error fetching content:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [filters]); // <-- cuando filters cambia, vuelve a hacer fetch

  if (loading) return <div className="space-y-4">Cargando artículos...</div>;
  if (content.length === 0) return <p>No hay contenido disponible.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-10 mt-5 mx-3 sm:mx-5 md:mx-8 lg:mx-20  ">
      {content.map((item) => (
        <Link href={`/content/${item._id}`} key={item._id} className="m-auto">
          <article
            key={item._id}
            className="bg-gradient-to-br to-[#0a0f14] from-[#000000] rounded-md border border-b-white/20  shadow-md w-full max-w-lg flex flex-col justify-between h-full "
          >
            {item.type === "video" ? (
              <video
                controls
                className="w-full h-48 object-cover rounded-lg"
              >
                <source src={item.url} />
              </video>
            ) : (
              <div className="w-full h-56 relative mb-4 rounded-lg overflow-hidden flex items-center justify-center">
                <Image
                  src={item.url}
                  alt={item.title}
                  fill
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
                  <p className="text-gray-400 text-sm mb-3">
                    {item.description}
                  </p>
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

              <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                <div className="flex items-center space-x-2 text-gray-400">
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill={item.isLiked ? "#ef4444" : "none"}
                      stroke={item.isLiked ? "#ef4444" : "currentColor"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                    {item.likes}
                  </span>
                </div>

                <span className="bg-gradient-to-r from-blue-900/50 to-blue-800/50 text-blue-400 text-xs px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}
