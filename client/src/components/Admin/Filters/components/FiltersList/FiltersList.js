import React, { useContext, useEffect } from 'react';
import { FiltersContext } from '../../store';

import AdminControlContentBox from '../../../AdminControlContentBox';
import FiltersListItem from './FiltersListItem';
import PendingCloak from '../../../../../baseComponents/PendingCloak';
import classes from './styles/index.scss';

const FiltersList = () => {
	const { getFiltersList, isPending, filtersItems } = useContext(FiltersContext);

	useEffect(() => {
		getFiltersList();
	}, []);

	return (
		<AdminControlContentBox
			margin={{ large: true }}
			className={classes.filtersList}
		>
			{isPending && (<PendingCloak />)}
			{
				filtersItems.map((filter, index) => {
					const key = `${filter.name}-${index}`;

					return (
						<FiltersListItem
							key={key}
							name={filter.name}
							displayName={filter.displayName}
						/>
					);
				})
			}
		</AdminControlContentBox>
	);
};

export { FiltersList };
