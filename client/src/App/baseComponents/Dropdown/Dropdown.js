import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { isEmptyStirng } from '../../utils';

import DropDownItem from './DropDownItem';

import styles from './styles/index.scss';
import Icon from '../Icon';
import { chevronDown, chevronUp } from '../../icons/icons';

import data from './dataModel';
import classNames from 'classnames';
import { COLORS } from '../../styles/baseColors';

const Dropdown = ({ isOpen, items, placeholder, onFieldChange }) => {
	const [open, setOpen] = useState(false);
	const [displayValue, setDisplayValue] = useState('');

	useEffect(() => {
		setOpen(isOpen);
	}, [isOpen]);

	const toggleDropdown = () => {
		setOpen(!open);
	};

	const handleItemClick = (id) => {
		const selectedItem = items.find(i => i.id === id);

		setDisplayValue(selectedItem.value);

		onFieldChange(id);
	};

	const getDisplayValue = () => {
		return isEmptyStirng(displayValue)
			? <span className={styles.dropdownItem_placeholder}>{placeholder}</span>
			: displayValue;
	};

	const dropDownContainer = classNames(
		{
			[styles.dropdown_containerOpen]: open
		},
		styles.dropdown_container
	);

	return (
		<div className={styles.dropdown}>
			<div
				className={styles.dropdown_selectArea}
				onClick={toggleDropdown}
			>
				{getDisplayValue()}
				<Icon
					className={styles.dropdown_icon}
					icon={open ? chevronUp : chevronDown}
					color={COLORS.FIELD_ICON}
				/>
			</div>
			<div className={dropDownContainer}>
				{
					items.map(item => {
						return (
							<DropDownItem
								key={item.id}
								value={item.value}
								id={item.id}
								handleItemClick={handleItemClick}
							/>
						);
					})
				}
			</div>
		</div>
	);
};

Dropdown.defaultProps = {
	isOpen: true,
	items: data,
	placeholder: '###Select',
};

Dropdown.propTypes = {
	items: PropTypes.array,
	isOpen: PropTypes.bool,
	placeholder: PropTypes.string,
	onFieldChange: PropTypes.func,
};

export { Dropdown };
