import React from 'react';
import TexBox from '../formFields/TextBox';

const TextBoxAdapter = () => {
	const handleOnChange = (e) => {
		console.log(e);
	};

	return (
		<TexBox
			onChange={handleOnChange}
		/>
	);
};

const TextBox = TextBoxAdapter();
export default TextBox;
