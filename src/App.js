import React from 'react';
import ThemeProvider from './ThemeProvider';
import GlobalStyle from './styles';
import XRay from './xray';
import Routes from './components/app/Routes';

const App = () => (
	<ThemeProvider>
		<>
			<GlobalStyle />
			<XRay />
			<Routes />
		</>
	</ThemeProvider>
);

export default App;
