import React from 'react';
import PropTypes from 'prop-types';

import AdminControlContentBox from '../../AdminControlContentBox';
import CategoryItems from './CategoryItems';

import classes from '../styles/index.scss';
import PendingCloak from '../../../../baseComponents/PendingCloak';

const CategoryList = ({
						categories,
						isPending
					}) => {
	return (
		<AdminControlContentBox
			margin={{ large: true }}
			className={classes.category_list}
		>
			{isPending && (<PendingCloak />)}
			<CategoryItems categories={categories} />
		</AdminControlContentBox>
	);
};

CategoryList.defaultProps = {};

CategoryList.propTypes = {
	categories: PropTypes.array
};

export default CategoryList;
