import React, { useEffect, useContext } from 'react';
import { ContextForm } from './FormContext';

const Form = ({ children }) => {
	const { fields, name, onSubmit, initForm } = useContext(ContextForm);

	useEffect(() => {
		const initData = {
			children,
			name: 'testForm'
		};

		initForm(initData);
	}, [initForm, children]);

	const handleFormSubmit = (e) => {
		e.preventDefault();

		onSubmit(e);
	};

	console.log(fields);
	console.log(name);

	return (
		<form onSubmit={handleFormSubmit}>
			{children}
		</form>
	);
};

export { Form };
