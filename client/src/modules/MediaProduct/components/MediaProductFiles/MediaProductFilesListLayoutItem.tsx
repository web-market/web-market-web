import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '../../../../baseComponents/Checkbox';

import classes from './styles/index.scss';
import { MediaProductContext } from '../../store/consts';

const MediaProductFilesListLayoutItem = (
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
		<div className={classes.mediaProductFilesListLayoutItem}>
			<Checkbox
				onFieldChange={value => handleCheck(value)}
				className={classes.mediaProductFilesListLayoutItem_checkbox}
				iconClassName={classes.mediaProductFilesListLayoutItem_checkboxIcon}
				iconCheckClassName={classes.mediaProductFilesListLayoutItem_checkboxIcon__check}
			/>
			<img
				src={`http://localhost:8081/${src}`}
				alt={name}
				className={classes.mediaProductFilesListLayoutItem_image}
			/>
			<div>
				{name}
			</div>
		</div>
	);
};

MediaProductFilesListLayoutItem.propTypes = {
	id: PropTypes.number,
	src: PropTypes.string,
	name: PropTypes.string
};

export default MediaProductFilesListLayoutItem;
