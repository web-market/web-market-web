export const actionLogger = (action, ommited) => {
	if (action !== ommited) console.log(`%c${action}`, 'color: green; font-size: 16px');
};
