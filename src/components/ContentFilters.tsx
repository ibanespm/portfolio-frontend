"use client";
import { useState } from "react";

const categories = ["Tecnología", "Negocios", "Diseño"];
const types = ["image", "video", "gif"];

export default function ContentFilters() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);

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
    <div className=" bg-[#0a0f14] border border-[#10ff2b] rounded-lg  mb-6 p-5 lg:mx-50 sm:mx-20 md:mx-20">
      <div className="flex flex-col lg:flex-row  lg:items-end gap-10 flex-wrap">
        {/* Select de categoría */}
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

        {/* Input de tags */}
        <div className="flex-1">
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
        </div>
      </div>
    </div>
  );
}
