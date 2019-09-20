import React from 'react';
import PropTypes from 'prop-types';
import useSteps from '../hooks/use-steps';

export const Appear = ({ children }) => {
	const childrenArray = React.Children.toArray(children);
	const currentStep = useSteps(childrenArray.length);
	return (
		<>
			{childrenArray.map((child, index) =>
				React.cloneElement(child, {
					style: {
						...child.props.style,
						willChange: 'opacity',
						transition: 'opacity 3s ease-out',
						opacity: index < currentStep ? 1 : 0,
					},
				})
			)}
		</>
	);
};

Appear.propTypes = {
	children: PropTypes.node,
};

export default Appear;
