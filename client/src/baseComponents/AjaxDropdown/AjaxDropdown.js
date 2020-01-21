import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { GET } from '../Api';

import { Dropdown } from '../Dropdown';

const AjaxDropdown = ({ url, onFieldChange }) => {
	const [items, setItems] = useState([]);

	const handleDropdownClick = () => {
		GET(url)
			.then(({ data }) => {
				setItems(data);
			});
	};

	return (
		<Dropdown
			onDropdownClick={handleDropdownClick}
			items={items}
			onFieldChange={onFieldChange}
		/>
	);
};

AjaxDropdown.defaultProps = {};

AjaxDropdown.propTypes = {
	url: PropTypes.string.isRequired
};

export { AjaxDropdown };
