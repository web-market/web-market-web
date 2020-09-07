import React, { useContext, useEffect, useMemo, useCallback } from 'react';

import { AdminControlContentBox } from '../../../../components/AdminControlContentBox/AdminControlContentBox';
import ManufacturesListItem from './ManufacturesListItem';
import { EmptyContainer } from '../../../../baseComponents/EmptyContainer/EmptyContainer';
import { Typography } from '../../../../baseComponents/Typography/Typography';

import { getArrayElementByKey, getUniqueKey } from '../../../../utils';
import { pencil, trash } from '../../../../icons';
import { ManufacturesContext, ManufacturesModalsContext, MODALS } from '../../consts';

const ManufacturesList = () => {
	const {
		isPending,
		manufactures,
		getAllManufactures,
		deleteManufacture: deleteManufactureAction
	} = useContext(ManufacturesContext);

	const { openModal } = useContext(ManufacturesModalsContext);

	useEffect(() => {
		getAllManufactures();
	}, []);

	const handleItemClick = (id) => {
		openModal(MODALS.MANUFACTURE_DETAIL_MODAL, { id });
	};

	const handleEditManufacture = useCallback((id) => {
		openModal(MODALS.MANUFACTURE_EDIT_MODAL, { id });
	}, []);

	const deleteManufacture = useCallback(id => {
		return deleteManufactureAction({ ids: [id] })
			.then(() => getAllManufactures());
	}, [deleteManufactureAction, getAllManufactures]);

	const handleDeleteManufacture = useCallback((id) => {
		const currentItem = getArrayElementByKey(manufactures, id);

		openModal(
			MODALS.MANUFACTURE_DELETE_MODAL,
			{
				modalTitle: '!!Удалить протзводителя',
				rightButtonLabel: '!!Удалить',
				handleSubmit: () => deleteManufacture(id),
				content: (
					<span>!!Вы уверены, что хотите удалить протзводителя <strong>{currentItem.name}</strong>?</span>
				)
			}
		);
	}, [openModal, manufactures, deleteManufacture]);

	const actions = useMemo(() => {
		return [
			[
				{
					name: '!!Редактировать',
					icon: pencil,
					action: id => handleEditManufacture(id)
				},
				{
					name: '!!Удалить',
					icon: trash,
					action: id => handleDeleteManufacture(id)
				}
			]
		];
	}, [handleDeleteManufacture, handleEditManufacture]);

	return (
		<AdminControlContentBox>
			{
				manufactures.map(item => {
					const key = getUniqueKey(item.name, item.id);

					return (
						<ManufacturesListItem
							key={key}
							id={item.id}
							name={item.name}
							actions={actions}
							handleItemClick={handleItemClick}
						/>
					);
				})
			}
			{
				!isPending && manufactures.length === 0 && (
					<EmptyContainer hasCenteredContent>
						<Typography displayBlock>!!пока что не добавлено ни одного производителя</Typography>
					</EmptyContainer>
				)
			}
		</AdminControlContentBox>
	);
};

export { ManufacturesList };
