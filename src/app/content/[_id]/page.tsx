"use client";
import api from "@/services/api";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useState } from "react";
import { Breadcrumb } from "@/components/ContentBreadcrumbs";


interface Content {
  _id: string;
  title: string;
  description?: string;
  url: string;
  type: 'video' | 'image' | 'article';
  likes: number;
  isLiked: boolean;
  category: string;
  tags?: string[];
}

async function getContent(_id: string): Promise<Content | null> {
  try {
    const res = await api(`/content/${_id}`);
    if (!res?.data) return null;
    return res.data;
  } catch (error) {
    console.error("Error fetching content:", error);
    return null;
  }
}

export default function ContentDetail({ params }: { params: { _id: string } }) {
  const [content, setContent] = useState<Content | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch content on component mount
  useState(() => {
    const fetchContent = async () => {
      try {
        const data = await getContent(params._id);
        if (!data) {
          setError('Content not found');
          return;
        }
        setContent(data);
      } catch (err) {
        setError('Failed to load content');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchContent();
  }, [params._id]);

  const handleLike = async () => {
    if (!content) return;
    
    try {
      const updatedContent = {
        ...content,
        likes: content.isLiked ? content.likes - 1 : content.likes + 1,
        isLiked: !content.isLiked
      };
      
      // Optimistic update
      setContent(updatedContent);
      
      // API call
      await api.patch(`/content/${content._id}/like`, {
        isLiked: updatedContent.isLiked
      });
    } catch (err) {
      // Revert on error
      setContent(content);
      console.error("Error updating like:", err);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !content) {
    return notFound();
  }

  return (
    <div className="flex flex-col min-h-screen mx-10 py-30">

<Breadcrumb currentTitle={content.title} />
    <article className="bg-gradient-to-br to-[#0a0f14] from-[#000000] rounded-lg border border-gray-700 shadow-lg w-full max-w-2xl mx-auto overflow-hidde mt-20">
      <div className="relative w-full h-64 md:h-80">
        {content.type === "video" ? (
          <video 
            controls 
            className="w-full h-full object-cover"
            poster={content.thumbnailUrl} // Add if available
          >
            <source src={content.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={content.url}
            alt={content.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        )}
      </div>

      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            {content.title}
          </h1>
          <button
            onClick={handleLike}
            className="hover:scale-110 active:scale-95 transition-transform"
            aria-label={content.isLiked ? "Unlike" : "Like"}
            disabled={isLoading}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill={content.isLiked ? "#ef4444" : "none"}
              stroke={content.isLiked ? "#ef4444" : "#9ca3af"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-heart cursor-pointer hover:fill-red-400 hover:stroke-red-400"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </button>
        </div>

        {content.description && (
          <p className="text-gray-300 leading-relaxed">
            {content.description}
          </p>
        )}

        {content.tags && content.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {content.tags.map((tag) => (
              <span 
                key={tag} 
                className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex justify-between items-center pt-4 border-t border-gray-700">
          <div className="flex items-center space-x-2 text-gray-400">
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill={content.isLiked ? "#ef4444" : "none"}
                stroke={content.isLiked ? "#ef4444" : "currentColor"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              {content.likes}
            </span>
          </div>
          
          <span className="bg-gradient-to-r from-blue-900/50 to-blue-800/50 text-blue-400 text-xs px-3 py-1 rounded-full">
            {content.category}
          </span>
        </div>
      </div>
    </article>
    </div>
  );
}