import ContactCards from "@/components/RedesCard";

export default function HomePage() {
  return (
    <main className={`min-h-screen max-w-7xl  mx-auto  text-white p-6 `}>
      <h1 className="text-3xl font-bold mb-6">Mis Redes y Contacto</h1>
      <ContactCards />
    </main>
  );
}
