import React from 'react';

const Field = (props) => {
	const handleChange = (val) => {
		console.log(val);
	};

	const Component = React.cloneElement(
		props.component,
		{
			onChange: handleChange,
			...props
		}
	);

	return (
		Component
	);
};

export { Field };
