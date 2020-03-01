import React, { useContext, useEffect } from 'react';

import { FiltersContext } from '../../store';
import { FiltersModalsContext } from '../FiltersModalsProvider';

import AdminControlContentBox from '../../../../components/AdminControlContentBox';
import FiltersGroupListItem from './FiltersGroupListItem';
import PendingCloak from '../../../../baseComponents/PendingCloak';
import { getUniqueKey } from '../../../../utils';
import classes from './styles/index.scss';
import { MODALS } from '../../consts';

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

	const handleFilterEdit = (id) => {
		openModal(MODALS.EDIT_FILTER_MODAL, { id });
	};

	const handleFilterDelete = (id) => {
		openModal(
			MODALS.DELETE_FILTER_MODAL,
			{
				modalTitle: '!!Удалить фильтр группу',
				rightButtonLabel: '!!Удалить',
				handleSubmit: () => deleteFilter({ id }),
				content: '!!Вы уверены, что хотите удалить фильтр группу?'
			}
		);
	};

	return (
		<AdminControlContentBox
			margin={{ large: true }}
			className={classes.filtersGroupList}
		>
			{isPending && (<PendingCloak />)}
			{
				filtersItems.map((filter, index) => {
					const key = getUniqueKey(filter.name, index);

					return (
						<FiltersGroupListItem
							key={key}
							id={filter.id}
							name={filter.name}
							displayName={filter.displayName}
							handleFilterEdit={handleFilterEdit}
							handleFilterDelete={handleFilterDelete}
							hasFilterValues={filter.hasFilterValues}
						/>
					);
				})
			}
		</AdminControlContentBox>
	);
};

export { FiltersGroupList };
