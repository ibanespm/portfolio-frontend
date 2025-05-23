"use client";
import api from "@/services/api";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Breadcrumb } from "@/components/ContentBreadcrumbs";
import { useParams } from "next/navigation";

interface Content {
  _id: string;
  title: string;
  description?: string;
  url: string;
  type: 'video' | 'image' | 'article';
  category: string;
  tags?: string[];
}

export default function ContentDetail() {
  const [content, setContent] = useState<Content | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams() as { _id: string };

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await api(`/content/${params._id}`);
        if (!data?.data) {
          throw new Error('Content not found');
        }
        setContent(data.data);
      } catch (error) {
        console.error('Error fetching content:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchContent();
  }, [params._id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
      </div>
    );
  }

  if (!content) return <div>Content not found</div>;

  return (
    <div className="flex flex-col min-h-screen mx-10 py-30">
      <Breadcrumb currentTitle={content.title} />
      <article className="bg-gradient-to-br to-[#0a0f14] from-[#000000] rounded-lg border border-gray-700 shadow-lg w-full max-w-2xl mx-auto overflow-hidden mt-20">
        <div className="relative w-full h-64 md:h-80">
          <Image
            src={content.url}
            alt={content.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="p-6 space-y-4">
          <div className="flex justify-between items-start">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              {content.title}
            </h1>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm">{content.category}</span>
            </div>
          </div>

          {content.description && (
            <p className="text-gray-400 leading-relaxed">
              {content.description}
            </p>
          )}

          {content.tags && content.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {content.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </div>
  );
}