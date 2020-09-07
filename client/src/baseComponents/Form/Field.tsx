import React, { useContext, useRef, useCallback, useEffect, useState } from 'react';
import { ContextForm } from './store/consts';
import normalize from '../../utils/normalize';

import {
    validate as validateFromUtils
} from './utils';
import { isNullOrUndefined, isUndefined } from '../../utils';
import { normalizeRulesList, validationRulesList } from './const';

const Field = (props) => {
	const {
        name,
        component,
        validate,
        initialValue,
        normalize: fieldNormalize
	} = props;

	const {
		fields,
		formValues,
		setFieldValue,
		registerField,
		setFieldValidationResult
	} = useContext(ContextForm);

	const [hasFocus, setHasFocus] = useState(false);
	const isRegistered = useRef(false);
	const prevValue = useRef(null);

	useEffect(() => {
		registerField({
			name,
			validate,
			value: null,
			isValid: true,
			isTouched: false,
			errorMessages: [],
			hasValidationError: false
		});

		isRegistered.current = true;

		if (!isNullOrUndefined(initialValue)) {
            setFieldValue({
                [name]: initialValue
            });
        }

		return () => {
			isRegistered.current = false;
		};
        // @ts-ignore
	}, []);

	const validateField = useCallback(value => {
		if (isUndefined(validate) || prevValue.current === value) return;

		const validationResult = validateFromUtils(value, validate);

		prevValue.current = value;
		setFieldValidationResult(validationResult, name);
	}, [validate, setFieldValidationResult, name]);

	const getNormalizeValue = useCallback(value => {
        if (!isNullOrUndefined(validate) && validate[validationRulesList.number]) {
            value = normalize[normalizeRulesList.onlyNumbers](value);
        }

        if (!isNullOrUndefined(validate) && validate[validationRulesList.integer]) {
            value = normalize[normalizeRulesList.onlyInteger](value);
        }

        if (fieldNormalize.length !== 0) {
            fieldNormalize.forEach(normalizeMethodName => {
                value = normalize[normalizeMethodName](value);
            });
        }
        return value;
    }, [validate, fieldNormalize]);

	const handleChange = useCallback(value => {
        const normalizeValue = getNormalizeValue(value);

		validateField(value);

		setFieldValue({
			[name]: normalizeValue
		});
	}, [name, setFieldValue, validateField, getNormalizeValue]);

	const handleFieldFocus = (hasFocus) => {
		setHasFocus(hasFocus);
	};

	const Component = component;

	return (
		<>
			{
				isRegistered.current && (
					<Component
						isValid={fields[name]?.isValid}
						errorMessages={fields[name]?.errorMessages}
						onFieldChange={handleChange}
						onFieldFocus={handleFieldFocus}
						value={formValues[name]}
						hasFocus={hasFocus}
						{...props}
					/>
				)
			}
		</>
	);
};

Field.defaultProps = {
    normalize: []
};

export { Field };
