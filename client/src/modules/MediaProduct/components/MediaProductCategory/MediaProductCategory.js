import React from 'react';
import PropTypes from 'prop-types';

import { TreeListConstructor as TreeList } from '../../../../baseComponents/TreeListConstructor/TreeListConstructor';
import PaddingBox from '../../../../baseComponents/PaddingBox';
import MediaProductCategoryList from './MediaProductCategoryList';

import classes from './styles/index.scss';

const MediaProductCategory = (
	{
		categories,
		handleOnCategoryClick
	}
) => {
	return (
		<PaddingBox
			small
			className={classes.mediaProductCategoryTree}
		>
			<TreeList
				linearList={categories}
				referenceKey="parentCategoryId"
				render={({ treeList }) => {
					return (
						<MediaProductCategoryList
							treeList={treeList}
							handleOnCategoryClick={handleOnCategoryClick}
						/>
					);
				}}
			/>
		</PaddingBox>
	);
};

MediaProductCategory.propTypes = {
	categories: PropTypes.array,
	handleOnCategoryClick: PropTypes.func
};

export { MediaProductCategory };
