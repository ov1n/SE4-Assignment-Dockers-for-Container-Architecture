import React, { useEffect, useState } from "react";
import CoffeeData from "./CoffeeData";
import coffeeApi, { CoffeeApi } from "../Services/CoffeeApi";
// import coffee from '../data'

const ManageShop = () => {
    const [state, setState] = useState([]);
    useEffect(() => {
        coffeeApi.getCoffeeData().then((data) => {
            setState(data)
            console.log(data);
        }, (error) => {
            console.log(error);
        });
    }, []);

    return (
        <div>
            <CoffeeData data={state} />
        </div>
    );
};

export default ManageShop;
