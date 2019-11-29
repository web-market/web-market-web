import React from 'react';
// import PropTypes from 'prop-types';

import AdminControlContentBox from '../../AdminControlContentBox';
import AddCategoryForm from './AddCategoryForm';

const AddCategory = () => {
	return (
		<AdminControlContentBox margin={{ tLarge: true, rLarge: true }}>
			<AddCategoryForm />
		</AdminControlContentBox>
	);
};

// NAME.defaultProps = {};

// NAME.propTypes = {};

export default AddCategory;
