import { Link as RouteLink } from 'react-router-dom';
import { SetStateAction, useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { toggleExpanded } from '../../../features/sidebar/main-slice';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import {
	Image,
	Text,
	Stack,
	HStack,
	Center,
	Flex,
	VStack,
	useBoolean,
	Container,
	Heading,
} from '@chakra-ui/react';
import logo from '../../../assets/images/logo192.png';
import Box from '../../../components/common/Box';
import { nestRoutes } from '../../../routes/routes';
import {
	IN_DASHBOARD_ROUTE,
	ROUTE,
	USER_DASHBOARD_ROUTE,
} from '../../../routes';
import { Badger } from './Badger';

type PanelTextProps = { text: string };
const PanelText = ({ text }: PanelTextProps) => (
	<Text
		fontFamily="cursive"
		color="white"
		fontWeight={800}
		fontSize="20px">
		<strong>{text}</strong>
	</Text>
);

const ItemBadge = Badger();

type SidebarItemContentProps = {
	text: string;
	Icon: React.ReactNode;
	badgeVisibility: string;
	badgeContent: number;
};
const SidebarItemContent = ({
	text,
	Icon,
	badgeContent,
	badgeVisibility,
}: SidebarItemContentProps) => {
	const iconAlt = `${text}_icon`;
	const expanded: boolean = useAppSelector(
		(state: { mainSidebar: { value: boolean } }) =>
			state.mainSidebar.value
	);
	if (!expanded) {
		return (
			<HStack
				minWidth="5vw"
				minHeight="45px"
				pl="0"
				justifyContent="center">
				{Icon}
			</HStack>
		);
	} else {
		return (
			<HStack
				minWidth="13vw"
				minHeight="45px"
				pl="2rem"
				justifyContent="left">
				{Icon}
				<Text fontWeight={500} fontSize="16px">
					{text}
				</Text>
				<ItemBadge nomba={badgeContent} disp={badgeVisibility} />
			</HStack>
		);
	}
};

type SidebarItemProps = {
	to: USER_DASHBOARD_ROUTE | ROUTE | IN_DASHBOARD_ROUTE;
	name: string;
	selected: boolean;
	Icon: React.ReactNode;
};

const SideBarItem = ({
	to,
	name,
	selected,
	Icon,
}: SidebarItemProps) => {
	const [active, setActive] = useState('');

	const [badgeVisibility, setBadgeVisibility] = useState('none');
	const [badgeContent, setBadgeContent] = useState(0);

	const nomba = 1;

	const activeBgGradient =
		'linear(-273.78deg,darken 2.4%, danger 27.63%, primary 102.85%)';
	useEffect(() => {
		if (nomba > 0) {
			setBadgeContent(nomba);
			setBadgeVisibility('block');
		}
	}, []);

	return (
		<Box
			className={active === name ? 'mlm' : ''}
			as={RouteLink}
			to={to}
			onClick={() => setActive(name)}
			_hover={{
				cursor: 'pointer',
			}}
			borderRadius="12.42px">
			<SidebarItemContent
				text={name}
				Icon={Icon}
				badgeContent={badgeContent}
				badgeVisibility={badgeVisibility}
			/>
		</Box>
	);
};
const SidebarItems = () => {
	const [active, setActive] = useState('Dashboard');
	const activeBtn = (value: any) => {
		setActive(value);
	};
	return (
		<VStack height="100vh" gap="20px" alignItems="flex-start">
			{nestRoutes.map((item) => {
				const Icon = item.icon;
				return (
					<Box
						variant={active == item.name ? 'activeItem' : 'navItem'}
						borderRadius="12.54px"
						onClick={() => setActive(item.name)}>
						<SideBarItem
							Icon={<Icon />}
							selected={item.selected}
							to={item.path}
							name={item.name}
						/>
					</Box>
				);
			})}
		</VStack>
	);
};

/**
 *
 * @returns The Dashboard Sidebar
 */
const DashboardSidebar = () => {
	const expanded = useAppSelector(
		(state: any) => state.mainSidebar.value
	);
	const dispatch = useAppDispatch();
	const handleToggle = () => {
		dispatch(toggleExpanded());
	};
	return (
		<Box
			variant="sideNav"
			position="fixed"
			top={10}
			pr=".5rem"
			pl=".5rem"
			left={6}
			zIndex={5}
			className="DashboardSidebar"
			textAlign="center"
			margin="0 auto"
			w="fit-content"
			h="90vh">
			<Box
				variant="rounded"
				title={expanded ? 'close' : 'expand'}
				_hover={{
					cursor: 'pointer',
					'box-shadow': 'dark-lg',
				}}
				boxShadow="md"
				display="flex"
				justifyContent="center"
				textAlign="center"
				alignItems="center"
				position="absolute"
				zIndex="6"
				w="30px"
				h="30px"
				ml={expanded ? '11rem' : '4rem'}
				mt="4rem"
				padding="1px"
				borderRadius="50%"
				onClick={handleToggle}>
				{expanded ? <FaChevronLeft /> : <FaChevronRight />}
			</Box>
			<VStack gap="3rem" pt="1.5rem">
				{/* <Container margin="0" padding="1rem" bg="white">
					<Flex justifyContent="center" alignItems="center">
						<Image
							width="40px"
							height="40px"
							src={logo}
							alt="TTDIA-MLM"
						/>
						<Text display={expanded ? 'block' : 'none'} as="h1">
							TTDIA-MLM
						</Text>
					</Flex>
				</Container> */}

				<PanelText text="ttdia" />

				<SidebarItems />
			</VStack>
		</Box>
	);
};

export default DashboardSidebar;
