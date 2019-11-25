import React from 'react';
import PropTypes from 'prop-types';

import PaddingBox from '../../../../baseComponents/PaddingBox';

import CategoryItems from './CategoryItems';

import classes from '../styles/index.scss';

const CategoryList = ({
						categories
					}) => {
	return (
		<PaddingBox
			className={classes.category_list}
		>
			<CategoryItems
				categories={categories}
			/>
		</PaddingBox>
	);
};

CategoryList.defaultProps = {};

CategoryList.propTypes = {
	categories: PropTypes.array
};

export { CategoryList };
