// import the required modules
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Center,
  Button,
  InputRightElement,
  InputGroup,
  Container,
  FormControl,
  FormLabel,
  Input,
  Grid,
  GridItem,
} from '@chakra-ui/react';

import { SearchIcon } from '@chakra-ui/icons';

// define the SearchBar component
interface SearchBar {
  value?: string | undefined;
}
const SearchBar: React.FC<SearchBar> = ({ value }: SearchBar) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      // Trigger the search function here
      navigate(`/search/${searchTerm}`);
    }
  };
  return (
    <Center>
      <InputGroup w="604px">
        <InputRightElement
          bgGradient="linear-gradient(to bottom, #14B8A6, #8B5CF6 80%) 1"
          h="58px"
          w="43px"
          borderRightRadius="5px"
          pointerEvents="none"
        >
          <SearchIcon w="20px" h="20px" color="white" />
        </InputRightElement>

        <Input
          h="58px"
          _focus={{
            boxShadow: 'outline',
            borderColor: 'blue.500',
            backgroundColor: 'red.700',
          }}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          variant="styled"
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={value}
        />
      </InputGroup>
    </Center>
  );
};

SearchBar.defaultProps = {
  value: 'Type and hit Enter'
  ,
};
export default SearchBar;
