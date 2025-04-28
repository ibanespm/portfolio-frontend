"use client";
import ContentList from "@/components/ComponentList";
import ContentFilters from "@/components/ContentFilters";
import { Breadcrumb } from "@/components/ContentBreadcrumbs";
import RootLayout from "../layout";
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
    <RootLayout>
      <div className="flex flex-col min-h-screen sm:py-40 md:30 lg:py-20 not-italic">
        <ContentFilters onFilterchange={handleFilterChange}/>
        <Breadcrumb />
        <ContentList filters={filters} />
      </div>
    </RootLayout>
  );
}
