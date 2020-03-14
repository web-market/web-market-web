import React from 'react';

import classes from './styles/index.scss';

const FiltersFilterGroupValuesListItemHeader = () => {
	return (
		<div className={classes.filtersFilterGroupValuesListItemHeader}>
			<div className={classes.filtersFilterGroupValuesListItemHeader_item}>!фильтр</div>
			<div className={classes.filtersFilterGroupValuesListItemHeader_item}>!порядок сортировки</div>
		</div>
	);
};

export default FiltersFilterGroupValuesListItemHeader;
