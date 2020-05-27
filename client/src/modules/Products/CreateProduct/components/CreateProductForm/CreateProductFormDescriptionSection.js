import React from 'react';
import { Typography } from '../../../../../baseComponents/Typography/Typography';
import { MarginBox } from '../../../../../baseComponents/MarginBox/MarginBox';
import { TextEditor } from '../../../../../baseComponents/Form/Adapters';
import { Field } from '../../../../../baseComponents/Form';

const CreateProductFormDescriptionSection = (
	{
		setDescription
	}
) => {
	const handleEditorChange = (content) => {
		setDescription(content);
	};

	return (
		<MarginBox tSmall>
			<Typography
				bold="500"
				variant="18"
			>
				!!Описание
			</Typography>
			<MarginBox tSmall>
				<Field
					name="description"
					component={TextEditor}
					hasBorder={false}
				/>
			</MarginBox>
		</MarginBox>
	);
};

export { CreateProductFormDescriptionSection };
