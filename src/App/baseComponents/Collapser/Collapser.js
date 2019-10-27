import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import { chevronDown, chevronUp } from '../../icons/icons';

import classNames from 'classnames';
import styles from './styles/index.scss';

const Collapser = ({ label, open, content }) => {
	const [isOpen, setIsOpen] = useState(open);

	const setOpen = () => {
		setIsOpen(!isOpen);
	};

	const componentCollapserContentClassName = classNames(
		{
			[styles.collapser_content__close]: !isOpen,
			[styles.collapser_content__open]: isOpen
		},
		styles.collapser_content
	);

	return (
		<>
			<div
				className={styles.collapser_header}
				onClick={setOpen}
			>
				<div>{label}</div>
				<Icon
					icon={isOpen ? chevronUp : chevronDown}
				/>
			</div>
			<div
				className={componentCollapserContentClassName}
			>
				{ content }
			</div>
		</>
	);
};

Collapser.defaultProps = {
	open: false,
};

Collapser.propTypes = {
	label: PropTypes.string.isRequired,
	content: PropTypes.object.isRequired,
	open: PropTypes.bool
};

export { Collapser };
