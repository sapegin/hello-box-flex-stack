import styled from 'styled-components/macro';
import {
	space,
	color,
	border,
	layout,
	flexbox,
	typography,
} from 'styled-system';
import propTypes from '@styled-system/prop-types';

const Box = styled('div')(
	{
		boxSizing: 'border-box',
		minWidth: 0,
	},
	space,
	color,
	border,
	layout,
	flexbox,
	typography
);

Box.propTypes = {
	...propTypes.space,
	...propTypes.color,
	...propTypes.border,
	...propTypes.layout,
	...propTypes.flexbox,
	...propTypes.typography,
};

/** @component */
export default Box;
