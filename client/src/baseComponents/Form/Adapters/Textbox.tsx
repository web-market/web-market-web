import React from 'react';
import { Textbox as TexboxComponent } from '../../Textbox';

import { FormFieldBox as FieldBox } from '../../FormFieldBox';

const Textbox = (props) => {
	const {
		label,
		width,
		isValid,
        validate,
		hasFocus,
		hasBorder,
		labelBold,
		hasTooltip,
		toolTipIcon,
		displayInline,
		errorMessages,
		toolTipMessage
	} = props;

	return (
		<FieldBox
			label={label}
			width={width}
			hasFocus={hasFocus}
            required={validate?.required}
			hasErrors={!isValid}
			labelBold={labelBold}
			hasBorder={hasBorder}
			hasTooltip={hasTooltip}
			toolTipIcon={toolTipIcon}
			displayInline={displayInline}
			errorMessages={errorMessages}
			toolTipMessage={toolTipMessage}
		>
			<TexboxComponent
				{...props}
			/>
		</FieldBox>
	);
};

export { Textbox };
