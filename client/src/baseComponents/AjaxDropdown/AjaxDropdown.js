import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { GET } from '../../utils/api';

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
	const [isPending, setIsPending] = useState(false);
	const hasFetchedRef = useRef(false);

	const handleDropdownClick = () => {
		if (hasFetchedRef.current && !allowRequest) return;
		setIsPending(true);

		GET(url)
			.then(({ data }) => {
				setItems(data);
				hasFetchedRef.current = true;
			})
			.finally(() => setIsPending(false));
	};

	return (
		<Dropdown
			onDropdownClick={handleDropdownClick}
			items={items}
			onFieldChange={onFieldChange}
			onFieldFocus={onFieldFocus}
			isItemPending={isPending}
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
