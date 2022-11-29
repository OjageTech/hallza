import React, { Component, ReactChild, ReactNode } from 'react';
import { Box, VStack } from '@chakra-ui/react';
import cardStyle from '../../interfaces/cardStyle';

type CardProps = {
	styles?: cardStyle;
	mode?: 'dark' | 'light';
	children: ReactChild | NamedChildrenSlots;
};

type NamedChildrenSlots = {
	header?: ReactNode;
	content: ReactNode;
	footer?: ReactNode;
};

export default class Card extends Component<CardProps> {
	render() {
		const { styles } = this.props;
		let h = styles?.h;
		let w = styles?.w;
		let aI = styles?.aI;
		let pl = styles?.pl;
		let pr = styles?.pr;
		let pt = styles?.pt;

		if (!styles) {
			h = 443;
			w = 744;
			aI = 'center';
			pl = 42;
			pr = 42;
			pt = 56;
		}
		let { mode } = this.props;
		if (!mode) {
			mode = 'light';
		}
		const bg = mode === 'light' ? '#ffffff' : '#121319';
		const { children } = this.props;

		// Runtime check so app will throw when consumer forgets to provide children
		if (!children) {
			throw new Error('Children is Mandatory');
		}
		/**
		 * if props.children is in shape of our NamedChildrenSlots we will tell type
		 * checker that and render properly our markup
		 */
		if (isNamedSlots(children)) {
			const { header, content, footer } = children;
			return (
				<VStack
					alignItems={aI}
					pl={`${pl}px`}
					pr={`${pr}px`}
					pt={`${pt}px`}
					width={`${w}px`}
					height={`${h}px`}
					bg={bg}
					boxShadow="dark-lg"
					borderRadius="30px">
					{header && <Box>{header}</Box>}
					{content && <Box>{content}</Box>}
					{footer && <Box>{footer}</Box>}
				</VStack>
			);
		}
		/**
		 * if props.children is not NamedChildrenSlots we just render default markup
		 * provided by consumer of our component
		 */
		return (
			<VStack
				alignItems={aI}
				pl={`${pl}px`}
				pr={`${pr}px`}
				pt={`${pt}px`}
				width={`${w}px`}
				height={`${h}px`}
				bg={bg}
				boxShadow="dark-lg"
				borderRadius="30px">
				{children}
			</VStack>
		);
	}
}

const isObject = <T extends object>(value: any): value is T =>
	typeof value === 'object' &&
	typeof value !== 'function' &&
	value != undefined;

const isNamedSlots = (
	children: any
): children is NamedChildrenSlots =>
	isObject(children) && 'content' in children;
