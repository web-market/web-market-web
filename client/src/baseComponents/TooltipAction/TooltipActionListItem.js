import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import ClassNames from 'classnames';
import classes from './styles/index.scss';

const TooltipActionListItem = (
	{
		name,
		icon,
		iconClass,
		targetElementId,
		action: handleClickFromProps,
	}
) => {
	const iconClassName = ClassNames(
		classes.tooltipActionListItem_icon,
		iconClass
	);

	return (
		<div
			className={classes.tooltipActionListItem}
			onClick={() => handleClickFromProps(targetElementId)}
		>
			<Icon
				className={iconClassName}
				icon={icon}
			/>
			{ name }
		</div>
	);
};

TooltipActionListItem.propTypes = {
	name: PropTypes.string,
	icon: PropTypes.string,
	action: PropTypes.func,
	iconClass: PropTypes.string,
	targetElementId: PropTypes.number
};

export default TooltipActionListItem;
