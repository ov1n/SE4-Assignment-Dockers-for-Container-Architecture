import React from "react";
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
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";

const CoffeeData = ({ data }) => {
  return (
    <div>
      <div
        className="banner"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3262277/pexels-photo-3262277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div class="banner__overlay">
          <div class="banner__container">
            <h1 class="banner__title">COFFEE HOUSE PRODUCTS</h1>
            <p class="banner__text">Add your new coffee idea</p>
            <a href="#" class="btn btn--opacity">
              Add Product
            </a>
          </div>
        </div>
      </div>

      <div class="sect sect--type">
        <div class="">
          <div class="row--center">
            <div class="col-md-5 col-xs-8 col-sm-6 col--inbl">
              <h1 class="sect__title">List of Coffee Variants</h1>
            </div>
          </div>
          <div class="row row--small row--margin row--center">
            <TableContainer className=' w-full'>
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
                  {data.map((item, index) => (
                    <Tr key={index}>
                      <Td>{item.name}</Td>
                      <Td>{item.number}</Td>
                      <Td>{item.description}</Td>
                      <Td>
                        <Button
                          leftIcon={<FaEdit />}
                          colorScheme="green"
                          variant="solid"
                        ></Button>
                      </Td>
                      <Td>
                        <Button
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

      <div class="sect sect--brown sect--no-bottom">
        <div class="">
          <div class="row--center">
            <div class="col-md-5 col-sm-6 col--inbl mb-4">
              <h1 class="sect__title sect--white-text">
                Let's talk coffee Story
              </h1>
              <p class="sect__subtitle sect--white-text mb-4">
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
