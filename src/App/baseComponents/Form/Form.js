import React, { useEffect, useContext } from 'react';
import { ContextForm } from './store/FormContext';

const Form = ({ children, name }) => {
	const { isValid, fields, formName, onSubmit, initForm } = useContext(ContextForm);

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

	return (
		<form onSubmit={handleFormSubmit}>
			{children}
		</form>
	);
};

export { Form };
