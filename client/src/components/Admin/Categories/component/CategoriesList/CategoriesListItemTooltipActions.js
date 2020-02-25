import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import TooltipAction from '../../../../../baseComponents/TooltipAction';
import { pencil, trash } from '../../../../../icons';
import classes from './styles/index.scss';

const CategoriesListItemTooltipActions = (
	{
		id,
		handleEditCategory,
		handleDeleteCategory
	}
) => {
	const actions = useMemo(() => {
		return [
			{
				name: '!!Удалить',
				icon: trash,
				iconClass: classes.categoriesListItemTooltipActions_deleteIcon,
				action: () => handleDeleteCategory(id)
			},
			{
				name: '!!Редактировать',
				icon: pencil,
				iconClass: '',
				action: () => handleEditCategory(id)
			},
		];
	}, [id, handleDeleteCategory, handleEditCategory]);

	return (
		<TooltipAction
			className={classes.categoriesListItemTooltipActions}
			actionList={actions}
		/>
	);
};

CategoriesListItemTooltipActions.propTypes = {
	id: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	handleEditCategory: PropTypes.func,
	handleDeleteCategory: PropTypes.func
};

export default CategoriesListItemTooltipActions;
