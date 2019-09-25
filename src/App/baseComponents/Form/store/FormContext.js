import React, { useReducer, useCallback } from 'react';
import {
	INIT_FIELDS,
	INIT_FORM_NAME,
	CHANGE_FILED_VALUE,
	SET_FORM_VALID,
	SET_FORM_VALIDATION_RULES
} from './consts';
import { isFunction, isUndefined } from '../../../utils';

const ContextForm = React.createContext();

const initialState = {
	formName: '',
	fields: [],
	validateRules: [],
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
		case SET_FORM_VALIDATION_RULES:
			return {
				...state,
				validateRules: action.initialValidationRules
			};
	}
};

function ContextFormProvider (props) {
	const [state, dispatch] = useReducer(reducer, initialState);

	const initFields = useCallback((elems) => {
		const fields = elems.filter((e) => isFunction(e.type));

		const initialFields = {};
		const initialValidationRules = [];

		fields.forEach(field => {
			initialFields[field.props.name] = null;

			if (isUndefined(field.props.validate)) return;

			field.props.validate.map(f => initialValidationRules.push(f));
		});

		dispatch({
			type: INIT_FIELDS,
			initialFields
		});
	}, []);

	const initValidationRules = useCallback((elems) => {
		const fields = elems.filter((e) => isFunction(e.type));

		const initialValidationRules = [];

		fields.forEach(field => {
			if (isUndefined(field.props.validate)) return;

			field.props.validate.forEach(f => {
				if (initialValidationRules.length === 0) {
					initialValidationRules.push(f);
				} else {
					initialValidationRules.forEach(t => {
						if (t.name !== f.name) {
							initialValidationRules.push(f);
						}
					});
				}
			});
		});

		dispatch({
			type: SET_FORM_VALIDATION_RULES,
			initialValidationRules
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
		initValidationRules(children);
		initFormName(name);
	}, [initValidationRules, initFields, initFormName]);

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
