import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import classes from './styles/index.scss';
import OverlayPoint from '../OverlayPoint';
import TooltipActionList from './TooltipActionList';

const TooltipAction = (
	{
		actionList
	}
) => {
	const [show, setShow] = useState(false);
	const tooltipActionRef = useRef(null);

	const handleTooltipActionClick = () => {
		setShow(!show);
	};

	return (
		<>
			<div
				ref={tooltipActionRef}
				onClick={handleTooltipActionClick}
				className={classes.tooltipAction}
			>
				<div className={classes.tooltipAction_icon}></div>
			</div>
			{
				show && (
					<OverlayPoint
						position="bottom-left"
						componentRef={tooltipActionRef.current}
						render={() => <TooltipActionList actionList={actionList} />}
					/>
				)
			}
		</>
	);
};

TooltipAction.propTypes = {
	actionList: PropTypes.array
};

export { TooltipAction };
