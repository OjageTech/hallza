import { useState } from 'react';
import { AiTwotoneHeart, AiFillEye } from 'react-icons/ai';
import {
  Text,
  Flex,
  Select,
  Grid,
  GridItem,
  Image,
  Container,
} from '@chakra-ui/react';
import { MdArrowDropDown } from 'react-icons/md';
import Badger from '../layouts/sidebars/UserDashboard/Badger';
import Rating from './common/rating/Rating.component';
import Box from './common/Box';
import Card from './common/Card';

const FeaturedVenueData = [
  {
    renterLogo:
      'https://images.unsplash.com/photo-1551150441-3f3828204ef0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    capacity: 500,
    price: '1.4 milion',
    rating: 3,
    name: 'Villa De Papos',
    renterName: 'Mountain Hotel',
    previewImage:
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnQlMjBoYWxsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    renterLogo:
      'https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    capacity: 900,
    price: '1.4 milion',
    rating: 3,
    name: 'Nalova Lyonga Amphitheatre',
    renterName: 'University of Buea',
    previewImage:
      'https://images.unsplash.com/photo-1526045004414-3e7ed02f9ca1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGV2ZW50JTIwaGFsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    renterLogo:
      'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    capacity: 900,
    price: '1.4 milion',
    rating: 5,
    name: 'HoneyCamp Plaza',
    renterName: 'Chariot Hotel',
    previewImage:
      'https://images.unsplash.com/photo-1591899916510-d8eea9eb7b25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    renterLogo:
      'https://images.unsplash.com/photo-1557053964-937650b63311?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    capacity: 900,
    price: '1.4 milion',
    rating: 4,
    name: 'Upper Level',
    renterName: 'Burj Khalifa',
    previewImage:
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2x1YiUyMGV2ZW50JTIwaGFsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    renterLogo:
      'https://images.unsplash.com/photo-1601158935942-52255782d322?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    capacity: 900,
    price: '1.4 milion',
    rating: 1,
    name: 'Auditorium B',
    renterName: 'Catholic Church',
    previewImage:
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnQlMjBoYWxsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    renterLogo:
      'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    capacity: 900,
    price: '1.4 milion',
    rating: 3.5,
    name: 'Ejagham Club House I',
    renterName: 'Ejagham Club House',
    previewImage:
      'https://images.unsplash.com/photo-1620735692151-26a7e0748429?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnQlMjBoYWxsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    renterLogo:
      'https://images.unsplash.com/photo-1601409655050-6d869c309812?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGd1Y2NpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    capacity: 900,
    price: '1.4 milion',
    rating: 5,
    name: 'Gucci',
    renterName: 'The House of Gucci',
    previewImage:
      'https://images.unsplash.com/photo-1624954980724-3233ca78880d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGd1Y2NpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
];

type FeaturedVenueProps = {
  name: string;
  renterName: string;
  previewImage: string;
  renterLogo: string;
  capacity: number;
  price: string;
  rating: number;
};

const FeaturedVenue = ({
  renterLogo,
  previewImage,
  capacity,
  price,
  renterName,
  rating,
  name,
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
          <Badger bg="white" disp="Buea" />
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
      <Flex mt="2.5" gap={7} alignItems="center">
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
        <Flex color="gray" gap={3} justifyContent="center" alignItems="center">
          <Flex justifyContent="center" alignItems="center" gap={1}>
            <AiTwotoneHeart />
            95
          </Flex>
          <Flex gap={1} justifyContent="center" alignItems="center">
            <AiFillEye />
            2
          </Flex>
        </Flex>
      </Flex>
    </GridItem>
  );
};
const FeaturedVenues = () => (
  <Box margin="0 auto" w="94%">
    <Select icon={<MdArrowDropDown />} w="10vw" fontWeight={300}>
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
      {FeaturedVenueData.map(
        ({
          renterLogo,
          capacity,
          price,
          rating,
          name,
          previewImage,
          renterName,
        }) => (
          <FeaturedVenue
            renterLogo={renterLogo}
            capacity={capacity}
            price={price}
            rating={rating}
            name={name}
            previewImage={previewImage}
            renterName={renterName}
          />
        ),
      )}
    </Grid>
  </Box>
);

export default FeaturedVenues;
