import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import TooltipAction from '../../../../../baseComponents/TooltipAction';
import { pencil, trash } from '../../../../../icons';
import classes from './styles/index.scss';

const FiltersListItemTooltipActions = (
	{
		id,
		handleFilterEdit,
		handleDeleteEdit
	}
) => {
	const actions = useMemo(() => {
		return [
			{
				name: '!!Удалить',
				icon: trash,
				iconClass: classes.filtersListItemTooltipActions_deleteIcon,
				action: () => handleDeleteEdit(id)
			},
			{
				name: '!!Редактировать',
				icon: pencil,
				iconClass: '',
				action: () => handleFilterEdit(id)
			},
		];
	}, [id, handleDeleteEdit, handleFilterEdit]);

	return (
		<TooltipAction actionList={actions} />
	);
};

FiltersListItemTooltipActions.propTypes = {
	id: PropTypes.number,
	handleFilterEdit: PropTypes.func,
	handleDeleteEdit: PropTypes.func
};

export default FiltersListItemTooltipActions;
