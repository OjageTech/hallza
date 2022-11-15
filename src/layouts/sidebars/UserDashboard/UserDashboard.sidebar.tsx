import { Link as RouteLink } from 'react-router-dom';
import { SetStateAction, useEffect, useState } from 'react';
import {
	Box,
	Image,
	Text,
	Stack,
	HStack,
	Center,
	Flex,
	VStack,
	useBoolean,
} from '@chakra-ui/react';
import { nestRoutes } from '../../../routes/routes';
import { ROUTE, USER_DASHBOARD_ROUTE } from '../../../routes';
import { Badger } from './Badger';
import { isLight, mode } from '@chakra-ui/theme-tools';
// import bell from '../../../assets/images/bell.svg';

type PanelTextProps = { text: string };
const PanelText = ({ text }: PanelTextProps) => (
	<Text fontWeight={400} fontSize="15px">
		{text}
	</Text>
);

const ItemBadge = Badger();

type SidebarItemContentProps = {
	text: string;
	icon: string;
	badgeVisibility: string;
	badgeContent: number;
};
const SidebarItemContent = ({
	text,
	icon,
	badgeContent,
	badgeVisibility,
}: SidebarItemContentProps) => {
	const iconAlt = `${text}_icon`;
	return (
		<HStack
			minWidth="13vw"
			minHeight="45px"
			pl="2rem"
			justifyContent="left">
			<Image h="19.87px" w="19.87px" src={icon} alt={iconAlt} />
			<Text fontWeight={500} fontSize="16px">
				{text}
			</Text>
			<ItemBadge nomba={badgeContent} disp={badgeVisibility} />
		</HStack>
	);
};

type SidebarItemProps = {
	to: USER_DASHBOARD_ROUTE | ROUTE;
	name: string;
  selected: boolean,
  icon: any,
};

const SideBarItem = ({ to, name, selected, icon }: SidebarItemProps) => {
	
	// Get the current url
	
  
	const [badgeVisibility, setBadgeVisibility] = useState('none');
	const [badgeContent, setBadgeContent] = useState(0);
	
	const nomba = 0;
	useEffect(() => {
		if (nomba !== 0) {
			setBadgeContent(nomba);
			setBadgeVisibility('block');
		}
		
	}, []);

	return (
		<Box
			as={RouteLink}
			to={to}
			onClick={() => console.log(name)}
			_hover={{
				cursor: 'pointer',
			}}
			bg={!selected ? 'darken' : 'inherit'}
			bgGradient={
				selected
					? 'linear(-273.78deg,darken 2.4%, danger 27.63%, primary 102.85%)'
					: 'transparent'
			}
			borderRadius="12.42px">
			<SidebarItemContent
				text={name}
				icon={icon}
				badgeContent={badgeContent}
				badgeVisibility={badgeVisibility}
			/>
		</Box>
	);
};
const SidebarItems = () => {
	const [active, setActive] = useState('');
	const activeBtn = (value: any) => {
		setActive(value);
	};
	return (
		<VStack height="100vh" gap="2.2rem">
			{nestRoutes.map((item) => (
				<SideBarItem icon={item.icon} selected={item.selected} to={item.path} name={item.name} />
			))}
		</VStack>
	);
};

/**
 *
 * @returns The Dashboard Sidebar
 */
const DashboardSidebar = () => (
	<div className="DashboardSidebar">
		<Box w="25vh" h="100vh" overflow="hidden">
			<VStack gap="3rem">
				<PanelText text="Member CP" />

				<SidebarItems />
			</VStack>
		</Box>
	</div>
);

export default DashboardSidebar;
