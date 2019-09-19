import React from 'react';
import { ThemeProvider } from 'styled-components';
import RootStyles from './components/RootStyles';
import DeckBase from './components/Deck';
import theme from './theme';

export const Deck = props => (
	<ThemeProvider theme={theme}>
		<>
			<RootStyles />
			<DeckBase {...props} />
		</>
	</ThemeProvider>
);

export { default as Stack } from 'stack-styled';
export { default as Center } from './layouts/Center';
export { default as CoverWayfair } from './layouts/CoverWayfair';
export { default as Primary } from './layouts/Primary';
export { default as Secondary } from './layouts/Secondary';
export { default as Takeaway } from './layouts/Takeaway';
export { default as Split } from './layouts/Split';
export { default as SplitWithHeading } from './layouts/SplitWithHeading';
export { default as Appear } from './components/Appear';
export { default as Box } from './components/Box';
export { default as Bar } from './components/Bar';
export { default as Code } from './components/Code';
export { default as Delay } from './components/Delay';
export { default as Flex } from './components/Flex';
export { default as Heading } from './components/Heading';
export { default as List } from './components/List';
export { default as Image } from './components/Image';
export { default as Video } from './components/Video';
export { default as Link } from './components/Link';
export { default as Title } from './components/Title';
export { default as Frame } from './components/Frame';
export { default as Rotate } from './components/Rotate';
