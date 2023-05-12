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
    <Text mb="2rem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime rem rerum temporibus, animi ullam, amet unde atque dignissimos laudantium accusantium iusto vero impedit! Magni error repudiandae obcaecati excepturi neque vero.</Text>
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
