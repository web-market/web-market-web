import React from 'react';
import PropTypes from 'prop-types';

import classes from './style/index.scss';

const FormLayoutItem = ({ children }) => {
	return (
		<div className={classes.formLayoutItem}>{children}</div>
	);
};

FormLayoutItem.propTypes = {
	children: PropTypes.object
};

export { FormLayoutItem };
