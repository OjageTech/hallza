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
import { useEffect } from 'react';
import payoutRequestIcon from '../../../../assets/images/moneyDesign.svg';
import commissionsRequestIcon from '../../../../assets/images/holdingHandsIcon.svg';

import profilePic from '../../../../assets/images/avatarWithBackdrop.svg';
import pkgIcon from '../../../../assets/images/Emoji.svg';
import Card from '../../../common/Card';
import BarChart from '../../../Charts/BarChart';
import LineChart from '../../../Charts/LineChart';
import { QuickShowDetails } from '../QuickShowDetails';
import { RecentTransactions } from '../RecentTransactions';
import cardStyles from '../../../../interfaces/cardStyles';
import {
	numberWithCommas,
	percentChange,
} from '../../../../app/functions';

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
			variant="primaryOutline"
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
					<Text fontWeight={500} fontSize="16px" lineHeight="18px">
						TTDIA0XAA
					</Text>
					<ViewProfileBtn />
				</VStack>
			</HStack>
			<VStack>
				<Text>Package</Text>
				<HStack>
					<Image width="36px" height="36px" src={pkgIcon} />
					<Text fontWeight={500} fontSize="28px">
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
	value: number[];
	date: string;
	type: string;
};

export const Transaction = ({
	value,
	date,
	type,
}: TransactionProps) => {
	const last2Values = value.slice(-2); // 👉️ ['d', 'e']

	const prevAmt = last2Values[0];
	const currentAmt = last2Values[1];

	// Check if type is Payout or not to choose
	// appropriate icon
	let color = '';
	let pr = '';
	let icon: any;
	icon = typeOfRequest(type, icon, color, pr).icon;
	pr = typeOfRequest(type, icon, color, pr).pr;
	color = typeOfRequest(type, icon, color, pr).color;

	return (
		<Card margin="1.2rem" variant="flat">
			<HStack
				h="81px"
				w="738px"
				padding="5px"
				pl="1rem"
				justifyContent="space-between">
				<Flex>
					<Image pr="1.5rem" src={icon} />
					<VStack
						justifyContent="left"
						alignItems="left"
						paddingRight={pr}
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
						color={color}>
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
					<LineChart
						w={400}
						h={300}
						borderColor={color}
						dataS={value}
					/>
				</VStack>
			</HStack>
		</Card>
	);
};

const Portfolio = () => (
	<Box className="animate__animated animate__backInUp">
		<Box ml="1rem">
			<Card>
				<VStack>
					<FirstHalf />
					<Divider w="373px" />
					<SecondHalf />
				</VStack>
			</Card>
		</Box>
		<RecentTransactions />
	</Box>
);
export default Portfolio;

/**
 * Checks if the type contains the text 'Payout' and responds accordingly
 * @param type
 * @param icon
 * @param color
 * @param pr
 * @returns checker which is an object, can be accessed by using the dot notation
 */
function typeOfRequest(
	type: string,
	icon: any,
	color: string,
	pr: string
) {
	if (type.indexOf('Payout') !== -1) {
		icon = payoutRequestIcon;
		color = '#05EFF4';
		pr = '1.2rem';
	} else {
		icon = commissionsRequestIcon;
		color = '#E987EB';
	}
	const checker = { icon, color, pr };
	return checker;
}
