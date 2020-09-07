import React, { FC } from 'react';

import { getUniqueKey } from '../../utils';
import { getGridItemsStyles, getBaseGridStyles, getGridItems, isValidGrid } from './GridUtils';
import classes from './styles/index.scss';
import classNames from 'classnames';

export type GridLayoutRowPropsType = {
    grid?: string,
    gapColumn?: number,
    gridColumn?: number,
    className?: string,
    alignItems?: string,
    children?: any
}

const GridLayoutRow:FC<GridLayoutRowPropsType> = (
	{
		grid,
		children,
		gapColumn,
		className,
		alignItems,
		gridColumn
	}
) => {
	const componentClassName = classNames(
		classes.gridLayoutRow,
		className
	);

	const gridItems = getGridItems(grid);

	if (isValidGrid(gridItems, gridColumn)) {
		const gridItemsStyles = getGridItemsStyles(gridItems);

		return (
			<div className={componentClassName} style={getBaseGridStyles({ gapColumn, gridColumn, alignItems })}>
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
		<div style={getBaseGridStyles({ gapColumn, gridColumn, alignItems })}>
			{children.map(child => child)}
		</div>
	);
};

GridLayoutRow.defaultProps = {
	gapColumn: 0,
	gridColumn: 12,
	grid: '',
    className: '',
	alignItems: 'start',
};

export { GridLayoutRow };
