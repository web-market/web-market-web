import React from 'react';

import GridLayout, { GridLayoutRow } from '../../baseComponents/GridLayout';
import { Padding } from '../../baseComponents/Padding';

export const DevGridLayout = () => {
	return (
		<GridLayout>
			<GridLayoutRow
				grid="8-offset_2-4"
				gapColumn={2}
			>
				<Padding p={2} dimension={'em'}>
					<div>GridRow</div>
				</Padding>

				<div>GridRow1</div>
			</GridLayoutRow>
		</GridLayout>
	);
};
