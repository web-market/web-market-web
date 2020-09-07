import React, { useContext } from 'react';
import { CategoriesContext } from './consts';

import CategoriesContextProvider from './store';
import CategoriesModalsProvider from './components/CategoriesModalsProvider';
import { GridLayoutRow, GridLayout } from '../../baseComponents/GridLayout';
import { AdminControlHeader } from '../../components/AdminControlHeader/AdminControlHeader';
import CategoriesList from './components/CategoriesList';
import CategoriesAdd from './components/CategoriesAdd';

const Categories = () => {
	const { isPending } = useContext(CategoriesContext);

	return (
		<>
			<AdminControlHeader
				label="!!!Категории"
			/>
			<GridLayout isPending={isPending}>
				<GridLayoutRow
					grid="7-5"
				>
					<CategoriesList	/>
					<CategoriesAdd />
				</GridLayoutRow>
			</GridLayout>
		</>
	);
};

const CategoriesWithContext = () => {
	return (
		<CategoriesContextProvider>
			<CategoriesModalsProvider>
				<Categories />
			</CategoriesModalsProvider>
		</CategoriesContextProvider>
	);
};

export { CategoriesWithContext };
