// import the required modules
import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
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
    <form 
    // onSubmit={handleSubmit}
    >
      
    </form>
  );
};

export default SearchBar;
