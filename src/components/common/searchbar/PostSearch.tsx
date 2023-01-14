import React from 'react';
import {
  Center, Button, Text, Stack, Box,
} from '@chakra-ui/react';

const trendingSearches = ['Chariot Hotel', 'Mountain Hotel', 'Nkwen community Hall', 'Catholic Church Hall'];
const ListOfTrendingSeraches = ({ trendingSearch }: any) => (
  <Button fontSize="sm" fontWeight={300} variant="outline">{trendingSearch}</Button>
);
const PostSearch = () => (
  <Center>
    <Box w="50vw">
      <Stack isInline justify="center" alignItems="center">
        <Text fontSize="sm" fontWeight={300}>Trending searches</Text>
        {trendingSearches.map((item) => <ListOfTrendingSeraches trendingSearch={item} />)}
      </Stack>
    </Box>
  </Center>
);

export default PostSearch;
