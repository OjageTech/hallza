import {
  Box, Button, Flex, HStack, Select, Table, TableCaption, Tbody, Td, Text, Thead, Tr, VStack,
} from '@chakra-ui/react';
import React from 'react';

const TableItems = [
  {
    id: 1,
    date: '2022-01-22',
    amount: 230000,
    payoutmethod: 'Bank',
  },
  {
    id: 2,
    date: '2022-04-12',
    amount: 2040000,
    payoutmethod: 'Bank',
  },
  {
    id: 3,
    date: '2022-09-2',
    amount: 1242000,
    payoutmethod: 'Bank',
  },
];

export const Paid = () => (
  <Table>
    {/* <TableCaption>THIS IT THE CONTINUATTION OF THE PROJECT</TableCaption> */}
    <Thead>
      <Tr fontWeight="bold">
        <Td>Payed Date</Td>
        <Td>Amount</Td>
        <Td>Payout Method</Td>
      </Tr>
    </Thead>
    <Tbody>

      {TableItems.map((item) => (
        <Tr key={item.id}>
          <Td>{item.date}</Td>
          <Td>
            <Button marginRight="1rem">NGN</Button>
            {item.amount}
          </Td>
          <Td>{item.payoutmethod}</Td>
        </Tr>
      ))}

    </Tbody>
  </Table>
);
