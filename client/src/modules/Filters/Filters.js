import React from 'react';
import FiltersContextProvider from './store';

import AdminControlHeader from '../../components/AdminControlHeader';
import GridLayout, { GridLayoutRow } from '../../baseComponents/GridLayout';
import FiltersList from './components/FiltersList';
import FiltersAdd from './components/FiltersAdd';

const Filters = () => {
	return (
		<>
			<AdminControlHeader
				label="!!!Фильтры"
			/>
			<FiltersContextProvider>
				<GridLayout>
					<GridLayoutRow
						grid="7-5"
					>
						<FiltersList />
						<FiltersAdd />
					</GridLayoutRow>
				</GridLayout>
			</FiltersContextProvider>
		</>
	);
};
export { Filters };
