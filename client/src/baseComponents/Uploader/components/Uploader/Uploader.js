import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { UploaderContext } from './store/consts';
import { AppGlobalContext } from '../../../../App/store/AppGlobalContext';

import { isUndefined } from '../../../../utils';

import UploaderContextProvider from './store';

const Uploader = (
	{
		id,
		url,
		name,
		render,
		multiple,
		handleUploadProgress
	}
) => {
	const {
		addUploaderToGlobalContext,
		removeUploaderFromGlobalContext
	} = useContext(AppGlobalContext);

	const {
		files,
		addFile,
		removeFile,
		uploadFiles,
		changeFileName,
		removeAllFiles
	} = useContext(UploaderContext);

	const [showNoFilesMessage, setShowNoFilesMessage] = useState(false);

	const filesRef = useRef([]);

	useEffect(() => {
		addUploaderToGlobalContext({
			[name]: {
				upload: handleUploadFiles
			}
		});

		return () => {
			removeUploaderFromGlobalContext(name);
		};
	}, []);

	useEffect(() => {
		filesRef.current = files;

		return () => (filesRef.current = []);
	}, [files]);

	const handleAddFile = (e, fileList) => {
		e.preventDefault();

		if (files.length === 0) {
			setShowNoFilesMessage(false);
		}

		if (files.length < multiple) {
			if (!isUndefined(fileList) && fileList.length) {
				[...fileList].forEach(file => addFile(file));

				return;
			}

			[...e.target.files].forEach(file => addFile(file));
		}
	};

	const handleRemoveFile = (index) => {
		removeFile(index);
	};

	const handleChangeFileName = (name, index) => {
		changeFileName(name, index);
	};

	const handleUploadFiles = () => {
		return new Promise((resolve) => {
			return filesRef.current.length !== 0
				? resolve(uploadFiles(url, { id, files: filesRef.current }, handleUploadProgress))
				: setShowNoFilesMessage(true);
		});
	};

	return render({
		files,
		handleAddFile,
		removeAllFiles,
		handleRemoveFile,
		showNoFilesMessage,
		handleChangeFileName
	});
};

const UploaderWithContext = (
	{
		id,
		url,
		name,
		render,
		multiple,
		handleUploadProgress
	}
) => (
	<UploaderContextProvider>
		<Uploader
			id={id}
			url={url}
			name={name}
			render={render}
			multiple={multiple}
			handleUploadProgress={handleUploadProgress}
		/>
	</UploaderContextProvider>
);

Uploader.propTypes = {
	id: PropTypes.number,
	url: PropTypes.string,
	name: PropTypes.string,
	render: PropTypes.func,
	multiple: PropTypes.number,
	handleUploadProgress: PropTypes.func,
};

UploaderWithContext.defaultProps = {
	handleUploadProgress: () => {}
};

UploaderWithContext.propTypes = {
	id: PropTypes.number,
	url: PropTypes.string,
	name: PropTypes.string,
	render: PropTypes.func,
	multiple: PropTypes.number,
	handleUploadProgress: PropTypes.func,
};

export default UploaderWithContext;
