import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { FiltersContext } from '../../store';
import { FiltersModalsContext } from '../FiltersModalsProvider';

import PaddingBox from '../../../../baseComponents/PaddingBox';
import FiltersFilterGroupValuesListItem from './FiltersFilterGroupValuesListItem';

import classes from './styles/index.scss';
import { getUniqueKey } from '../../../../utils';
import { MODALS } from '../../consts';

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
		openModal(
			MODALS.DELETE_FILTER_MODAL,
			{
				modalTitle: '!!Удалить фильтр',
				rightButtonLabel: '!!Удалить',
				handleSubmit: () => handleDeleteFilterGroupValueAction(id),
				content: '!!Вы уверены, что хотите удалить фильтр?'
			}
		);
	};

	return (
		<PaddingBox
			hrSmall
			vrTiny
			className={classes.filtersFilterGroupValuesList}
		>
			{
				filterGroupValues.map((filterValue, index) => {
					const key = getUniqueKey(filterValue.value, index);

					return (
						<FiltersFilterGroupValuesListItem
							key={key}
							id={filterValue.id}
							value={filterValue.value}
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
