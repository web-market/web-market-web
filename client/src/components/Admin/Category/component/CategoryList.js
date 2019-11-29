import React from 'react';
import PropTypes from 'prop-types';

import AdminControlContentBox from '../../AdminControlContentBox';
import CategoryItems from './CategoryItems';

import classes from '../styles/index.scss';

const CategoryList = ({
						categories
					}) => {
	return (
		<AdminControlContentBox
			margin="large"
			className={classes.category_list}
		>
			<CategoryItems categories={categories} />
		</AdminControlContentBox>
	);
};

CategoryList.defaultProps = {};

CategoryList.propTypes = {
	categories: PropTypes.array
};

export default CategoryList;
