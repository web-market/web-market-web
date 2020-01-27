export const noScroll = (addStyle) => {
	const bodyElement = document.getElementsByTagName('body')[0];
	const { width } = bodyElement.getBoundingClientRect();

	if (addStyle) {
		bodyElement.style.cssText = `overflow: hidden; width: ${width}px`;
	} else {
		bodyElement.style.cssText = 'overflow: auto; width: auto';
	}
};
