import React, { Component, ReactChild, ReactNode } from 'react';
import { Box, useStyleConfig, VStack } from '@chakra-ui/react';
import cardStyle from '../../interfaces/cardStyle';

type CardProps = {
	children: ReactChild | NamedChildrenSlots;
};

type NamedChildrenSlots = {
	header?: ReactNode;
	content: ReactNode;
	footer?: ReactNode;
};

function Card(props: CardProps | any) {
  const { variant, ...rest } = props;
  const styles = useStyleConfig('Card', { variant });

  const { children } = props;

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
    // Pass the computed styles into the `__css` prop
    return (
      <VStack __css={styles} {...rest}>
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
    <VStack __css={styles} {...rest}>
      {children}
    </VStack>
  );
}

export default Card;
const isObject = <T extends object>(value: any): value is T => typeof value === 'object'
	&& typeof value !== 'function'
	&& value != undefined;

const isNamedSlots = (
  children: any,
): children is NamedChildrenSlots => isObject(children) && 'content' in children;
