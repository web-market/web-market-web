import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import ClassNames from 'classnames';
import classes from './styles/index.scss';

const TooltipActionDefaultButton = forwardRef((
	{
		className,
		handleTooltipActionClick
	},
	ref
) => {
	const componentClassName = ClassNames(
		classes.tooltipAction,
		className
	);

	return (

		<div
			ref={ref}
			className={componentClassName}
			onClick={handleTooltipActionClick}
		>
			<div className={classes.tooltipAction_icon}></div>
		</div>
	);
});

TooltipActionDefaultButton.propTypes = {
	className: PropTypes.string,
	handleTooltipActionClick: PropTypes.func
};

export default TooltipActionDefaultButton;
