import logo from "./logo.svg";
import "./App.css";
import Shop from "./components/Shop";
import Product from "./components/Product";
import { Routes, Route, useNavigate } from "react-router-dom";
import ManageShop from "./components/ManageShop";

export default function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Shop />} />{" "}
          <Route path="/manage" element={<ManageShop />} />{" "}
        </Routes>{" "}
      </div>{" "}
    </div>
  );
}
