import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ClassNames from 'classnames';
import classes from '../styles/index.scss';
import { chevronDown, chevronUp } from '../../../../icons';
import { COLORS } from '../../../../styles/baseColors';
import Icon from '../../../../baseComponents/Icon';
import { isNull } from '../../../../utils';

import { getSubCategories } from '../api';

const CategoryItem = ({ category, hasParentCategories }) => {
	const [showCategories, setShowCategories] = useState(false);
	const [subCategories, setSubCategories] = useState(null);
	const [hasFetched, setHasFetched] = useState(false);

	const handleParentCategories = (e) => {
		e.stopPropagation();

		if (hasParentCategories) {
			setShowCategories(!showCategories);
		}
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

	return (
		<>
			<div
				onClick={handleParentCategories}
				className={componentClassName}
			>
				<div>
					{category.name}
					{
						hasParentCategories && (
							<Icon
								icon={showCategories ? chevronUp : chevronDown}
								color={COLORS.FIELD_ICON}
							/>
						)
					}
				</div>
				{
					!isNull(subCategories) && showCategories && (
						<div>
							{
								subCategories.map((category, index) => {
									const key = `${category.name}-${index}`;

									return (
										<CategoryItem
											key={key}
											category={category}
										/>
									);
								})
							}
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
