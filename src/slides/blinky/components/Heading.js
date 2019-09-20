import React from 'react';
import styled from 'styled-components';

const MAGIC_NUMBER = 1000;

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
			: minFontSize;
	return `${size}vmin`;
};

const HeadingStyle = styled.h2`
	max-width: 90vw;
	font-size: ${fontSize};
	font-weight: normal;
	line-height: 1.1;
	text-align: center;
`;

const Heading = props => {
	return <HeadingStyle {...props} />;
};

Heading.defaultProps = {
	minFontSize: 8,
	maxFontSize: 24,
};

export default Heading;
