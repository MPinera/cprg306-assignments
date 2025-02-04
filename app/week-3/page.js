import React from "react";
import ItemList from "./item-list";

const Page = () => {
  return (
    <main className="p-4 bg-blue-200 min-h-screen">
      <h1 className="text-3xl font-bold m-2">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;
