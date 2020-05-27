import React, { useContext, useMemo, useEffect, useState } from 'react';

import { MediaProductContext } from '../../consts';

import GridListSwitcher from '../../../../baseComponents/GridListSwitcher';
import MediaProductFilesHeader from './MediaProductFilesHeader';
import PaddingBox from '../../../../baseComponents/PaddingBox';
import MediaProductFilesGridLayoutItem from './MediaProductFilesGridLayoutItem';
import MediaProductFilesListLayoutItem from './MediaProductFilesListLayoutItem';
import ScrollContainer from '../../../../baseComponents/ScrollContainer';

import { getUniqueKey, isNull } from '../../../../utils';
import classes from './styles/index.scss';
import { getMediaFilesInCategory } from '../../api';

const MediaProductFiles = () => {
	const { mediaProductGrisLayout, activeCategoryId } = useContext(MediaProductContext);
	const [mediaFiles, setMediaFiles] = useState([]);

	useEffect(() => {
		if (!isNull(activeCategoryId)) {
			getMediaFilesInCategory(activeCategoryId)
			.then(({ data }) => setMediaFiles(data));
		}
	}, [activeCategoryId]);

	const filesListLayout = useMemo(() => {
		return mediaFiles.map(item => {
			const key = getUniqueKey(item.createdAtDate, item.id);

			if (item.files.length === 0) return;

			return (
				<MediaProductFilesListLayoutItem
					key={key}
					id={item.id}
					src={item.files[1].path}
					name={item.files[1].name}
				/>
			);
		});
	}, [mediaFiles]);

	const filesGridLayout = useMemo(() => {
		return mediaFiles.map(item => {
			const key = getUniqueKey(item.name, item.id);

			if (item.files.length === 0) return;

			return (
				<MediaProductFilesGridLayoutItem
					key={key}
					id={item.id}
					src={item.files[0].path}
					name={item.files[0].name}
				/>
			);
		});
	}, [mediaFiles]);

	return (
		<>
			<MediaProductFilesHeader />
			<PaddingBox
				small
				className={classes.mediaProductFiles}
			>
				<ScrollContainer>
					<GridListSwitcher
						displayGridLayout={mediaProductGrisLayout}
						listItemComponent={filesListLayout}
						gridItemComponent={filesGridLayout}
					/>
				</ScrollContainer>
			</PaddingBox>
		</>
	);
};

MediaProductFiles.propTypes = {};

export { MediaProductFiles };
