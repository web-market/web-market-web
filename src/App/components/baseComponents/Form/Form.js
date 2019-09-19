import React, { useEffect, useContext, useMemo } from 'react';
import { ContextForm } from './FormContext';

const Form = ({ children }) => {
	const { fields, onSubmit, initFields } = useContext(ContextForm);

	useEffect(() => {
			initFields(children);
	}, [initFields, children]);

	const handleFormSubmit = (e) => {
		e.preventDefault();

		onSubmit(e);
	};

	console.log(fields);

	return (
		<form onSubmit={handleFormSubmit}>
			{children}
		</form>
	);
};

export { Form };
