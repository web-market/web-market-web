import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import classes from './styles/index.scss';
import { Checkbox } from '../../../../baseComponents/Checkbox';
import { MediaProductContext } from '../../consts';

const MediaProductFilesGridLayoutItem = (
	{
		id,
		src,
		name
	}
) => {
	const { setSelectedImageId, deleteSelectedImageId } = useContext(MediaProductContext);

	const handleCheck = (value) => {
		if (value) {
			setSelectedImageId(id);
		} else {
			deleteSelectedImageId(id);
		}
	};

	return (
		<div className={classes.mediaProductFilesGridLayoutItem}>
			<Checkbox
				onFieldChange={value => handleCheck(value)}
				className={classes.mediaProductFilesGridLayoutItem_checkbox}
				iconClassName={classes.mediaProductFilesGridLayoutItem_checkboxIcon}
				iconCheckClassName={classes.mediaProductFilesGridLayoutItem_checkboxIcon__check}
			/>
			<img
				src={`http://localhost:8081/${src}`}
				alt={name}
				className={classes.mediaProductFilesGridLayoutItem_image}
			/>
			<div className={classes.mediaProductFilesGridLayoutItem_name}>
				{name}
			</div>
		</div>
	);
};

MediaProductFilesGridLayoutItem.propTypes = {
	id: PropTypes.number,
	src: PropTypes.string,
	name: PropTypes.string
};

export default MediaProductFilesGridLayoutItem;
