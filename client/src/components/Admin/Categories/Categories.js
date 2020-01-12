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
	const [isPending, setIsPending] = useState(false);

	useEffect(() => {
		setIsPending(true);

		GET(ENDPOINT.GET_ALL_CATEGORIES)
			.then(({ data }) => {
				setCategories(data);
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

// NAME.defaultProps = {};

// NAME.propTypes = {};

export { Categories };
