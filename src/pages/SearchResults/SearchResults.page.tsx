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
import FeaturedVenues, {
  FeaturedVenue,
  FeaturedVenueProps,
} from '../../components/FeaturedVenues';
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
  console.log(proxied);
  const { preferredLocation, dateRange } = useParams();
  let dateRangeString = dateRange?.replaceAll('[', '');
  dateRangeString = dateRangeString?.replace(']', '');
  dateRangeString = dateRangeString?.replaceAll('"', '');
  const newDateRange = dateRangeString?.split(',');
  let dateArr: Date[] = [];
  if (newDateRange) {
    // const parsedDate = JSON.parse(dateRangeString);
    dateArr = newDateRange.map((item: any) => new Date(item));
  }
  // const lowerCaseSearchTerm = preferredLocation
  //   ? preferredLocation.toLowerCase()
  //   : '';
  // const rentals = useAppSelector(selectRentals);

  // const filteredData = rentals.filter(
  //   (item: FeaturedVenueProps) => item.name.toLowerCase().includes(lowerCaseSearchTerm)
  //     || item.renterName.toLowerCase().includes(lowerCaseSearchTerm),
  // );
  // let Dates = [new Date(), new Date()];
  // Dates.push(dateRange);
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
        <MainSearch preferredLocation={preferredLocation} dateRange={dateArr} />
        <Checkbox mt="1rem" color="white">I'm booking for my company</Checkbox>
      </Box>
      <Box ml="2.1rem" mt="2.1rem">
        <Text fontSize="23px">
          {preferredLocation}
          : 20 event-spaces found available from
          {' '}
          {dateArr[0].getDate()}
          /
          {dateArr[0].getMonth()}
          /
          {dateArr[0].getFullYear()}
          / to
          {' '}
          {dateArr[1].getDate()}
          /
          {dateArr[1].getMonth()}
          /
          {dateArr[1].getFullYear()}
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
        ml="2.1rem"
        mb="2.1rem"
      >
        <Contents />
      </Flex>
      <Footer />
      {/* <Center>
        <Box
          fontWeight={700}
          fontSize="33px"
          mt={70}
        >
          {preferredLocation}
        </Box>
      </Center>
      <Center mt={3}>
        <Flex
          gap={4}
          as="dl"
        >
          <dt>Related:</dt>
          <dd>Party</dd>
          <dd>Celebration</dd>
          <dd>Ocassion</dd>
        </Flex>
      </Center>
      <Box h="2rem" />
      <Box
        margin="0 auto"
        w="94%"
      >
        <Select
          icon={<MdArrowDropDown />}
          w="10vw"
          fontWeight={300}
        >
          <option value="Popular">Popular</option>
          <option value="Luxurious">Luxurious</option>
          <option value="New & Noteworthy">New & Noteworthy3</option>
        </Select>
        <Box h="2rem" />
        <Grid
          mt="1rem"
          templateColumns={{
            base: 'repeat(1,minmax(0,1fr))',
            sm: 'repeat(2,minmax(0,1fr))',
            lg: 'repeat(3,minmax(0,1fr))',
            xl: 'repeat(4,minmax(0,1fr))',
          }}
          gap={{
            sm: '.6rem',
            md: '.8rem',
            lg: '1.5rem',
            xl: '2.3rem',
          }}
        >
          {filteredData
            .slice(0, displayCount)
            .map(
              ({
                id,
                renterLogo,
                capacity,
                price,
                rating,
                name,
                previewImage,
                renterName,
                loves,
                views,
              }: FeaturedVenueProps) => (
                <FeaturedVenue
                  id={id}
                  renterLogo={renterLogo}
                  capacity={capacity}
                  price={price}
                  rating={rating}
                  name={name}
                  previewImage={previewImage}
                  renterName={renterName}
                  loves={loves}
                  views={views}
                />
              ),
            )}
        </Grid>
        {displayCount < filteredData.length && (
          <Box
            mt="1rem"
            textAlign="center"
          >
            <Button
              variant="primaryOutline"
              onClick={handleLoadMore}
            >
              Load More
            </Button>
          </Box>
        )}
      </Box> */}
    </div>
  );
};

export default SearchResults;
