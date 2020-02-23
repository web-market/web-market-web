import React, { useContext, useEffect } from 'react';
import { FiltersContext } from '../../store';

import { getUniqueKey } from '../../../../../utils';
import AdminControlContentBox from '../../../AdminControlContentBox';
import FiltersListItem from './FiltersListItem';
import PendingCloak from '../../../../../baseComponents/PendingCloak';
import classes from './styles/index.scss';

const FiltersList = () => {
	const {
		isPending,
		filtersItems,
		deleteFilter,
		getFiltersList
	} = useContext(FiltersContext);

	useEffect(() => {
		getFiltersList();
	}, []);

	const handleFilterEdit = (id) => {
		console.log(id);
	};

	const handleFilterDelete = (id) => {
		deleteFilter(id);
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
							handleFilterDelete={handleFilterDelete}
						/>
					);
				})
			}
		</AdminControlContentBox>
	);
};

export { FiltersList };
