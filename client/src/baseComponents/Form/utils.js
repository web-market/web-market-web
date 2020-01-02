import validators from '../../utils/validators';
import { isUndefined } from '../../utils';

//TODO: need memoization
let validationRules;

//TODO: need memoization
const _getValidationRules = (fieldValidations) => {
	const validationRules = [];

	for (const func in fieldValidations) {
		if (fieldValidations.hasOwnProperty(func)) {
			validationRules.push({
				function: validators[func],
				params: fieldValidations[func]
			});
		}
	}

	return validationRules;
};

const _validateValue = (value, fieldValidations) => {
	if (isUndefined(validationRules)) {
		validationRules = _getValidationRules(fieldValidations);
	}

	return validationRules.map(validate => {
		return validate.function(value, validate.params);
	});
};

export const getValidationResult = (value, fieldValidations) => {
	const validationResult = _validateValue(value, fieldValidations);
	const errorMessages = [];
	let isValid = true;

	validationResult.forEach(result => {
		if (!result.isValid) {
			isValid = result.isValid;

			errorMessages.push(result.errorMessage);
		}
	});

	return {
		isValid,
		errorMessages
	};
};
