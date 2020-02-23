import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import TooltipAction from '../../../../../baseComponents/TooltipAction';
import { pencil, trash } from '../../../../../icons';
import classes from './styles/index.scss';

const FiltersListItemTooltipActions = (
	{
		id,
		handleFilterEdit,
		handleFilterDelete
	}
) => {
	const actions = useMemo(() => {
		return [
			{
				name: '!!Удалить',
				icon: trash,
				iconClass: classes.filtersListItemTooltipActions_deleteIcon,
				action: () => handleFilterDelete(id)
			},
			{
				name: '!!Редактировать',
				icon: pencil,
				iconClass: '',
				action: () => handleFilterEdit(id)
			},
		];
	}, [id, handleFilterDelete, handleFilterEdit]);

	return (
		<TooltipAction actionList={actions} />
	);
};

FiltersListItemTooltipActions.propTypes = {
	id: PropTypes.number,
	handleFilterEdit: PropTypes.func,
	handleFilterDelete: PropTypes.func
};

export default FiltersListItemTooltipActions;