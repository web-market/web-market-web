import React from 'react';
import CategoriesContextProvider from './store';
import CategoriesModalsProvider from './components/CategoriesModalsProvider';

import GridLayout, { GridLayoutRow } from '../../baseComponents/GridLayout';
import AdminControlHeader from '../../components/AdminControlHeader';
import CategoriesList from './components/CategoriesList';
import CategoriesAdd from './components/CategoriesAdd';

const Categories = () => {
	return (
		<>
			<AdminControlHeader
				label="!!!Категории"
			/>
			<GridLayout>
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
