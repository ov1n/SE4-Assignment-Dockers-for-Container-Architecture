import axios from "axios";

export class CoffeeApi{
    constructor(){
        // this.url = "https://localhost:44335/api/coffee";//use this url for the local api
        this.url = "https://localhost:1337/api/coffee"; //use this url for the container api
    }

    async getCoffeeData(){
        let response = await axios.get(this.url, {
            headers: {"Content-Type": "application/json"}});
        let data = await response.data;
        return data;
    }
}

export default new CoffeeApi();