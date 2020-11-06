import React, { useContext, useState } from "react";
import { FoodContext } from "../../../context/FoodContext";

const AddForm = () => {
  const [foodList, setFoodList, addFood] = useContext(FoodContext);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const addHandler = (e) => {
    e.preventDefault();

    const newFood = {
      id: Math.random(),
      title: title,
      price: price,
    };
    addFood(newFood);
  };

  return (
    <div>
      <form onSubmit={addHandler}>
        <div>
          <label>Food</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="text"
            name="price"
            id="price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddForm;
