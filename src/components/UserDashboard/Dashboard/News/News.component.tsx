import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import couchPoster from '../../../../assets/images/couchPoster.png';
import musicPoster from '../../../../assets/images/musicPoster.png';

const NewsItemsData = [
  {
    headline: 'A hundred new account registrations',
    category: 'Software',
    postDate: '4 hrs ago',
    poster: couchPoster,
  },
  {
    headline: 'New Music Album Boosts the Market by 30%',
    category: 'Software',
    postDate: '5 hrs ago',
    poster: musicPoster,
  },
];

function NewsHeader(props: any) {
  return (
    <VStack
      textTransform="capitalize"
      alignItems="left"
      justifyContent="left"
      textAlign="left"
    >
      <Text fontSize="23px" fontWeight={500} lineHeight="44px">
        {props.day}
        's
      </Text>
      <Text fontSize="32px" fontWeight={700}>
        {props.type}
      </Text>
    </VStack>
  );
}
function NewsItem(props: any) {
  return (
    <Flex
      _hover={{
			  boxShadow: 'rgba(54, 69, 79, 0.35) 0px 5px 15px',
			  cursor: 'pointer',
      }}
      borderRadius="35px"
      alignItems="center"
      margin="2rem 2rem 0 0"
    >
      <Image src={props.poster} alt="news_poster" pr="1rem" />
      <VStack>
        <Text fontSize="23px">{props.headline}</Text>
        <Flex justifyContent="left" fontSize="14px" color="#8c8c8c">
          <Text pr="2rem">{props.category}</Text>
          <Text>{props.postDate}</Text>
        </Flex>
      </VStack>
    </Flex>
  );
}
const News = () => (
  <Box
    width="744px"
    textAlign="left"
    className="animate__animated animate__backInUp"
  >
    <NewsHeader day="today" type="Market Analysis" />
    <Box>
      {NewsItemsData.map((item) => (
        <NewsItem
          poster={item.poster}
          headline={item.headline}
          category={item.category}
          postDate={item.postDate}
        />
      ))}
    </Box>
    {/**
		 * @TODO
		 * Label the data that goes into this component
		 * Day, Type, NewsItem, NewsCategory, PostDate
		 */}
  </Box>
);
export default News;
