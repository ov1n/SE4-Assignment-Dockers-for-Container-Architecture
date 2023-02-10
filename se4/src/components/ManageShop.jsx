import React from "react";
import CoffeeData from "./CoffeeData";

const data = [
  { name: "Latte", number: 30, description: "test test" },
  { name: "Expresso", number: 28,  description: "aaa aaa" },
];

const ManageShop = () => {
  return (
    <div>
      <CoffeeData data={data} />
    </div>
  );
};

export default ManageShop;
