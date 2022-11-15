import {
	Box,
	Button,
	Divider,
	Flex,
	HStack,
	Image,
	Stack,
	Text,
	VStack,
} from '@chakra-ui/react';
import profilePic from '../../../assets/images/avatarWithBackdrop.svg';
import pkgIcon from '../../../assets/images/Emoji.svg';

function CurrencyBadge() {
	return (
		<Flex
			borderRadius="5px"
			fontWeight="500"
			fontSize="12px"
			textAlign="center"
			alignItems="center"
			justifyContent="center"
			w="49px"
			h="23px"
			color="black"
			bg="#5CF77E">
			NGN
		</Flex>
	);
}
const WalletBalance = () => {
	return (
		<HStack gap="22px">
			<VStack alignItems="flex-start" gap="13px">
				<Text fontWeight={500} fontSize="14px" color="secondary">
					Wallet Balance
				</Text>
				<Text fontWeight={600} fontSize="30px">
					2,000,134
				</Text>
				<Text fontWeight={500} fontSize="14px" color="secondary">
					2,421411
				</Text>
			</VStack>
			<CurrencyBadge />
		</HStack>
	);
};
const toggleItems = ['Portfolio', 'Activity', 'External', 'News'];
type ItemProps = {
	text: string;
};
function Item({ text }: ItemProps) {
	return (
		<Stack
			borderRadius="15px"
			justifyContent="center"
			alignItems="center"
			gap="10px"
			bg="darken"
			width="91px"
			height="39px">
			<Text>{text}</Text>
		</Stack>
	);
}
function ToggleMenu() {
	return (
		<HStack
			boxShadow="dark-lg"
			w="404px"
			h="57px"
			bg="#121317"
			gap="4px"
			padding="6px"
			justifyContent="center"
			borderRadius="15px">
			{toggleItems.map((item) => {
				return <Item text={item} />;
			})}
		</HStack>
	);
}

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
const CommissionsEarned = () => {
	return (
		<VStack
			alignItems="left"
			gap="4px"
			justifyContent="space-between">
			<Text fontWeight={500} fontSize="16px" lineHeight="8px">
				Commissions Earned
			</Text>
			<Flex>
				<Text fontWeight={600} fontSize="32px" lineHeight="18px">
					1,100,134
				</Text>
				<CurrencyBadge />
			</Flex>
		</VStack>
	);
};
const PayoutReleased = () => {
	return (
		<VStack alignItems="left">
			<Text fontWeight={500} fontSize="16px" lineHeight="8px">
				Payouts Released
			</Text>
			<Flex>
				<Text fontWeight={600} fontSize="32px" lineHeight="18px">
					700,134
				</Text>
				<CurrencyBadge />
			</Flex>
		</VStack>
	);
};
const PayoutPending = () => {
	return (
		<VStack alignItems="left">
			<Text fontWeight={500} fontSize="16px" lineHeight="8px">
				Payouts Pending
			</Text>
			<Flex>
				<Text fontWeight={600} fontSize="32px" lineHeight="18px">
					0
				</Text>
				<CurrencyBadge />
			</Flex>
		</VStack>
	);
};
function SecondHalf() {
	return (
		<HStack border="1px solid danger" justifyContent="space-between">
			<CommissionsEarned />
			<PayoutReleased />
			<PayoutPending />
		</HStack>
	);
}
function Dashboard() {
	return (
		<VStack
			animation="alternate-reverse"
			w="65%"
			justifyContent="center">
			<HStack
				justifyContent="space-between"
				w="65vw"
				padding="2rem"
				h="auto">
				<WalletBalance />
				<ToggleMenu />
				{/* <WalletBalance /> */}
				{/* <WalletBalance /> */}
			</HStack>
			<VStack
				alignItems="center"
				pl="42px"
				pr="42px"
				pt="56px"
				width="744px"
				height="443px"
				bg="#121319"
				boxShadow="dark-lg"
				borderRadius="30px">
				<FirstHalf />
				<Divider w="373px" />
				<SecondHalf />
			</VStack>
		</VStack>
	);
}

export default Dashboard;
