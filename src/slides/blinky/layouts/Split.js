import React from 'react';
import Flex from '../components/Flex';
import Box from '../components/Box';

const Split = ({ children }) => {
	const kids = React.Children.toArray(children);
	const half = kids.length / 2;
	const left = kids.slice(0, half);
	const right = kids.slice(half);

	return (
		<Flex width="100vw" height="100vh">
			<Box width={1 / 2} pr={3}>
				{left}
			</Box>
			<Box width={1 / 2} pl={3}>
				{right}
			</Box>
		</Flex>
	);
};

export default Split;
