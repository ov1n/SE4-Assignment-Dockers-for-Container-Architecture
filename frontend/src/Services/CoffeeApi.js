import axios from "axios";

export class CoffeeApi {
  constructor() {
    this.url = "http://localhost:1337/api/coffee";
    this.udpateEndpoint = "http://localhost:1337/api/coffee";
  }

  async getCoffeeData() {
    let response = await fetch(this.url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    let parsedData = await response.json();
    return parsedData;
  }
  async getCoffeeById(id) {
    let response = await axios.get(`${this.url}/${id}`, {
      headers: { "Content-Type": "application/json" },
    });
    let data = await response.data;
    return data;
  }
  async updateCoffeeById(data1) {
    console.log(data1);
    let response = await axios.put(
      `${this.url}/${data1.id}`,
      {
        id: data1.id,
        name: data1.name,
        description: data1.description,
        type: data1.type,
        rating: Number(data1.rating),
        price: Number(data1.price),
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    let data = await response.data;
    return data;
  }

  //   async updateCoffeeData(data) {
  //     try {
  //       const response = await axios.put(`${this.url}/${data.id}`, {
  //         name: data.name,
  //         description: data.description,
  //         price: Number(data.price),
  //         type: data.type,
  //         rating: Number(data.rating),
  //       });
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  // }

  //add
  async addCoffeeData(data) {
    console.log(data);
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
