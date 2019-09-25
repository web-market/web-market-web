import React, { useEffect, useContext } from 'react';
import { ContextForm } from './store/FormContext';
import { isUndefined } from '../../utils';

const Form = ({ children, name, onSubmit }) => {
	const { fields, formName, initForm, validateRules } = useContext(ContextForm);

	useEffect(() => {
		const initData = {
			children,
			name
		};

		initForm(initData);
	}, [name, initForm, children]);

	const validate = () => {
		if (isUndefined(validateRules)) return;

		const r = [];

		validateRules.forEach((f) => {
			Object.entries(fields).forEach(([key, val]) => {
				r.push(f(val));
			});
		});

		return r.includes(false);
	};

	const handleFormSubmit = e => {
		e.preventDefault();

		if (validate()) return;

		onSubmit(fields);
	};

	return (
		<form onSubmit={handleFormSubmit}>
			{children}
		</form>
	);
};

export { Form };
