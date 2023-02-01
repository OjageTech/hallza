import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import { Flex } from '@chakra-ui/react';

interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = Math.ceil(rating) - rating >= 0.5;
  return (
    <Flex>
      {[...Array(fullStars)].map((e, i) => (
        <AiFillStar key={rating} color="yellow" />
      ))}
      {halfStar && <BsStarHalf color="yellow" />}
      {[...Array(5 - fullStars - (halfStar ? 1 : 0))].map((e, i) => (
        <AiFillStar key={rating} color="gray" />
      ))}
    </Flex>
  );
};

export default Rating;
