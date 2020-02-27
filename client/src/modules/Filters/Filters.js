import React from 'react';

import FiltersContextProvider from './store';
import FiltersModalsProvider from './components/FiltersModalsProvider';


import AdminControlHeader from '../../components/AdminControlHeader';
import GridLayout, { GridLayoutRow } from '../../baseComponents/GridLayout';
import FiltersGroupList from './components/FiltersGroupList';
import FiltersAddFiltersGroup from './components/FiltersAddFilterGroup';

const Filters = () => {
	return (
		<>
			<AdminControlHeader
				label="!!!Фильтры"
			/>
			<FiltersContextProvider>
				<FiltersModalsProvider>
					<GridLayout>
						<GridLayoutRow
							grid="7-5"
						>
							<FiltersGroupList />
							<FiltersAddFiltersGroup />
						</GridLayoutRow>
					</GridLayout>
				</FiltersModalsProvider>
			</FiltersContextProvider>
		</>
	);
};
export { Filters };
