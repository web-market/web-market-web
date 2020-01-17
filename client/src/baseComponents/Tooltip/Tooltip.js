import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import LayoutPoint from '../LayoutPoint';
import Icon from '../Icon';
import Badge from '../Badge';

import { exclamationCircle } from '../../icons';

import classes from './styles/index.scss';

const Tooltip = ({ icon, message, tooltip, position }) => {
	const [show, setShow] = useState(false);
	const tooltipRef = useRef(null);

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
			ref={tooltipRef}
			onMouseEnter={handleTooltipEnter}
			onMouseLeave={handleTooltipLeave}
			className={classes.tooltip}
		>
			{tooltip || defaultContent}
			{
				show && (
					<LayoutPoint
						position={position}
						componentRef={tooltipRef.current}
						render={() => <Badge message={message} />}
					/>
				)
			}
		</div>
	);
};

Tooltip.defaultProps = {
	icon: exclamationCircle,
	position: 'top-right'
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
