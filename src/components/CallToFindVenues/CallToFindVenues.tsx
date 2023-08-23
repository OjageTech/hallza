import {
  Flex, Box, Image, Text, Button,
} from '@chakra-ui/react';
import Lander from '../../assets/images/lander.png';

const ImageSection = () => (
  <Box>
    <Image src={Lander} />
  </Box>
);

const TextSection = () => (
  <Box w="40%">
    <Text fontWeight={600} fontSize="12px">RENTER</Text>
    <Text fontWeight={700} fontSize="26px">Add your venues and triple your market for your halls</Text>
    <Text mb="2rem">Become great with us, carefully craft your halls' online presence with us and draw on clients from different works of life, various locations and different needs.</Text>
    <Button variant="primary">Add a venue</Button>
  </Box>
);
const CallToAddVenues = () => (
  <Box mt="2rem">
    <Flex
      m="0 auto"
      gap="4rem"
      justifyContent="center"
      alignItems="center"
    >
      <ImageSection />
      <TextSection />
    </Flex>
  </Box>
);

export default CallToAddVenues;
