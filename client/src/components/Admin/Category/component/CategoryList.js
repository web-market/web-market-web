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
		const collapseContent = categoryList.childCategories.map((category, index) => {
			const key = `${category.name}-${index}`;

			return (
				<div
					key={key}
					style={{ marginLeft: 20 }}
				>
					{getCategory(category)}
				</div>
			);
		});

		console.log(collapseContent);

		return (
			<Collapser
				label={categoryList.name}
				content={collapseContent}
			/>
		);
	};

	const getCategory = (categoryList) => {
		const hasChild = !isNullOrUndefined(categoryList.childCategories)
							&& categoryList.childCategories.length !== 0;

		return hasChild
			? getSubCategory(categoryList)
			: categoryList.name;
	};

	const getCategories = () => {
		if (isNullOrUndefined(categories)) return;

		return categories.map((category, index) => {
			const key = `${category}-${index}`;

			return (
				<div
					key={key}
				>
					{getCategory(category)}
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
