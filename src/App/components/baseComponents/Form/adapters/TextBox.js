import React from 'react';
import TexBox from '../formFields/TextBox';

const TextBoxAdapter = (
							name
						) => {
	return (
		<TexBox
			name={name}
		/>
	);
};

const TextBox = TextBoxAdapter();
export default TextBox;
