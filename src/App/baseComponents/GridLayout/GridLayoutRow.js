import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles/index.scss';

const GridLayoutRow = ({ children, grid, gapColumn, baseGrid }) => {
	const componentClassName = classNames(
		styles.gridBox
	);

	const isGapDimension = (dimension) => {
		return dimension.split('_').length > 1;
	};

	const getGap = (gridProps) => { // toDo: refactoring
		return gridProps.split('_')[1];
	};

	const getBaseGrid = () => {
		const gridSchema = [];
		const gridStyle = {
			display: 'grid',
			gridColumnGap: `${gapColumn}em`
		};

		for (let i = 0; baseGrid > i; ++i) {
			gridSchema.push('1fr');
		}
		gridStyle.gridTemplateColumns = gridSchema.join(' ');
		return {...gridStyle};
	};

	const getGridItems = () => {
        return grid.split('-').reduce((propsObj, gridProps) => {
			if(isGapDimension(gridProps)) {
				propsObj.push({
					gap: Number(getGap(gridProps))
				});
			} else {
				propsObj.push({
					col: Number(gridProps)
				});
			}
			return propsObj;
		}, []);
	};

	const getGridItemsStyles = () => {
	    let gridItems = getGridItems();
	    console.log(gridItems);
	    let gridStyles = [];

	    for(let i = 0, counter = 1; i < gridItems.length; i++) {
            if(Object.keys(gridItems[i]) == 'col') {
                gridStyles.push({
                    gridColumnStart: counter,
                    gridColumnEnd: counter + gridItems[i].col
                });
                counter += gridItems[i].col;
            } else if(Object.keys(gridItems[i]) == 'gap') {
                counter += gridItems[i].gap;
            }
        }
        return gridStyles;
    };

	const isValidGrid = (grid) => {
		return grid.split('-').reduce((counter, gridProps) => {
			counter += gridProps;
			return counter;
		}, 0) <= 12;
	};

	console.log(getGridItemsStyles());
    let gridItemsStyles = getGridItemsStyles();
    let gridRow;
    // if(isValidGrid(grid)) {
    // 	gridRow =
	// 		<div style={getGrid()}>
	// 			{
	// 				children.map((child, index) => {
	// 					return <div style={gridItemsStyles[index]}>{child}</div>
	// 				})
	// 			}
	// 		</div>
	// } else {
	// 	gridRow =
	// 		<div style={getBaseGrid()}>
	// 			{
	// 				children.map((child) => {
	// 					return <div>{child}</div>
	// 				})
	// 			}
	// 		</div>
	// }
	// return gridRow;
	return (
		<div className={componentClassName}>
			{
				children.map((child, index) => {
					return <div style={gridItemsStyles[index]}>{child}</div>
				})
			}
		</div>
	);
};

GridLayoutRow.defaultProps = {
	baseGrid: 12,
	gapColumn: 1
};

GridLayoutRow.propTypes = {
	baseGrid: PropTypes.number,
	gapColumn: PropTypes.number,
	grid: PropTypes.string
};

export { GridLayoutRow };
