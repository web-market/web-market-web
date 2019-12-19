import React, { memo } from 'react';
import PropTypes from 'prop-types';

import classes from './styles/index.scss';

const Textbox = memo(({
					onFieldChange,
					name,
					onChange,
					initialValue
				}) => {
	const handleInputChange = (value) => {
		onFieldChange(value);
		onChange(value);
	};

	return (
		<input
			type="textbox"
			onChange={e => handleInputChange(e.target.value)}
			name={name}
			value={initialValue}
			className={classes.textbox}
		/>
	);
});

Textbox.defaultProps = {
	onChange: () => {}
};

Textbox.propTypes = {
	onFieldChange: PropTypes.func,
	onChange: PropTypes.func,
	name: PropTypes.string,
	initialValue: PropTypes.string,
};

export { Textbox };
