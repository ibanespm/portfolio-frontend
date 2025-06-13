"use client";
import ContentList from "@/components/ComponentList";
import ContentFilters from "@/components/ContentFilters";
import { Breadcrumb } from "@/components/ContentBreadcrumbs";
import { useState, useCallback } from "react"; // <--- ahora también useCallback

type filterProps = {
  category: string;
  type: string;
  tags: string[];
};

export default function ContentPage() {
  const [filters, setFilters] = useState<filterProps>({
    category: "",
    type: "",
    tags: [],
  });

  const handleFilterChange = useCallback((newFilters: filterProps) => {
    setFilters(newFilters);
  }, []);
  return (
    <div className="flex flex-col min-h-screen sm:py-40 md:py-10 lg:py-5 ">
      <ContentFilters onFilterchange={handleFilterChange}/>
      <Breadcrumb />
      <ContentList filters={filters} />
    </div>
  );
}
