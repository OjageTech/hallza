import { mode, whiten, darken } from '@chakra-ui/theme-tools';
import { defineStyleConfig } from '@chakra-ui/react';

export const Box = defineStyleConfig({
	// The styles all Cards have in common
	baseStyle: {
		background: 'white',
	},
	// Two variants: rounded and nav
	variants: {
		rounded: (props: any) => ({
			padding: 8,
			borderRadius: 'xl',
			boxShadow: 'xl',
			bg: mode(darken('primary', 20), whiten('secondary', 20))(props),
		}),
		nav: (props: any) => ({
            color: mode(whiten('white',0), darken('white',0))(props),
			boxShadow: 'md',
			bg: mode(darken('primary', 20), whiten('rgb(18, 18, 18)',0))(props),
		}),
	},
	// The default variant value
	defaultProps: {
		variant: 'rounded',
	},
});
