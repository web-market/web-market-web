import React from 'react';
// import PropTypes from 'prop-types';

import AdminControlHeader from '../AdminControlHeader';
import { CategoryList } from './component/CategoryList';

import classes from './styles/index.scss';

const Category = () => {
	return (
		<>
			<AdminControlHeader
				label="!!!Категории"
			/>
			<CategoryList />
		</>
	);
};

// NAME.defaultProps = {};

// NAME.propTypes = {};

export { Category };
