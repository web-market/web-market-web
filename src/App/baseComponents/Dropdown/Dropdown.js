import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import styles from './styles/index.scss';
import Icon	from '../Icon';
import { chevronDown, chevronUp } from '../../icons/icons';

import data from './dataModel';

const Dropdown = () => {
	const [open, setOpen] = useState(false);

	const toggleDropdown = () => {
		setOpen(!open);
	};

	return (
		<div className={styles.dropdown}>
			<div
				className={styles.dropdown_selectArea}
				onClick={toggleDropdown}
			>
				test
				<Icon
					className={styles.dropdown_icon}
					icon={open ? chevronUp : chevronDown}
				/>
			</div>
		</div>
	);
};

//Dropdown.PropTypes = {};

export { Dropdown };
