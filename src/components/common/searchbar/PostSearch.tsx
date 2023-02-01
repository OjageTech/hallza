import React from 'react';
import {
  Center, Button, Text, Stack, Box,
} from '@chakra-ui/react';
import gradientWave from '../../../assets/images/gradientWave.svg';

const trendingSearches = [
  'Chariot Hotel',
  'Mountain Hotel',
  'Nkwen Hall',
  'Catholic Church Hall',
];
const ListOfTrendingSeraches = ({ trendingSearch }: any) => (
  <Button
    _hover={{
      paddingTop: '8px',
      fontWeight: '500',
      backgroundImage: gradientWave,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      color: 'white',
      boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 3px 0px',
    }}
    fontSize="sm"
    fontWeight={300}
    variant="outline"
  >
    {trendingSearch}
  </Button>
);
const PostSearch = () => (
  <Center>
    <Box w="50vw">
      <Stack isInline justify="center" alignItems="center">
        <Text fontSize="sm" fontWeight={300}>
          Trending searches
        </Text>
        {trendingSearches.map((item) => (
          <ListOfTrendingSeraches trendingSearch={item} />
        ))}
      </Stack>
    </Box>
  </Center>
);

export default PostSearch;
