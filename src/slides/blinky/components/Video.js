import styled from 'styled-components';
import Box from './Box';

export const Video = styled(Box)({
	display: 'block',
	objectFit: 'cover',
	filter: p => p.filter,
});

Video.defaultProps = {
	as: 'video',
};

export default Video;
