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
import { isNullOrUndefined } from '../../utils';
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
		hasDefaultValue
	}
) => {
	const dropdownRef = useRef(null);
	const [open, setOpen] = useState(false);
	const [displayValue, setDisplayValue] = useState('');
	const [selectedValue, setSelectedValue] = useState('');

	const hasItems = items.length !== 0;
	const hasSelectedValue = isNullOrUndefined(value);

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
		setSelectedValue(id);
		onFieldChange(id);
	}, [items, onFieldChange]);

	const handleItemClick = useCallback((id) => {
		onItemSelect(id);

		if (!multiSelect) {
			toggleDropdown();
		}
	}, [multiSelect, onItemSelect, toggleDropdown]);

	useEffect(() => {
		if (hasSelectedValue) {
			setDisplayValue(placeholder);
		} else {
			onItemSelect(value);
		}
	}, [value, hasSelectedValue, placeholder]);

	const getDropdownItems = useMemo(() => {
		if (hasDefaultValue) {
			items.unshift({
				name: '!!пусто',
				id: null
			});
		}

		return items.map(item => {
			return (
				<DropDownItem
					key={item.id}
					value={item.name}
					id={item.id}
					selectedValue={selectedValue}
					handleItemClick={handleItemClick}
				/>
			);
		});
	}, [items, handleItemClick, hasDefaultValue]);

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
	}, [getDropdownItems, hasItems, selectedValue]);

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
			[classes.dropdownItem_value]: !hasSelectedValue,
			[classes.dropdownItem_placeholder]: hasSelectedValue
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
	onFieldFocus: () => {}
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
	onDropdownClick: PropTypes.func,
	onFieldFocus: PropTypes.func,
};

export { Dropdown };
