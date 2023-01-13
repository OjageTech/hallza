// import the required modules
import React, { useState } from 'react';
import {
  Center,
  Button,
  InputLeftElement,
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
      <Container>
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(13, 1fr)"
          gap={2}
        >
          <GridItem colSpan={6}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputLeftElement>

              <Input variant="filled" placeholder="Search" />
            </InputGroup>
          </GridItem>
          <GridItem colSpan={4}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FaLocationArrow color="gray" />
              </InputLeftElement>
              <Input placeholder="location" />
            </InputGroup>
          </GridItem>
          <GridItem colSpan={4}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <BsFillPeopleFill color="gray" />
              </InputLeftElement>
              <Input placeholder="Capacity" />
            </InputGroup>
          </GridItem>

          <GridItem colSpan={4}>
            <Input placeholder="Date" />
          </GridItem>

          <GridItem colSpan={4}>
            <Button variant="secondary"> Search </Button>
          </GridItem>
        </Grid>
      </Container>
    </Center>
  );
};

export default SearchBar;
