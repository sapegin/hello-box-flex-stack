import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { useHotkeys } from 'react-hotkeys-hook';

const BoxStyle = createGlobalStyle`
	[class^="Box-sc-"] {
		outline: 2px solid rgba(42, 128, 0, 0.5) !important;
		outline-offset: -2px;
		background-color: rgba(42, 128, 0, 0.1);
	}
	`;

const FlexStyle = createGlobalStyle`
	[class*="Flex-sc-"] {
		outline: 2px solid rgba(53, 107, 255, 0.5) !important;
		outline-offset: -2px;

		> * {
			outline: 1px solid rgba(53, 107, 255, 0.3);
			outline-offset: -1px;
			background-color: rgba(53, 107, 255, 0.1);
		}
	}
	`;

const StackStyle = createGlobalStyle`
	[class^="Stack-sc-"] {
		outline: 2px solid rgba(199, 27, 0, 0.5) !important;
		outline-offset: -2px;

		> * {
			outline: 1px solid rgba(199, 27, 0, 0.3);
			outline-offset: -1px;
			background-color: rgba(199, 27, 0, 0.1);
		}
	}
`;

export default function XRay() {
	const [showBox, setShowBox] = useState(false);
	useHotkeys('b', () => setShowBox(value => !value));
	const [showFlex, setShowFlex] = useState(false);
	useHotkeys('f', () => setShowFlex(value => !value));
	const [showStack, setShowStack] = useState(false);
	useHotkeys('s', () => setShowStack(value => !value));
	return (
		<>
			{showBox && <BoxStyle />}
			{showFlex && <FlexStyle />}
			{showStack && <StackStyle />}
		</>
	);
}
