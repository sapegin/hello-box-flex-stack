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

export const Frame = styled(Box)`
	animation: ${responsive} 20s linear infinite;
	animation-play-state: ${p => (p.animate ? 'running' : 'paused')};
`;

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

export default Frame;
