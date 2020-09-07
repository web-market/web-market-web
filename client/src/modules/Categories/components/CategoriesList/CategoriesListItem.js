import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import { Button } from '../../../../baseComponents/Button/Button';

import classes from './styles/index.scss';
import { chevronDown, chevronUp, pencil, trash } from '../../../../icons';
import { getUniqueKey, isNull } from '../../../../utils';
import { getSubCategories } from '../../api';
import TooltipAction from '../../../../baseComponents/TooltipAction';

const CategoriesListItem = (
	{
		category,
		handleEditCategory,
		handleDeleteCategory
	}
	) => {
	const [showCategories, setShowCategories] = useState(false);
	const [subCategories, setSubCategories] = useState(null);
	const [subCategoryHeight, setSubCategoryHeight] = useState(false);

	const subCategoryRef = useRef(null);

	const handleParentCategories = () => {
		if (category.hasSubCategories) {
			setShowCategories(!showCategories);
		}
	};

	const handleGetSubCategories = useCallback(() => {
		getSubCategories(category.id)
			.then(({ data }) => {
				setSubCategories(data);
			});
	}, [category.id]);

	useEffect(() => {
		if (showCategories) {
			handleGetSubCategories();
		}
	}, [showCategories, handleGetSubCategories]);

	const componentClassName = ClassNames(
		classes.categoryItem,
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
	}, [showCategories]);

	const actions = useMemo(() => {
		return [
			[
				{
					name: '!!Редактировать',
					icon: pencil,
					iconClass: '',
					action: (id) => handleEditCategory(id)
				},
				{
					name: '!!Удалить',
					icon: trash,
					iconClass: classes.categoriesListItemTooltipActions_deleteIcon,
					action: (id) => handleDeleteCategory(id)
				}
			]
		];
	}, [handleDeleteCategory, handleEditCategory]);

	const categoryItemDetail = () => {
		return (

				<div className={classes.categoryItem_detail}>
					<div className={classes.categoryItem_labelSection}>
						{
							category.hasSubCategories && (
								<div
									className={classes.categoryItem_labelBadge}
									style={{
										backgroundColor: category.color,
										height: subCategoryHeight
									}}
								>
								</div>
							)
						}
						{category.name}
					</div>
					<div className={classes.categoryItem_actionSection}>
						{
							category.hasSubCategories && (
								<Button
									size="small"
									type="secondary"
									icon={showCategories ? chevronUp : chevronDown}
									actionHandler={handleParentCategories}
								/>
							)
						}
						<TooltipAction
							actionList={actions}
							targetElementId={category.id}
							className={classes.categoriesListItemTooltipActions}
						/>
					</div>
				</div>
		);
	};

	const subCategoryItemDetail = () => {
		return subCategories.map((category, index) => {
			const key = getUniqueKey(category.name, index);

			return (
				<CategoriesListItem
					key={key}
					category={category}
					handleDeleteCategory={handleDeleteCategory}
					handleEditCategory={handleEditCategory}
				/>
			);
		});
	};

	return (
		<div className={componentClassName}>
			{categoryItemDetail()}
			{
				showCategories && !isNull(subCategories) && (
					<div
						ref={subCategoryRef}
						className={classes.categoryItem_subCategoryItem}
					>
						{subCategoryItemDetail()}
					</div>
				)
			}
		</div>
	);
};

CategoriesListItem.propTypes = {
	actions: PropTypes.array,
	category: PropTypes.object.isRequired,
	handleDeleteCategory: PropTypes.func.isRequired,
	handleEditCategory: PropTypes.func.isRequired,
};

export default CategoriesListItem;
