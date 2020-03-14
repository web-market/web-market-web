import React from 'react';
import PropTypes from 'prop-types';

const AdminControlContentHeaderRightSide = ({ children }) => {
	const ChildComponent = () => children;

	return <ChildComponent />;
};

AdminControlContentHeaderRightSide.defaultProps = {
	children: []
};

AdminControlContentHeaderRightSide.propTypes = {
	children: PropTypes.any
};

export default AdminControlContentHeaderRightSide;
