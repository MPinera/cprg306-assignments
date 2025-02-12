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
    setName("");
    setCategory("produce");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, category, quantity };
    console.log(item);
    alert(`Added item: ${name}, Quantity: ${quantity}, Category: ${category}`);
    resetButton();
  };

  return (
    <main>
      <div className="flex justify-center items-center min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center w-50 h-auto bg-green-500 space-y-4 p-4 rounded-lg"
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
                className="bg-black text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 w-4 flex items-center justify-center"
              >
                +
              </button>

              <button
                type="button"
                onClick={decrement}
                className="bg-black text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 w-4 flex items-center justify-center"
              >
                -
              </button>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="p-3 font-bold w-40 rounded-lg"
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
            </div>
          </div>
          <button
            type="submit"
            className="bg-black text-white font-bold p-3 w-80 rounded-lg hover:bg-purple-700 flex items-center justify-center"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
