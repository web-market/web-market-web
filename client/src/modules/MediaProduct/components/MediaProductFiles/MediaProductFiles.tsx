import React, { useContext, useMemo, useEffect } from 'react';

import GridListSwitcher from '../../../../baseComponents/GridListSwitcher';
import MediaProductFilesHeader from './MediaProductFilesHeader';
import { PaddingBox } from '../../../../baseComponents/PaddingBox/PaddingBox';
import MediaProductFilesGridLayoutItem from './MediaProductFilesGridLayoutItem';
import MediaProductFilesListLayoutItem from './MediaProductFilesListLayoutItem';
import ScrollContainer from '../../../../baseComponents/ScrollContainer';

import { getUniqueKey, isNull } from '../../../../utils';
import classes from './styles/index.scss';
import { MediaProductContext } from '../../store/consts';

const MediaProductFiles = () => {
    const { mediaProductGrisLayout, activeCategoryId, mediaFiles, getMediaFilesInCategory } = useContext(MediaProductContext);

	useEffect(() => {
		if (!isNull(activeCategoryId)) {
            getMediaFilesInCategory(activeCategoryId);
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
			const key = getUniqueKey();

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
