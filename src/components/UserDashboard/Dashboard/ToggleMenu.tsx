import { useState } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { Box, HStack, Stack, Text } from '@chakra-ui/react';
import {
	IN_DASHBOARD_ROUTE,
	USER_DASHBOARD_ROUTE,
	ROUTE,
} from '../../../routes';
import { inDashboardRoutes } from '../../../routes/routes';

const toggleItems = ['Portfolio', 'Activity', 'External', 'News'];
type ToggleItemProps = {
	to: USER_DASHBOARD_ROUTE | IN_DASHBOARD_ROUTE | ROUTE;
	name: string;
};
function ToggleItem({ to, name }: ToggleItemProps) {
	return (
		<Stack
			as={RouteLink}
			to={to}
			justifyContent="center"
			alignItems="center"
			gap="10px"
			width="91px"
			height="39px">
			<Text>{name}</Text>
		</Stack>
	);
}
export function ToggleMenu() {
	const [active, setActive] = useState('Portfolio');
	
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
			{inDashboardRoutes.map(({ path, name }) => (
				<Box
					borderRadius="15px"
					onClick={() => setActive(name)}
					bg={active == name ? 'darken' : ''}>
					<ToggleItem to={path} name={name} />
				</Box>
			))}
		</HStack>
	);
}
