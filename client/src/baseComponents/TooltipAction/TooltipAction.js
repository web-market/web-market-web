import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import OverlayPoint from '../OverlayPoint';
import TooltipActionList from './TooltipActionList';
import TooltipActionDefaultButton from './TooltipActionDefaultButton';

const TooltipAction = (
	{
		className,
		actionList,
		toolTipButtonOpen,
		toolTipButtonClose,
		handleTooltipClick
	}
) => {
	const [show, setShow] = useState(false);
	const tooltipActionRef = useRef(null);

	const handleTooltipActionClick = () => {
		setShow(!show);
		handleTooltipClick(!show);
	};

	return (
		<>
			{
				toolTipButtonClose && toolTipButtonOpen && (
					<div ref={tooltipActionRef}>
						{
							show && (
								<div
									onClick={handleTooltipActionClick}
								>
									{toolTipButtonOpen}
								</div>
							)
						}
						{
							!show && (
								<div
									onClick={handleTooltipActionClick}
								>
									{toolTipButtonClose}
								</div>
							)
						}
					</div>
				)
			}
			{
				!toolTipButtonClose && !toolTipButtonOpen && (
					<TooltipActionDefaultButton
						ref={tooltipActionRef}
						className={className}
						handleTooltipActionClick={handleTooltipActionClick}
					/>
				)
			}
			{
				show && (
					<OverlayPoint
						position="bottom-left-center"
						onClose={handleTooltipActionClick}
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

TooltipAction.defaultProps = {
	handleTooltipClick: () => {}
};

TooltipAction.propTypes = {
	className: PropTypes.string,
	handleTooltipClick: PropTypes.func,
	toolTipButtonOpen: PropTypes.object,
	toolTipButtonClose: PropTypes.object,
	actionList: PropTypes.array.isRequired
};

export { TooltipAction };
