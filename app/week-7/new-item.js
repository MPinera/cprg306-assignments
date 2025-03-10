import React, { useState } from "react";

const NewItem = ({ onAddItem }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      name,
      quantity: parseInt(quantity),
      category,
    };
    onAddItem(newItem);
    setName("");
    setQuantity("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 m-2 border rounded"
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="p-2 m-2 border rounded"
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 m-2 border rounded"
      />
      <button type="submit" className="p-2 m-2 bg-blue-500 text-white rounded">
        Add Item
      </button>
    </form>
  );
};

export default NewItem;
