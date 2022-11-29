import { useState } from 'react';
import { Box, VStack, HStack, Text, Select } from '@chakra-ui/react';
import cardStyle from '../../../../interfaces/cardStyle';
import Card from '../../../common/Card';

const PayoutsIllustration = (props: any) => {
	return (
		<Box
			as="svg"
			width="100%"
			height="100%"
			viewBox="0 0 400 400"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<path
				d="M0 0h400v400H0V0z"
				fill="url(#prefix__paint0_linear)"
				fillOpacity={0.1}
			/>
			<path
				d="M0 0h400v400H0V0z"
				fill="url(#prefix__paint1_linear)"
				fillOpacity={0.1}
			/>
		</Box>
	);
};
const stylesForPayoutBox: cardStyle = {
	w: 358,
	h: 561,
	pt: 24,
};
const PayoutsBox = () => {
	const Options: string[] = ['WEEK', 'MONTH', 'YEAR'];
	const [selectedRange, setSelectedRange] = useState('WEEK');
	return (
		<Card styles={stylesForPayoutBox} mode="dark">
			<VStack spacing={4}>
				<HStack spacing="6rem">
					<Text fontSize="18px">Payouts</Text>
					<Box>
						<Select
							bg="secondary"
							color="black"
							borderRadius="15px"
							w="8rem"
							onChange={() => setSelectedRange(selectedRange)}
							value={selectedRange}>
							{Options.map((optionItem) => (
								<option
									value={optionItem}
									onClick={() => setSelectedRange(optionItem)}>
									{optionItem}
								</option>
							))}
						</Select>
					</Box>
				</HStack>
				<PayoutsIllustration />
			</VStack>
		</Card>
	);
};

const TicketHead = () => {
	return (
		<Box
			margin="1rem"
			boxShadow="dark-lg"
			bg="#121319"
			h="7rem"
			w="13rem"
			borderRadius="20px">
			{''}
		</Box>
	);
};
const stylesForTicketsBox = {
	w: 358,
	h: 561,
};
const TicketsBox = () => {
	return (
		<Card styles={stylesForPayoutBox} mode="dark">
			<VStack spacing={4}>
				<TicketHead />
				<HStack isInline spacing="4rem">
					<Text>Payouts</Text>
					<Box>Week</Box>
				</HStack>
				<PayoutsIllustration />
			</VStack>
		</Card>
	);
};
const stylesForXtraBox = {
	w: 738,
	h: 81,
	pl: 24,
	pt: 24,
	pr: 24,
};
const Xtra = () => {
	return (
		<Box>
			<h3> </h3>
		</Box>
	);
};
const External = () => {
	return (
		<Box className="animate__animated animate__backInUp">
			<VStack>
				<HStack marginBottom="4rem" spacing="2rem">
					<PayoutsBox />
					<TicketsBox />
				</HStack>
				<Card styles={stylesForXtraBox} mode="dark">
					<Xtra />
				</Card>
			</VStack>
		</Box>
	);
};
export default External;
