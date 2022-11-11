import { Badge, Box, HStack, Text, VStack } from '@chakra-ui/react';

const CurrencyBadge = () => <Badge colorScheme="whatsapp">NGN</Badge>;
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
function Dashboard() {
	return (
		<Box border="1px solid highlight" w="65%" padding="2rem" h="auto">
			<WalletBalance />
			{/* <ToggleMenu /> */}
			{/* <WalletBalance /> */}
			{/* <WalletBalance /> */}
		</Box>
	);
}

export default Dashboard;
