import RootLayout from "../layout";

export default function AdvicePage() {
  return (
    <RootLayout>
      <div className="flex flex-col min-h-screen bg-gradient-to-b via-[#1118888] from-black to-[#222831] ">
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold mb-4">Asesorías</h1>
          <p className="text-lg text-gray-700">
            Aquí encontrarás información sobre las asesorías disponibles.
          </p>
        </div>
      </div>
    </RootLayout>
  );
}
