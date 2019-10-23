import React from 'react';

import GridLayout, { GridLayoutRow } from '../../baseComponents/GridLayout';

export const DevGridLayout = () => {
	return (
		<GridLayout>
			<GridLayoutRow
				grid="offset_1-4-offset_2-4"
				gapColumn={2}
			>
    	  <div>GridRow1</div>
				<div>GridRow2</div>
			</GridLayoutRow>
		</GridLayout>
	);
};
