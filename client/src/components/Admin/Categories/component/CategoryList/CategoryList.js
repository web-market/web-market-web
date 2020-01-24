import React from 'react';
import PropTypes from 'prop-types';

import AdminControlContentBox from '../../../AdminControlContentBox';
import CategoryListItem from './CategoryListItem';

import classes from './styles/index.scss';
import PendingCloak from '../../../../../baseComponents/PendingCloak';

const CategoryList = (
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
						<CategoryListItem
							key={key}
							category={category}
						/>
					);
				})

			}
		</AdminControlContentBox>
	);
};

CategoryList.defaultProps = {};

CategoryList.propTypes = {
	categories: PropTypes.array
};

export { CategoryList };
