import React from "react";

const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <li
      className="p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
      onClick={onSelect}
    >
      <div className="text-lg font-semibold">{name}</div>
      <div className="text-sm text-gray-600">Quantity: {quantity}</div>
      <div className="text-sm text-gray-600">Category: {category}</div>
    </li>
  );
};

export default Item;
