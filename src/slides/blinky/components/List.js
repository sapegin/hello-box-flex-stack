import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Appear from './Appear';
import { style } from 'styled-system';

const columns = style({
	prop: 'columns',
	cssProperty: 'columns',
});

const columnGap = style({
	prop: 'columnGap',
	cssProperty: 'columnGap',
	key: 'space',
});

const Container = styled.ul(columns, columnGap);

export default function List({ appear, children, ...props }) {
	if (appear) {
		return (
			<Container {...props}>
				<Appear>{children}</Appear>
			</Container>
		);
	} else {
		return <Container {...props}>{children}</Container>;
	}
}

List.propTypes = {
	appear: PropTypes.bool,
	...columns.propTypes,
	...columnGap.propTypes,
};

List.defaultProps = {
	appear: true,
	columnGap: 'l',
};
