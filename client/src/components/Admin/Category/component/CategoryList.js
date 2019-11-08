import React from 'react';

import PaddingBox from '../../../../baseComponents/PaddingBox';
import PropTypes from 'prop-types';

import { isNullOrUndefined } from '../../../../utils';

import classes from '../styles/index.scss';

const CategoryList = ({
						categories
					}) => {
	const getSubCategory = (categoryList) => {
		return (
			<div>
				{categoryList.name}
				{
					categoryList.childCategories.map((category) => {
						return (
							<div style={{ marginLeft: 20 }}>
								{getSingleCategory(category)}
							</div>
						);
					})
				}
			</div>
		);
	};

	const getSingleCategory = (categoryList) => {
		const hasChild = !isNullOrUndefined(categoryList.childCategories)
							&& categoryList.childCategories.length !== 0;

		return hasChild
			? getSubCategory(categoryList)
			: categoryList.name;
	};

	const getCategories = () => {
		if (isNullOrUndefined(categories)) return;

		return categories.map(category => {
			return (
				<div>
					{getSingleCategory(category)}
				</div>
			);
		});
	};

	return (
		<PaddingBox className={classes.category_list}>
			{getCategories()}
		</PaddingBox>
	);
};

CategoryList.defaultProps = {};

CategoryList.propTypes = {
	categories: PropTypes.array
};

export { CategoryList };
