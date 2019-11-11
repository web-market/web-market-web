import React from 'react';
import PropTypes from 'prop-types';

import Collapser from '../../../../baseComponents/Collapser';
import PaddingBox from '../../../../baseComponents/PaddingBox';

import { isNullOrUndefined } from '../../../../utils';
import classes from '../styles/index.scss';

const CategoryList = ({
						categories
					}) => {
	const getSubCategory = (categoryList) => {
		const getCollapseContent = () => {
			return categoryList.childCategories.map((category, index) => {
				return getCategory(category, index);
			});
		};

		return (
			<Collapser
				label={categoryList.name}
				content={getCollapseContent()}
				transition={false}
			/>
		);
	};

	const getCategory = (category, index = category.name) => {
		const hasChild = !isNullOrUndefined(category.childCategories)
							&& category.childCategories.length !== 0;

		const key = `${category.name}-${index}`;

		return hasChild
			? (
				<div
					key={key}
					style={{ marginLeft: 20 }}
				>
					{getSubCategory(category)}
				</div>
				)
			: (
				<div
					key={key}
					style={{ marginLeft: 20 }}
				>
					{category.name}
				</div>
			);
	};

	const getCategories = () => {
		if (isNullOrUndefined(categories)) return;

		return categories.map((category, index) => {
			return getCategory(category, index);
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
