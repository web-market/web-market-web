import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import { MediaProductContext } from '../../consts';

import MediaProductCategoryItem from './MediaProductCategoryItem';

import { getUniqueKey } from '../../../../utils';

const MediaProductCategoryList = (
	{
		treeList, handleOnCategoryClick
	}
) => {
	const { setActiveCategory } = useContext(MediaProductContext);

	useEffect(() => {
		setActiveCategory(treeList[0].id);
	}, []);

	return treeList.map(category => {
		const { parentCategoryId, name, id, childrenList } = category;
		const key = getUniqueKey(name, id);
		const isRootCategory = parentCategoryId === null
			|| parentCategoryId === undefined
			|| parentCategoryId === 0;

		return (
			<MediaProductCategoryItem
				id={id}
				key={key}
				name={name}
				childrenList={childrenList}
				isRootCategory={isRootCategory}
				handleOnCategoryClick={handleOnCategoryClick}
			/>
		);
	});
};

MediaProductCategoryList.propTypes = {
	treeList: PropTypes.array,
	handleOnCategoryClick: PropTypes.func
};

export default MediaProductCategoryList;
