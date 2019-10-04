import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({
	link,
	title,
	component
}) => {
	const getItemContent = () => {
		if (link) {
			return (
				<a href={link}>{title}</a>
			);
		}

		return component;
	};

	return (
		<li>{getItemContent()}</li>
	);
};

ListItem.propTypes = {
	link: PropTypes.string,
	title: PropTypes.string,
	component: PropTypes.object,
};

export { ListItem };
