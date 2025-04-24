import ContentList from "@/components/ComponentList";
import SectionLayout from "@/modules/common/layouts/layout";
import ContentFilters from "@/components/ContentFilters";

export default function ContentPage() {
  return (
    <SectionLayout>
      <div className="flex flex-col min-h-screen bg-gradient-to-b via-[#1118888] from-black to-[#222831] p-4">
        <ContentFilters />
        <ContentList />
      </div>
    </SectionLayout>
  );
}
