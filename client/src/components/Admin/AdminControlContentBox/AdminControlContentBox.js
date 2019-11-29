import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import classes from './styles/index.scss';

const AdminControlContentBox = ({ children, className, margin }) => {
	const componentClass = classNames(
		classes.adminControlContentBox,
		{
			[classes.adminControlContentBox_large]: margin === 'large',
		},
		className
	);

	return (
		<div className={componentClass}>{children}</div>
	);
};

AdminControlContentBox.defaultProps = {
	className: '',
	margin: ''
};

AdminControlContentBox.propTypes = {
	className: PropTypes.string,
	margin: PropTypes.string
};

export { AdminControlContentBox };
