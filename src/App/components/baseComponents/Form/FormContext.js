import React, { useReducer, useCallback } from 'react';
import { INIT_FIELDS } from './consts';
import { isFunction } from '../../../utils';

const ContextForm = React.createContext();

const initialState = {
	name: '',
	fields: [],

};

const reducer = (state, action) => {
	switch (action.type) {
		case INIT_FIELDS:
			return {
				...state,
				fields: { ...action.initialFields }
			};
		case 'decrement':
			return {
				...state,
				count: state.count - 1
			};
		case 'set-color':
			return {
				...state,
				currentColor: action.payload
			};
	}
};

function ContextFormProvider (props) {
	const [state, dispatch] = useReducer(reducer, initialState);

	const initFields = useCallback((elems) => {
		const fields = elems.filter((e) => isFunction(e.type));

		const initialFields = {};

		fields.forEach(field => {
			initialFields[field.props.name] = null;
		});

		dispatch({
			type: INIT_FIELDS,
			initialFields
		});
	}, []);

	const initForm = (children) => {
		console.log(children);
	};

	return (
		<ContextForm.Provider value={{ ...state, initForm, initFields }}>
			{props.children}
		</ContextForm.Provider>
	);
}

export { ContextForm, ContextFormProvider };
