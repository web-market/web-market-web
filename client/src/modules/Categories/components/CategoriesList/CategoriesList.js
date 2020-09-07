import React, { useContext, useEffect, useCallback } from 'react';

import { AdminControlContentBox } from '../../../../components/AdminControlContentBox/AdminControlContentBox';
import CategoriesListItem from './CategoriesListItem';
import { EmptyContainer } from '../../../../baseComponents/EmptyContainer/EmptyContainer';
import { Typography } from '../../../../baseComponents/Typography/Typography';

import { getUniqueKey } from '../../../../utils';
import classes from './styles/index.scss';
import { MODALS, CategoriesContext, CategoriesModalsContext } from '../../consts';

const CategoriesList = () => {
	const { getCategoriesList, isPending, categories } = useContext(CategoriesContext);
	const { openModal } = useContext(CategoriesModalsContext);

	useEffect(() => {
		getCategoriesList();
	}, []);

	const handleDeleteCategory = useCallback((id) => {
		openModal(MODALS.DELETE_CATEGORY_MODAL, { id });
	}, [openModal]);

	const handleEditCategory = useCallback((id) => {
		openModal(MODALS.EDIT_CATEGORY_MODAL, { id });
	}, [openModal]);

	return (
		<AdminControlContentBox>
			{
				categories.length !== 0 && (
				<div className={classes.categoryList}>
					{
						categories.map((category, index) => {
							const key = getUniqueKey(category.name, index);

							return (
								<CategoriesListItem
									key={key}
									category={category}
									handleDeleteCategory={handleDeleteCategory}
									handleEditCategory={handleEditCategory}
								/>
							);
						})
					}
				</div>
				)
			}
			{
				!isPending && categories.length === 0 && (
					<EmptyContainer hasCenteredContent>
						<Typography displayBlock>!!пока что не добавлено ни одной категории</Typography>
					</EmptyContainer>
				)
			}
		</AdminControlContentBox>
	);
};

export { CategoriesList };
