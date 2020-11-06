import React, { useContext } from "react";
import { FoodContext } from "../../../context/FoodContext";

const Header = () => {
  const [foodList, setFoodList] = useContext(FoodContext);
  return (
    <header>
      <h2>Food Count: {foodList.length}</h2>
    </header>
  );
};

export default Header;
