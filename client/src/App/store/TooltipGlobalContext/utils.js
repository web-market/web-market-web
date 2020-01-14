import React from 'react';
import ReactDOM from 'react-dom';

const baseStyles = {
	position: 'absolute',
	zIndex: 1,
	maxWidth: 150
};

const baseOffsetTop = 4;

const createTooltip = (tooltipRef, message) => {
	const tooltipPortalElem = document.getElementsByClassName('tooltipPortal');

	const {
		top,
		left,
		width,
		height
	} = tooltipRef.getBoundingClientRect();

	const style = {
		top: top + window.pageYOffset + height + baseOffsetTop,
		left,
	};

	ReactDOM.render(
		<div style={{ ...baseStyles, ...style }}>{message}</div>,
		tooltipPortalElem[0]
	);
};

const destroyTooltip = (message) => {
	ReactDOM.unmountComponentAtNode(message.ref.current);
};

export {
	createTooltip,
	destroyTooltip
};
