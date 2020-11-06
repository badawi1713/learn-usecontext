import React from "react";

const FoodList = ({ foodList }) => {
  return (
    <div>
      <table>
        <tr>
          <th>No</th>
          <th>Food</th>
          <th>Price</th>
        </tr>
        {foodList.map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.title}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default FoodList;
