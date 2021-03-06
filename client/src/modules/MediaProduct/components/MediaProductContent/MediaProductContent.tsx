import React, { useContext, useEffect, useState } from 'react';

import { GridLayoutRow, GridLayout } from '../../../../baseComponents/GridLayout';
import { AdminControlContentBox } from '../../../../components/AdminControlContentBox/AdminControlContentBox';
import MediaProductContentEmpty from './MediaProductContentEmpty';
import MediaProductFiles from '../MediaProductFiles';
import MediaProductCategory from '../MediaProductCategory';
import { MediaProductContext } from '../../store/consts';

const MediaProductContent = () => {
	const [pending, setPending] = useState(false);

	const {
		categories,
		setActiveCategory,
		getMediaCategories,
	} = useContext(MediaProductContext);

	useEffect(() => {
		setPending(true);

		getMediaCategories()
			.then(() => setPending(false));
	}, []);

	const handleOnCategoryClick = (e, id) => {
		e.stopPropagation();

		setActiveCategory(id);
	};

	return (
		<AdminControlContentBox>
			{
				categories.length === 0 && (
					<MediaProductContentEmpty />
				)
			}
			{
				categories.length !== 0 && (
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
