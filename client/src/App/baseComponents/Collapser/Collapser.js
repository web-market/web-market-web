import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import { chevronDown, chevronUp } from '../../icons/icons';

import { isUndefined } from "../../utils";

import classNames from 'classnames';
import styles from './styles/index.scss';

const Collapser = ({ label, open, content, labelClassName, className }) => {
	const [isOpen, setIsOpen] = useState(open);
	const [height, setHeight] = useState(null);
	const collapserContentRef = useRef(content.ref);

	const setOpen = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		initCollapseContentHeight()
	});

	const initCollapseContentHeight = () => {
		const refObject = isUndefined(collapserContentRef.current.componentRef)
							? collapserContentRef.current
							: collapserContentRef.current.componentRef.current;

		isOpen ? setHeight(refObject.offsetHeight) : setHeight(0);
	};

	const componentClassName = classNames(
		className
	);

	const getCollapsedContent = () => {
		return (
			React.cloneElement(
				content,
				{
					ref: collapserContentRef
				}
			)
		)
	};

	return (
		<div className={componentClassName}>
			<div
				className={styles.collapser_header}
				onClick={setOpen}
			>
				<div className={labelClassName}>{label}</div>
				<Icon
					icon={isOpen ? chevronUp : chevronDown}
				/>
			</div>
			<div
				style={{ height }}
				className={styles.collapser_content}
			>
				{getCollapsedContent()}
			</div>
		</div>
	);
};

Collapser.defaultProps = {
	open: false,
};

Collapser.propTypes = {
	open: PropTypes.bool,
	className: PropTypes.string,
	labelClassName: PropTypes.string,
	label: PropTypes.string.isRequired,
	content: PropTypes.oneOfType([
		PropTypes.object.isRequired,
		PropTypes.array.isRequired,
	])


};

export { Collapser };
