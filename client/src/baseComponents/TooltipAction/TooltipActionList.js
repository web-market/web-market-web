import React from 'react';
import PropTypes from 'prop-types';

import { getUniqueKey } from '../../utils';
import TooltipActionListItem from './TooltipActionListItem';
import classes from './styles/index.scss';

const TooltipActionList = (
	{
		actionList,
		handleOnClick
	}
) => {
	return (
		<div
			onClick={handleOnClick}
			className={classes.tooltipActionList}
		>
			{
				actionList.map((actionItem, index) => {
					const key = getUniqueKey(actionItem.name, index);

					return (
						<TooltipActionListItem
							key={key}
							name={actionItem.name}
							icon={actionItem.icon}
							action={actionItem.action}
							iconClass={actionItem.iconClass}
						/>
					);
				})
			}
		</div>
	);
};

TooltipActionList.defaultProps = {
	actionList: []
};

TooltipActionList.propTypes = {
	actionList: PropTypes.array,
	handleOnClick: PropTypes.func
};

export default TooltipActionList;
