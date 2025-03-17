"use client";

import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

const Page = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .replace(/[\u{1F600}-\u{1F64F}]/gu, "")
      .trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="p-4 bg-blue-200 min-h-screen">
      <h1 className="text-3xl font-bold m-2">Shopping List</h1>
      <div className="flex space-x-4">
        <div className="flex flex-col space-y-4">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-grow">
          <h2 className="font-bold flex-1 max-w-sm m-2 p-4 bg-white rounded-lg ">
            Meal Ideas
          </h2>
          {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
        </div>
      </div>
    </main>
  );
};

export default Page;
