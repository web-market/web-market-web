import React from 'react';

import Form, { Field } from '../../baseComponents/Form';
import Textbox from '../../baseComponents/Form/Adapters/Textbox';
import Dropdown from '../../baseComponents/Form/Adapters/Dropdown';
import ImageUploader from '../../baseComponents/Form/Adapters/ImageUploader';

import PaddingBox from '../../baseComponents/PaddingBox';

export const DevForm = () => {
	const handleSubmit = (val) => {
		console.log(val);
	};

	return (
		<PaddingBox large lTiny>
			<Form
				name="testForm"
				onSubmit={handleSubmit}
			>
				<Field
					component={Textbox}
					name="age"
					value="dasdas"
				/>
				<Field
					component={Dropdown}
					name="dropdown"
				/>
				<Field
					component={ImageUploader}
					name="image"
				/>
			</Form>
		</PaddingBox>
	);
};
