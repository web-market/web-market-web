import {
	SET_PENDING,
	CHANGE_FILE_NAME,
	REMOVE_ALL_FILES,
	ADD_FILE_TO_QUEUE,
	REMOVE_FILE_FROM_QUEUE
} from './consts';

import { uploadFiles as uploadFilesAPI } from '../api';

export default (dispatch) => {
	const addFile = (file) => {
		dispatch({
			type: ADD_FILE_TO_QUEUE,
			file
		});
	};

	const removeFile = (index) => {
		dispatch({
			type: REMOVE_FILE_FROM_QUEUE,
			index
		});
	};

	const changeFileName = (name, index) => {
		dispatch({
			type: CHANGE_FILE_NAME,
			name,
			index
		});
	};

	const removeAllFiles = () => {
		dispatch({
			type: REMOVE_ALL_FILES,
		});
	};

	const setPending = (pending) => {
		dispatch({
			type: SET_PENDING,
			pending
		});
	};

	const uploadFiles = (url, data, handleUploadProgress) => {
		const formData = new FormData();
		formData.append('id', data.id);
		formData.append('files', data.files);

		// data.files.forEach((file, index) => {
		// 	formData.append('files[]', file);
		// });

		return uploadFilesAPI(url, formData, handleUploadProgress);
	};

	return {
		addFile,
		removeFile,
		setPending,
		uploadFiles,
		removeAllFiles,
		changeFileName
	};
};
