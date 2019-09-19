import styled from 'styled-components';
import Box from './Box';

export const Image = styled(Box)({
	display: 'block',
});

Image.defaultProps = {
	as: 'img',
};

export default Image;
