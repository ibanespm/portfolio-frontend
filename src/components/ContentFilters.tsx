"use client";
import api from "@/services/api";
import { useState, useEffect } from "react";

interface ContentFiltersProps {
  onFilterchange: (filters: {
    category: string;
    type: string;
    tags: string[];
  }) => void;
}

export default function ContentFilters({
  onFilterchange,
}: ContentFiltersProps) {
  const [categories, setCategories] = useState<string[]>([]);
  const [types, setTypes] = useState<string[]>([]);
  const [suggestedTags, setSuggestedTags] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [showTagSuggestions, setShowTagSuggestions] = useState(false);

  // Fetch filters on component mount
  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const response = await api("/contentFilters");
        const data = await response.data;
        setCategories(data.categories || []);
        setTypes(data.types || []);
        setSuggestedTags(data.tags || []);
      } catch (error) {
        console.error("Error fetching content filters:", error);
      }
    };

    fetchFilters();
  }, []);

  // Notify parent when filters change
  useEffect(() => {
    onFilterchange({
      category: selectedCategory,
      type: selectedType,
      tags,
    });
  }, [selectedCategory, selectedType, tags, onFilterchange]);

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === "Enter" || e.key === ",") && tagInput.trim() !== "") {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput("");
    }
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const addSuggestedTag = (tag: string) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
    setTagInput("");
    setShowTagSuggestions(false);
  };

  return (
    <div className="bg-[#0a0f14] border border-[#10ff2b] rounded-lg mb-6 p-5 max-w-5xl mx-auto">
      <h2 className=" font-semibold text-[#10ff2b] mb-4">Filtrar Contenido</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* Category Select */}
        <div>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full bg-[#121a21] border border-[#10ff2b]/50 text-white rounded-md p-2 focus:border-[#10ff2b] focus:ring-1 focus:ring-[#10ff2b] transition-all"
          >
            <option value="">Todas las categorías</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Type Select */}
        <div>
         
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full bg-[#121a21] border border-[#10ff2b]/50 text-white rounded-md p-2 focus:border-[#10ff2b] focus:ring-1 focus:ring-[#10ff2b] transition-all"
          >
            <option value="">Todos los tipos</option>
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Tags Input */}
        <div>
        
          <div className="relative">
            <input
              type="text"
              placeholder="Escribe y presiona Enter"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleAddTag}
              onFocus={() => setShowTagSuggestions(true)}
              onBlur={() => setTimeout(() => setShowTagSuggestions(false), 200)}
              className="w-full bg-[#121a21] border border-[#10ff2b]/50 text-white rounded-md p-2 focus:border-[#10ff2b] focus:ring-1 focus:ring-[#10ff2b] transition-all"
            />
            {showTagSuggestions && suggestedTags.length > 0 && (
              <div className="absolute z-10 mt-1 w-full bg-[#121a21] border border-[#10ff2b]/50 rounded-md shadow-lg max-h-60 overflow-auto">
                {suggestedTags
                  .filter(tag => 
                    !tags.includes(tag) && 
                    tag.toLowerCase().includes(tagInput.toLowerCase())
                  )
                  .map((tag) => (
                    <div
                      key={tag}
                      onClick={() => addSuggestedTag(tag)}
                      className="px-3 py-2 text-white hover:bg-[#10ff2b] hover:text-black cursor-pointer transition-colors"
                    >
                      {tag}
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Selected Tags */}
      {tags.length > 0 && (
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center bg-[#10ff2b] text-black text-sm px-3 py-1 rounded-full"
              >
                {tag}
                <button
                  onClick={() => removeTag(tag)}
                  className="ml-2 text-black hover:text-gray-700 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Suggested Tags */}
      {suggestedTags.length > 0 && !showTagSuggestions && (
        <div className="mt-4">
          <h3 className="text-sm font-medium text-white mb-2">Etiquetas populares:</h3>
          <div className="flex flex-wrap gap-2">
            {suggestedTags.slice(0, 10).map((tag) => (
              <button
                key={tag}
                onClick={() => addSuggestedTag(tag)}
                disabled={tags.includes(tag)}
                className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                  tags.includes(tag)
                    ? 'bg-[#10ff2b] text-black border-[#10ff2b]'
                    : 'bg-transparent text-[#10ff2b] border-[#10ff2b]/50 hover:bg-[#10ff2b] hover:text-black'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}