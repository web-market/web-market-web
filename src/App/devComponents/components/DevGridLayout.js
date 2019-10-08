import React from 'react';

import GridLayout, { GridLayoutRow } from '../../baseComponents/GridLayout';

export const DevGridLayout = () => {
	return (
		<GridLayout>
			<GridLayoutRow
				grid="8-offset_2-4"
				gapColumn={2}
			>
				<div>GridRow</div>
				<div>GridRow1</div>
			</GridLayoutRow>
		</GridLayout>
	);
};
