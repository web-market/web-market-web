import React, { useReducer, useCallback } from 'react';
import {
	INIT_FIELDS,
	INIT_FORM_NAME,
	CHANGE_FILED_VALUE,
	SET_FORM_VALID
} from './consts';
import { isFunction } from '../../../utils';

const ContextForm = React.createContext();

const initialState = {
	formName: '',
	fields: [],
	isValid: true,
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
				formName: action.name
			};
		case CHANGE_FILED_VALUE:
			return {
				...state,
				fields: { ...state.fields, ...action.obj }
			};
		case SET_FORM_VALID:
			return {
				...state,
				isValid: action.valid
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

	const changeFieldValue = useCallback(obj => {
		dispatch({
			type: CHANGE_FILED_VALUE,
			obj
		});
	}, []);

	const setIsFormValid = useCallback(valid => {
		dispatch({
			type: SET_FORM_VALID,
			valid
		});
	}, []);

	const initForm = useCallback(({ children, name }) => {
		initFields(children);
		initFormName(name);
	}, [initFields, initFormName]);

	return (
		<ContextForm.Provider value={{
			...state,
			initForm,
			changeFieldValue,
			setIsFormValid
		}}
		>
			{props.children}
		</ContextForm.Provider>
	);
}

export { ContextForm, ContextFormProvider };
