import axios from "axios";

export class CoffeeApi{
    constructor(){
        this.url = "https://localhost:44335/api/coffee";
    }

    async getCoffeeData(){
        let response = await axios.get(this.url, {
            headers: {"Content-Type": "application/json"}});
        let data = await response.data;
        return data;
    }
}

export default new CoffeeApi();