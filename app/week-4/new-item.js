"use client";

import { useState } from "react";

export default function StudentInfo() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    } else {
      alert("Error: Quantity cannot exceed 20");
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      alert("Error: Quantity cannot be less than 1");
    }
  };

  const resetButton = () => {
    setQuantity(1);
  };

  return (
    <main>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col justify-center items-center w-48 h-48 bg-green-500 space-y-4 p-4 rounded-lg">
          <p className="text-xl font-semibold">{quantity}</p>
          <div className="flex items-center space-x-4">
            <button
              onClick={increment}
              className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-blue-700 w-12 h-12 flex items-center justify-center"
            >
              +
            </button>
            <button
              onClick={decrement}
              className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-red-700 w-12 h-12 flex items-center justify-center"
            >
              -
            </button>
          </div>
          <button
            onClick={resetButton}
            className="bg-black text-white font-bold py-4 px-8 rounded hover:bg-purple-700"
          >
            Reset
          </button>
        </div>
      </div>
    </main>
  );
}
