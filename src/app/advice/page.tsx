"use client";
import Image from "next/image";
import { FaPaypal, FaCreditCard, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    description: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePaymentMethodSelect = (method: string) => {
    setSelectedMethod(method);
    setIsModalOpen(true); // Abre el modal cuando se selecciona un método de pago
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.amount) {
      alert("Por favor complete todos los campos requeridos");
      return;
    }

    try {
      if (selectedMethod === "paypal") {
        // Integración con PayPal
        await handlePayPalPayment();
      } else if (selectedMethod === "transferencia") {
        // Integración con PayU
        await handlePayUPayment();
      }
    } catch (error) {
      console.error("Error en el pago:", error);
      alert("Ocurrió un error al procesar el pago");
    }
  };

  const handlePayPalPayment = () => {
    console.log("Iniciando pago con PayPal", formData);
    alert(`Redirigiendo a PayPal para completar el pago de $${formData.amount}`);

    // Redirige al usuario a la URL de PayPal para completar el pago
    window.location.href = "https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=tu-email@paypal.com&item_name=Asesoria&amount=" + formData.amount + "&currency_code=USD"; // Reemplazar con los parámetros reales de PayPal
  };

  const handlePayUPayment = () => {
    console.log("Iniciando pago con PayU", formData);
    alert(`Redirigiendo a PayU para completar el pago de $${formData.amount}`);
    window.open("https://biz.payulatam.com/L0f9e9a9F467048", "_blank");
  };
  

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 sm:px-10 py-15  relative`}
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/mapa.jpg"
          alt="Background"
          fill
          quality={100}
          className="object-cover opacity-20"
          priority
        />
      </div>

      {/* Contenido principal */}
      <div className="relative w-full max-w-7xl dark:bg-neutral-900/80 bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden flex flex-col lg:flex-row gap-8 p-6 sm:p-10 border border-gray-200 dark:border-gray-700 shadow-xl z-10">
        {/* Columna izquierda - Métodos de pago */}
        <div className="lg:order-1 order-2 flex-1 flex flex-col justify-center p-6 sm:p-8">
          <div className="mb-8">
            <h4 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#10ff2b] via-[#00d1b2] to-[#10ff2b] bg-clip-text text-transparent">
              Métodos de Pago
            </h4>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              Aceptamos múltiples métodos de pago para tu conveniencia.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {/* Botón PayPal */}
            <button
              onClick={() => handlePaymentMethodSelect("paypal")}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 text-white rounded-xl font-medium border-2 border-transparent hover:border-blue-300 transition-all transform hover:scale-[1.02] shadow-md hover:shadow-lg cursor-pointer"
            >
              <FaPaypal className="text-xl" />
              <span className="text-lg">PayPal</span>
            </button>

            {/* Botón Transferencia Bancaria (PayU) */}
            <button
              onClick={() => handlePaymentMethodSelect("transferencia")}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-l from-amber-400 via-amber-600 to-red-600 hover:bg-gradient-to-l hover:from-amber-500 hover:via-amber-700 hover:to-red-700 text-black dark:text-white rounded-xl font-medium border-2 border-gray-300 dark:border-red-800 hover:border-red-800 transition-all transform hover:scale-[1.02] shadow-md hover:shadow-lg cursor-pointer"
            >
              <FaCreditCard className="text-xl" />
              <span className="text-lg">Transferencia Bancaria (PayU)</span>
              <span className="text-[#00d1b2]">→</span>
            </button>
          </div>
        </div>

        {/* Separador visual */}
        <div className="lg:hidden border-t border-gray-200 dark:border-gray-700 my-4"></div>

        {/* Columna derecha - Descripción */}
        <div className="lg:order-2 order-1 flex-1 p-6 sm:p-8 flex flex-col justify-center border-l-0 lg:border-l border-gray-200 dark:border-gray-700 lg:pl-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
            Asesoría Especializada en Tecnología
          </h1>

          <div className="space-y-6">
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Domina <span className="font-bold text-[#10ff2b]">NestJS</span>,{" "}
              <span className="font-bold text-[#00d1b2]">Python</span>,{" "}
              <span className="font-bold text-[#10ff2b]">Machine Learning</span>{" "}
              y <span className="font-bold text-[#00d1b2]">Desarrollo Web</span>{" "}
              con nuestros expertos.
            </p>

            <p className="text-lg md:text-xl text-white dark:text-gray-300 leading-relaxed">
              Desarrolla proyectos reales que puedas monetizar, vender o
              implementar en tus propios negocios.
            </p>
          </div>
        </div>
      </div>

      {/* Modal de datos y pago */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gradient-to-b from-black to-transparent bg-opacity-20 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={(e) => {
            // Verifica si el clic ocurrió fuera del contenido del modal
            if (e.target === e.currentTarget) {
              setIsModalOpen(false);
            }
          }}
        >
          <div
            className="bg-gray-800 rounded-xl max-w-md w-full p-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <FaTimes className="text-xl" />
            </button>

            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              {selectedMethod === "paypal"
                ? "Pago con PayPal"
                : "Pago con Transferencia Bancaria (PayU)"}
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Nombre completo*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Correo electrónico*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="amount"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Monto a pagar (USD)*
                  </label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    min="1"
                    step="0.01"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Descripción del pago
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition duration-200"
                >
                  {selectedMethod === "paypal" ? (
                    <>
                      <FaPaypal className="inline mr-2" />
                      Pagar con PayPal
                    </>
                  ) : (
                    <>
                      <FaCreditCard className="inline mr-2" />
                      Proceder al pago con PayU
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
