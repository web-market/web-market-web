import { isNullOrUndefined } from '../../../../utils';

export const getFieldsMetadataHook = (initialValues) => {
	if (isNullOrUndefined(initialValues) || isNullOrUndefined(initialValues.parentFolder)) {
		return {
			parentFolderId: {
				displayValue: ''
			}
		};
	}

	const {
		parentFolder
	} = initialValues;

	return {
		parentFolderId: {
			displayValue: parentFolder.name
		}
	};
};

export const getInitialValuesHook = (initialValues) => {
	if (isNullOrUndefined(initialValues)) return {};

	const {
		name,
		parentFolder
	} = initialValues;

	const parentFolderId = isNullOrUndefined(parentFolder) ? null : parentFolder.id;

	return {
		name,
		parentFolderId
	};
};
