import React, { useRef, useContext } from 'react';
import PropTypes from 'prop-types';

import { TooltipGlobalContext } from '../../App/store/TooltipGlobalContext';

import Icon from '../Icon';
import Badge from '../Badge';

import { exclamationCircle } from '../../icons';

import classes from './styles/index.scss';

const Tooltip = ({ icon, message, tooltip }) => {
	const { createTooltip, destroyTooltip } = useContext(TooltipGlobalContext);
	const tooltipContentRef = useRef(null);
	const tipMessageComponentRef = useRef(null);

	const tipMessageComponent = (<Badge ref={tipMessageComponentRef} message={message} />);

	const handleTooltipEnter = () => {
		createTooltip(tooltipContentRef.current, tipMessageComponent);
	};

	const handleTooltipLeave = () => {
		destroyTooltip(tipMessageComponent);
	};

	const defaultContent = (
		<Icon
			icon={icon}
			className={classes.tooltip_defaultContent}
		/>
	);

	return (
		<div
			ref={tooltipContentRef}
			onMouseEnter={handleTooltipEnter}
			onMouseLeave={handleTooltipLeave}
			className={classes.tooltip}
		>
			{tooltip || defaultContent}
		</div>
	);
};

Tooltip.defaultProps = {
	icon: exclamationCircle,
};

Tooltip.propTypes = {
	icon: PropTypes.string,
	message: PropTypes.string,
	tooltip: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.object
	])
};

export { Tooltip };
