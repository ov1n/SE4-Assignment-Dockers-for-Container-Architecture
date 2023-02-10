import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Icon,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import {MdOutlineDelete} from 'react-icons/md';

const CoffeeData = ({ data }) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Coffee Mania</TableCaption>
        <Thead>
          <Tr>
            <Th>Coffee Name</Th>
            <Th>Some Number</Th>
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
                  colorScheme="teal"
                  variant="solid"
                ></Button>
              </Td>
              <Td>
       
                <Button
                  leftIcon={<MdOutlineDelete/>}
                  colorScheme="red"
                  variant="solid"
                ></Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CoffeeData;
