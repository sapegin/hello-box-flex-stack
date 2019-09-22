import styled from 'styled-components';

const Slide = styled.div(p => ({
	...p.theme.styles.slide,
	backgroundColor: p.theme.colors.background,
	color: p.theme.colors.base,
	overflow: 'hidden',
	position: 'absolute',
	top: 0,
	left: 0,
	bottom: 0,
	right: 0,
	willChange: 'opacity',
	'.fade-enter &': {
		opacity: 0,
		zIndex: 1,
	},
	'.fade-enter.fade-enter-active &': {
		opacity: 1,
		transition: 'opacity 0.75s ease-in',
	},
}));

export default Slide;
