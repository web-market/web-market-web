import React from 'react';
import PropTypes from 'prop-types';

const CategoriesEditCategoryModalContent = (
	{
		modalData
	}
) => {
	console.log(modalData);
	return (
		<div>CategoriesEditCategoryModalContent</div>
	);
};

CategoriesEditCategoryModalContent.defaultProps = {};

CategoriesEditCategoryModalContent.propTypes = {
	modalData: PropTypes.object
};

export default CategoriesEditCategoryModalContent;
