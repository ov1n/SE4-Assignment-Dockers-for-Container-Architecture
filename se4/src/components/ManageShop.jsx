import React, {useEffect, useState} from "react";
import CoffeeData from "./CoffeeData";
import coffeeApi, {CoffeeApi} from "../Services/CoffeeApi";

const data = [
    {name: "Latte", number: 5.3, description: "test test"},
    {name: "Expresso", number: 6.1, description: "aaa aaa"},
    {name: "Americano", number: 1.2, description: "huu huu"},
    {name: "Cappuccino", number: 9.2, description: "hee hee"},
];

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
            <CoffeeData data={state}/>
        </div>
    );
};

export default ManageShop;
