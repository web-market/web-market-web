import React, { useContext, useEffect } from 'react';
import { CategoriesContext } from '../../store';

import AdminControlContentBox from '../../../AdminControlContentBox';
import CategoriesListItem from './CategoriesListItem';

import classes from './styles/index.scss';
import PendingCloak from '../../../../../baseComponents/PendingCloak';

const CategoriesList = () => {
	const { deleteCategory, getCategoriesList, isPending, categories } = useContext(CategoriesContext);

	useEffect(() => {
		getCategoriesList();
	}, []);

	const handleDeleteCategory = (id) => {
		deleteCategory(id)
			.then(() => getCategoriesList());
	};

	return (
		<AdminControlContentBox
			margin={{ large: true }}
			className={classes.category_list}
		>
			{isPending && (<PendingCloak />)}
			{
				categories.map((category, index) => {
					const key = `${category.name}-${index}`;

					return (
						<CategoriesListItem
							key={key}
							category={category}
							handleDeleteCategory={handleDeleteCategory}
						/>
					);
				})

			}
		</AdminControlContentBox>
	);
};

export { CategoriesList };
