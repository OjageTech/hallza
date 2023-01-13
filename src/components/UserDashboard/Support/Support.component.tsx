import * as React from 'react';
import {
  Select,
  InputGroup,
  InputLeftElement,
  Input,
  Container,
  Button,
  VStack,
  Flex,
  Text,
  Divider,
} from '@chakra-ui/react';
import Box from '../../common/Box';
import Searchbar from '../../common/searchbar/Searchbar';
import { useAppSelector } from '../../../app/hooks';
import Card from '../../common/Card';

const FAQ = [
  {
    question: 'Getting Started',
  },
  {
    question: 'Account with Card',
  },
  {
    question: 'Withdraw to Bank',
  },
  {
    question: 'Mtn Mobile Money Integration',
  },
  {
    question: 'Bank Accounts',
  },
  {
    question: 'How do I Change my Password',
  },
  {
    question: 'How do I get paid with Fapshi',
  },
];
const FAQSection: React.FC<{}> = () => (
  <Container mt="2rem">
    <VStack justifyContent="left" alignItems="left" gap="1rem">
      {FAQ.map((item, index) => (

        <Box>
          <Text>item</Text>
        </Box>
      ))}
    </VStack>
  </Container>
);

const SearchSection: React.FC<{}> = () => (
  <Container>
    <VStack justifyContent="left" alignItems="left" gap="1rem">
      <Text
        as="h1"
        textTransform="capitalize"
        fontWeight={600}
        fontSize="24px"
      >
        Search for a question
      </Text>
      <Text
        fontWeight={400}
        fontSize="16px"
      >
        Type your question or search keyword
      </Text>
      <Searchbar />
    </VStack>
  </Container>
);
const SearchAndFAQ: React.FC<{}> = () => (
  <Card w="30vw" h="90vh">
    <SearchSection />
    <FAQSection />
  </Card>
);
const Support: React.FC<{}> = () => {
  const expanded: boolean = useAppSelector(
    (state: { mainSidebar: { value: boolean } }) => state.mainSidebar.value,
  );
  return (
    <Container
      textAlign="left"
      p={0}
      mt="0"
      ml={expanded ? '16.7rem' : '9rem'}
    >
      <Flex>
        <Box variant="sideNav" display={expanded ? 'none' : 'block'}>
          <SearchAndFAQ />
        </Box>
        <Container mt="7rem" pt="4rem">
          lorem ipsum dolor kdjgoieglgsndspoid pgew pow qopg gpwbegwpj
          guiwgwepi The quick brown fox jumped over the lazy dog! The
          quick brown fox jumped over the lazy dog!
        </Container>
      </Flex>
    </Container>
  );
};

export default Support;
