import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/index.scss';
import classNames from 'classnames';
import { getGridItemsStyles, getBaseGridStyles, getGridItems, isValidGrid } from './GridUtils';

const GridLayoutRow = ({ children, grid, gapColumn }) => {
	const componentClassName = classNames(
		styles.gridBox
	);
	const gridItems = getGridItems(grid);
	if (isValidGrid(gridItems)) {
		const gridItemsStyles = getGridItemsStyles(gridItems, gapColumn);
		return (
			<div className={componentClassName} style={{ gridColumnGap: `${gapColumn}em` }}>
				{children.map((child, index) => {
					const key = `griditem_${index}`;

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
	gapColumn: 1,
	grid: '',
};

GridLayoutRow.propTypes = {
	gapColumn: PropTypes.number,
	grid: PropTypes.string,
};

export { GridLayoutRow };
