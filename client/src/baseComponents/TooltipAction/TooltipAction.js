import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import OverlayPoint from '../OverlayPoint';
import TooltipActionList from './TooltipActionList';

import ClassNames from 'classnames';
import classes from './styles/index.scss';

const TooltipAction = (
	{
		className,
		actionList
	}
) => {
	const [show, setShow] = useState(false);
	const tooltipActionRef = useRef(null);

	const handleTooltipActionClick = () => {
		setShow(!show);
	};

	const componentClassName = ClassNames(
		classes.tooltipAction,
		className
	);

	return (
		<>
			<div
				ref={tooltipActionRef}
				onClick={handleTooltipActionClick}
				className={componentClassName}
			>
				<div className={classes.tooltipAction_icon}></div>
			</div>
			{
				show && (
					<OverlayPoint
						onClose={handleTooltipActionClick}
						position="bottom-left"
						componentRef={tooltipActionRef.current}
						render={() => {
								return (
									<TooltipActionList
										handleOnClick={handleTooltipActionClick}
										actionList={actionList}
									/>
								);
							}
						}
					/>
				)
			}
		</>
	);
};

TooltipAction.propTypes = {
	className: PropTypes.string,
	actionList: PropTypes.array
};

export { TooltipAction };
