import React from 'react';
import PropTypes from 'prop-types';

import ClassNames from 'classnames';
import classes from './styles/index.scss';

const DropDownSpinner = (
	{
		width,
		height,
		className
	}
) => {
	const componentClassName = ClassNames(
		classes['dropDownSpinner_sk-chase'],
		className
	);

	return (
		<div
			style={{ width, height }}
			className={componentClassName}
		>
			<div className={classes['dropDownSpinner_sk-chase-dot']}></div>
			<div className={classes['dropDownSpinner_sk-chase-dot']}></div>
			<div className={classes['dropDownSpinner_sk-chase-dot']}></div>
			<div className={classes['dropDownSpinner_sk-chase-dot']}></div>
			<div className={classes['dropDownSpinner_sk-chase-dot']}></div>
			<div className={classes['dropDownSpinner_sk-chase-dot']}></div>
		</div>
	);
};

DropDownSpinner.defaultProps = {
	width: 15,
	height: 15
};

DropDownSpinner.propTypes = {
	height: PropTypes.number,
	width: PropTypes.number,
	className: PropTypes.string,
};

export default DropDownSpinner;
