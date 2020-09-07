import React, { useState, useEffect, useRef } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import subDays from 'date-fns/subDays';

import './styles/customDatePickerStyles.css';
import classes from './styles/index.scss';
import { calendar } from '../../icons';
import { Icon } from '../Icon/Icon';

registerLocale('ru', ru);

const DatePickerComponent = (
    {
        value,
        onFieldChange,
        currentDate,
        showTime,
        minDate
    }
) => {
    const [startDate, setStartDate] = useState(value);
    const calendarRef = useRef({
        setOpen: (isOpen: boolean) => {}
    });

    useEffect(() => {
        if (currentDate) {
            setStartDate(new Date());
            onFieldChange(new Date());
        }
    }, []);

    const handleOnChange = date => {
        setStartDate(date);
        onFieldChange(date);
    };

    const dateFormat = showTime ? 'MM-d-yyyy HH:mm' : 'MM-d-yyyy';

    return (
        <div
            className={classes.datePicker__wrapper}
        >
            <DatePicker
                ref={calendarRef}
                selected={currentDate && startDate}
                showTimeSelect={showTime}
                disabledKeyboardNavigation
                timeIntervals={5}
                locale="ru"
                timeFormat="p"
                dateFormat={dateFormat}
                onChange={date => handleOnChange(date)}
                onChangeRaw={event => event.preventDefault()}
                className={classes.datePicker}
                minDate={subDays(new Date(), minDate)}
            />
            <Icon
                className={classes.datePicker__icon}
                icon={calendar}
                onClick={() => calendarRef.current.setOpen(true)}
            />
        </div>
    );
};

DatePickerComponent.defaultProps = {
    minDate: null,
    showTime: false,
    currentDate: false,
    showCurrentDate: false,
};

export { DatePickerComponent };
