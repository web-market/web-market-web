const baseOffset = 2;

const _getPositionValues = (componentRef, layoutRef) => {
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

	return {
		top,
		left,
		width,
		height,
		contentWidth,
		contentHeight
	};
};

const getGeneralPosition = (componentRef, layoutRef, position) => {
	const {
		top,
		left,
		width,
		height,
		contentWidth,
		contentHeight
	} = _getPositionValues(componentRef, layoutRef);

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

const getDropdownPosition = (componentRef, layoutRef) => {
	const {
		top,
		left,
		height
	} = _getPositionValues(componentRef, layoutRef);

	// -1 --magic number to set dropddown container position based on dropdown component
	// (because of border)
	return {
		left: left - 1,
		top: top + height + 1
	};
};

export {
	getGeneralPosition,
	getDropdownPosition
};
