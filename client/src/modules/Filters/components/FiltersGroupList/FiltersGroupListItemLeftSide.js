import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import Tooltip from '../../../../baseComponents/Tooltip';
import classes from './styles/index.scss';
import Icon from '../../../../baseComponents/Icon';
import { exclamation } from '../../../../icons';

const FiltersGroupListItemLeftSide = (
	{
		name,
		displayName
	}
) => {
	const displayNameValue = useMemo(() => {
		return (
			<>
				<span className={classes.filtersGroupListItem_displayName_separator}>|</span>
				{displayName}
				<Icon
					icon={exclamation}
					className={classes.filtersGroupListItem_displayName_iconClassName}
				/>
			</>
		);
	}, [displayName]);

	return (
		<div className={classes.filtersGroupListItem_left}>
			{name}
			<div className={classes.filtersGroupListItem_displayName}>
				<Tooltip
					tooltip={displayNameValue}
					message="Имя фильтра в магазине"
				/>
			</div>
		</div>
	);
};

FiltersGroupListItemLeftSide.propTypes = {
	name: PropTypes.string,
	displayName: PropTypes.string
};

export default FiltersGroupListItemLeftSide;
