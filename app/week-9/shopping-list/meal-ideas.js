"use client";

import React, { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals;
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div className="flex-1 max-w-sm m-2 p-4 bg-white rounded-lg">
      {ingredient ? (
        meals && meals.length > 0 ? (
          <>
            <p>Here are some meal ideas using {ingredient}:</p>
            <div className="space-y-2">
              {meals.map((meal) => (
                <div
                  key={meal.idMeal}
                  className="flex items-center space-x-4 p-2 bg-white rounded-lg shadow"
                >
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="w-16 h-16 rounded-lg"
                  />
                  <span className="text-lg font-semibold">{meal.strMeal}</span>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>No meal ideas found for {ingredient}.</p>
        )
      ) : (
        <p>Please select an ingredient to see meal ideas.</p>
      )}
    </div>
  );
}
