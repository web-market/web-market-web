import React, { useContext, useEffect } from 'react';

import { MediaProductContext } from '../../consts';

import GridLayout, { GridLayoutRow } from '../../../../baseComponents/GridLayout';
import AdminControlContentBox from '../../../../components/AdminControlContentBox';
import MediaProductContentEmpty from './MediaProductContentEmpty';
import MediaProductFiles from '../MediaProductFiles';
import MediaProductCategory from '../MediaProductCategory';

const MediaProductContent = () => {
	const {
		pending,
		categories,
		setActiveCategory,
		getMediaCategories,
		hasMediaProductCategories
	} = useContext(MediaProductContext);

	useEffect(() => {
		getMediaCategories();
	}, []);

	const handleOnCategoryClick = (e, id) => {
		e.stopPropagation();

		setActiveCategory(id);
	};

	return (
		<AdminControlContentBox>
			{
				!hasMediaProductCategories && (
					<MediaProductContentEmpty />
				)
			}
			{
				hasMediaProductCategories && (
					<GridLayout isPending={pending}>
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
