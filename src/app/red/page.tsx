import ContactCards from "@/components/RedesCard";

export default function HomePage() {
  return (
    <div className={`min-h-screen max-w-7xl mt-4  mx-auto  text-white p-6 `}>
      <ContactCards />
      <p className="mt-10 text-gray-400 text-lg px-16">
        Si deseas colaborar en un proyecto, tienes alguna consulta sobre desarrollo web o machine learning, o simplemente quieres saludar, no dudes en escribirme por cualquiera de mis redes. ¡Estoy abierto a nuevas ideas y conexiones!
      </p>
    </div>
  );
}
