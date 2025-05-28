"use client";
import api from "@/services/api";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Breadcrumb } from "@/components/ContentBreadcrumbs";
import { useParams } from "next/navigation";
import { Share2, ExternalLink, Clock, Calendar } from "lucide-react";
import { toast } from "react-hot-toast";
import { format } from 'date-fns';

interface Content {
  _id: string;
  title: string;
  description?: string;
  url: string;
  type: 'video' | 'image' | 'article';
  category: string;
  tags?: string[];
  createdAt?: string;
  views?: number;
}

export default function ContentDetail() {
  const [content, setContent] = useState<Content | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams() as { _id: string };
  const currentUrl = window.location.href;

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
        setError('Error loading content. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchContent();
  }, [params._id]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: content?.title || '',
        text: content?.description || '',
        url: currentUrl
      }).catch(err => console.log('Error sharing:', err));
    } else {
      navigator.clipboard.writeText(currentUrl)
        .then(() => {
          toast.success('URL copied to clipboard!');
        })
        .catch(err => {
          toast.error('Failed to copy URL');
        });
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 space-y-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        <p className="text-gray-400">Loading content...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-64 space-y-4">
        <p className="text-red-400">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="text-blue-400 hover:text-blue-300"
        >
          Try again
        </button>
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

        <div className="p-6 space-y-6">
          <div className="flex justify-between items-start">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              {content.title}
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">{content.category}</span>
              <button
                onClick={handleShare}
                className="p-2 hover:bg-gray-700 rounded-full transition-colors"
                title="Share this content"
              >
                <Share2 className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{format(new Date(content.createdAt || Date.now()), 'MMM dd, yyyy')}</span>
            </div>
            {content.views && (
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{content.views} views</span>
              </div>
            )}
          </div>

          {content.description && (
            <p className="text-gray-400 leading-relaxed whitespace-pre-wrap">
              {content.description}
            </p>
          )}

          {content.tags && content.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {content.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full text-sm text-white hover:from-blue-500 hover:to-blue-600 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex justify-end">
            <a
              href={content.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              View original
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}