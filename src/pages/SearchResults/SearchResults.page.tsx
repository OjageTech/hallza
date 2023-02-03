import { useParams } from 'react-router-dom';
import {
  Box, Center, Container, Flex, Text,
} from '@chakra-ui/react';
import LandingHeader from '../../layouts/headers/Landing.header';
import Card from '../../components/common/Card';
import SearchBar from '../../components/common/searchbar/Searchbar';
import FeaturedVenues from '../../components/FeaturedVenues';

const SearchResults = () => {
  const { searchTerm } = useParams();
  return (
    <div>
      <LandingHeader />
      <Card h="15vh" w="100%">
        "FE"
        <Box mt="4rem">
          <SearchBar value={searchTerm} />
        </Box>
      </Card>
      <Center>
        <Box fontWeight={700} fontSize="33px" mt={70}>
          {searchTerm}
        </Box>
      </Center>
      <Center mt={3}>
        <Flex gap={4} as="dl">
          <dt>Related:</dt>
          <dd>Party</dd>
          <dd>Celebration</dd>
          <dd>Ocassion</dd>
        </Flex>
      </Center>
      <Box h="2rem" />
      <FeaturedVenues />
    </div>
  );
};

export default SearchResults;
