import React, { useContext, useRef, useCallback, useEffect } from 'react';
import { ContextForm } from './store/FormContext';

const Field = (props) => {
	const { name, component, validate } = props;
	const { registerField, changeField, setFormValue } = useContext(ContextForm);
	const isValid = useRef(true);

	useEffect(() => {
		registerField({
			name,
			value: null,
			validate
		});
	}, []);

	const handleChange = useCallback((value) => {
		const field = {
			name,
			value,
			validate
		};

		changeField(field);
		setFormValue(field);
	}, [name, changeField, setFormValue, validate]);

	const Component = component;

	return (
		<Component
			isValid={isValid.current}
			onFieldChange={handleChange}
			{...props}
		/>
	);
};

export { Field };
