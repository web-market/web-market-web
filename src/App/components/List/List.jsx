import React from 'react';
import PropTypes from 'prop-types';

//TODO: add styles for list component
const List = ({ children }) => {
	return (
		<ul>{children}</ul>
	);
};

List.propTypes = {
	children: PropTypes.array.isRequired
};

export { List };
