import React from 'react';
import PaddingBox from '../PaddingBox';
import PropTypes from 'prop-types';

const FormLayoutItemGroup = ({ padding, children }) => {
	return (
		<PaddingBox {...padding}>
			{children}
		</PaddingBox>
	);
};

FormLayoutItemGroup.defaultProps = {
	padding: { small: true }
};

FormLayoutItemGroup.propTypes = {
	padding: PropTypes.object,
	children: PropTypes.array,
};

export { FormLayoutItemGroup };