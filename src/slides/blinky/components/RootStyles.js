import { createGlobalStyle } from 'styled-components';

const RootStyles = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
		color: ${p => p.theme.colors.base};
		background: ${p => p.theme.colors.background};
		font-feature-settings: kern, pnum, common-ligatures contextual historical-ligatures;
		-webkit-font-kerning: normal;
		font-kerning: normal;
		font-variant-numeric: proportional-nums;
		font-variant-ligatures: common-ligatures contextual historical-ligatures;
	}
`;

export default RootStyles;
