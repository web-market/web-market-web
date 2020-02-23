import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import classes from './styles/index.scss';

const TooltipActionListItem = (
	{
		name,
		icon,
		iconClass,
		action: handleClick,
	}
) => {

	return (
		<div
			className={classes.tooltipActionListItem}
			onClick={handleClick}
		>
			<Icon
				className={iconClass}
				icon={icon}
			/> { name }
		</div>
	);
};

TooltipActionListItem.propTypes = {
	name: PropTypes.string,
	icon: PropTypes.string,
	action: PropTypes.func,
	iconClass: PropTypes.string
};

export default TooltipActionListItem;
