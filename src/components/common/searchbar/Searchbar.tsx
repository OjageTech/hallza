// import the required modules
import React, { useState } from 'react';
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
import { FaLocationArrow } from 'react-icons/fa';
import { BsFillPeopleFill } from 'react-icons/bs';
import { SearchIcon } from '@chakra-ui/icons';
// import { supabase } from '../../../supabaseClient';

// define the SearchBar component
const SearchBar: React.FC = () => {
  // create state variables for the location, capacity, and availability inputs
  const [location, setLocation] = useState('');
  const [capacity, setCapacity] = useState('');
  const [availability, setAvailability] = useState(false);

  // // define the handleSubmit function to be called when the form is submitted
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault(); // prevent the form from reloading the page

  //   // use the Supabase client to search for event halls in the database
  //   const query = supabase.from('halls')
  //     .select('*');
  //   if (location) {
  //     query.where({ location });
  //   }
  //   if (capacity) {
  //     query.where({ capacity });
  //   }
  //   if (availability) {
  //     query.where({ availability });
  //   }
  //   const { data } = await query.commit();

  //   // update the page with the search results
  //   updatePageWithResults(data);
  // };

  // render the search bar form
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

        <Input h="58px" variant="filled" placeholder="Type and Hit Enter" />
      </InputGroup>
    </Center>
  );
};

export default SearchBar;
