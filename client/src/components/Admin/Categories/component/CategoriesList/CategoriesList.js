import React from 'react';
import PropTypes from 'prop-types';

import AdminControlContentBox from '../../../AdminControlContentBox';
import CategoriesListItem from './CategoriesListItem';

import classes from './styles/index.scss';
import PendingCloak from '../../../../../baseComponents/PendingCloak';

const CategoriesList = (
	{
		categories,
		isPending
	}
) => {
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
