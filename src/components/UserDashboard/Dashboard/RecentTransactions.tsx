import { Box, Text } from '@chakra-ui/react';
import payoutrequestIcon from '../../../assets/images/moneyDesign.svg';
import commissionsIcon from '../../../assets/images/holdingHandsIcon.svg';
import { Transaction } from './Portfolio/Portfolio.component';

export function makeId() {
  let text = '';
  const possible =		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 5; i++) {
    text += possible.charAt(
      Math.floor(Math.random() * possible.length),
    );
  }
  return text;
}
const RRecentTransactions = [
  {
    id: makeId(),
    type: 'Payout request',
    amount: 128943,
    prevAmt: 100115,
    date: '15/11/2022',
    icon: payoutrequestIcon,
  },
  {
    id: makeId(),
    type: 'Commission',
    amount: 3000,
    prevAmt: 2015,
    date: '30/11/2022',
    icon: commissionsIcon,
  },
  {
    id: makeId(),
    type: 'Payout request',
    amount: 8000,
    prevAmt: 12815,
    date: '25/11/2022',
    icon: payoutrequestIcon,
  },
];
export function RecentTransactions() {
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
            icon={transaction.icon}
            currentAmt={transaction.amount}
            prevAmt={transaction.prevAmt}
            date={transaction.date}
          />
        ))}
      </Box>
    </Box>
  );
}
