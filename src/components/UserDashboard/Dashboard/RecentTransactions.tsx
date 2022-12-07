import { useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';

import { Transaction } from './Portfolio/Portfolio.component';

import {
  useAppSelector,
  useAppDispatch,
} from '../../../app/hooks';
import {
  addPayoutTransaction as addPayout,
  deleteLastPayoutTransaction as deleteLastPayout,
  deleteAllPayoutTransactions as deleteAllPayout,
} from '../../../features/transaction/payoutTransaction-slice';

import {
  addComissionTransaction as addComission,
  deleteLastComissionTransaction as deleteComission,
  deleteAllComissionTransactions as deleteAllComission,
} from '../../../features/transaction/comissionTransaction-slice';

export function RecentTransactions() {
  const payoutTransa = useAppSelector((state: any) => state.payoutTransaction);
  const comissionTransa = useAppSelector((state: any) => state.comissionTransaction);
  const RRecentTransactions = [
    payoutTransa,
    comissionTransa,
  ];
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  // 	dispatch(addTransaction(9000));
  // }, []);

  return (
    <Box pt="2rem">
      <Text
        pl="1rem"
        textAlign="left"
        fontStyle="normal"
        fontWeight={600}
        fontSize="16px"
        lineHeight="18px"
      >
        Recent Transactions
      </Text>
      <Box>
        {RRecentTransactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            type={transaction.type}
            value={transaction.value}
            date={transaction.date}
          />
        ))}
      </Box>
    </Box>
  );
}
