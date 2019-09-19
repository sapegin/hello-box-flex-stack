import React from 'react';
import PropTypes from 'prop-types';
import Stack from '../../core/Stack';
import Flex from '../../core/Flex';
import Heading from '../../core/Heading';
import Text from '../../core/Text';

const Feature = ({ as, children }) => (
	<Stack gridGap={2} as={as}>
		{children}
	</Stack>
);

Feature.Icon = ({ children }) => (
	<Flex justifyContent="center" color="secondary">
		{children}
	</Flex>
);

Feature.Heading = ({ children }) => (
	<Heading as="h3" size="m" align="center">
		{children}
	</Heading>
);

Feature.Body = ({ children }) => <Text align="center">{children}</Text>;

Feature.propTypes = {
	as: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default Feature;
