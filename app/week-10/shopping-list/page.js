"use client";

import React, { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";
import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";

const Page = () => {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const { user } = useUserAuth();

  const loadItems = async () => {
    if (user?.uid) {
      const fetchedItems = await getItems(user.uid);
      setItems(fetchedItems);
    }
  };

  useEffect(() => {
    loadItems();
  }, [user?.uid]);

  const handleAddItem = async (newItem) => {
    if (user?.uid) {
      try {
        const newItemId = await addItem(user.uid, newItem);
        setItems((prevItems) => [...prevItems, { id: newItemId, ...newItem }]);
      } catch (error) {
        console.error("Error adding item:", error);
      }
    }
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .replace(/[\u{1F600}-\u{1F64F}]/gu, "")
      .trim();
    setSelectedItemName(cleanedName);
  };

  if (!user) {
    return (
      <div>
        <h1>Log In to access Shopping List</h1>
        <Link
          className="font-semibold text-black hover:underline"
          href="/week-9"
        >
          Login Page
        </Link>
      </div>
    );
  }

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
