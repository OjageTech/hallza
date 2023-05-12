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
    <Text fontWeight={600} fontSize="12px">RENTERS</Text>
    <Text fontWeight={700} fontSize="26px">Get the new standard in technology services</Text>
    <Text mb="2rem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime rem rerum temporibus, animi ullam, amet unde atque dignissimos laudantium accusantium iusto vero impedit! Magni error repudiandae obcaecati excepturi neque vero.</Text>
    <Button variant="primary">More about services</Button>
  </Box>
);
const CallToFindVenues = () => (
  <Box
    mt="2rem"
    bg="#B6EAC5"
  >
    <Flex
      m="0 auto"
      gap="4rem"
      justifyContent="center"
      alignItems="center"
    >
      <TextSection />
      <ImageSection />
    </Flex>
  </Box>
);

export default CallToFindVenues;
