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
          variant="filled"
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          value={value}
          placeholder="Type and Hit Enter"
        />
      </InputGroup>
    </Center>
  );
};

SearchBar.defaultProps = {
  value: undefined,
};
export default SearchBar;
