import React, { useContext, useRef, useCallback } from 'react';
import { ContextForm } from './store/FormContext';

import { isUndefined } from '../../utils';

const Field = (props) => {
	const { name, component, validate } = props;
	const { changeField, setFormValues } = useContext(ContextForm);
	const isValid = useRef(true);

	const handleValidate = useCallback((val) => {
		if (isUndefined(validate)) return;

		const r = validate.map(f => f(val));

		isValid.current = !r.includes(false);
	}, [validate]);

	const handleChange = useCallback((value) => {
		handleValidate(value);

		const payload = {
			name,
			validationRules: validate,
			value,
			isValid: isValid.current
		};

		changeField(payload);
		setFormValues([payload]);
	}, [name, changeField, setFormValues, validate, handleValidate]);

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
