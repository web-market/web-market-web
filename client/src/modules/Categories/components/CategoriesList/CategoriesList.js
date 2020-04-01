import React, { useContext, useEffect, useMemo, useCallback } from 'react';

import PendingCloak from '../../../../baseComponents/PendingCloak';
import AdminControlContentBox from '../../../../components/AdminControlContentBox';
import CategoriesListItem from './CategoriesListItem';

import { getUniqueKey } from '../../../../utils';
import classes from './styles/index.scss';
import { MODALS, CategoriesContext, CategoriesModalsContext } from '../../consts';
import { pencil, trash } from '../../../../icons';

const CategoriesList = () => {
	const { getCategoriesList, isPending, categories } = useContext(CategoriesContext);
	const { openModal } = useContext(CategoriesModalsContext);

	useEffect(() => {
		getCategoriesList();
	}, []);

	const handleDeleteCategory = useCallback((id) => {
		openModal(MODALS.DELETE_CATEGORY_MODAL, { id });
	}, [openModal]);

	const handleEditCategory = useCallback((id) => {
		openModal(MODALS.EDIT_CATEGORY_MODAL, { id });
	}, [openModal]);

	const actions = useMemo(() => {
		return [
			{
				name: '!!Редактировать',
				icon: pencil,
				iconClass: '',
				action: (id) => handleEditCategory(id)
			},
			{
				name: '!!Удалить',
				icon: trash,
				iconClass: classes.categoriesListItemTooltipActions_deleteIcon,
				action: (id) => handleDeleteCategory(id)
			}
		];
	}, [handleDeleteCategory, handleEditCategory]);

	return (
		<AdminControlContentBox className={classes.category_list}>
			{isPending && (<PendingCloak />)}
			{
				categories.map((category, index) => {
					const key = getUniqueKey(category.name, index);

					return (
						<CategoriesListItem
							key={key}
							actions={actions}
							category={category}
							handleDeleteCategory={handleDeleteCategory}
							handleEditCategory={handleEditCategory}
						/>
					);
				})

			}
		</AdminControlContentBox>
	);
};

export { CategoriesList };
