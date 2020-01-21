import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import ClassNames from 'classnames';
import classes from '../styles/index.scss';
import { chevronDown, chevronUp, pen } from '../../../../icons';
import { COLORS } from '../../../../styles/baseColors';
import Icon from '../../../../baseComponents/Icon';
import { isNull } from '../../../../utils';

import { getSubCategories } from '../api';

const CategoryItem = ({ category, hasParentCategories }) => {
	const [showCategories, setShowCategories] = useState(false);
	const [subCategories, setSubCategories] = useState(null);
	const [hasFetched, setHasFetched] = useState(false);
	const [subCategoryHeight, setSubCategoryHeight] = useState(false);

	const subCategoryRef = useRef(null);

	const handleParentCategories = (e) => {
		e.stopPropagation();

		if (hasParentCategories) {
			setShowCategories(!showCategories);
		}
	};

	const handleEditCategory = (id) => {
		console.log(id);
	};

	useEffect(() => {
		if (!hasFetched && showCategories) {
			getSubCategories(category.id)
				.then(({ data }) => {
					setSubCategories(data);
					setHasFetched(true);
				});
		}
	}, [showCategories, category.id, hasFetched]);

	const componentClassName = ClassNames(
		classes.category_item,
		{
			[classes.category_item__hasChild]: hasParentCategories
		}
	);

	useEffect(() => {
		let h;

		if (isNull(subCategoryRef.current)) {
			h = 0;
		} else {
			const { height: subCategoryHeight } = subCategoryRef.current.getBoundingClientRect();

			h = subCategoryHeight + 50;
		}

		setSubCategoryHeight(h);
	}, [showCategories, subCategoryRef.current]);

	const categoryItemDetail = () => {
		return (

				<div className={classes.category_item_detail}>
					<div className={classes.category_item_labelSection}>
						{
							hasParentCategories && (
								<div
									className={classes.category_item_labelBadge}
									style={{
										backgroundColor: category.color,
										height: subCategoryHeight
									}}
								>
								</div>
							)
						}
						<span className={classes.category_itemLabel}>
							{category.name}
						</span>
					</div>
					<div className={classes.category_item_actionSection}>
						{
							hasParentCategories && (
								<Icon
									icon={showCategories ? chevronUp : chevronDown}
									color={COLORS.FIELD_ICON}
									onClick={handleParentCategories}
									className={classes.category_item_collapseButton}
								/>
							)
						}
						<Icon
							icon={pen}
							color={COLORS.FIELD_ICON}
							onClick={() => handleEditCategory(category.id)}
							className={classes.category_item_editButton}
						/>
					</div>
				</div>
		);
	};

	const subCategoryItemDetail = () => {
		return subCategories.map((category, index) => {
			const key = `${category.name}-${index}`;

			return (
				<CategoryItem
					key={key}
					category={category}
				/>
			);
		});
	};

	return (
		<>
			<div className={componentClassName}>
			{categoryItemDetail()}
				{
					showCategories && !isNull(subCategories) && (
						<div
							ref={subCategoryRef}
							className={classes.category_item_subCategoryItem}
						>
							{subCategoryItemDetail()}
						</div>
					)
				}
			</div>
		</>
	);
};

CategoryItem.defaultProps = {
	hasParentCategories: true
};

CategoryItem.propTypes = {
	category: PropTypes.object.isRequired,
	hasParentCategories: PropTypes.bool
};

export default CategoryItem;
