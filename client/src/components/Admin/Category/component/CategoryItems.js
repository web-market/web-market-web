import React, {} from 'react';
import PropTypes from 'prop-types';

import Collapser from '../../../../baseComponents/Collapser';

import classes from '../styles/index.scss';
import { isNullOrUndefined } from '../../../../utils';
import { getSingleLevelCategoriesList } from '../utils';

const CategoryItems = ({ categories }) => {
	const singleLevelCategoriesList = getSingleLevelCategoriesList(categories);

	const getSubCategory = (category, label) => {
		let isCategoryOpen;

		const getCollapseContent = () => {
			return category.childCategories.map((category, index) => {
				return getCategory(category, index);
			});
		};

		const onCollapseClick = (isOpen) => {
			isCategoryOpen = isOpen;
		};

		const badgeColor = { borderColor: category.color, };
		const badgeProcessColor = { backgroundColor: category.color, };

		const title = (
			<>
				<span
					className={classes.category_badge}
					style={badgeColor}
				>
				</span>
				{isCategoryOpen && (
					<span
						className={classes.category_badgeProcess}
						style={badgeProcessColor}
					>
					</span>
				)}
				{label}
			</>
		);


		return (
			<Collapser
				label={title}
				content={getCollapseContent()}
				transition={false}
				className={classes.category_item}
				labelClassName={classes.category_label}
				collapseContentClassName={classes.category_item__collapseContent}
				collapseContentStyle={{ borderColor: category.color }}
				onItemToggle={onCollapseClick}
			/>
		);
	};

	const getParentCategoryName = (category, name) => {
		if (category.parentCategoryId !== 0) {
			const item = singleLevelCategoriesList.find(item => item.id === category.parentCategoryId);

			name.unshift(item.name);

			if (item.parentCategoryId !== 0) {
				getParentCategoryName(item, name);
			}
		}
	};

	const getCategoryName = (categoryId) => {
		const name = [];

		const item = singleLevelCategoriesList.find(item => item.id === categoryId);

		name.unshift(item.name);

		getParentCategoryName(item, name);

		return name.join(' > ');
	};

	const getCategory = (category, index = category.name) => {
		const hasChild = !isNullOrUndefined(category.childCategories)
			&& category.childCategories.length !== 0;

		const label = getCategoryName(category.id);

		const key = `${category.name}-${index}`;
		return hasChild
			? (
				<div key={key}>
					{getSubCategory(category, label)}
				</div>
			)
			: (
				<div key={key}>
					<div className={classes.category_item}>
						{label}
					</div>
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
