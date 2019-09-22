import React from 'react';
import styled from 'styled-components';
import Box from './Box';
import { useDeck } from '../context';
import { previous, next } from '../navigation';

const Nav = styled(Box)`
	transition: opacity ease-out 0.5s;
	> * + * {
		margin-left: calc(1rem + 1vmin);
	}
	html:fullscreen & {
		opacity: 0;
	}
	html:-webkit-full-screen & {
		opacity: 0;
	}
`;

const Button = styled.button`
	display: inline-block;
	padding: 0;
	background-color: transparent;
	border-width: calc(1rem + 3vmin);
	border-color: transparent;
	cursor: pointer;
	transition: border ease-out 0.15s;
`;
const PreviousButton = styled(Button)`
	border-left-width: 0;
	border-right-width: calc(1rem + 4vmin);
	border-right-color: ${p => p.theme.colors.ui};
	&:hover,
	&:focus,
	&:active {
		outline: 0;
		border-right-color: ${p => p.theme.colors.uiHover};
	}
`;
const NextButton = styled(Button)`
	border-right-width: 0;
	border-left-width: calc(1rem + 4vmin);
	border-left-color: ${p => p.theme.colors.ui};
	&:hover,
	&:focus,
	&:active {
		outline: 0;
		border-left-color: ${p => p.theme.colors.uiHover};
	}
`;

export default function Navigation() {
	const context = useDeck();
	return (
		<Nav as="nav" position="fixed" zIndex={2} bottom={0} right={0} p="m">
			<PreviousButton onClick={() => previous(context)} aria-label="Previous" />
			<NextButton onClick={() => next(context)} aria-label="Next" />
		</Nav>
	);
}
