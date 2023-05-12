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
} from '@chakra-ui/react';
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
import { useAppSelector, useAppDispatch } from '../../app/hooks';

const SearchResults = () => {
  const { searchTerm } = useParams();
  const lowerCaseSearchTerm = searchTerm
    ? searchTerm.toLowerCase()
    : '';
  const rentals = useAppSelector(selectRentals);

  const filteredData = rentals.filter(
    (item: FeaturedVenueProps) => item.name.toLowerCase().includes(lowerCaseSearchTerm)
      || item.renterName.toLowerCase().includes(lowerCaseSearchTerm),
  );

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
      <Card
        h="15vh"
        w="100%"
      >
        <Box mt="4rem">
          <SearchBar value={searchTerm} />
        </Box>
      </Card>
      <Center>
        <Box
          fontWeight={700}
          fontSize="33px"
          mt={70}
        >
          {searchTerm}
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
      </Box>
    </div>
  );
};

export default SearchResults;
