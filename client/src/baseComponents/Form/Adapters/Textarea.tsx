import React from 'react';
import { Textarea as TextareaComponent } from '../../Textarea';

import { FormFieldBox as FieldBox } from '../../FormFieldBox';

const Textarea = (props) => {
    const {
        label,
        width,
        isValid,
        hasFocus,
        validate,
        hasBorder,
        labelBold,
        hasTooltip,
        toolTipIcon,
        errorMessages,
        displayInline,
        toolTipMessage,
    } = props;

    return (
        <FieldBox
            label={label}
            width={width}
            hasFocus={hasFocus}
            required={validate.required}
            hasErrors={!isValid}
            labelBold={labelBold}
            hasBorder={hasBorder}
            hasTooltip={hasTooltip}
            toolTipIcon={toolTipIcon}
            displayInline={displayInline}
            errorMessages={errorMessages}
            toolTipMessage={toolTipMessage}
        >
            <TextareaComponent
                {...props}
            />
        </FieldBox>
    );
};

export { Textarea };
