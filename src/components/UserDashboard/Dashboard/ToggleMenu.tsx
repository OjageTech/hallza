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
			borderRadius="15px"
			justifyContent="center"
			alignItems="center"
			gap="10px"
			bg="darken"
			width="91px"
			height="39px">
			<Text>{name}</Text>
		</Stack>
	);
}
export function ToggleMenu() {
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
				<ToggleItem to={path} name={name} />
			))}
		</HStack>
	);
}
