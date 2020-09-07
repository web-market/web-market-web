import React from 'react';
import { AjaxDropdown as AjaxDropdownComponent } from '../../AjaxDropdown';

import { FormFieldBox as FieldBox } from '../../FormFieldBox';

const AjaxDropdown = (props) => {
    const {
        label,
        width,
        isValid,
        required,
        hasFocus,
        labelBold,
        hasBorder,
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
            required={required}
            hasErrors={!isValid}
            hasBorder={hasBorder}
            labelBold={labelBold}
            hasTooltip={hasTooltip}
            toolTipIcon={toolTipIcon}
            errorMessages={errorMessages}
            displayInline={displayInline}
            toolTipMessage={toolTipMessage}
        >
            <AjaxDropdownComponent
                {...props}
            />
        </FieldBox>
    );
};

export { AjaxDropdown };
