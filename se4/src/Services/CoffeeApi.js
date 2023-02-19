import axios from "axios";

export class CoffeeApi{
    constructor(){
        this.url = "http://localhost:1337/api/coffee";
    }

    //select
    async getCoffeeData(){
        let response = await axios.get(this.url, {
            headers: {"Content-Type": "application/json"}});
        let data = await response.data;
        return data;
    }

    //add
    async addCoffeeData(data) {
        console.log(data)
        try {
          const response = await axios.post(this.url, {
            headers: {"Content-Type": "application/json"}},{
            name: data.name,
            description: data.description,
            price: data.price,
            type: data.type,
            rating: data.rating,
          });
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
    }

    //update
    async updateCoffeeData(data) {
        try {
          const response = await axios.put(`${this.url}/${data.id}`, {
            name: data.name,
            description: data.description,
            price: data.price,
            type: data.type,
            rating: data.rating,
          });
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      }
}

export default new CoffeeApi();