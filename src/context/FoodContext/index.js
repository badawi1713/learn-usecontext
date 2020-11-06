import React, { useState, createContext } from "react";

export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [foodList, setFoodList] = useState([
    { id: 1, title: "Fried Rice", price: 12 },
    { id: 2, title: "Takoyaki", price: 5 },
    { id: 3, title: "Sushi", price: 10 },
    { id: 4, title: "Mendoan Special from Indonesia", price: 100 },
  ]);

  const addFood = (food) => {
    setFoodList((item) => [...item, food]);
  };

  return (
    <FoodContext.Provider value={[foodList, setFoodList, addFood]}>
      {children}
    </FoodContext.Provider>
  );
};
