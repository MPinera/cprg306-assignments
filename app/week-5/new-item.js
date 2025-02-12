"use client";

import { useState } from "react";

export default function StudentInfo() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, category, quantity };
    console.log(item);
    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
    resetButton();
  };

  return (
    <main>
      <div className="flex justify-center items-center min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center w-48 h-48 bg-green-500 space-y-4 p-4 rounded-lg"
        >
          <input
            typw="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="p-2 rounded-lg"
            required
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 rounded-lg"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="other">Other</option>
          </select>
          <p className="text-x1 font-semibold">{quantity}</p>
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
          <button
            onClick={handleSubmit}
            className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-purple-700 mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
