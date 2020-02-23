import React, { useContext, useEffect } from 'react';
import { FiltersContext } from '../../store';

import { getUniqueKey } from '../../../../../utils';
import AdminControlContentBox from '../../../AdminControlContentBox';
import FiltersListItem from './FiltersListItem';
import PendingCloak from '../../../../../baseComponents/PendingCloak';
import classes from './styles/index.scss';

const FiltersList = () => {
	const { getFiltersList, isPending, filtersItems } = useContext(FiltersContext);

	useEffect(() => {
		getFiltersList();
	}, []);

	const handleFilterEdit = (id) => {
		console.log(id);
	};

	const handleDeleteEdit = (id) => {
		console.log(id);
	};

	return (
		<AdminControlContentBox
			margin={{ large: true }}
			className={classes.filtersList}
		>
			{isPending && (<PendingCloak />)}
			{
				filtersItems.map((filter, index) => {
					const key = getUniqueKey(filter.name, index);

					return (
						<FiltersListItem
							key={key}
							id={filter.id}
							name={filter.name}
							displayName={filter.displayName}
							handleFilterEdit={handleFilterEdit}
							handleDeleteEdit={handleDeleteEdit}
						/>
					);
				})
			}
		</AdminControlContentBox>
	);
};

export { FiltersList };
