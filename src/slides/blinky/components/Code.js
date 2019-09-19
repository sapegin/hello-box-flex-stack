import React from 'react';
import styled from 'styled-components';
import Prism from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-css';
import Box from './Box';
import codeTheme from '../codeTheme';

const Container = styled(Box)(codeTheme);

const Error = ({ children }) => (
	<pre style={{ color: 'firebrick' }}>Code: {children}</pre>
);

export default function Code({ children, lang, inline, ...props }) {
	if (typeof children !== 'string') {
		return <Error>`children` prop must be a string</Error>;
	}
	if (!Prism.languages[lang]) {
		return <Error>`{lang}` language not supported</Error>;
	}

	const html = Prism.highlight(
		children.trim().replace(/\t/, '  '),
		Prism.languages[lang],
		lang
	);
	return (
		<Container
			{...props}
			as={inline ? 'code' : 'pre'}
			dangerouslySetInnerHTML={{ __html: html }}
		/>
	);
}

Code.defaultProps = {
	m: 0,
	p: 0,
};
