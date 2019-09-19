import styled from 'styled-components';
import Box from './Box';

const Title = styled(Box)`
	& + * {
		margin-top: ${p => p.theme.space.l} !important;
	}
	& + img {
		max-height: calc(100vh - 10rem);
	}
`;

Title.defaultProps = {
	as: 'h3',
	width: '100%',
	mt: 'l',
	mb: 0,
	fontSize: 'l',
	fontWeight: 'normal',
	lineHeight: 1.1,
	textAlign: 'center',
};

export default Title;
