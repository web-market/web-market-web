import React, { useEffect, useState, useContext } from 'react';
// import PropTypes from 'prop-types';
import CategoriesContextProvider, { CategoriesContext } from './store';

import GridLayout, { GridLayoutRow } from '../../../baseComponents/GridLayout';
import AdminControlHeader from '../AdminControlHeader';
import CategoryList from './component/CategoryList';
import AddCategory from './component/AddCategory';

import { actions } from './store/staticData';
import { GET } from '../../../baseComponents/Api';
import { ENDPOINT } from './consts';

const Categories = () => {
	const [isPending, setIsPending] = useState(false);
	const { categories, addCategories } = useContext(CategoriesContext);

	useEffect(() => {
		setIsPending(true);

		GET(ENDPOINT.GET_ALL_CATEGORIES)
			.then(({ data }) => {
				addCategories(data);
				setIsPending(false);
			})
			.catch(error => console.log(error));
	}, []);

	const handleActionClick = (action) => {
		console.log(action);
	};

	return (
		<>
			<AdminControlHeader
				label="!!!Категории"
				actions={actions}
				onActionClick={handleActionClick}
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
			<Categories />
		</CategoriesContextProvider>
	);
};

export { CategoriesWithContext };
