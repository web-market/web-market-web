import React, { useContext, useMemo } from 'react';

import { MediaProductContext } from '../../consts';

import GridListSwitcher from '../../../../baseComponents/GridListSwitcher';
import MediaProductFilesHeader from './MediaProductFilesHeader';
import PaddingBox from '../../../../baseComponents/PaddingBox';
import MediaProductFilesGridLayoutItem from './MediaProductFilesGridLayoutItem';
import MediaProductFilesListLayoutItem from './MediaProductFilesListLayoutItem';
import ScrollContainer from '../../../../baseComponents/ScrollContainer';

import { getUniqueKey } from '../../../../utils';
import classes from './styles/index.scss';

const MediaProductFiles = () => {
	const { mediaProductGrisLayout, images } = useContext(MediaProductContext);

	const filesListLayout = useMemo(() => {
		return images.map(item => {
			const key = getUniqueKey(item.name, item.id);

			return (
				<MediaProductFilesListLayoutItem
					key={key}
					id={item.id}
					src={item.url}
					name={item.name}
				/>
			);
		});
	}, []);

	const filesGridLayout = useMemo(() => {
		return images.map(item => {
			const key = getUniqueKey(item.name, item.id);

			return (
				<MediaProductFilesGridLayoutItem
					key={key}
					id={item.id}
					src={item.url}
					name={item.name}
				/>
			);
		});
	}, []);

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
