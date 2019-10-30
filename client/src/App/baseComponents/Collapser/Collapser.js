import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import { chevronDown, chevronUp } from '../../icons/icons';

import styles from './styles/index.scss';

const Collapser = ({ label, open, content }) => {
	const [isOpen, setIsOpen] = useState(open);
	const [height, setheight] = useState(null);
	const collpserContentRef = useRef(content.ref);

	const setOpen = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		isOpen ? setheight(collpserContentRef.current.offsetHeight) : setheight(0);
	});

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
				style={{ height }}
				className={styles.collapser_content}
			>
				{
					React.cloneElement(
						content,
						{
							ref: collpserContentRef
						}
					)
				}
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
