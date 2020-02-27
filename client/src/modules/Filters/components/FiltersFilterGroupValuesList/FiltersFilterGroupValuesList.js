import React from 'react';
import PropTypes from 'prop-types';

import PaddingBox from '../../../../baseComponents/PaddingBox';
import FiltersFilterGroupValuesListItem from './FiltersFilterGroupValuesListItem';

import classes from './styles/index.scss';
import { getUniqueKey } from '../../../../utils';

const FiltersFilterGroupValuesList = ({ filterGroupValues }) => {
	return (
		<PaddingBox
			small
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
