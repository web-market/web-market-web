import React, { useContext, useEffect, useState } from 'react';
import { ContextForm } from './FormContext';

const Field = (props) => {
	const { name, component, validate } = props;
	const { changeFieldValue, setIsFormValid } = useContext(ContextForm);

	const [isValid, setValid] = useState(true);

	useEffect(() => {
		setIsFormValid(isValid);
	}, [isValid, setIsFormValid]);

	const handleValidate = (val) => {
		console.log(validate);
		// if (required) {
		// 	return val ? setValid(true) : setValid(false);
		// }
	};

	const handleChange = (val) => {
		changeFieldValue({ [name]: val });

		handleValidate(val);
	};

	const Component = component;

	return (
		<Component
			isValid={isValid}
			onChange={handleChange}
			{...props}
		/>
	);
};

export { Field };
