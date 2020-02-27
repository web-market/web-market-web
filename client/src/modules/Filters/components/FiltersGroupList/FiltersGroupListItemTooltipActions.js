import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import TooltipAction from '../../../../baseComponents/TooltipAction';
import { pencil, trash } from '../../../../icons';
import classes from './styles/index.scss';

const FiltersGroupListItemTooltipActions = (
	{
		id,
		handleFilterEdit,
		handleFilterDelete
	}
) => {
	const actions = useMemo(() => {
		return [
			{
				name: '!!Редактировать',
				icon: pencil,
				iconClass: '',
				action: () => handleFilterEdit(id)
			},
			{
				name: '!!Удалить',
				icon: trash,
				iconClass: classes.filtersListItemTooltipActions_deleteIcon,
				action: () => handleFilterDelete(id)
			}
		];
	}, [id, handleFilterDelete, handleFilterEdit]);

	return (
		<TooltipAction
			className={classes.filtersListItemTooltipActions}
			actionList={actions}
		/>
	);
};

FiltersGroupListItemTooltipActions.propTypes = {
	id: PropTypes.number,
	handleFilterEdit: PropTypes.func,
	handleFilterDelete: PropTypes.func
};

export default FiltersGroupListItemTooltipActions;
