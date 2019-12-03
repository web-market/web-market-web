import React from 'react';
import PropTypes from 'prop-types';

import PaddingBox from '../PaddingBox';
import classes from './style/index.scss';

const FormLayoutHeader = ({ title, padding }) => {
	return (
		<PaddingBox
			{...padding}
			className={classes.formLayoutHeader}
		>
			{ title }
		</PaddingBox>
	);
};

FormLayoutHeader.defaultProps = {
	padding: { small: true }
};

FormLayoutHeader.propTypes = {
	title: PropTypes.string,
	padding: PropTypes.object,
};

export { FormLayoutHeader };
