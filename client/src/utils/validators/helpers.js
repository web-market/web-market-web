const prepareValidationResult = (validationTemplate) => {
	let isValid = true;
	let errorName = null;

	for (const result in validationTemplate) {
		if (validationTemplate.hasOwnProperty(result)) {
			if (!validationTemplate[result]) {
				isValid = validationTemplate[result];
				errorName = result;
			}
		}
	}

	return {
		isValid,
		errorName
	};
};

const prepareValidationMessage = (validationErrorName, validationRules) => {
	const { min, max, equal } = validationRules;

	const messages = {
		min: `!Минимамально значение: ${min}`,
		max: `!Максимальное значение: ${max}`,
		equal: `!Должно равнятся: ${equal}`,
		integer: '!Только целое число',
		number: '!Только число',
	};

	return messages[validationErrorName];
};

export {
	prepareValidationResult,
	prepareValidationMessage
};
