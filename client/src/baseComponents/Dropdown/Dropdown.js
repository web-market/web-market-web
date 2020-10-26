import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';

import ScrollContainer from '../ScrollContainer';
import { Icon } from '../Icon/Icon';

import OverlayPoint from '../OverlayPoint';
import DropDownItem from './DropDownItem';
import LoadSpinner from '../LoadSpinner';

import classes from './styles/index.scss';
import { angleDown, angleUp } from '../../icons';
import { COLORS } from '../../styles/baseColors';
import { isNull, isNullOrUndefined, removeArrayElementByValue } from '../../utils';
import ClassNames from 'classnames';

const Dropdown = (
	{
		items,
		value,
		isOpen,
		placeholder,
		multiSelect,
		displayValue: displayValueFromProp,
		onFieldFocus,
		onFieldChange,
		isItemPending,
		onDropdownClick,
		hasDefaultValue,
		onItemSelected
	}
) => {
	const dropdownRef = useRef(null);
	const multiSelectValuesRef = useRef([]);
	const [open, setOpen] = useState(false);
	const [displayValue, setDisplayValue] = useState('');
	const [selectedValue, setSelectedValue] = useState('');

	const hasItems = items.length !== 0;
	const hasSelectedValue = !isNullOrUndefined(value);

	useEffect(() => {
		if (!hasSelectedValue) {
			setDisplayValue(placeholder);
		}

		if (!multiSelect && !isNullOrUndefined(value)) {
			onItemSelect(value);
		}

		if (multiSelect && !isNullOrUndefined(value)) {
			onMultiselectItemSelect(value, null);
		}
	}, [value, hasSelectedValue, placeholder, multiSelect]);

	const toggleDropdown = useCallback(() => {
		if (!open) onDropdownClick();

		onFieldFocus(!open);
		setOpen(!open);
	}, [open, onDropdownClick, onFieldFocus]);

	const getMultiSelectedItemsNames = () => {
		const names = [];

		multiSelectValuesRef.current.forEach(itemId => {
			items.forEach(i => {
				if (i.id === itemId) {
					names.push(i.name);
				}
			});
		});

		return names.length !== 0 ? names : [placeholder];
	};

	const onItemSelect = useCallback((id) => {
		if (hasItems) {
			const selectedItem = items.find(i => i.id === id);

			setDisplayValue(selectedItem.name);
			setSelectedValue(id);
			onFieldChange(id);
			onItemSelected(id);
		}

		if (!hasItems && hasSelectedValue) {
			setSelectedValue(value);
			setDisplayValue(displayValueFromProp);
		}
	}, [items, value, onFieldChange, onItemSelected, hasItems, displayValueFromProp, hasSelectedValue]);

	const onMultiselectItemSelect = useCallback((id, isChecked) => {
		if (hasItems) {
			const isItemSelected = multiSelectValuesRef.current.includes(id);

			if (isChecked && !isItemSelected) {
				multiSelectValuesRef.current.push(id);
			}

			if (!isChecked && isItemSelected) {
				multiSelectValuesRef.current = removeArrayElementByValue(multiSelectValuesRef.current, id);
			}

			if (id.length > 1 && isNull(isChecked)) {
				multiSelectValuesRef.current = id;
			}

			const selectedItemsNames = getMultiSelectedItemsNames();

			setDisplayValue(selectedItemsNames.join(', '));
			onFieldChange(multiSelectValuesRef.current);
			onItemSelected(id, isChecked);
		}

		if (!hasItems && hasSelectedValue) {
			setDisplayValue(displayValueFromProp);
		}
	}, [hasItems, hasSelectedValue, getMultiSelectedItemsNames, onFieldChange, onItemSelected, displayValueFromProp]);

	const handleItemClick = useCallback((id, isChecked) => {
		if (!multiSelect) {
			onItemSelect(id);
			toggleDropdown();
		} else {
			onMultiselectItemSelect(id, isChecked);
		}
	}, [multiSelect, onItemSelect, onMultiselectItemSelect, toggleDropdown]);

	const getDropdownItems = useMemo(() => {
		if (hasDefaultValue) {
			items.unshift({
				name: '!!пусто',
				id: null
			});
		}

		return items.map(item => {
			const isChecked = multiSelectValuesRef.current.includes(item.id);

			return (
				<DropDownItem
					key={item.id}
					value={item.name}
					isChecked={isChecked}
					id={item.id}
					selectedValue={selectedValue}
					handleItemClick={handleItemClick}
					multiSelect={multiSelect}
				/>
			);
		});
	}, [hasDefaultValue, items, selectedValue, handleItemClick, multiSelect]);

	const dropdownItems = useMemo(() => {
		return hasItems
			? getDropdownItems
			: (
				<DropDownItem
					key={-1}
					value="!пусто"
					id={null}
				/>
			);
	}, [getDropdownItems, hasItems]);

	const getIcon = () => {
		return !isItemPending
			? (
				<Icon
					className={classes.dropdown_icon}
					icon={open ? angleUp : angleDown}
					color={COLORS.FIELD_ICON}
				/>
			) : (
				<LoadSpinner
					className={classes.dropdown_icon}
				/>
			);
	};

	const dropdownItemClassName = ClassNames(
		{
			[classes.dropdownItem_value]: hasSelectedValue,
			[classes.dropdownItem_placeholder]: !hasSelectedValue
		}
	);

	return (
		<div className={classes.dropdown}>
			<div
				ref={dropdownRef}
				onClick={toggleDropdown}
				className={classes.dropdown_selectArea}
			>
				<div className={dropdownItemClassName}>{displayValue}</div>
				{getIcon()}

			</div>
			{
				open && !isItemPending && (
					<OverlayPoint
						componentRef={dropdownRef.current}
						overlayBehavior="dropdown"
						onClose={toggleDropdown}
						render={
							({ parentWidth }) => {
								return (

										<div style={{ width: parentWidth }} className={classes.dropdown_container}>
											<ScrollContainer>
												{dropdownItems}
											</ScrollContainer>
										</div>

								);
							}
						}
					/>
				)
			}
		</div>
	);
};

Dropdown.defaultProps = {
	isOpen: false,
	multiSelect: false,
	hasDefaultValue: false,
	items: [],
	placeholder: '###пусто',
	displayValue: '',
	onDropdownClick: () => {},
	onFieldFocus: () => {},
	onItemSelected: () => {}
};

Dropdown.propTypes = {
	items: PropTypes.array,
	isOpen: PropTypes.bool,
	multiSelect: PropTypes.bool,
	isItemPending: PropTypes.bool,
	hasDefaultValue: PropTypes.bool,
	placeholder: PropTypes.string,
	displayValue: PropTypes.string,
	onFieldChange: PropTypes.func,
	onItemSelected: PropTypes.func,
	onDropdownClick: PropTypes.func,
	onFieldFocus: PropTypes.func,
};

export { Dropdown };
