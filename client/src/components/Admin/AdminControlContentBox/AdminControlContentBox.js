import React from 'react';
import PropTypes from 'prop-types';

import MarginBox from '../../../baseComponents/MarginBox';

import classNames from 'classnames';
import classes from './styles/index.scss';

const AdminControlContentBox = ({ children, className, margin }) => {
	const componentClass = classNames(
		classes.adminControlContentBox,
		className
	);

	return (
		<MarginBox {...margin}>
			<div className={componentClass}>{children}</div>
		</MarginBox>
	);
};

AdminControlContentBox.defaultProps = {
	className: '',
	margin: {}
};

AdminControlContentBox.propTypes = {
	className: PropTypes.string,
	margin: PropTypes.object
};

export { AdminControlContentBox };
