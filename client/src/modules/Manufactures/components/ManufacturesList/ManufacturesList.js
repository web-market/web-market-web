import React, { useContext, useEffect, useMemo, useCallback } from 'react';

import PendingCloak from '../../../../baseComponents/PendingCloak';
import AdminControlContentBox from '../../../../components/AdminControlContentBox';

import ManufacturesListItem from './ManufacturesListItem';

import { getUniqueKey } from '../../../../utils';
import { pencil, trash } from '../../../../icons';
import { ManufacturesContext, ManufacturesModalsContext, MODALS } from '../../consts';
import { EmptyContainer } from '../../../../baseComponents/EmptyContainer/EmptyContainer';

import classes from './styles/index.scss';

const ManufacturesList = () => {
	const {
		isPending,
		manufactures,
		getManufactures,
		deleteManufacture: deleteManufactureAction
	} = useContext(ManufacturesContext);
	const { openModal } = useContext(ManufacturesModalsContext);

	useEffect(() => {
		getManufactures();
	}, []);

	const handleItemClick = (id) => {
		openModal(MODALS.MANUFACTURE_DETAIL_MODAL, { id });
	};

	const handleEditManufacture = useCallback((id) => {
		openModal(MODALS.MANUFACTURE_EDIT_MODAL, { id });
	}, []);

	const deleteManufacture = useCallback(id => {
		return deleteManufactureAction({ ids: [id] })
			.then(() => getManufactures());
	}, [deleteManufactureAction, getManufactures]);

	const handleDeleteManufacture = useCallback((id) => {
		const manufacture = manufactures.find(item => item.id === id);

		openModal(
			MODALS.MANUFACTURE_DELETE_MODAL,
			{
				modalTitle: '!!Удалить протзводителя',
				rightButtonLabel: '!!Удалить',
				handleSubmit: () => deleteManufacture(id),
				content: (
					<span>!!Вы уверены, что хотите удалить протзводителя <strong>{manufacture.name}</strong>?</span>
				)
			}
		);
	}, [openModal, manufactures, deleteManufacture]);

	const actions = useMemo(() => {
		return [
			{
				name: '!!Редактировать',
				icon: pencil,
				iconClass: '',
				action: id => handleEditManufacture(id)
			},
			{
				name: '!!Удалить',
				icon: trash,
				iconClass: classes.categoriesListItemTooltipActions_deleteIcon,
				action: id => handleDeleteManufacture(id)
			}
		];
	}, [handleDeleteManufacture, handleEditManufacture]);

	return (
		<AdminControlContentBox>
			{isPending && (<PendingCloak />)}
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
				manufactures.length === 0 && (
					<EmptyContainer hasFillContent hasCenteredContent>
						<div className={classes.manufacturesLists_emptyContent}>!!пока что не добавлено ни одного производителя</div>
					</EmptyContainer>
				)
			}
		</AdminControlContentBox>
	);
};

export { ManufacturesList };
