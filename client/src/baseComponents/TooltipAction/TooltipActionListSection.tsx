import React from 'react';
import PropTypes from 'prop-types';

import TooltipActionListItem from './TooltipActionListItem';

import { getUniqueKey } from '../../utils';
import classes from './styles/index.scss';
import ClassNames from 'classnames';

const TooltipActionListSection = (
	{
		actionList,
		handleOnClick,
		targetElementId
	}
) => {
	return (
		<div
			onClick={event => handleOnClick(event)}
			className={classes.tooltipActionListSection}
		>
			{
				actionList.map((actionItem, index) => {
					const key = getUniqueKey(actionItem.name, index);

                    const iconClassName = ClassNames(
                        {
                            [classes.tooltipActionListItem_icon__trash]: actionItem.icon.includes('ti-trash')
                        },
                        actionItem.iconClass
                    );

					return (
						<TooltipActionListItem
							key={key}
							name={actionItem.name}
							icon={actionItem.icon}
							action={actionItem.action}
							disabled={actionItem.disabled}
							iconClass={iconClassName}
							targetElementId={targetElementId}
						/>
					);
				})
			}
		</div>
	);
};

TooltipActionListSection.propTypes = {
	actionList: PropTypes.array,
	handleOnClick: PropTypes.func,
	targetElementId: PropTypes.number
};

export default TooltipActionListSection;
