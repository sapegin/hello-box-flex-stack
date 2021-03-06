import React from 'react';
import Flex from '../Flex';
import Stack from '../Stack';
import styled from 'styled-components';
import Macro from 'macro-components';

const CardBase = styled(Flex)({
	listStyle: 'none',
});

CardBase.defaultProps = {
	bg: 'bg',
	border: 'thin',
	borderColor: 'grey.2',
	borderRadius: 'base',
	flexDirection: 'column',
};

const Cover = ({ children }) => children;
const Body = ({ children }) => <div>{children}</div>;
const Footer = ({ children }) => <div>{children}</div>;

const Card = Macro({ Cover, Body, Footer })(
	({ Cover, Body, Footer }, props) => (
		<CardBase {...props}>
			{Cover}
			<Stack flexGrow={1} p={4} gridGap={4} alignContent="space-between">
				{Body}
				{Footer}
			</Stack>
		</CardBase>
	)
);

export default Card;
