import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <li className="p-4 border-b border-gray-200">
      <div className="text-lg font-semibold">{name}</div>
      <div className="text-sm text-gray-600">Quantity: {quantity}</div>
      <div className="text-sm text-gray-600">Category: {category}</div>
    </li>
  );
};

export default Item;
