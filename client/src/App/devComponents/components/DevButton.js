import React from 'react';

import Button from '../../baseComponents/Button';
import GridLayout, { GridLayoutRow } from '../../baseComponents/GridLayout';

import { filter, chevronUp } from '../../icons/icons';

export const DevButton = () => {
	return (
		<GridLayout>
			<GridLayoutRow
				grid="1-1-1-1-1-1-1-1"
				gapColumn={1}
			>
				<Button
					primary
					label="Primary"
					transparent
				/>
				<Button
					secondary
					label="Secondary"
					transparent
				/>
				<Button
					success
					label="Success"
					transparent
				/>
				<Button
					danger
					label="Danger"
					transparent
				/>
				<Button
					warning
					label="Warning"
					transparent
				/>
				<Button
					info
					label="Info"
					transparent
				/>
				<Button
					light
					label="Light"
					transparent
				/>
				<Button
					dark
					label="Dark"
					transparent
				/>
			</GridLayoutRow>
			<GridLayoutRow
				grid="1-1-1-1-1-1-1-1"
				gapColumn={1}
			>
				<Button
					primary
					label="Primary"
					icon={filter}
				/>
				<Button
					secondary
					label="Secondary"
					icon={chevronUp}
				/>
				<Button
					success
					label="Success"
				/>
				<Button
					danger
					label="Danger"
				/>
				<Button
					warning
					label="Warning"
				/>
				<Button
					info
					label="Info"
				/>
				<Button
					light
					label="Light"
				/>
				<Button
					dark
					label="Dark"
				/>
			</GridLayoutRow>
		</GridLayout>
	);
};
