"use client";

import React, { useState } from "react";
import Item from "./item.js";

const ItemList = ({ items, onItemSelect }) => {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    } else if (sortBy === "grouped") {
      return (
        a.category.localeCompare(b.category) || a.name.localeCompare(b.name)
      );
    }
    return 0;
  });

  const groupedItems = sortedItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="bg-blue-200 min-h-screen p-2">
      <div className="text-xl font-bold flex space-x-4 mb-4">
        <p>Sort By:</p>
        <button
          onClick={() => setSortBy("name")}
          className={`text-xl font-bold w-28 p-1 m-2 ${sortBy === "name" ? "bg-blue-300 text-white" : "bg-blue-500 text-white"}`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`text-xl font-bold w-28 p-1 m-2 ${sortBy === "category" ? "bg-blue-300 text-white" : "bg-blue-500 text-white"}`}
        >
          Category
        </button>
        <button
          onClick={() => setSortBy("grouped")}
          className={`text-xl font-bold w-28 p-1 m-2 ${sortBy === "grouped" ? "bg-blue-300 text-white" : "bg-blue-500 text-white"}`}
        >
          Grouped Category
        </button>
      </div>
      <div>
        {sortBy === "grouped"
          ? Object.keys(groupedItems)
              .sort()
              .map((category) => (
                <div key={category} className="p-2 m-4 bg-pink-50 max-w-md">
                  <h2 className="text-lg font-semibold capitalize">
                    {category}
                  </h2>
                  <div>
                    {groupedItems[category]
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((item) => (
                        <div key={item.id} className="p-2 m-2 bg-white">
                          <Item
                            name={item.name}
                            quantity={item.quantity}
                            category={item.category}
                            onSelect={() => onItemSelect(item)}
                          />
                        </div>
                      ))}
                  </div>
                </div>
              ))
          : sortedItems.map((item) => (
              <div key={item.id} className="p-2 m-4 bg-pink-50 max-w-md">
                <Item
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                  onSelect={() => onItemSelect(item)}
                />
              </div>
            ))}
      </div>
    </div>
  );
};

export default ItemList;
