import React from 'react';
import PropTypes from 'prop-types';

import { isNumber } from '../../utils';

const GridLayoutRow = ({ children, grid, gapColumn, baseGrid }) => {
	const getGrid = () => {
		const gridSchema = [];
		const gridStyle = {
			display: 'grid',
			gridColumnGap: `${gapColumn}em`
		};

		// eslint-disable-next-line
		for (let i = 0; baseGrid > i; ++i) {
			gridSchema.push('1fr');
		}

		const gridProps = grid.split('-');

		const test = gridProps.map(g => {
			if (!isNumber(g)) {
				const gapCount = g.split('_')[1];

				return null;
			}

			return `${g}fr`;
		});

		gridStyle.gridTemplateColumns = gridSchema.join(' ');

		console.log(test);

		return { ...gridStyle };
	};

	return (
		<div style={getGrid()}>
			{ children }
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
