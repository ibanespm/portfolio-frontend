"use client"

import { useState } from "react";
import { FaTimes, FaPaypal, FaCreditCard } from "react-icons/fa";

interface PaymentAdviceModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  formData: {
    name: string;
    email: string;
    phone: string;
    amount: string;
    description: string;
  };
}


interface PaymentAdviceModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  formData: {
    name: string;
    email: string;
    phone: string;
    amount: string;
    description: string;
  };
}

export default function PaymentAdviceModal({
  isModalOpen,
  setIsModalOpen,
  formData
}: PaymentAdviceModalProps) {
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // This is a placeholder - in a real app you would update the formData state here
    console.log(`Updating ${name} with value: ${value}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Payment Advice</h2>
          <button
            onClick={() => setIsModalOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <FaTimes />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Payment Method
            </label>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setSelectedMethod('paypal')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md 
                  ${selectedMethod === 'paypal' ? 'bg-blue-500 text-white' : 'bg-gray-100'}
                `}
              >
                <FaPaypal />
                <span>PayPal</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedMethod('credit-card')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md 
                  ${selectedMethod === 'credit-card' ? 'bg-blue-500 text-white' : 'bg-gray-100'}
                `}
              >
                <FaCreditCard />
                <span>Credit Card</span>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount
            </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Submit Payment
          </button>
        </form>
      </div>
    </div>
  );
}