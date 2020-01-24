import React, { useEffect, useState, useContext } from 'react';
// import PropTypes from 'prop-types';
import CategoriesContextProvider, { CategoriesContext } from './store';

import GridLayout, { GridLayoutRow } from '../../../baseComponents/GridLayout';
import Modal from '../../../baseComponents/Modal';
import AdminControlHeader from '../AdminControlHeader';
import CategoryList from './component/CategoryList';
import AddCategory from './component/AddCategory';

const Categories = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { categories, getCategoriesList, isPending } = useContext(CategoriesContext);

	useEffect(() => {
		getCategoriesList();
	}, []);

	const handleActionClick = (action) => {
		console.log(action);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<AdminControlHeader
				label="!!!Категории"
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
			<Modal
				handleClose={handleCloseModal}
				isOpen={isModalOpen}
				render={() => <div>Modal content</div>}
			/>
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
