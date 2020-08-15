import styled from 'styled-components';
import Box from './Box';

/**
 * Responsive Grid container, based on the `Box` component but has `display: grid` by default.
 */
export const Grid = styled(Box)({
	display: 'grid',
});

export default Grid;
