import React, { useContext } from 'react';
import { ContextForm } from './FormContext';

const Field = (props) => {
	const { name, component } = props;
	const { changeFieldValue } = useContext(ContextForm);

	const handleChange = (val) => {
		changeFieldValue({ [name]: val });
	};

	const Component = React.cloneElement(
		component,
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
