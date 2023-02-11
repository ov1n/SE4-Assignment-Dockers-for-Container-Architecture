import React from 'react';
import "./App.css";
import Shop from "./components/Shop";
import { Routes, Route, useNavigate } from "react-router-dom";
import ManageShop from "./components/ManageShop";
import AddCoffee from './components/AddCoffee';

export default function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Shop />} />{" "}
          <Route path="/product" element={<ManageShop />} />{" "}
          <Route path="/product/add" element={<AddCoffee />} />{" "}
        </Routes>{" "}
      </div>{" "}
    </div>
  );
}
