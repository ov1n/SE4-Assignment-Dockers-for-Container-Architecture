import React from "react";
import CoffeeData from "./CoffeeData";

const data = [
  { name: "Latte", number: 5.3, description: "test test" },
  { name: "Expresso", number: 6.1,  description: "aaa aaa" },
  { name: "Americano", number: 1.2,  description: "huu huu" },
  { name: "Cappuccino", number: 9.2,  description: "hee hee" },
];

const ManageShop = () => {
  return (
    <div>
      <CoffeeData data={data} />
    </div>
  );
};

export default ManageShop;
