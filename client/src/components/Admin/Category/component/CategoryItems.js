import React from 'react';
import PropTypes from 'prop-types';

import PaddingBox from '../../../../baseComponents/PaddingBox';
import Collapser from '../../../../baseComponents/Collapser';

import classes from '../styles/index.scss';
import { isNullOrUndefined } from '../../../../utils';

const CategoryItems = ({ categories }) => {
	const getSubCategory = (categoryList) => {
		const getCollapseContent = () => {
			return categoryList.childCategories.map((category, index) => {
				return getCategory(category, index);
			});
		};

		return (
			<Collapser
				className={classes.category_item}
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
				>
					<PaddingBox
						vrTiny
						lTiny
					>
						{getSubCategory(category)}
					</PaddingBox>
				</div>
			)
			: (
				<div
					key={key}
				>
					<PaddingBox
						vrTiny
						lTiny
						className={classes.category_item}
					>
						{category.name}
					</PaddingBox>
				</div>
			);
	};

	return categories.map((category, index) => {
		return getCategory(category, index);
	});
};

CategoryItems.defaultProps = {};

CategoryItems.propTypes = {
	categories: PropTypes.array.isRequired
};

export default CategoryItems;
