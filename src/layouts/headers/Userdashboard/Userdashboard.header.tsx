import {
	Box,
	Image,
	Text,
	Stack,
	HStack,
	Center,
	Flex,
} from '@chakra-ui/react';
import logo from '../../../assets/images/logo192.png';
import bell from '../../../assets/images/bell.svg';
import avatarWithBackdrop from '../../../assets/images/avatarWithBackdrop.svg';
import Searchbar from '../../../components/common/searchbar/Searchbar';

type WelcomeTextProps = { text: string };
const WelcomeText = ({ text }: WelcomeTextProps) => (
	<Text fontWeight={600} fontSize="24px">
		{text}
	</Text>
);

type UserMixProps = { id: string; imgsrc: string };
const UserMix = ({ id, imgsrc }: UserMixProps) => (
	<HStack spacing="2rem">
		<Text fontWeight={300} fontSize="16px">
			{id}
		</Text>
		<Image
			width="39px"
			height="39px"
			src={avatarWithBackdrop}
			alt="profile-pic"
		/>
	</HStack>
);
const DashboardHeader = () => (

	<div className="DashboardHeader">
		<Box mt="4" w="100%" pl="3.5" maxH="58px" overflow="hidden">
			<Flex alignItems="center" justifyContent="space-between">
				<Image
					ml="4rem"
					width="40px"
					height="40px"
					src={logo}
					alt="TTDIA-MLM"
				/>
				<HStack
					pl="3.5rem"
					width="auto"
					alignItems="center"
					spacing="13rem">
					<WelcomeText text="Hi, Nneka Obi" />
				</HStack>
				<Flex
					alignItems="center"
					pr="4rem"
					justifyContent="space-between"
					width="25vw">
					{/* <Searchbar
						groupHeight="58px"
						paddingLeftInputLeft="5"
						heightInputLeft="50px"
            pl='4rem'
            inputHeight='50px'
            fontSize='16px'
            variant='flushed'
            inputWidth='320px'
            borderRadius='10px'
            placeholder='Search'
            bg='primary'
					/> */}

					<Image
						_hover={{
							cursor: 'pointer',
						}}
						width="24px"
						height="24px"
						src={bell}
						alt="notification bell"
					/>
					<UserMix id="TTDIA0XAA" imgsrc="avatarWithBackdrop" />
				</Flex>
			</Flex>
		</Box>
	</div>
);

export default DashboardHeader;
