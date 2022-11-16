import {
  Flex,
  Image,
  Text,
  VStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
} from '@chakra-ui/react';
import moreIcon from '../../../assets/images/moreIcon.svg';
import { CurrencyBadge } from './CurrencyBadge';

export const numberWithCommas = (number: number): string => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
type quickShowDetailsProps = {
	activityText: string;
	amount: number;
};
export const QuickShowDetails = ({
  activityText,
  amount,
}: quickShowDetailsProps) => (
  <VStack
    paddingRight="1rem"
    alignItems="left"
    gap="4px"
    justifyContent="space-between"
  >
    <Flex justifyContent="center" alignItems="center">
      <Text fontWeight={500} fontSize="16px" lineHeight="8px">
        {activityText}
      </Text>
      <Popover isLazy>
        <PopoverTrigger>
          <Image
            src={moreIcon}
            _hover={{
						  cursor: 'pointer',
            }}
          />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">
            <Button>View all</Button>
          </PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            Click the Button above to view all the
            {' '}
            {activityText}
            {' '}
            since you joined
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>

    <Flex
      padding="2px"
      justifyContent="center"
      alignItems="center"
      gap="2px"
    >
      <Text fontWeight={600} fontSize="32px" lineHeight="18px">
        {numberWithCommas(amount)}
      </Text>
      <CurrencyBadge currency="NGN" />
    </Flex>
  </VStack>
);
