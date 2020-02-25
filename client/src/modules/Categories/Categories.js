import React from 'react';
import CategoriesContextProvider from './store';
import CategoriesModalsProvider from './component/CategoriesModalsProvider';

import GridLayout, { GridLayoutRow } from '../../baseComponents/GridLayout';
import AdminControlHeader from '../../components/AdminControlHeader';
import CategoriesList from './component/CategoriesList';
import CategoriesAdd from './component/CategoriesAdd';

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
