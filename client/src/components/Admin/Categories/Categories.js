import React, { useEffect, useContext } from 'react';
import CategoriesContextProvider, { CategoriesContext } from './store';
import CategoriesModalsProvider from './component/CategoriesModalsProvider';

import GridLayout, { GridLayoutRow } from '../../../baseComponents/GridLayout';
import AdminControlHeader from '../AdminControlHeader';
import CategoriesList from './component/CategoriesList';
import AddCategory from './component/AddCategory';

const Categories = () => {
	const { categories, getCategoriesList, isPending } = useContext(CategoriesContext);

	useEffect(() => {
		getCategoriesList();
	}, []);

	return (
		<>
			<AdminControlHeader
				label="!!!Категории"
			/>
			<GridLayout>
				<GridLayoutRow
					grid="7-5"
				>
					<CategoriesList
						isPending={isPending}
						categories={categories}
					/>
					<AddCategory />
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
