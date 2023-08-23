import {
  Flex, Box, Image, Text, Button, useColorMode,
} from '@chakra-ui/react';
import FamilySmiles from '../../assets/images/FamilySmiles.png';

const ImageSection = () => (
  <Box mt="-1rem" w="50vw">
    <Image src={FamilySmiles} h="100%" />
  </Box>
);

const TextSection = () => (
  <Box w="40%">
    <Text fontWeight={600} fontSize="12px">RENTERS</Text>
    <Text fontWeight={700} fontSize="26px">Get the new standard in technology services</Text>
    <Text mb="2rem">
      Make everyone happy with the latest in technology, find banquet halls that soothe your needs, create an assign
      {' '}
      <em>watchers</em>
      {' '}
      to a particular hall or halls that match a criteria and more services
    </Text>
    <Button variant="primary">More about services</Button>
  </Box>
);
const CallToFindVenues = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      mt="2rem"
      backgroundColor={
      colorMode === 'light' ? '#B6EAC5' : 'cardColor'
    }
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
};
export default CallToFindVenues;
