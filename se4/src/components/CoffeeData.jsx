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
      <Card>
        <CardHeader>
          <Flex>
            <Heading size="lg">List of Coffee Variants</Heading>
            <Spacer />

            <Button colorScheme="blue" size="lg">
              Add New Product
            </Button>
          </Flex>
        </CardHeader>

        <CardBody>
          <TableContainer>
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
        </CardBody>
      </Card>
    </div>
  );
};

export default CoffeeData;
