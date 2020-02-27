import React from 'react';
import PropTypes from 'prop-types';

import { getUniqueKey } from '../../utils';
import { getGridItemsStyles, getBaseGridStyles, getGridItems, isValidGrid } from './GridUtils';
import classes from './styles/index.scss';
import classNames from 'classnames';

const GridLayoutRow = (
	{
		grid,
		children,
		gapColumn,
		className,
		gridColumn
	}
	) => {
	const componentClassName = classNames(
		classes.gridLayout,
		className
	);

	const gridItems = getGridItems(grid);

	if (isValidGrid(gridItems, gridColumn)) {
		const gridItemsStyles = getGridItemsStyles(gridItems, gapColumn);

		return (
			<div className={componentClassName} style={getBaseGridStyles(gapColumn, gridColumn)}>
				{children.map((child, index) => {
					const key = getUniqueKey('griditem', index);

					return (
						<div key={key} style={gridItemsStyles[index]}>
							{child}
						</div>
					);
				})}
			</div>
		);
	}

	return (
		<div style={getBaseGridStyles(gapColumn)}>
			{children.map(child => child)}
		</div>
	);
};

GridLayoutRow.defaultProps = {
	gapColumn: 0,
	gridColumn: 12,
	grid: '',
};

GridLayoutRow.propTypes = {
	gapColumn: PropTypes.number,
	gridColumn: PropTypes.number,
	grid: PropTypes.string,
	className: PropTypes.string,
};

export { GridLayoutRow };
