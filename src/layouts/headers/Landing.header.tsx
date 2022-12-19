import { Link as RouteLink } from 'react-router-dom';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FaSun } from 'react-icons/fa';
import { RiMoonLine } from 'react-icons/ri';
import Box from '../../components/common/Box';
import {
	Button,
	Center,
	IconButton,
	VStack,
	Flex,
	Link,
	Text,
	Container,
	useColorMode,
} from '@chakra-ui/react';
import { navRoutes } from '../../routes/routes';
import {
	ReactElement,
	JSXElementConstructor,
	ReactFragment,
	ReactPortal,
} from 'react';

function LandingHeader() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Flex
			justifyContent="flex-end"
			textAlign="right"
			alignItems="center">
			<Flex
				w="100vw"
				pl="1rem"
				pr="1rem"
				pt="1rem"
				pb="0.5rem"
				boxSizing="border-box"
				gap="1.5rem"
				justifyContent="flex-end"
				textAlign="right"
				alignItems="center"
				flexWrap="wrap">
				{navRoutes.map(
					(item: {
						name:
							| string
							| number
							| boolean
							| ReactElement<any, string | JSXElementConstructor<any>>
							| ReactFragment
							| ReactPortal
							| null
							| undefined;
					}) => {
						// const Icon = item.icon;
						return (
							<Box
								_hover={{
									cursor: 'pointer',
									'text-decoration': 'underline',
								}}
								// variant={active == item.name ? 'activeItem' : 'navItem'}
								// borderRadius="12.54px"
								// onClick={() => handleItemClick(item.name)}
							>
								<Text
								// Icon={<Icon />}
								// selected={item.selected}
								// to={item.path}
								>
									{item.name}
								</Text>
							</Box>
						);
					}
				)}

				{colorMode === 'light' ? (
					<Box
						_hover={{
							cursor: 'pointer',
						}}>
						<FaSun size="2rem" onClick={toggleColorMode} />
					</Box>
				) : (
					<Box
						_hover={{
							cursor: 'pointer',
						}}>
						<RiMoonLine size="2rem" onClick={toggleColorMode} />
					</Box>
				)}
			</Flex>
		</Flex>
	);
}

export default LandingHeader;
