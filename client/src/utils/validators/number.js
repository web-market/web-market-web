import { isUndefined } from '../isUndefined';
import { prepareValidationResult, prepareValidationMessage } from './helpers';

export const number = (value, validationRules) => {
	const { min, max, equal, integer } = validationRules;

	const validationTemplate = {
		min: true,
		max: true,
		equal: true,
		integer: true,
		number: false
	};

	if (((value * 1000) % 1) === 0) {
		validationTemplate.number = true;

		const numValue = +value;

		if (!isUndefined(min)) {
			validationTemplate.min = min < numValue;
		}
		if (!isUndefined(max)) {
			validationTemplate.max = max > numValue;
		}
		if (!isUndefined(equal)) {
			validationTemplate.equal = equal === numValue;
		}
		if (!isUndefined(integer)) {
			validationTemplate.integer = Number.isInteger(numValue);
		}
	}

	const validationResult = prepareValidationResult(validationTemplate);
	const errorMessage = prepareValidationMessage(validationResult.errorName, validationRules);

	return {
		isValid: validationResult.isValid,
		errorMessage
	};
};
