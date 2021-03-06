import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { PaddingBox } from '../../../../baseComponents/PaddingBox/PaddingBox';
import FiltersFilterGroupValuesListItem from './FiltersFilterGroupValuesListItem';

import classes from './styles/index.scss';
import { getArrayElementByKey, getUniqueKey } from '../../../../utils';
import { MODALS, FiltersContext, FiltersModalsContext } from '../../consts';
import FiltersFilterGroupValuesListItemHeader from './FiltersFilterGroupValuesListItemHeader';

const FiltersFilterGroupValuesList = (
	{
		filterGroupValues,
		filterGroupValueId
	}
) => {
	const {
		deleteFilterGroupValue,
		setFilterGroupHasValue,
		filterGroupValueHandler,
		filterGroupValueEditModeHandler,
		setFilterGroupValueEditModeHandler
	} = useContext(FiltersContext);
	const { openModal, closeModal } = useContext(FiltersModalsContext);

	const handleDeleteFilterGroupValueAction = (id) => {
		return deleteFilterGroupValue({ ids: [id] })
			.then(() => {
				closeModal(MODALS.DELETE_FILTER_MODAL);

				return filterGroupValueHandler[filterGroupValueId]();
			})
			.then(data => {
				if (data.length === 0) {
					setFilterGroupHasValue(false, filterGroupValueId);
				}
			});
	};

	const handleDeleteFilterGroupValue = (id) => {
		const currentItem = getArrayElementByKey(filterGroupValues, id);

		openModal(
			MODALS.DELETE_FILTER_MODAL,
			{
				modalTitle: '!!Удалить значение фильтра',
				rightButtonLabel: '!!Удалить',
				handleSubmit: () => handleDeleteFilterGroupValueAction(id),
				content: (
					<span>!!Вы уверены, что хотите значение фильтра: <strong>${currentItem.value}</strong>?</span>
				)
			}
		);
	};

	return (
		<PaddingBox
			hrSmall
			vrTiny
			className={classes.filtersFilterGroupValuesList}
		>
			<FiltersFilterGroupValuesListItemHeader />
			{
				filterGroupValues.map((filterValue, index) => {
					const key = getUniqueKey(filterValue.value, index);

					return (
						<FiltersFilterGroupValuesListItem
							key={key}
							id={filterValue.id}
							value={filterValue.value}
							sortOrder={filterValue.sortOrder}
							filterGroupValueId={filterGroupValueId}
							handleDeleteFilterGroupValue={handleDeleteFilterGroupValue}
							filterGroupValueEditModeHandler={filterGroupValueEditModeHandler}
							setFilterGroupValueEditModeHandler={setFilterGroupValueEditModeHandler}
						/>
					);
				})
			}
		</PaddingBox>
	);
};

FiltersFilterGroupValuesList.propTypes = {
	filterGroupValues: PropTypes.array,
	filterGroupValueId: PropTypes.number
};

export { FiltersFilterGroupValuesList };
