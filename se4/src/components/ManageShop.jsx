import React from "react";
import Table from './Table';

const data = [
  {
    column1: "Row 1, Column 1",
    column2: "Row 1, Column 2",
    column3: "Row 1, Column 3",
  },
  {
    column1: "Row 2, Column 1",
    column2: "Row 2, Column 2",
    column3: "Row 2, Column 3",
  },
  {
    column1: "Row 3, Column 1",
    column2: "Row 3, Column 2",
    column3: "Row 3, Column 3",
  },
];

const ManageShop = () => {
  return (
    <div>
      <h1>Page with a Table</h1>
      <Table data={data} />
    </div>
  );
};

export default ManageShop;