import { useState } from 'react';
import {
	Box,
	VStack,
	HStack,
	Text,
	Select,
	Image,
} from '@chakra-ui/react';
import cardStyle from '../../../../interfaces/cardStyle';
import Card from '../../../common/Card';
// Images import
import ticketIllus from '../../../../assets/images/ticketIllus.svg';
import blueBack from '../../../../assets/images/blueBack.svg';
import yellowBack from '../../../../assets/images/yellowBack.svg';
import pinkBack from '../../../../assets/images/pinkBack.svg';
import blueBackLogo from '../../../../assets/images/blueBackLogo.svg';
import yellowBackLogo from '../../../../assets/images/yellowBackLogo.svg';
import pinkBackLogo from '../../../../assets/images/pinkBackLogo.svg';

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
			h="5.55rem"
			w="270px"
			borderRadius="20px">
			<HStack isInline spacing="1rem" alignItems="center">
				<Text
					pl="1.2rem"
					textAlign="center"
					w="50%"
					letterSpacing="0.11em"
					fontWeight={700}
					lineHeight="28px">
					Open Tickets
				</Text>
				<Image
					w="100%"
					h="7rem"
					src={ticketIllus}
					alt="ticketIllus"
				/>
			</HStack>
		</Box>
	);
};

type EachTicketProp = {
	text: string;
	backgroundImg: any;
	Icon: any;
};

const Tickets = [
	{
		text: 'I need a custom Job',
		backgroundImg: yellowBack,
		Icon: yellowBackLogo,
	},
	{
		text: "I can't deposit, Help!",
		backgroundImg: blueBack,
		Icon: blueBackLogo,
	},
	{
		text: 'I just found a Bug here',
		backgroundImg: pinkBack,
		Icon: pinkBackLogo,
	},
];
const EachTicket = ({
	backgroundImg,
	Icon,
	text,
}: EachTicketProp) => {
	return (
		<Box
			margin="1rem"
			boxShadow="dark-lg"
			backgroundImage={backgroundImg}
			h="71px"
			w="270px"
			borderRadius="20px">
			<HStack
				justifyContent="center"
				alignItems="center"
				margin="1rem"
				isInline
				spacing=".2rem">
				<Image pr=".5rem" w="37px" h="37px" src={Icon} alt="ticketIllus" />
				<Text color="darken">{text}</Text>
			</HStack>
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
				<VStack spacing="3rem">
					{Tickets.map((ticket) => (
						<EachTicket
							backgroundImg={ticket.backgroundImg}
							Icon={ticket.Icon}
							text={ticket.text}
						/>
					))}
				</VStack>
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
