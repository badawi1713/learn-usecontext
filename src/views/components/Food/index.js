import React, { useContext } from "react";
import FoodList from "../FoodList";
import AddFood from "../AddFood";
import { FoodContext } from "../../../context/FoodContext";
const Food = () => {
  const [foodList, setFoodList] = useContext(FoodContext);

  return (
    <div>
      <AddFood />
      <div>
        <h3>My Food List:</h3>
        <FoodList foodList={foodList} />
      </div>
    </div>
  );
};

export default Food;
