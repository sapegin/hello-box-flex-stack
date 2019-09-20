import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import Box from './Box';

const responsive = keyframes`
  from {
    width: 100vw;
  }

  50% {
    width: 400px;
  }
`;

// KINDAHACK: Show invisible bar on top of a fullscreen iframe to allow moving
// the focus back to the presentation
const GiveMeFocusBackBar = styled(Box)`
	&:hover,
	&:active {
		cursor: grab;
		background: ${p => p.theme.colors.primary};
	}
	&:active {
		cursor: grabbing;
	}
`;

const IFrame = styled(Box)`
	animation: ${responsive} 20s linear infinite;
	animation-play-state: ${p => (p.animate ? 'running' : 'paused')};
`;

export default function Frame(props) {
	return (
		<>
			<GiveMeFocusBackBar
				position="fixed"
				top={0}
				left={0}
				right={0}
				height={10}
			/>
			<IFrame {...props} />
		</>
	);
}

Frame.defaultProps = {
	as: 'iframe',
	display: 'block',
	width: '100vw',
	height: '100vh',
	ml: 'auto',
	mr: 'auto',
	border: 0,
};

Frame.propTypes = {
	src: PropTypes.string.isRequired,
	animate: PropTypes.bool,
};
