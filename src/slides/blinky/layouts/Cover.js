import React from 'react';
import Flex from '../components/Flex';
import Box from '../components/Box';
import Omio from './Omio';

const Cover = props => (
	<Flex
		bg="primary"
		color="background"
		width="100vw"
		height="100vh"
		px="l"
		py="m"
		flexDirection="column"
	>
		<Flex justifyContent="center" alignItems="center" flexGrow={1}>
			{props.children}
		</Flex>
		<Flex alignItems="center">
			<Box mr="auto">Artem Sapegin</Box>
			<Omio variation="white" width="10vw" />
		</Flex>
	</Flex>
);

export default Cover;
