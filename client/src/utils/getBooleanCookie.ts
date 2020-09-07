export const getBooleanCookie: (value: string) => string | boolean = (val) => {
	return val === 'true';
};
