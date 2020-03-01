import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { FiltersContext } from '../../store';
import { FiltersModalsContext } from '../FiltersModalsProvider';

import PaddingBox from '../../../../baseComponents/PaddingBox';
import FiltersFilterGroupValuesListItem from './FiltersFilterGroupValuesListItem';

import classes from './styles/index.scss';
import { getUniqueKey } from '../../../../utils';
import { MODALS } from '../../consts';

const FiltersFilterGroupValuesList = ({ filterGroupValues }) => {
	const { deleteFilterGroupValue, filterGroupValueHandler } = useContext(FiltersContext);
	const { openModal } = useContext(FiltersModalsContext);

	const handleDeleteFilterGroupValueAction = (id) => {
		return deleteFilterGroupValue({ id })
			.then(() => filterGroupValueHandler[id]());
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
							handleDeleteFilterGroupValue={handleDeleteFilterGroupValue}
						/>
					);
				})
			}
		</PaddingBox>
	);
};

FiltersFilterGroupValuesList.propTypes = {
	filterGroupValues: PropTypes.array
};

export { FiltersFilterGroupValuesList };
