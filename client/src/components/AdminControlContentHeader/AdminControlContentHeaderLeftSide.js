import React from 'react';
import PropTypes from 'prop-types';

const AdminControlContentHeaderLeftSide = ({ children }) => {
	const ChildComponent = () => children;

	return <ChildComponent />;
};

AdminControlContentHeaderLeftSide.defaultProps = {
	children: []
};

AdminControlContentHeaderLeftSide.propTypes = {
	children: PropTypes.any
};

export default AdminControlContentHeaderLeftSide;
