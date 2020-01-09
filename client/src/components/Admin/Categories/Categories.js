import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

import GridLayout, { GridLayoutRow } from '../../../baseComponents/GridLayout';

import AdminControlHeader from '../AdminControlHeader';
import CategoryList from './component/CategoryList';
import AddCategory from './component/AddCategory';

import { actions } from './store/staticData';
import { GET } from '../../../baseComponents/Api';
import { ENDPOINT } from './consts';

const Categories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		GET(ENDPOINT.GET_ALL_CATEGORIES)
			.then(({ data }) => {
				setCategories(data);
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
					{
						categories.length !== 0 && (
							<CategoryList categories={categories} />
						)
					}
					<AddCategory />
				</GridLayoutRow>
			</GridLayout>

		</>
	);
};

// NAME.defaultProps = {};

// NAME.propTypes = {};

export { Categories };
