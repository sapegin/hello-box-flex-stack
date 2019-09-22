import React from 'react';
import styled, { keyframes } from 'styled-components';
import Center from './Center';

const animation = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

const TakeawayStyle = styled(Center)`
	will-change: background-position;
	background: linear-gradient(270deg, #f90, #00d7ff);
	background-size: 400% 400%;
	animation: ${animation} 20s ease infinite;
`;

const Takeaway = ({ children }) => (
	<TakeawayStyle color="background">{children}</TakeawayStyle>
);

export default Takeaway;
