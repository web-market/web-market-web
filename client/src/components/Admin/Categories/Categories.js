import React, { useEffect, useContext } from 'react';
import CategoriesContextProvider, { CategoriesContext } from './store';
import CategoriesModalsProvider from './component/CategoriesModalsProvider';

import GridLayout, { GridLayoutRow } from '../../../baseComponents/GridLayout';
import AdminControlHeader from '../AdminControlHeader';
import CategoryList from './component/CategoryList';
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
					<CategoryList
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
