import React from 'react';
import PaddingBox from '../PaddingBox';
import PropTypes from 'prop-types';

const List = (
	{
		padding,
		children
	}
) => {
	return (
		<PaddingBox {...padding}>
			{children}
		</PaddingBox>
	);
};

List.defaultProps = {
	padding: { small: true }
};

List.propTypes = {
	padding: PropTypes.object
};

export { List };
