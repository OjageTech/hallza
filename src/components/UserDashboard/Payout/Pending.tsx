import {
  Box, Button, Divider, Flex, HStack, Select, Table, TableCaption, Tbody, Td, Text, Thead, Tr, VStack,
} from '@chakra-ui/react';
import React from 'react';

const TableItems = [
  {
    id: 1,
    date: '2022-01-22',
    amount: 230000,
    payoutmethod: 'Bank',
    status: 'paid',
  },
  {
    id: 2,
    date: '2022-04-12',
    amount: 2040000,
    payoutmethod: 'Bank',
    status: 'pending',
  },
  {
    id: 3,
    date: '2022-09-2',
    amount: 1242000,
    payoutmethod: 'Bank',
    status: 'rejected',

  },

  {
    id: 4,
    date: '2022-01-22',
    amount: 230000,
    payoutmethod: 'Bank',
    status: 'paid',
  },
  {
    id: 5,
    date: '2022-04-12',
    amount: 2040000,
    payoutmethod: 'Bank',
    status: 'pending',
  },
  {
    id: 6,
    date: '2022-09-2',
    amount: 1242000,
    payoutmethod: 'Bank',
    status: 'rejected',

  },

  {
    id: 7,
    date: '2022-01-22',
    amount: 230000,
    payoutmethod: 'Bank',
    status: 'paid',
  },
  {
    id: 8,
    date: '2022-04-12',
    amount: 2040000,
    payoutmethod: 'Bank',
    status: 'pending',
  },
  {
    id: 9,
    date: '2022-09-2',
    amount: 1242000,
    payoutmethod: 'Bank',
    status: 'rejected',

  },

  {
    id: 10,
    date: '2022-01-22',
    amount: 230000,
    payoutmethod: 'Bank',
    status: 'paid',
  },
  {
    id: 11,
    date: '2022-04-12',
    amount: 2040000,
    payoutmethod: 'Bank',
    status: 'pending',
  },
  {
    id: 12,
    date: '2022-09-2',
    amount: 1242000,
    payoutmethod: 'Bank',
    status: 'rejected',

  },

  {
    id: 13,
    date: '2022-01-22',
    amount: 230000,
    payoutmethod: 'Bank',
    status: 'paid',
  },
  {
    id: 14,
    date: '2022-04-12',
    amount: 2040000,
    payoutmethod: 'Bank',
    status: 'pending',
  },
  {
    id: 15,
    date: '2022-09-2',
    amount: 1242000,
    payoutmethod: 'Bank',
    status: 'rejected',

  },

  {
    id: 16,
    date: '2022-01-22',
    amount: 230000,
    payoutmethod: 'Bank',
    status: 'paid',
  },
  {
    id: 17,
    date: '2022-04-12',
    amount: 2040000,
    payoutmethod: 'Bank',
    status: 'pending',
  },
  {
    id: 18,
    date: '2022-09-2',
    amount: 1242000,
    payoutmethod: 'Bank',
    status: 'rejected',

  },

  {
    id: 19,
    date: '2022-01-22',
    amount: 230000,
    payoutmethod: 'Bank',
    status: 'paid',
  },
  {
    id: 20,
    date: '2022-04-12',
    amount: 2040000,
    payoutmethod: 'Bank',
    status: 'pending',
  },
  {
    id: 21,
    date: '2022-09-2',
    amount: 1242000,
    payoutmethod: 'Bank',
    status: 'rejected',

  },

];
type NumberOfRowsProps={
  number:number
}

export const Pending = ({ number }:NumberOfRowsProps) => {
  const [range, setRange] = React.useState();
  const [initialValue, setInitialValue] = React.useState();
  return (
    <Table>
      {/* <TableCaption>THIS IT THE CONTINUATTION OF THE PROJECT</TableCaption> */}
      <Thead>
        <Tr fontWeight="bold">
          <Td>Request Date</Td>
          <Td>Amount</Td>
          <Td>Payout Method</Td>
          <Td>Status</Td>
          <Td>Decline</Td>
        </Tr>
      </Thead>
      <Tbody>

        {TableItems.map((item) => {
          const initialvalue = 1;

          return (

            <Tr key={item.id}>
              <Td>{item.date}</Td>
              <Td>
                <Button marginRight="1rem">NGN</Button>
                {item.amount}
              </Td>
              <Td>{item.payoutmethod}</Td>
              <Td>{item.status}</Td>
              <Td><Button>Cancel Request</Button></Td>
            </Tr>
          );
        })}

      </Tbody>
    </Table>
  );
};
