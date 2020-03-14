import React from 'react';

import MediaProductModalsProvider from '../MediaProductModalsProvider';

import MediaProductFilesHeader from './MediaProductFilesHeader';
import PaddingBox from '../../../../baseComponents/PaddingBox';

import classes from './styles/index.scss';

const MediaProductFiles = () => {
	return (
		<>
			<MediaProductModalsProvider>
				<MediaProductFilesHeader />
			</MediaProductModalsProvider>
			<PaddingBox small>

			</PaddingBox>
		</>
	);
};

MediaProductFiles.propTypes = {};

export { MediaProductFiles };
