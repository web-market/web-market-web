import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import classes from './styles/index.scss';

const DropDownItem = (
	{
		id,
		value,
		selectedValue,
		handleItemClick
	}
) => {
	const componentsClassNames = ClassNames(
		{
			[classes.dropdownItem__selected]: selectedValue === id
		},
		classes.dropdownItem
	);

	return (
		<div
			onClick={() => handleItemClick(id)}
			className={componentsClassNames}
		>
			{value}
		</div>
	);
};

DropDownItem.defaultProps = {
	handleItemClick: () => {}
};

DropDownItem.propTypes = {
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	id: PropTypes.number,
	handleItemClick: PropTypes.func,
};

export default DropDownItem;
