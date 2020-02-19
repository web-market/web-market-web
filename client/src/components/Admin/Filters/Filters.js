import React from 'react';

import AdminControlHeader from '../AdminControlHeader';
import GridLayout, { GridLayoutRow } from '../../../baseComponents/GridLayout';
import FiltersList from './components/FiltersList';
import FiltersAdd from './components/FiltersAdd';

const Filters = () => {
	return (
		<>
			<AdminControlHeader
				label="!!!Фильтры"
			/>
			<GridLayout>
				<GridLayoutRow
					grid="7-5"
				>
					<FiltersList />
					<FiltersAdd />
				</GridLayoutRow>
			</GridLayout>
		</>
	);
};
export { Filters };
