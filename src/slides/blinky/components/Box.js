import styled from 'styled-components';
import {
	space,
	color,
	border,
	shadow,
	layout,
	position,
	flexbox,
	typography,
} from 'styled-system';

/**
 * Generic container with responsive props to control whitespace, layout, positioning and colors.
 */
export const Box = styled.div(
	{
		boxSizing: 'border-box',
		minWidth: 0,
	},
	space,
	color,
	border,
	shadow,
	layout,
	position,
	flexbox,
	typography
);

export default Box;
