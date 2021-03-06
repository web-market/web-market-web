import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import OverlayPoint from '../OverlayPoint';
import { Icon } from '../Icon/Icon';
import Badge from '../Badge';
import { exclamation } from '../../icons';
import ClassNames from 'classnames';
import classes from './styles/index.scss';

const Tooltip = (
	{
		icon,
		type,
		message,
		tooltip,
		position,
		tooltipIconClassName: iconClassName,
		tooltipClassName
	}
) => {
	const [show, setShow] = useState(false);
	const tooltipRef = useRef(null);

	const componentClassName = ClassNames(
		classes.tooltip,
		tooltipClassName
	);

	const tooltipIconClassname = ClassNames(
		iconClassName,
		{
			[classes.tooltip_defaultIcon__danger]: type === 'danger'
		},
		classes.tooltip_defaultIcon,
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
			className={tooltipIconClassname}
		/>
	);

	return (
		<div
			ref={tooltipRef}
			onClick={handleTooltipEnter}
			className={componentClassName}
		>
			{tooltip || defaultContent}
			{
				show && (
					<OverlayPoint
						position={position}
						componentRef={tooltipRef.current}
						onClose={handleTooltipLeave}
						render={() => <Badge type={type} message={message} />}
					/>
				)
			}
		</div>
	);
};

Tooltip.defaultProps = {
	icon: exclamation,
	position: 'top-right'
};

Tooltip.propTypes = {
	icon: PropTypes.string,
	message: PropTypes.any,
	tooltip: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.object
	]),
	type: PropTypes.string,
	position: PropTypes.string,
	tooltipClassName: PropTypes.string,
	tooltipIconClassName: PropTypes.string
};

export { Tooltip };
