import { useState } from 'react';
import { VStack, Box } from '@chakra-ui/react';
import PreSearch from './PreSearch';
import SearchBar from './Searchbar';
import PostSearch from './PostSearch';
import Customisar from './Customisar';

const SearchSection = () => {
  const [selectedLocation, setselectedLocation] = useState('Buea');
  const [selectedCapacity, setselectedCapacity] = useState('500 people');
  const [selectedPrice, setselectedPrice] = useState('500,000 - 1,000,000 XAF');

  const handleOptionSelection = (lo: string, ca: string, pr: string): void => {
    setselectedLocation(lo);
    setselectedCapacity(ca);
    setselectedPrice(pr);
  };
  return (
    <VStack
      h="60vh"
      justifyContent="center"
      alignItems="center"
      id="searchSection"
    >
      <Box>
        selected capacity:
        {selectedCapacity}
      </Box>
      <PreSearch />
      <Box id="searchSection" h="2rem" />
      <SearchBar />
      <Customisar onOptionsSelected={handleOptionSelection} />
      <Box h="2rem" />
      <PostSearch />
    </VStack>
  );
};

export default SearchSection;
