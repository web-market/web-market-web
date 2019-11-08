import React from 'react';

import Button from '../../baseComponents/Button';
import GridLayout, { GridLayoutRow } from '../../baseComponents/GridLayout';

import { filter, chevronUp, plus } from '../../icons';

export const DevButton = () => {
	return (
		<GridLayout>
			<GridLayoutRow
				grid="1-1-1-1-1-1-1-1"
				gapColumn={1}
			>
				<Button
					type="primary"
					transparent
					icon={plus}
				/>
				<Button
					type="secondary"
					label="Secondary 😂"
					transparent
				/>
				<Button
					type="success"
					label="Success ❤"
					transparent
					icon={chevronUp}
				/>
				<Button
					type="danger"
					transparent
					icon={filter}
				/>
				<Button
					type="warning"
					label="Warning 🍋"
					transparent
					icon={chevronUp}
				/>
				<Button
					type="info"
					label="Info ℹ"
					transparent
				/>
				<Button
					type="light"
					label="Light"
					transparent
				/>
				<Button
					type="dark"
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
					type="primary"
					label="Primary"
					icon={filter}
				/>
				<Button
					type="secondary"
					label="Secondary"
					icon={chevronUp}
				/>
				<Button
					type="success"
					label="Success"
				/>
				<Button
					type="danger"
					label="Danger"
				/>
				<Button
					type="warning"
					label="Warning"
					icon={chevronUp}
				/>
				<Button
					type="info"
					label="Info"
				/>
				<Button
					type="light"
					label="Light"
					icon={chevronUp}
				/>
				<Button
					type="dark"
					label="Dark"
					icon={chevronUp}
				/>
			</GridLayoutRow>
		</GridLayout>
	);
};
