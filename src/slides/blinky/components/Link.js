import styled from 'styled-components';

const Link = styled.a`
	color: ${p => p.theme.colors.link};

	&:focus {
		outline: 0.1em dashed;
		outline-offset: 0.1em;
	}

	:fullscreen & {
		text-decoration: none;
	}
	:-webkit-full-screen & {
		text-decoration: none;
	}
`;

export default Link;
