import React, { useContext } from 'react';
import { ManufacturesContext } from './consts';

import ManufacturesContextProvider from './store';

import { AdminControlHeader } from '../../components/AdminControlHeader/AdminControlHeader';
import { GridLayoutRow, GridLayout } from '../../baseComponents/GridLayout';
import ManufacturesList from './components/ManufacturesList';
import ManufacturesAddManufacture from './components/ManufacturesAddManufacture';
import ManufacturesModalsProvider from './components/ManufacturesModalsProvider';


const Manufactures = () => {
	const { isPending } = useContext(ManufacturesContext);

	return (
		<>
			<AdminControlHeader label="!!Производители" />
			<GridLayout isPending={isPending}>
				<GridLayoutRow
					grid="7-5"
				>
					<ManufacturesList />
					<ManufacturesAddManufacture />
				</GridLayoutRow>
			</GridLayout>
		</>
	);
};

const ManufacturesWithProviders = () => (
	<ManufacturesContextProvider>
		<ManufacturesModalsProvider>
			<Manufactures />
		</ManufacturesModalsProvider>
	</ManufacturesContextProvider>
);

export { ManufacturesWithProviders };
