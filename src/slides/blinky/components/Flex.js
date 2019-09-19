import styled from 'styled-components';
import Box from './Box';

/**
 * Responsive Flexbox container, based on the `Box` component but has `display: flex` by default.
 */
export const Flex = styled(Box)({
	display: 'flex'
});

export default Flex;
