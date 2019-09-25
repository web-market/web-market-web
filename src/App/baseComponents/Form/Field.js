import React, { useContext, useEffect, useState } from 'react';
import { ContextForm } from './store/FormContext';

import { isUndefined } from '../../utils';

const Field = (props) => {
	const { name, component, validate } = props;
	const { changeFieldValue, setIsFormValid } = useContext(ContextForm);

	const [isValid, setValid] = useState(true);

	useEffect(() => {
		setIsFormValid(isValid);
	}, [isValid, setIsFormValid]);

	const handleValidate = (val) => {
		if (isUndefined(validate)) return;

		const result = validate.map(f => f(val));

		setValid(!result.includes(false));
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
