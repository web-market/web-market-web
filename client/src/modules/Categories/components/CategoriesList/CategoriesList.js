import React, { useContext, useEffect } from 'react';

import { CategoriesContext } from '../../store';

import AdminControlContentBox from '../../../../components/AdminControlContentBox';
import CategoriesListItem from './CategoriesListItem';

import classes from './styles/index.scss';
import PendingCloak from '../../../../baseComponents/PendingCloak';
import { getUniqueKey } from '../../../../utils';
import { MODALS } from '../../consts';
import { CategoriesModalsContext } from '../CategoriesModalsProvider';

const CategoriesList = () => {
	const { getCategoriesList, isPending, categories } = useContext(CategoriesContext);
	const { openModal } = useContext(CategoriesModalsContext);

	useEffect(() => {
		getCategoriesList();
	}, []);

	const handleDeleteCategory = (id) => {
		openModal(MODALS.DELETE_CATEGORY_MODAL, { id });
	};

	const handleEditCategory = (id) => {
		openModal(MODALS.EDIT_CATEGORY_MODAL, { id });
	};

	return (
		<AdminControlContentBox
			margin={{ large: true }}
			className={classes.category_list}
		>
			{isPending && (<PendingCloak />)}
			{
				categories.map((category, index) => {
					const key = getUniqueKey(category.name, index);

					return (
						<CategoriesListItem
							key={key}
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
