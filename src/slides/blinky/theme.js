import {
	space,
	font,
	fontSizes,
	bgColor,
	baseColor,
	darkColor,
	primaryColor,
	secondaryColor,
} from './tokens';

export default {
	space,
	fontSizes,
	colors: {
		base: baseColor,
		background: bgColor,
		link: baseColor,
		primary: primaryColor,
		secondary: secondaryColor,
		pre: darkColor,
		code: darkColor,
	},
	styles: {
		slide: {
			fontFamily: font,
			fontSize: fontSizes.m,
			width: '100vw',
			height: '100vh',
			overflow: 'hidden',
			justifyContent: 'flex-start',
			alignItems: 'flex-start',
			'& > *:not(div)': {
				paddingLeft: `${space.l} !important`,
				paddingRight: `${space.l} !important`,
			},
			'& > ul, & > li': {
				paddingLeft: '6vmax !important',
			},
			'& > iframe': {
				paddingLeft: '0 !important',
				paddingRight: '0 !important',
			},
			'p pre, li pre': {
				display: 'inline-block',
				fontSize: fontSizes.m,
				lineHeight: 1.2,
			},
			pre: {
				textAlign: 'left',
				fontSize: fontSizes.s,
				lineHeight: '1.3',
			},
			img: {
				maxWidth: '95vw',
				maxHeight: '92vh',
			},
			li: {
				fontSize: fontSizes.m,
				marginBottom: space.s,
			},
		},
	},
};
