import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import Box from './Box';

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Rotate = styled(Box)`
	animation: ${rotation} ${p => p.duration} linear infinite;
`;

Rotate.defaultProps = {
	duration: '10s',
};

Rotate.propTypes = {
	duration: PropTypes.string,
};

export default Rotate;
