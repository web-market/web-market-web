import React, { forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button/Button';

import { moreAlt } from '../../icons';
import ClassNames from 'classnames';
import classes from './styles/index.scss';

type TooltipActionDefaultButtonProps = {
    className?: string;
    handleTooltipActionClick: (event: {}) => void;
};

const TooltipActionDefaultButton = forwardRef<HTMLDivElement, TooltipActionDefaultButtonProps>((
	{
		className,
		handleTooltipActionClick,
	},
    ref
) => {
	const componentClassName = ClassNames(
		classes.tooltipActionDefaultButton,
		className
	);

	return (
		<div
			ref={ref}
			onClick={event => handleTooltipActionClick(event)}
		>
			<Button
				noBorder
				size="small"
				transparent
				icon={moreAlt}
				className={componentClassName}
			/>
		</div>
	);
});

TooltipActionDefaultButton.propTypes = {
	className: PropTypes.string,
	handleTooltipActionClick: PropTypes.func
};

export default TooltipActionDefaultButton;
