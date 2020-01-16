import React from 'react';
import ReactDOM from 'react-dom';

import { TOOLTIP_PORTAL, TOOLTIP_WRAPPER } from './consts';

const baseOffset = 4;
const tooltipPortalElem = document.getElementsByClassName(TOOLTIP_PORTAL);

const _getTooltipPosition = (tooltipRef, contentWidth, contentHeight, position) => {
	const {
		top,
		left,
		width,
		height
	} = tooltipRef.getBoundingClientRect();

	const definedPosition = {
		left: null,
		top: null
	};

	console.log(position);

	console.log(width);
	console.log(height);
	console.log(contentWidth);
	console.log(contentHeight);


	switch (position) {
		case 'top-center':
			definedPosition.left = left - (contentWidth / 2) + (width / 2);
			definedPosition.top = top - contentHeight - baseOffset + window.pageYOffset;
	}

	return definedPosition;
};

const _setTooltipPosition = (tooltipRef, tooltipContentPosition) => {
	const tooltipContentWrapperElem = document.getElementsByClassName(TOOLTIP_WRAPPER);
	const tooltipContentElem = tooltipContentWrapperElem[0].children;

	console.log(tooltipContentWrapperElem);
	console.log(tooltipContentElem);

	const tooltipContentElemWidth = tooltipContentElem[0].offsetWidth;
	const tooltipContentElemHeight = tooltipContentElem[0].offsetHeight;

	const tooltipPosition = _getTooltipPosition(
								tooltipRef,
								tooltipContentElemWidth,
								tooltipContentElemHeight,
								tooltipContentPosition
							);

	console.log(tooltipPosition);

	const position = `
		top: ${tooltipPosition.top}px;
		left: ${tooltipPosition.left}px;
		position: fixed;
		z-index: 1;
	`;

	tooltipContentWrapperElem[0].style.cssText = position;
};

const createTooltip = (
	tooltipRef,
	tooltipContent,
	tooltipContentPosition = null
) => {
	ReactDOM.render(
		<div className={TOOLTIP_WRAPPER}>{tooltipContent}</div>,
		tooltipPortalElem[0],
		() => _setTooltipPosition(tooltipRef, tooltipContentPosition)
	);
};

const destroyTooltip = () => {
	ReactDOM.unmountComponentAtNode(tooltipPortalElem[0]);
};

export {
	createTooltip,
	destroyTooltip
};
