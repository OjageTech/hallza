import React, { Component, ReactNode } from 'react';
import {

	VStack,
} from '@chakra-ui/react';

type CardProps = {
	children: ReactNode;
};
export default class Card extends Component<CardProps> {
	render() {
		return (
			<VStack
				alignItems="center"
				pl="42px"
				pr="42px"
				pt="56px"
				width="744px"
				height="443px"
				bg="#121319"
				boxShadow="dark-lg"
				borderRadius="30px">
				{this.props.children}
			</VStack>
		);
	}
}
