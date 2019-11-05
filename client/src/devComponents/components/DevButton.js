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
					label="Primary 🦄"
					transparent
					icon={chevronUp}
				/>
				<Button
					secondary
					label="Secondary 😂"
					transparent
				/>
				<Button
					success
					label="Success ❤"
					transparent
					icon={chevronUp}
				/>
				<Button
					danger
					label="Danger 🔥"
					transparent
					icon={filter}
				/>
				<Button
					warning
					label="Warning 🍋"
					transparent
					icon={chevronUp}
				/>
				<Button
					info
					label="Info ℹ"
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
					icon={chevronUp}
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
					icon={chevronUp}
				/>
				<Button
					info
					label="Info"
				/>
				<Button
					light
					label="Light"
					icon={chevronUp}
				/>
				<Button
					dark
					label="Dark"
					icon={chevronUp}
				/>
			</GridLayoutRow>
		</GridLayout>
	);
};
