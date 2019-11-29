import React from 'react';
// import PropTypes from 'prop-types';

import GridLayout, { GridLayoutRow } from '../../../baseComponents/GridLayout';

import AdminControlHeader from '../AdminControlHeader';
import CategoryList from './component/CategoryList';
import AddCategory from './component/AddCategory';

import { actions, categories } from './store/staticData';

const Category = () => {
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
					grid="8-4"
				>
					<CategoryList categories={categories} />
					<AddCategory />
				</GridLayoutRow>
			</GridLayout>

		</>
	);
};

// NAME.defaultProps = {};

// NAME.propTypes = {};

export { Category };
