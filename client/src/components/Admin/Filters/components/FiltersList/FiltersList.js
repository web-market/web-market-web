import React, { useContext, useEffect } from 'react';
// import PropTypes from 'prop-types';

import classes from './styles/index.scss';
import AdminControlContentBox from '../../../AdminControlContentBox';
import { FiltersContext } from '../../store';
import PendingCloak from '../../../../../baseComponents/PendingCloak';

const FiltersList = () => {
	const { getFiltersList, isPending } = useContext(FiltersContext);

	useEffect(() => {
		getFiltersList();
	}, []);

	return (
		<AdminControlContentBox
			margin={{ large: true }}
			className={classes.filtersList}
		>
			{isPending && (<PendingCloak />)}
			test
		</AdminControlContentBox>
	);
};

// NAME.defaultProps = {};

// NAME.propTypes = {};

export { FiltersList };
