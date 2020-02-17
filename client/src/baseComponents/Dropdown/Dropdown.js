import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';

import { isEmptyStirng, isNullOrUndefined } from '../../utils';

import OverlayPoint from '../OverlayPoint';
import DropDownItem from './DropDownItem';
import DropDownSpinner from './DropDownSpinner';

import classes from './styles/index.scss';
import Icon from '../Icon';
import { angleDown, angleUp } from '../../icons';
import { COLORS } from '../../styles/baseColors';

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
		onDropdownClick
	}
) => {
	const dropdownRef = useRef(null);
	const [open, setOpen] = useState(false);
	const [displayValue, setDisplayValue] = useState('');

	const hasItems = items.length !== 0;

	useEffect(() => {
		setOpen(isOpen);
		if (displayValueFromProp !== '') {
			setDisplayValue(displayValueFromProp);
		}
	}, [isOpen, displayValueFromProp]);

	const toggleDropdown = useCallback(() => {
		if (!open) onDropdownClick();

		onFieldFocus(!open);
		setOpen(!open);
	}, [open, onDropdownClick, onFieldFocus]);

	const onItemSelect = useCallback((id) => {
		const selectedItem = items.find(i => i.id === id);

		setDisplayValue(selectedItem.name);

		onFieldChange(id);
	}, [items]);

	const handleItemClick = useCallback((id) => {
		onItemSelect(id);

		if (!multiSelect) {
			toggleDropdown();
		}
	}, [multiSelect, onItemSelect, toggleDropdown]);

	useEffect(() => {
		if (!isNullOrUndefined(value)) {
			onItemSelect(value);
		} else {
			setDisplayValue(placeholder);
		}
	}, [value]);

	const getDropdownItems = () => {
		return items.map(item => {
			return (
				<DropDownItem
					key={item.id}
					value={item.name}
					id={item.id}
					handleItemClick={handleItemClick}
				/>
			);
		});
	};

	const dropdownItems = () => {
		return hasItems
			? getDropdownItems()
			: (
				<DropDownItem
					key={-1}
					value="!пусто"
					id={-1}
				/>
			);
	};

	const getIcon = () => {
		return !isItemPending
			? (
				<Icon
					className={classes.dropdown_icon}
					icon={open ? angleUp : angleDown}
					color={COLORS.FIELD_ICON}
				/>
			) : (
				<DropDownSpinner
					className={classes.dropdown_icon}
				/>
			);
	};

	return (
		<div className={classes.dropdown}>
			<div
				ref={dropdownRef}
				className={classes.dropdown_selectArea}
				onClick={toggleDropdown}
			>
				{displayValue}
				{getIcon()}

			</div>
			{
				open && !isItemPending && (
					<OverlayPoint
						componentRef={dropdownRef.current}
						overlayBehavior="dropdown"
						render={
							({ parentWidth }) => {
								return (
									<div style={{ width: parentWidth }} className={classes.dropdown_container}>
										{dropdownItems()}
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
	items: [],
	placeholder: '###Select',
	displayValue: '',
	onDropdownClick: () => {},
	onFieldFocus: () => {}
};

Dropdown.propTypes = {
	items: PropTypes.array,
	isOpen: PropTypes.bool,
	multiSelect: PropTypes.bool,
	isItemPending: PropTypes.bool,
	placeholder: PropTypes.string,
	displayValue: PropTypes.string,
	onFieldChange: PropTypes.func,
	onDropdownClick: PropTypes.func,
	onFieldFocus: PropTypes.func,
};

export { Dropdown };
