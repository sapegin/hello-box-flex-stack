import React from 'react';
import styled from 'styled-components';

const MAGIC_NUMBER = 400;

const fontSize = ({
	theme: { fontSizes },
	fontSize,
	minFontSize,
	maxFontSize,
	children,
}) => {
	if (fontSize) {
		return fontSizes[fontSize];
	}

	const size =
		typeof children === 'string'
			? Math.min(
					Math.max((1 / children.length) * MAGIC_NUMBER, minFontSize),
					maxFontSize
			  )
			: 8;
	return `${size}vmax`;
};

const HeadingStyle = styled.h2`
	max-width: 90vw;
	font-size: ${fontSize};
	/* TODO */
	font-weight: ${props => (props.huge ? 'bold' : 'normal')};
	line-height: 1.1;
	text-align: center;
`;

const Heading = props => {
	return <HeadingStyle {...props} />;
};

Heading.defaultProps = {
	minFontSize: 6,
	maxFontSize: 15,
};

export default Heading;
