import Breadcrumbs from "@/components/Breadcrumbs";

export default async function ContentDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const res = await fetch(`${process.env.API_URL}/content/${slug}`);
  const data = await res.json();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#222831] p-4">
      <Breadcrumbs title={data.title} />
      <h1 className="text-2xl text-white font-bold">{data.title}</h1>
      <p className="text-white mt-4">{data.description}</p>
      {/* resto del contenido */}
    </div>
  );
}
