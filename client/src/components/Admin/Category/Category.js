import React from 'react';
// import PropTypes from 'prop-types';

import AdminControlHeader from '../AdminControlHeader';
import { CategoryList } from './component/CategoryList';

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
			<CategoryList
				categories={categories}
			/>
		</>
	);
};

// NAME.defaultProps = {};

// NAME.propTypes = {};

export { Category };
