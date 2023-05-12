/* eslint-disable react/no-unused-prop-types */
import { useState } from 'react';
import {
  Text,
  Flex,
  Select,
  Grid,
  GridItem,
  Image,
  Container,
  Button,
} from '@chakra-ui/react';
import { MdArrowDropDown } from 'react-icons/md';
import { AiTwotoneHeart, AiFillEye } from 'react-icons/ai';
import {
  selectRentals,
  addRental,
  removeRental,
  updateRental,
  incrementLove,
  incrementView,
  // updateRentalProperty,
} from '../features/hallsdata/hallsdata-slice';
import { useAppSelector, useAppDispatch } from '../app/hooks';

// import mockData from './HALLS-MOCK_DATA.json';
import Badger from '../layouts/sidebars/UserDashboard/Badger';
import Rating from './common/rating/Rating.component';
import Box from './common/Box';
import Card from './common/Card';

export interface FeaturedVenueProps {
  id: string;
  name: string;
  renterName: string;
  previewImage: string;
  renterLogo: string;
  capacity: number;
  price: number;
  rating: number;
  loves: number;
  views: number;
}

export const FeaturedVenue = ({
  renterLogo,
  previewImage,
  capacity,
  price,
  renterName,
  rating,
  name,
  loves,
  views,
}: FeaturedVenueProps) => {
  const [cardHovered, setCardHovered] = useState(false);
  return (
    <GridItem>
      <Card
        _hover={{
          cursor: 'pointer',
        }}
        onMouseEnter={() => setCardHovered(!cardHovered)}
        onMouseLeave={() => setCardHovered(!cardHovered)}
        pos="relative"
        p="-2em"
        backgroundRepeat="no-repeat"
        bgSize="cover"
        bgImage={previewImage}
        w={{
          base: '9rem',
          sm: '12rem',
          md: '15rem',
          lg: '17rem',
          xl: '20vw',
        }}
        h={{
          base: '27vh',
          sm: '31vh',
          md: '34vh',
          lg: '37vh',
          xl: '27vh',
        }}
      >
        <Container
          border="1px solid"
          w="fit-content"
          bg="ActiveBorder"
          p={0}
          pos="absolute"
          left=".3pc"
          borderRadius="sm"
          display={cardHovered ? 'block' : 'none'}
        >
          <Badger
            bg="white"
            disp="Buea"
          />
        </Container>
        <Container
          p={0}
          display={cardHovered ? 'block' : 'none'}
          borderRadius="xl"
          position="absolute"
          bottom={0}
          h="40vh"
          overflow="hidden"
          backgroundPosition="center"
          backgroundSize="cover"
          bgImage="linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)"
        />
        <Container
          display={cardHovered ? 'block' : 'none'}
          pos="static"
          zIndex="overlay"
          alignSelf="flex-end"
          p={0}
          mt="auto"
        >
          <Flex
            ml="-25px"
            p={0}
            alignItems="end"
            color="#F9FAFB"
            gap="3.5rem"
          >
            <Text
              as="span"
              alignSelf="flex-end"
              fontWeight={700}
              fontSize={{
                base: '.45rem',
                sm: '.7rem',
                md: '.8rem',
                lg: '.9rem',
                xl: '1rem',
              }}
              textOverflow="initial"
            >
              {name}
            </Text>
            <Rating rating={rating} />
          </Flex>
        </Container>
      </Card>
      <Flex
        mt="2.5"
        gap={7}
        alignItems="center"
      >
        <Flex alignItems="center">
          <Image
            src={renterLogo}
            borderRadius="50%"
            alt={name}
            h={{
              base: '.7vh',
              sm: '1vh',
              md: '2vh',
              lg: '3vh',
              xl: '4vh',
            }}
            w={{
              base: '.7vh',
              sm: '1vh',
              md: '2vh',
              lg: '3vh',
              xl: '4vh',
            }}
          />
          <Text
            ml={2.5}
            fontWeight={500}
            fontSize={{
              base: '.45rem',
              sm: '.7rem',
              md: '.8rem',
              lg: '.9rem',
              xl: '1rem',
            }}
          >
            {renterName}
          </Text>
        </Flex>
        <Flex
          color="gray"
          gap={3}
          justifyContent="center"
          alignItems="center"
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            gap={1}
          >
            <AiTwotoneHeart />
            {loves}
          </Flex>
          <Flex
            gap={1}
            justifyContent="center"
            alignItems="center"
          >
            <AiFillEye />
            {views}
          </Flex>
        </Flex>
      </Flex>
    </GridItem>
  );
};
const FeaturedVenues = () => {
  const rentals = useAppSelector(selectRentals);
  const dispatch = useAppDispatch();

  const [displayCount, setDisplayCount] = useState(12);

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 12);
  };

  return (
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
        {rentals
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
                renterLogo={renterLogo}
                capacity={capacity}
                price={price}
                rating={rating}
                name={name}
                previewImage={previewImage}
                renterName={renterName}
                loves={0}
                views={0}
                id={id}
              />
            ),
          )}
      </Grid>
      {displayCount < rentals.length && (
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
  );
};

export default FeaturedVenues;
