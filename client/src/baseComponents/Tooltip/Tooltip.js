import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import Badge from '../Badge';

import { exclamationCircle } from '../../icons';

import classes from './styles/index.scss';

const Tooltip = ({ icon, message, tooltip, position }) => {
	const [show, setShow] = useState(false);
	const tooltipContentRef = useRef(null);
	const tooltipMessageComponentRef = useRef(null);

	const tooltipContent = (
		<Badge ref={tooltipMessageComponentRef} message={message} />
	);

	const handleTooltipEnter = () => {
		setShow(!show);
	};

	const handleTooltipLeave = () => {
		setShow(!show);
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
	position: 'top-center'
};

Tooltip.propTypes = {
	icon: PropTypes.string,
	message: PropTypes.string,
	tooltip: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.object
	]),
	position: PropTypes.string
};

export { Tooltip };
