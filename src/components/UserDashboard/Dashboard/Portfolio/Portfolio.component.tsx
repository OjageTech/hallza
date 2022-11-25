import {
	Box,
	Button,
	Divider,
	Flex,
	HStack,
	Image,
	Text,
	VStack,
} from '@chakra-ui/react';
import profilePic from '../../../../assets/images/avatarWithBackdrop.svg';
import pkgIcon from '../../../../assets/images/Emoji.svg';
import Card from '../../../../components/common/Card';
import {
	numberWithCommas,
	QuickShowDetails,
} from '../QuickShowDetails';
import { RecentTransactions } from '../RecentTransactions';

function Pic() {
	return (
		<VStack justify="space-between">
			<Image
				filter="drop-shadow(0px 4px 4px #8C8C8C)"
				width="82px"
				height="82px"
				src={profilePic}
			/>
			<Box
				mt="3rem"
				borderRadius="50%"
				width="75px"
				height="23px"
				bg="rgba(0, 0, 0, 0.8)"
				filter="blur(4.5px)"
			/>
		</VStack>
	);
}

function ViewProfileBtn() {
	return (
		<Button
			variant="tertiary"
			fontStyle="normal"
			fontWeight={500}
			borderRadius="10px"
			fontSize="14px"
			lineHeight="18px"
			w="132px"
			h="37px"
			boxSizing="border-box">
			View Profile
		</Button>
	);
}
function FirstHalf() {
	return (
		<HStack w="680px" justifyContent="space-between" mb="8rem">
			<HStack gap="2.5rem">
				<Pic />
				<VStack alignItems="left">
					<Text fontWeight={600} fontSize="32px" lineHeight="19px">
						Nneka Obi
					</Text>
					<Text
						color="rgba(255, 255, 255, 0.5)"
						fontWeight={500}
						fontSize="16px"
						lineHeight="18px">
						TTDIA0XAA
					</Text>
					<ViewProfileBtn />
				</VStack>
			</HStack>
			<VStack>
				<Text color="rgba(255, 255, 255, 0.5)">Package</Text>
				<HStack>
					<Image width="36px" height="36px" src={pkgIcon} />
					<Text fontWeight={500} color="#C0C0C0" fontSize="28px">
						Gold Star
					</Text>
				</HStack>
			</VStack>
		</HStack>
	);
}
const CommissionsEarned = () => (
	<QuickShowDetails
		activityText="Commissions earned"
		amount={1134075}
	/>
);
const PayoutReleased = () => (
	<QuickShowDetails activityText="Payouts released" amount={700134} />
);
const PayoutPending = () => (
	<QuickShowDetails activityText="Payouts pending" amount={0} />
);

function SecondHalf() {
	return (
		<Flex
			pt="1.5rem"
			border="1px solid danger"
			justifyContent="space-between">
			<CommissionsEarned />
			<PayoutReleased />
			<PayoutPending />
		</Flex>
	);
}

type TransactionProps = {
	currentAmt: number;
	prevAmt: number;
	date: string;
	type: string;
	icon: any;
};

export const Transaction = ({
	currentAmt,
	prevAmt,
	date,
	icon,
	type,
}: TransactionProps) => {
	const percentChange = (
		prevAmt: number,
		currentAmt: number
	): number => Math.floor(((currentAmt - prevAmt) / prevAmt) * 100);

	return (
		<HStack
			margin="1.2rem"
			width="744px"
			padding="5px"
			pl="1rem"
			height="71px"
			borderRadius="20px"
			bg="#121319"
			justifyContent="space-between"
			boxShadow="dark-lg">
			<Flex>
				<Image pr="1.5rem" src={icon} />
				<VStack
					justifyContent="left"
					alignItems="left"
					paddingRight={type === 'Commission' ? '1.2rem' : 0}
					lineHeight="18px"
					fontWeight={500}>
					<Text fontSize="14px">{type}</Text>
					<Box
						textAlign="left"
						fontWeight={600}
						fontSize="12px"
						color="rgba(255, 255, 255, 0.5)">
						{date}
					</Box>
				</VStack>
			</Flex>

			<VStack
				justifyContent="left"
				alignItems="left"
				lineHeight="18px"
				fontWeight={500}>
				<Text fontSize="14px">Amount</Text>
				<Box
					textAlign="left"
					fontWeight={600}
					fontSize="12px"
					color={type === 'Commission' ? '#05EFF4' : '#D79DDA'}>
					N{numberWithCommas(currentAmt)}
				</Box>
			</VStack>
			<VStack
				justifyContent="left"
				alignItems="left"
				lineHeight="18px"
				fontWeight={500}>
				<Text fontSize="14px">% Change</Text>
				<Box
					textAlign="left"
					fontWeight={600}
					fontSize="12px"
					color={
						percentChange(prevAmt, currentAmt) > 0
							? 'green'
							: 'danger'
					}>
					{`${percentChange(prevAmt, currentAmt)}%`}
				</Box>
			</VStack>
			<VStack
				justifyContent="left"
				alignItems="left"
				lineHeight="18px"
				fontWeight={500}>
				{/* <Chart /> */}
			</VStack>
		</HStack>
	);
};

const Portfolio = () => (
	<Box className="animate__animated animate__backInUp">
		<Card>
			<FirstHalf />
			<Divider w="373px" />
			<SecondHalf />
		</Card>{' '}
		{/* 3 */}
		<RecentTransactions />
	</Box>
);
export default Portfolio;
