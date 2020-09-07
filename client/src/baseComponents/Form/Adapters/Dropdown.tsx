import React from 'react';
import { Dropdown as DropdownComponent } from '../../Dropdown';

import { FormFieldBox as FieldBox } from '../../FormFieldBox';

const Dropdown = (props) => {
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
        errorMessages,
        displayInline,
        toolTipMessage
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
            errorMessages={errorMessages}
            displayInline={displayInline}
            toolTipMessage={toolTipMessage}
        >
            <DropdownComponent
                {...props}
            />
        </FieldBox>
    );
};

export { Dropdown };
