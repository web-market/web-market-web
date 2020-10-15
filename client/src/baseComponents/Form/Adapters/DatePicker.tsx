import React from 'react';
import { DatePickerComponent } from '../../DatePicker/DatePicker';

import { FormFieldBox as FieldBox } from '../../FormFieldBox';

const DatePicker = (props) => {
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
            <DatePickerComponent
                {...props}
            />
        </FieldBox>
    );
};

export { DatePicker };
