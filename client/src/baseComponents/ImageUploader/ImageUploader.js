import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { getFileExtension, getFileName } from '../../utils';

import classes from './styles/index.scss';

const ImageUploader = ({
						name,
						multiple,
						allowedExtension
					}) => {
	const [uploadedFiles, setUploadedFiles] = useState([]);
	const inputRef = useRef();

	const handleImageUpload = (e) => {
		setUploadedFiles([...e.target.files]);
	};

	console.log(uploadedFiles);

	const getFileList = () => {
		if (uploadedFiles.length === 0) {
			return (
				<div>нет файлов</div>
			);
		}

		return uploadedFiles.map(file => {
			return (
				<div key={file.lastModified}>
					{getFileName(file.name)}
				</div>
			);
		});
	};

	return (
		<div>
			<input
				className={classes.imageUploader_input}
				type="file"
				name={name}
				onChange={handleImageUpload}
				multiple={multiple}
				ref={inputRef}
			/>
			<div
				onClick={() => inputRef.current.click()}
				className={classes.imageUploader_uploadButton}
			>
				Upload file
			</div>
			<div>
				{getFileList()}
			</div>
		</div>

	);
};

ImageUploader.defaultProps = {
	multiple: true
};

ImageUploader.propTypes = {
	multiple: PropTypes.bool,
	name: PropTypes.string,
	allowedExtension: PropTypes.string
};

export { ImageUploader };
