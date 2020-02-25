import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import Tooltip from '../../../../baseComponents/Tooltip';
import FiltersListItemTooltipActions from './FiltersListItemTooltipActions';
import Icon from '../../../../baseComponents/Icon';
import { exclamation } from '../../../../icons';
import classes from './styles/index.scss';

const FiltersList = (
	{
		id,
		name,
		displayName,
		handleFilterEdit,
		handleFilterDelete
	}
) => {
	const displayNameValue = useMemo(() => {
			return (
				<>
						<span className={classes.filtersListItem_displayName_separator}>|</span>
							{displayName}
						<Icon
							icon={exclamation}
							className={classes.filtersListItem_displayName_iconClassName}
						/>
				</>
			);
	}, [displayName]);

	return (
		<div className={classes.filtersListItem}>
			<div className={classes.filtersListItem_left}>
				{name}
				<div className={classes.filtersListItem_displayName}>
						<Tooltip
							tooltip={displayNameValue}
							message="Имя фильтра в магазине"
						/>
				</div>
			</div>
			<div className={classes.filtersListItem_right}>
				<FiltersListItemTooltipActions
					id={id}
					handleFilterEdit={handleFilterEdit}
					handleFilterDelete={handleFilterDelete}
				/>
			</div>
		</div>
	);
};

FiltersList.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	displayName: PropTypes.string,
	handleFilterEdit: PropTypes.func,
	handleFilterDelete: PropTypes.func
};

export default FiltersList;
