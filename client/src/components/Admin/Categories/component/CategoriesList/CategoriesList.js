import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import AdminControlContentBox from '../../../AdminControlContentBox';
import CategoriesListItem from './CategoriesListItem';

import classes from './styles/index.scss';
import PendingCloak from '../../../../../baseComponents/PendingCloak';
import { CategoriesContext } from '../../store';

const CategoriesList = (
	{
		categories,
		isPending
	}
) => {
	const { deleteCategory, getCategoriesList } = useContext(CategoriesContext);

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

CategoriesList.defaultProps = {};

CategoriesList.propTypes = {
	categories: PropTypes.array
};

export { CategoriesList };
