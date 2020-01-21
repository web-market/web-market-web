import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';

import { isEmptyStirng, isNullOrUndefined } from '../../utils';

import OverlayPoint from '../OverlayPoint';
import DropDownItem from './DropDownItem';

import classes from './styles/index.scss';
import Icon from '../Icon';
import { chevronDown, chevronUp } from '../../icons';
import { COLORS } from '../../styles/baseColors';

const Dropdown = ({
					isOpen,
					items,
					placeholder,
					onFieldChange,
					multiSelect,
					value,
					onDropdownClick
}) => {
	const [open, setOpen] = useState(false);
	const [displayValue, setDisplayValue] = useState('');
	const dropdownRef = useRef(null);
	const hasItems = items.length !== 0;

	useEffect(() => {
		setOpen(isOpen);
	}, [isOpen]);

	const toggleDropdown = useCallback(() => {
		onDropdownClick();
		setOpen(!open);
	}, [open]);

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
		if (!isNullOrUndefined(value)) onItemSelect(value);
	}, [value, onItemSelect]);

	const getDisplayValue = () => {
		return isEmptyStirng(displayValue)
			? <div className={classes.dropdownItem_placeholder}>{placeholder}</div>
			: displayValue;
	};

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

	return (
		<div className={classes.dropdown}>
			<div
				ref={dropdownRef}
				className={classes.dropdown_selectArea}
				onClick={toggleDropdown}
			>
				{getDisplayValue()}
				<Icon
					className={classes.dropdown_icon}
					icon={open ? chevronUp : chevronDown}
					color={COLORS.FIELD_ICON}
				/>
			</div>
			{
				open && (
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
	onDropdownClick: () => {}
};

Dropdown.propTypes = {
	items: PropTypes.array,
	isOpen: PropTypes.bool,
	multiSelect: PropTypes.bool,
	placeholder: PropTypes.string,
	onFieldChange: PropTypes.func,
	onDropdownClick: PropTypes.func,
};

export { Dropdown };
