import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { MdArrowDropDown } from 'react-icons/md';
import {
  Box,
  Center,
  Select,
  Button,
  Grid,
  Flex,
  Text,
  Checkbox,
} from '@chakra-ui/react';
import { FaArrowDown } from 'react-icons/fa';
import LandingHeader from '../../layouts/headers/Landing.header';
import Card from '../../components/common/Card';
import SearchBar from '../../components/common/searchbar/Searchbar';

import {
  selectRentals,
  addRental,
  removeRental,
  updateRental,
  incrementLove,
  incrementView,
  // updateRentalProperty,
} from '../../features/hallsdata/hallsdata-slice';
import MainSearch from '../../components/common/MainSearch/MainSearch';
import geometricPatterns from '../../assets/images/geometricPatterns.png';
import { Contents } from '../FindnBrowseVenues/FindnBrowseVenues.page';
import Footer from '../../layouts/footers/Landing.footer';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import FilterContents from '../../components/FilterContents/FilterContents';

const SearchResults = () => {
  // Proxy can be used to modify fundamental operations on objects.
  const handler = {
    get(target: object, property: PropertyKey) {
      if (!Reflect.has(target, property)) {
        return {
          value: undefined,
          type: undefined,
        };
      }
      const value = Reflect.get(target, property);
      return {
        value,
        type: typeof value,
      };
    },
  };

  const proxied = new Proxy({ foo: 'bar' }, handler);
  // console.log(proxied);
  const { preferredLocation, dateRange } = useParams();

  let dateRangeA: Date[] = [];
  let startDateString = '';
  let endDateString = '';
  if (dateRange) {
    // Parse the date strings into Date objects
    dateRangeA = JSON.parse(dateRange); // Convert the string to an array if necessary

    if (Array.isArray(dateRangeA) && dateRangeA.length === 2) {
      const startDate = new Date(dateRangeA[0]);
      const endDate = new Date(dateRangeA[1]);

      // Check if the parsed dates are valid Date objects
      if (!isNaN(startDate.getTime()) && !isNaN(endDate.getTime())) {
        // Format and display the dates to the user
        startDateString = startDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        const startTimeString = startDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        endDateString = endDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        const endTimeString = endDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

        console.log(`Start Date: ${startDateString} ${startTimeString}`);
        console.log(`End Date: ${endDateString} ${endTimeString}`);
      } else {
        console.error('Invalid date format in URL parameter');
      }
    } else {
      console.error('Invalid URL parameter format');
    }
  } else {
    console.warn('URL parameter not provided');
  }
  const { data: venues } = useAppSelector((state) => state.venues);
  const [displayCount, setDisplayCount] = useState(12);

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 12);
  };
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      <LandingHeader />
      <Box
        mt="4rem"
        backgroundImage={geometricPatterns}
        backgroundPosition="right"
        backgroundSize="cover"
        pl="2.1rem"
        pr="2.1rem"
        h="30vh"
        backgroundColor="teal.300"
        pt="1rem"
      >
        <Text color="white" fontWeight={700} fontSize="40px">
          Find the event space you need
        </Text>
        <Text color="white" fontSize="27px">
          Search deals on hotel banquet halls, outdoor spaces and much more...
        </Text>
        <br />
        <MainSearch preferredLocation={preferredLocation} dateRange={dateRangeA} />
        <Checkbox mt="1rem" color="white">I'm booking for my company</Checkbox>
      </Box>
      <Box ml="2.1rem" mt="2.1rem">
        <Text fontSize="sm">
          <b>
            {preferredLocation}
          </b>
          {' '}
          : from
          {' '}
          <b>
            {startDateString}
          </b>
          {' '}
          to
          {' '}
          <b>
            {endDateString}
          </b>
        </Text>
        <Select
          mt=".5rem"
          variant="outline"
          size="lg"
          fontWeight={300}
          colorScheme="teal"
          borderColor="teal.500"
          focusBorderColor="teal.500"
          _hover={{ borderColor: 'primary' }}
          width="20vw"
          icon={<MdArrowDropDown />}
        >
          <option value="Our Top Picks">Our Top Picks</option>
        </Select>
      </Box>
      <Flex
        w="100%"
        pl="2.1rem"
        mb="2.1rem"
      >
        <FilterContents
          data={venues}
          nameFilter={preferredLocation}
          dateFilter={dateRange}
        />
      </Flex>
      <Footer />
    </div>
  );
};

export default SearchResults;
