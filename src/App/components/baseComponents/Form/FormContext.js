import React, { useReducer, useCallback } from 'react';
import {
	INIT_FIELDS,
	INIT_FORM_NAME
} from './consts';
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
		case INIT_FORM_NAME:
			return {
				...state,
				name: action.name
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

	const initFormName = useCallback((name) => {
		dispatch({
			type: INIT_FORM_NAME,
			name
		});
	}, []);


	const initForm = useCallback(({ children, name }) => {
		initFields(children);
		initFormName(name);
	}, [initFields, initFormName]);

	return (
		<ContextForm.Provider value={{ ...state, initForm }}>
			{props.children}
		</ContextForm.Provider>
	);
}

export { ContextForm, ContextFormProvider };
