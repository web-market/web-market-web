import React from 'react';

import ManufacturesContextProvider from './store';

import AdminControlHeader from '../../components/AdminControlHeader';
import GridLayout, { GridLayoutRow } from '../../baseComponents/GridLayout';
import ManufacturesList from './components/ManufacturesList';
import ManufacturesAddManufacture from './components/ManufacturesAddManufacture';
import ManufacturesModalsProvider from './components/ManufacturesModalsProvider';


const Manufactures = () => {
	return (
		<>
			<AdminControlHeader label="!!Производители" />
			<ManufacturesContextProvider>
				<GridLayout>
					<GridLayoutRow
						grid="7-5"
					>
						<ManufacturesModalsProvider>
							<ManufacturesList />
						</ManufacturesModalsProvider>
						<ManufacturesAddManufacture />
					</GridLayoutRow>
				</GridLayout>
			</ManufacturesContextProvider>
		</>
	);
};

export { Manufactures };
