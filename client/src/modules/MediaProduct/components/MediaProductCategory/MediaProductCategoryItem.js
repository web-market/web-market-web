import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { MediaProductContext } from '../../consts';

import Button from '../../../../baseComponents/Button';

import classNames from 'classnames';
import { getUniqueKey } from '../../../../utils';
import classes from './styles/index.scss';
import { angleRight } from '../../../../icons';

const MediaProductCategoryItem = (
	{
		id,
		name,
		className,
		childrenList,
		isRootCategory,
		handleOnCategoryClick
	}
) => {
	const { activeCategoryId } = useContext(MediaProductContext);

	const [isOpen, setIsOpen] = useState(false);

	const hasChildren = childrenList.length !== 0;

	const componentClassName = classNames(
		classes.mediaProductCategoryItem,
		className
	);

	const componentButtonClassName = classNames(
		{
			[classes.mediaProductCategoryItem_button__open]: isOpen
		},
		classes.mediaProductCategoryItem_button
	);

	const componentCategoryNameClassName = classNames(
		{
			[classes.mediaProductCategoryItem_name]: isRootCategory
		}
	);

	const handleOpenChildrenList = (e) => {
		e.stopPropagation();
		setIsOpen(!isOpen);
	};

	const childrenListStyle = hasChildren ? { paddingLeft: 10 } : {};

	return (
		<>
			<div
				className={componentClassName}
				onClick={e => handleOnCategoryClick(e, id)}
			>
				{
					activeCategoryId === id && (
						<div className={classes.mediaProductCategoryItem_indicator}></div>
					)
				}
				<span className={componentCategoryNameClassName}>{name}</span>
				{
					hasChildren && (
						<Button
							size="tiny"
							noBorder
							transparent
							icon={angleRight}
							className={componentButtonClassName}
							actionHandler={e => handleOpenChildrenList(e)}
						/>
					)
				}
			</div>
			{
				isOpen && hasChildren && childrenList.map(category => {
					const key = getUniqueKey(category.name, category.id);

					return (
						<div
							key={key}
							style={childrenListStyle}
						>
							<MediaProductCategoryItem
								id={category.id}
								name={category.name}
								childrenList={category.childrenList}
								handleOnCategoryClick={handleOnCategoryClick}
							/>
						</div>
					);
				})
			}
			{
				isRootCategory && (
					<div className={classes.mediaProductCategoryItem_separatorLine}></div>
				)
			}
		</>
	);
};

MediaProductCategoryItem.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	className: PropTypes.string,
	childrenList: PropTypes.array,
	isRootCategory: PropTypes.bool,
	handleOnCategoryClick: PropTypes.func
};

export default MediaProductCategoryItem;
