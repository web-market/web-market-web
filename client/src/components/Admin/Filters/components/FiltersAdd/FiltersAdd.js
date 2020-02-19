import React, { useContext } from 'react';
// import PropTypes from 'prop-types';

import AdminControlContentBox from '../../../AdminControlContentBox';
import { FiltersAddForm } from './FiltersAddForm';
import Button from '../../../../../baseComponents/Button';
import { FormsGlobalContext } from '../../../../../App/store/FormsGlobalContext';

const FiltersAdd = () => {
	const { forms } = useContext(FormsGlobalContext);

	const addFilter = (val) => {
		console.log(val);
	};

	const rightSectionButtons = (
		<>
			<Button
				label="!!добавить"
				type="primary"
				actionHandler={() => forms.ADD_FILTER_FORM.submitForm()}
			/>
		</>
	);

	return (
		<AdminControlContentBox margin={{ tLarge: true, rLarge: true }}>
			<FiltersAddForm
				addFilter={addFilter}
				rightSectionButtons={rightSectionButtons}
			/>
		</AdminControlContentBox>
	);
};

// NAME.defaultProps = {};

// NAME.propTypes = {};

export { FiltersAdd };
