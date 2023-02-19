import axios from "axios";

export class CoffeeApi {
  constructor() {
    this.url = "https://localhost:44335/api/coffee";
    this.udpateEndpoint = 'https://localhost:44335/api/coffee'
  }

  async getCoffeeData() {

    let response = await axios.get(this.url, {
      headers: { "Content-Type": "application/json" }
    });
    let data = await response.data;
    return data;
  }
  async getCoffeeById(id) {
    let response = await axios.get(`${this.url}/${id}`, {
      headers: { "Content-Type": "application/json" }
    });
    let data = await response.data;
    return data;
  }
  async updateCoffeeById(id, name, description, rate, price, url) {
    let response = await axios.post(`${this.url}/${id}`, {
      name: name, description: description, url: url, rate: rate, price: price
    },
      {

        headers: { "Content-Type": "application/json" }

      }
    );
    let data = await response.data;
    return data;
  }

  //add
  async addCoffeeData(data) {
    console.log(data)
    try {
      const response = await axios.post(this.url, {
        name: data.name,
        description: data.description,
        price: Number(data.price),
        type: data.type,
        rating: Number(data.rating),
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
        price: Number(data.price),
        type: data.type,
        rating: Number(data.rating),
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}

export default new CoffeeApi();