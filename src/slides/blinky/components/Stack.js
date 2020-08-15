import styled from 'styled-components';
import { system } from 'styled-system';
import Flex from './Flex';

/**
 * Stacking layout: horizontal, vertical, and responsive. Adds equal amount
 * of spacing between children.
 */
export const Stack = styled(Flex)(
	// We are using the “lobotomized owl” CSS selector to add margins between children
	// More information: https://every-layout.dev/layouts/stack/#the-solution
	system({
		gap: {
			// Set the gap value to a CSS property to later use it to add margin
			// at the correct side. We have to use CSS properties becase it's the
			// only way to use several responsive props together
			// @ts-ignore
			property: '> * + *',
			scale: 'space',
			transform: (value, scale) => ({
				'--stack-gap': scale[value],
			}),
		},
		direction: {
			// @ts-ignore
			property: '&&',
			transform: value => ({
				flexDirection: value,
				// Use lobotomized owl selector to add margin on top or left
				// depending on the direction, use value from the CSS property
				'> * + *': {
					marginTop: value === 'column' ? 'var(--stack-gap)' : 0,
					marginLeft: value === 'row' ? 'var(--stack-gap)' : 0,
				},
			}),
		},
	})
);

Stack.defaultProps = {
	direction: 'column',
};

export default Stack;
