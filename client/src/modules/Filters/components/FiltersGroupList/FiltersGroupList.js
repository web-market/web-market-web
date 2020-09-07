import React, { useContext, useEffect, useMemo, useCallback } from 'react';

import { AdminControlContentBox } from '../../../../components/AdminControlContentBox/AdminControlContentBox';
import FiltersGroupListItem from './FiltersGroupListItem';
import { Typography } from '../../../../baseComponents/Typography/Typography';

import { getArrayElementByKey, getUniqueKey } from '../../../../utils';
import classes from './styles/index.scss';
import { MODALS, FiltersContext, FiltersModalsContext } from '../../consts';
import { pencil, trash } from '../../../../icons';
import { EmptyContainer } from '../../../../baseComponents/EmptyContainer/EmptyContainer';

const FiltersGroupList = () => {
	const { openModal } = useContext(FiltersModalsContext);

	const {
		isPending,
		filtersItems,
		deleteFilter,
		getFiltersList
	} = useContext(FiltersContext);

	useEffect(() => {
		getFiltersList();
	}, []);

	const handleFilterEdit = useCallback((id) => {
		openModal(MODALS.EDIT_FILTER_MODAL, { id });
	}, [openModal]);

	const handleFilterDelete = useCallback((id) => {
		const currentItem = getArrayElementByKey(filtersItems, id);

		openModal(
			MODALS.DELETE_FILTER_MODAL,
			{
				modalTitle: '!!Удалить фильтр группу',
				rightButtonLabel: '!!Удалить',
				handleSubmit: () => deleteFilter({ ids: [id] }),
				content: (
					<span>!!!!Вы уверены, что хотите удалить фильтр группу: <strong>{currentItem.name}</strong>?</span>
				)
			}
		);
	}, [openModal, deleteFilter]);

	const actions = useMemo(() => {
		return [
			[
				{
					name: '!!Редактировать',
					icon: pencil,
					iconClass: '',
					action: id => handleFilterEdit(id)
				},
				{
					name: '!!Удалить',
					icon: trash,
					iconClass: classes.filtersGroupListItemTooltipActions_deleteIcon,
					action: id => handleFilterDelete(id)
				}
			]
		];
	}, [handleFilterDelete, handleFilterEdit]);

	return (
		<AdminControlContentBox>
			{
				filtersItems.length !== 0 && (
					<div className={classes.filtersGroupList}>
						{filtersItems.map((filter, index) => {
							const key = getUniqueKey(filter.name, index);

							return (
								<FiltersGroupListItem
									key={key}
									id={filter.id}
									actions={actions}
									name={filter.name}
									displayName={filter.displayName}
									handleFilterEdit={handleFilterEdit}
									handleFilterDelete={handleFilterDelete}
									hasFilterValues={filter.hasFilterValues}
								/>
							);
						})
						}
					</div>
				)
			}
			{
				!isPending && filtersItems.length === 0 && (
					<EmptyContainer hasCenteredContent>
						<Typography displayBlock>!!пока что не добавлено ни одного фильтра</Typography>
					</EmptyContainer>
				)
			}
		</AdminControlContentBox>
	);
};

export { FiltersGroupList };
