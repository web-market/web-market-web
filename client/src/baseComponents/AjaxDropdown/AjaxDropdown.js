import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { GET } from '../Api';

import { Dropdown } from '../Dropdown';

const AjaxDropdown = (
	{
		url,
		onFieldChange,
		allowRequest,
		onFieldFocus
	}
) => {
	const [items, setItems] = useState([]);
	const hasFetchedRef = useRef(false);

	const handleDropdownClick = () => {
		if (hasFetchedRef.current && !allowRequest) return;

		GET(url)
			.then(({ data }) => {
				setItems(data);
				hasFetchedRef.current = true;
			});
	};

	return (
		<Dropdown
			onDropdownClick={handleDropdownClick}
			items={items}
			onFieldChange={onFieldChange}
			onFieldFocus={onFieldFocus}
		/>
	);
};

AjaxDropdown.defaultProps = {
	allowRequest: false
};

AjaxDropdown.propTypes = {
	url: PropTypes.string.isRequired,
	allowRequest: PropTypes.bool
};

export { AjaxDropdown };
