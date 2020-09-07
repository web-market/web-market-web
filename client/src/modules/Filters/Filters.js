import React, { useContext } from 'react';
import { FiltersContext } from './consts';

import FiltersContextProvider from './store';
import FiltersModalsProvider from './components/FiltersModalsProvider';


import { AdminControlHeader } from '../../components/AdminControlHeader/AdminControlHeader';
import { GridLayoutRow, GridLayout } from '../../baseComponents/GridLayout';
import FiltersGroupList from './components/FiltersGroupList';
import FiltersAddFiltersGroup from './components/FiltersAddFilterGroup';

const Filters = () => {
	const { isPending } = useContext(FiltersContext);

	return (
		<>
			<AdminControlHeader
				label="!!!Фильтры"
			/>
			<GridLayout isPending={isPending}>
				<GridLayoutRow
					grid="7-5"
				>
					<FiltersGroupList />
					<FiltersAddFiltersGroup />
				</GridLayoutRow>
			</GridLayout>
		</>
	);
};

const FiltersWithContext = () => (
	<FiltersContextProvider>
		<FiltersModalsProvider>
			<Filters />
		</FiltersModalsProvider>
	</FiltersContextProvider>
);

export { FiltersWithContext };
