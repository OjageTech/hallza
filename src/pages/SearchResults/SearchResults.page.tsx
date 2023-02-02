import { useParams } from 'react-router-dom';
import { Box, VStack } from '@chakra-ui/react';

const SearchResults = ({ match }: any) => {
  const { searchTerm } = useParams();
  return (
    <Box>
      <div>
        <h1>
          Search Results for
          "
          {searchTerm}
          "
        </h1>
      </div>
    </Box>
  );
};

export default SearchResults;
