"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

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
    setName("");
    setCategory("Produce");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      name,
      category,
      quantity,
      id: Math.random().toString(36).substr(2, 9),
    };
    onAddItem(newItem);
    resetButton();
  };

  return (
    <main>
      <div className="flex m-24 w-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center w-50 h-auto bg-blue-600 space-y-4 p-4 rounded-lg"
        >
          <div className="flex items-center space-x-5">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Item Name"
              className="font-bold rounded-lg p-3 w-72"
              required
            />
          </div>

          <div className="flex items-center space-x-4">
            <p className="flex items-end font-bold rounded-lg py-2 px-4">
              {quantity}
            </p>
            <div className="flex items-center space-x-4">
              <button
                type="button"
                onClick={increment}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-300 w-4 flex items-center justify-center"
              >
                +
              </button>

              <button
                type="button"
                onClick={decrement}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-300 w-4 flex items-center justify-center"
              >
                -
              </button>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="p-3 font-bold w-40 rounded-lg"
              >
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Bakery">Bakery</option>
                <option value="Meat">Meat</option>
                <option value="Frozen">Frozen Foods</option>
                <option value="Canned">Canned Goods</option>
                <option value="Dry">Dry Goods</option>
                <option value="Beverages">Beverages</option>
                <option value="Snacks">Snacks</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold p-3 w-80 rounded-lg hover:bg-blue-300 flex items-center justify-center"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
