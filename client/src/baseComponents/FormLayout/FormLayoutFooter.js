import React from 'react';
import PropTypes from 'prop-types';

import PaddingBox from '../PaddingBox';
import classes from './style/index.scss';

const FormLayoutFooter = ({ children }) => {
	return (
		<PaddingBox
			vrTiny
			hrSmall
			className={classes.formLayoutFooter}
		>
			{ children }
		</PaddingBox>
	);
};

FormLayoutFooter.propTypes = {
	children: PropTypes.object
};

export { FormLayoutFooter };
