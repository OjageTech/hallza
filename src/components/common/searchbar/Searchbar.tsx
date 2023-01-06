// import the required modules
import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/core';

// define the SearchBar component
const SearchBar: React.FC = () => {
  // create state variables for the location, capacity, and availability inputs
  const [location, setLocation] = useState('');
  const [capacity, setCapacity] = useState('');
  const [availability, setAvailability] = useState(false);

  // define the handleSubmit function to be called when the form is submitted
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // prevent the form from reloading the page

    // use the Supabase client to search for event halls in the database
    const query = supabase.from('halls')
      .select('*');
    if (location) {
      query.where({ location });
    }
    if (capacity) {
      query.where({ capacity });
    }
    if (availability) {
      query.where({ availability });
    }
    const { data } = await query.commit();

    // update the page with the search results
    updatePageWithResults(data);
  };

  // render the search bar form
  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel htmlFor="location">Location:</FormLabel>
        <Input
          type="text"
          id="location"
          name="location"
          value={location}
          onChange={event => setLocation(event.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="capacity">Capacity:</FormLabel>
        <Input
          type="number"
          id="capacity"
          name="capacity"
          value={capacity}
          onChange={event => setCapacity(event.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="availability">Availability:</FormLabel>
        <Input
          type="checkbox"
          id="availability"
          name="availability"
          value={availability}
          onChange={event => setAvailability(event.target.checked)}
        />
      </FormControl>
      <Button type="submit" variantColor="teal">Search</Button>
    </form>
  );
};

export default SearchBar;
