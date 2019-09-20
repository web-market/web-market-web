import React, { useEffect, useContext } from 'react';
import { ContextForm } from './FormContext';

const Form = ({ children, name }) => {
	const { fields, formName, onSubmit, initForm } = useContext(ContextForm);

	useEffect(() => {
		const initData = {
			children,
			name
		};

		initForm(initData);
	}, [name, initForm, children]);

	const handleFormSubmit = (e) => {
		e.preventDefault();

		onSubmit(e);
	};

	console.log(fields);
	console.log(formName);

	return (
		<form onSubmit={handleFormSubmit}>
			{children}
		</form>
	);
};

export { Form };
