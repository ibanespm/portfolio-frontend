// components/LikeIcon.tsx
"use client";
import { useState } from "react";

interface LikeIconProps {
  isLiked: boolean;
  likes: number;
  onLike: () => void;
}

export default function LikeContent{ isLiked, likes, onLike }: LikeIconProps) {
  const [hover, setHover] = useState(false);

  return (
    <div className="flex justify-between items-center pt-4 border-t border-gray-700">
      <div className="flex items-center space-x-2 text-gray-400">
        <span className="flex items-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill={isLiked ? "#ef4444" : "none"}
            stroke={isLiked ? "#ef4444" : hover ? "#f87171" : "currentColor"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-1 transition-colors duration-200"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={onLike}
            aria-label={isLiked ? "Unlike" : "Like"}
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          {likes}
        </span>
      </div>
    </div>
  );
}
