import React from 'react';

import Button from '../../baseComponents/Button';
import GridLayout, { GridLayoutRow } from '../../baseComponents/GridLayout';

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
					icon="chevron-up"
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
				/>
				<Button
					type="danger"
					transparent
					icon="bell"
				/>
				<Button
					type="warning"
					label="Warning 🍋"
					transparent
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
				/>
			</GridLayoutRow>
			<GridLayoutRow
				grid="1-1-1-1-1-1-1-1"
				gapColumn={1}
			>
				<Button
					type="primary"
					transparent
					icon="chevron-up"
					size="tiny"
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
				/>
				<Button
					type="danger"
					transparent
					icon="bell"
				/>
				<Button
					type="warning"
					label="Warning 🍋"
					transparent
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
				/>
			</GridLayoutRow>
			<GridLayoutRow
				grid="1-1-1-1-1-1-1-1"
				gapColumn={1}
			>
				<Button
					type="primary"
					label="Primary"
				/>
				<Button
					type="secondary"
					label="Secondary"
				/>
				<Button
					type="success"
					label="Success"
				/>
				<Button
					type="danger"
					label="Danger"
					icon="bell"
				/>
				<Button
					type="warning"
					label="Warning"
				/>
				<Button
					type="info"
					label="Info"
				/>
				<Button
					type="light"
					label="Light"
				/>
				<Button
					type="dark"
					label="Dark"
				/>
			</GridLayoutRow>
			<div style={{ display: 'flex' }}>
				<Button
					type="primary"
					transparent
					icon="chevron-up"
					size="tiny"
				/>
				<Button
					type="primary"
					transparent
					icon="bell"
					size="tiny"
				/>
			</div>
		</GridLayout>
	);
};
