import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({
					onChange,
					name,
					placeholder
				}) => {
	return (
		<textarea
			placeholder={placeholder}
			onChange={e => onChange(e.target.value)}
			name={name}
		/>
	);
};

TextArea.propTypes = {
	onChange: PropTypes.func,
	name: PropTypes.string,
	placeholder: PropTypes.string
};

export default TextArea;
