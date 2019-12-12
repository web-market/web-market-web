import React, { useContext, useRef, useCallback, useEffect } from 'react';
import { ContextForm } from './store/FormContext';

import { isUndefined } from '../../utils';

const Field = (props) => {
	const { name, component, validate } = props;
	const { registerField, changeField, setFormValue } = useContext(ContextForm);
	const isValid = useRef(true);

	useEffect(() => {
		registerField({
			name,
			value: null,
		});
	}, []);

	// const handleValidate = useCallback((val) => {
	// 	if (isUndefined(validate)) return;
	//
	// 	const r = validate.map(f => f(val));
	//
	// 	isValid.current = !r.includes(false);
	// }, [validate]);

	const handleChange = useCallback((value) => {
		const field = {
			name,
			value
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
