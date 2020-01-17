const baseOffset = 2;

const getOverlayPosition = (componentRef, layoutRef, position) => {
	const {
		top,
		left,
		width,
		height
	} = componentRef.getBoundingClientRect();

	const {
		width: contentWidth,
		height: contentHeight
	} = layoutRef.getBoundingClientRect();

	const definedPosition = {
		left: null,
		top: null
	};

	switch (position) {
		case 'top':
			definedPosition.left = left - (contentWidth / 2) + baseOffset;
			definedPosition.top = top - contentHeight - baseOffset;
			break;
		case 'top-left':
			definedPosition.left = left - contentWidth + baseOffset;
			definedPosition.top = top - contentHeight - baseOffset;
			break;
		case 'top-right':
			definedPosition.left = left + width + baseOffset;
			definedPosition.top = top - contentHeight - baseOffset;
			break;
		case 'left':
			definedPosition.left = left - contentWidth - baseOffset;
			definedPosition.top = top - (contentHeight / 2) + (height / 2);
			break;
		case 'right':
			definedPosition.left = left + width + baseOffset;
			definedPosition.top = top - (contentHeight / 2) + (height / 2);
			break;
		case 'bottom':
			definedPosition.left = left - (contentWidth / 2) + (width / 2);
			definedPosition.top = top + height + baseOffset;
			break;
		case 'bottom-left':
			definedPosition.left = left - contentWidth - baseOffset;
			definedPosition.top = top + height + baseOffset;
			break;
		case 'bottom-right':
			definedPosition.left = left + width + baseOffset;
			definedPosition.top = top + height + baseOffset;
			break;
		default:
			definedPosition.left = left;
			definedPosition.top = top + height;
	}

	return definedPosition;
};

export {
	getOverlayPosition
};
