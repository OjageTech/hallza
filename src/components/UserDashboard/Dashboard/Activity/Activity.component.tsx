import { useState, useEffect } from 'react';
import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react';
import Card from '../../../common/Card';
import girlImg from '../../../../assets/images/girlImg.png';
import iconRight from '../../../../assets/images/iconRight.svg';
import copyIcon from '../../../../assets/images/copyIcon.svg';
import cardStyle from '../../../../interfaces/cardStyle';

const RevenueRun = () => (
	<Box>
		<Text>Revenue Growth</Text>
	</Box>
);

const NetworkLeader = () => (
	<Box>
		<Text ml=".5rem" mb=".5rem">
			Top Network Leader
		</Text>
		<Flex width="20rem">
			<Image src={girlImg} alt="top Leader Image" />
			<VStack textAlign="left" alignItems="left" pl="1rem" pr="2rem">
				<Text fontSize="14px" padding="2px">
					Patrick Longa
				</Text>
				<Text fontSize="12px">Cameroon</Text>
			</VStack>
			<Image
				_hover={{ cursor: 'pointer', transition: 'scale(1.05)' }}
				src={iconRight}
				alt="akar-icons_chevron-right"
			/>
		</Flex>
	</Box>
);

const ReferralLink = () => {
	const [MO, setMO] = useState(false);
	const handleMouseOver = () => {
		useEffect(() => {
			setMO(true);
		}, []);
	};
	return (
		<Box>
			<Text>Referral Link</Text>
			<Flex
				className="animate__animated animate__flash animate__faster"
				onClick={handleMouseOver}
				_hover={{
					cursor: 'pointer',
					background:
						'linear-gradient(220deg, #3C3C3B 1%, rgba(60, 60, 59, 0) 100%)',
					animation: '2s ease-in-out',
				}}
				alignItems="center"
				padding="1rem"
				m="1rem"
				ml={0}
				justifyContent="center"
				h="45px"
				background="linear-gradient(180deg, #3C3C3B 0%, rgba(60, 60, 59, 0) 100%)"
				borderRadius="10px">
				<Text width="60%">Click to Copy</Text>
				<Image h="24px" w="24px" src={copyIcon} alt="copy link" />
			</Flex>
		</Box>
	);
};

const styleForNetworkCard: cardStyle = {
	w: 331,
	h: 123,
	pl: 22,
	pt: 16,
	aI: 'left',
};
const styleForReferralCard: cardStyle = {
	w: 331,
	h: 123,
	pl: 26,
	pt: 16,
	aI: 'left',
};
const Activity = () => (
	<Box className="animate__animated animate__backInUp">
		<Card mode="dark">
			<RevenueRun />
		</Card>
		<Flex marginTop="3rem" justifyContent="space-between">
			<Card styles={styleForNetworkCard} mode="dark">
				<NetworkLeader />
			</Card>
			<Card styles={styleForReferralCard} mode="dark">
				<ReferralLink />
			</Card>
		</Flex>
	</Box>
);
export default Activity;
