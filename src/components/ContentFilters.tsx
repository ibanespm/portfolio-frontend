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

  // Llama a la API al montar el componente
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
  useEffect(() => {
    onFilterchange({
      category: selectedCategory,
      type: selectedType,
      tags,
    });
  }, [selectedCategory, selectedType, tags, onFilterchange]);

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
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

  return (
    <div className="bg-[#0a0f14] border border-[#10ff2b] rounded-lg mb-6 p-5 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end lg:flex-row lg:items-end gap-6 flex-wrap">
        {/* Select Categoría */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-white mb-1">
            Categoría
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full bg-black border border-[#10ff2b] text-white rounded p-2"
          >
            <option value="">Todas</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Select Tipo */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-white mb-1">
            Tipo de Contenido
          </label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full bg-black border border-[#10ff2b] text-white rounded p-2"
          >
            <option value="">Todos</option>
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Input de Tags */}
        <div className="flex">
          <label className="block text-sm font-medium text-white mb-1">
            Tags
          </label>
          <input
            type="text"
            placeholder="Presiona Enter para agregar"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleAddTag}
            className="w-full bg-black border border-[#10ff2b] text-white rounded p-2"
          />
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#10ff2b] text-black text-xs px-2 py-1 rounded flex items-center gap-1"
              >
                {tag}
                <button
                  onClick={() => removeTag(tag)}
                  className="text-xs font-bold"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-delete-icon lucide-delete cursor-pointer"
                  >
                    <path d="M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" />
                    <path d="m12 9 6 6" />
                    <path d="m18 9-6 6" />
                  </svg>
                </button>
              </span>
            ))}
          </div>

          {/* Opcional: Sugerencias de Tags */}
          {suggestedTags.length > 0 && (
            <div className="mt-4">
              <p className="text-white text-xs mb-2">Tags sugeridos:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      if (!tags.includes(tag)) setTags([...tags, tag]);
                    }}
                    className="bg-black border border-[#10ff2b] text-white text-xs px-2 py-1 rounded hover:bg-[#10ff2b] hover:text-black"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
