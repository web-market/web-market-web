import React from 'react';
import PropTypes from 'prop-types';

import classes from './styles/index.scss';
import { ListHeaderTooltip } from './ListHeaderTooltip';

const ListHeader = (
	{
		children,
		actionList
	}
) => {
	return (
		<div className={classes.listHeader}>
			{
				actionList.length !== 0 && (
					<ListHeaderTooltip
						actionList={actionList}
					/>
				)
			}
			{children}
		</div>
	);
};

ListHeader.defaultProps = {
	actionList: []
};

ListHeader.propTypes = {
	actionList: PropTypes.array
};

export { ListHeader };
