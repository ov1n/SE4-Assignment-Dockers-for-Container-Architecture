import React, {useEffect, useState}  from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { Link, useParams } from "react-router-dom";

const CoffeeData = ({ data }) => {
  const [coffee_data,setCoffeeData] = useState([]);
  useEffect(() => {setCoffeeData(data)
  console.log(data)}, []);
  
  const deleteCoffee = (id) => {
    console.log(id,coffee_data);
    const updatedData = data.filter((item) => item.id !== id);
    setCoffeeData(updatedData);
    console.log(updatedData);
  }
  
  return (
    <div>
      <div
        className="banner"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3262277/pexels-photo-3262277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className="banner__overlay">
          <div className="banner__container">
            <h1 className="banner__title">COFFEE HOUSE PRODUCTS</h1>
            <p className="banner__text">Add your new coffee idea</p>
            <a href="/product/add" className="btn btn--opacity">
              Add Product
            </a>
          </div>
        </div>
      </div>

      <div className="sect sect--type">
        <div className="">
          <div className="row--center">
            <div className="col-md-5 col-xs-8 col-sm-6 col--inbl">
              <h1 className="sect__title">List of Coffee Variants</h1>
            </div>
          </div>
          <div className="row row--small row--margin row--center">
            <TableContainer className=" w-full">
              <Table variant="simple">
                <TableCaption>Coffee Mania by 4th Years - 2023</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Coffee Name</Th>
                    <Th>Rating</Th>
                    <Th>Description</Th>
                    <Th>Edit</Th>
                    <Th>Delete</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {coffee_data.map((item, index) => (
                    <Tr key={index}>
                      <Td>{item.name}</Td>
                      <Td>{item.rating}</Td>
                      <Td>{item.description}</Td>
                      <Td>
                        <Link
                          to={`/product/edit/${item.id}`}
                          className="btn btn--opacity"
                        >
                          Edit
                        </Link>
                      </Td>
                      <Td>
                        <Button onClick={()=>{deleteCoffee(item.id)}}
                          leftIcon={<MdOutlineDelete />}
                          colorScheme="red"
                          variant="solid"
                        ></Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>

      <div className="sect sect--brown sect--no-bottom">
        <div className="">
          <div className="row--center">
            <div className="col-md-5 col-sm-6 col--inbl mb-4">
              <h1 className="sect__title sect--white-text">
                Let's talk coffee Story
              </h1>
              <p className="sect__subtitle sect--white-text mb-4">
                Whether you're searching for something new to warm your mug,
                seeking the best brew method for your favorite blend or
                exploring our rarest offerings, you’ve come to the right place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeData;
