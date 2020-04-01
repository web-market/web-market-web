import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../baseComponents/Button';
import classes from './styles/index.scss';

import { FiltersContext } from '../../consts';
import TooltipAction from '../../../../baseComponents/TooltipAction';

const FiltersListItemRightSide = (
	{
		id,
		actions,
		addFilterGroupValuesIcon,
		showFilterGroupValuesIcon,
		handleShowFilterGroupValues,
		handleShoAddFilterGroupValueForm
	}
) => {
	const { hasFilterGroupValues } = useContext(FiltersContext);

	return (
		<div className={classes.filtersGroupListItem_right}>
			{
				hasFilterGroupValues[id] && (
					<Button
						size="small"
						type="secondary"
						icon={showFilterGroupValuesIcon}
						actionHandler={handleShowFilterGroupValues}
					/>
				)
			}
			<Button
				size="small"
				type="secondary"
				icon={addFilterGroupValuesIcon}
				actionHandler={handleShoAddFilterGroupValueForm}
				className={classes.filtersGroupListItem_addFilterGroupValueButton}
			/>
			<TooltipAction
				targetElementId={id}
				actionList={actions}
				className={classes.filtersGroupListItemTooltipActions}
			/>
		</div>
	);
};

FiltersListItemRightSide.propTypes = {
	id: PropTypes.number,
	actions: PropTypes.array,
	addFilterGroupValuesIcon: PropTypes.string,
	showFilterGroupValuesIcon: PropTypes.string,
	handleShowFilterGroupValues: PropTypes.func,
	handleShoAddFilterGroupValueForm: PropTypes.func,
};

export default FiltersListItemRightSide;
