import React from 'react';
import Flex from '../components/Flex';
import Box from '../components/Box';
import Wayfair from './Wayfair';

const CoverWayfair = props => (
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
		<Flex>
			<Box mr="auto">Artem Sapegin</Box>
			<Wayfair variation="white" width="15vw" />
		</Flex>
	</Flex>
);

export default CoverWayfair;
