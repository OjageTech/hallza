import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { makeId, numberWithCommas } from '../../app/functions';
import avatarChinedu from '../../assets/images/avatarChinedu.svg';
import avatarMale from '../../assets/images/avatarMale.svg';
import avatarMann from '../../assets/images/avatarMann.svg';
import avatarWhiteshirt from '../../assets/images/avatarWhiteshirt.svg';
import cartRed from '../../assets/images/redCartIcon.svg';

const RReferrals = [
  {
    id: makeId(),
    name: "Chinedu O'rian",
    deposit: 94227.42,
    gen: 2,
    when: 'Today, 3:20pm',
    img: avatarChinedu,
  },
  {
    id: makeId(),
    name: 'Mohammed Salah',
    deposit: 23500,
    gen: 4,
    when: 'Today, 9:00am',
    img: avatarMann,
  },
  {
    id: makeId(),
    name: 'Ojong Maruh',
    deposit: 10245,
    gen: 3,
    when: 'Today, 10:20am',
    img: avatarMale,
  },
  {
    id: makeId(),
    name: 'Mario Xavier',
    deposit: 4100,
    gen: 2,
    when: 'Today, 9:20am',
    img: avatarWhiteshirt,
  },
];

type ReferralProps = {
	name: string;
	deposit: string;
	gen: number;
	when: string;
	img: any;
};

/**
 *
 * @param img @param name @param gen @param deposit @param when
 * @returns A component that displays an Individual referral with
 * img, name, generation, first amount deposited and date/time joined
 * in a Flexbox layout
 */
const Referral = ({
  img,
  name,
  gen,
  deposit,
  when,
}: ReferralProps) => (
  <Flex padding="5px" justifyContent="left" alignItems="left">
    <HStack
      w="280px"
      justifyContent="space-between"
      alignItems="left"
    >
      <Image src={img} alt={`${name}_user`} />
      <Flex width="20rem" alignItems="flex-end">
        <VStack width="55%" alignItems="left">
          <Text
            textAlign="left"
            fontStyle="normal"
            fontWeight={500}
            fontSize="14px"
            order={0}
            lineHeight="18px"
          >
            {name}
          </Text>
          <Text
            alignItems="left"
            textAlign="left"
            fontWeight={300}
            fontSize="12px"
            order={1}
          >
            {`${gen} Gen`}
          </Text>
        </VStack>
        <VStack width="45%" alignItems="right">
          <Text
            textAlign="right"
            fontStyle="normal"
            fontWeight={500}
            fontSize="14px"
            order={0}
            lineHeight="18px"
          >
            {`N${deposit}`}
          </Text>
          <Text
            textAlign="right"
            fontWeight={300}
            fontSize="12px"
            order={1}
          >
            {when}
          </Text>
        </VStack>
      </Flex>
    </HStack>
  </Flex>
);
const Referrals = () => (
  <Box textAlign="center" marginBottom="2rem">
    <VStack alignItems="left" marginBottom="2rem">
      {RReferrals.map(
			  ({
          id, img, name, gen, deposit, when,
        }): ReactNode => (
          <Referral
            key={id}
            img={img}
            name={name}
            gen={gen}
            deposit={numberWithCommas(deposit)}
            when={when}
          />
			  ),
      )}
    </VStack>
    <Button
      variant="primaryOutline"
      fontStyle="normal"
      fontWeight={500}
      borderRadius="10px"
      fontSize="14px"
      lineHeight="18px"
      w="132px"
      h="37px"
      boxSizing="border-box"
    >
      View All
    </Button>
  </Box>
);
const Shortcuts = () => (
  <Box textAlign="center" marginBottom="4rem">
    <Flex
      marginTop="1.5rem"
      h="150px"
      color="rgb(18,18,18)"
      w="280px"
      alignContent="start"
      alignItems="flex-start"
      justifyContent="space-between"
      borderRadius="12.42px"
      bgGradient="linear-gradient(273.78deg, #FFFFFF 8.84%, #B8479F 47.63%, #F495FB 102.85%)"
      _hover={{
			  animation: 'ease-in-out .5s',
			  cursor: 'pointer',
			  background:
					'linear-gradient(-270deg, #FFFFFF 8%, #B8479F 47.63%, #F495FB 102.85%)',
      }}
    >
      <VStack
        justifyContent="top"
        alignItems="center"
        fontWeight={600}
        lineHeight="13px"
      >
        <Image
          marginLeft="-.4em"
          marginTop="-3.2em"
          src={cartRed}
          alt="Cart_depiction"
        />
        <Box marginLeft="2.4em" marginTop="-8.8em">
          <Text
            marginTop="-1.8em"
            fontWeight={500}
            fontSize="16px"
            color="rgba(0, 0, 0, 0.8)"
            lineHeight="17px"
          >
            View Cart
          </Text>
          <Text fontWeight={600} lineHeight="20px" fontSize="24px">
            13 items
          </Text>
        </Box>
      </VStack>
      <VStack
        marginRight="2.4em"
        marginTop="7.1em"
        alignItems="baseline"
        justifyContent="bottom"
      >
        <Text fontSize="16px">CART</Text>
      </VStack>
    </Flex>
    <Button
      marginTop="3.1em"
      variant="primaryOutline"
      fontStyle="normal"
      fontWeight={500}
      borderRadius="10px"
      fontSize="14px"
      lineHeight="18px"
      w="132px"
      h="37px"
      boxSizing="border-box"
    >
      Add
    </Button>
  </Box>
);
export function RightSide() {
  return (
    <Container
      position="fixed"
      right={0}
      zIndex={4}
      top="9rem"
      w="348px"
      h="100vh"
    >
      <Text
        pl="1rem"
        textAlign="left"
        fontStyle="normal"
        fontWeight={600}
        fontSize="16px"
        lineHeight="18px"
      >
        Recent Referrals
      </Text>
      <Referrals />
      <Text
        pl="1rem"
        textAlign="left"
        fontStyle="normal"
        fontWeight={600}
        fontSize="16px"
        lineHeight="18px"
      >
        Shortcuts
      </Text>
      <Shortcuts />
    </Container>
  );
}
