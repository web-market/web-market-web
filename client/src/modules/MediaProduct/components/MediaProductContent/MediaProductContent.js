import React, { useContext } from 'react';

import { MediaProductContext } from '../../consts';

import GridLayout, { GridLayoutRow } from '../../../../baseComponents/GridLayout';
import AdminControlContentBox from '../../../../components/AdminControlContentBox';
import MediaProductContentEmpty from './MediaProductContentEmpty';
import MediaProductFiles from '../MediaProductFiles';
import MediaProductCategory from '../MediaProductCategory';

const MediaProductContent = () => {
	const {
		categories,
		setActiveCategory,
		hasMediaProductCategories
	} = useContext(MediaProductContext);
	//fetchDataHere

	const handleOnCategoryClick = (e, id) => {
		e.stopPropagation();

		setActiveCategory(id);
	};

	return (
		<AdminControlContentBox>
			{
				hasMediaProductCategories && (
					<MediaProductContentEmpty />
				)
			}
			{
				!hasMediaProductCategories && (
					<GridLayout>
						<GridLayoutRow gridColumn={24} grid="7-17">
							<MediaProductCategory
								categories={categories}
								handleOnCategoryClick={handleOnCategoryClick}
							/>
							<MediaProductFiles />
						</GridLayoutRow>
					</GridLayout>
				)
			}
		</AdminControlContentBox>
	);
};

export { MediaProductContent };
