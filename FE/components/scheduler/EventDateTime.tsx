import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormEventAction } from '../../redux/scheduler/actions';
import DatePicker from 'react-datepicker';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { eventsDataSelector } from '../../redux/scheduler/selectors';

export default function EventDateTime() {
    const t = useTranslations();
    const dispatch = useDispatch();
    const initialEvent = useSelector(eventsDataSelector);

    const [startDate, setStartDate] = useState(new Date());
    const [timeFrom, setTimeFrom] = useState(moment());
    const [timeTo, setTimeTo] = useState(moment());

    const setupTime = (value: any, type: string) => {
        if (type === 'start') {
            setTimeFrom(value);
        } else {
            setTimeTo(value);
        }
        dispatch(
            updateFormEventAction({
                type: type === 'start' ? 'time_event_from' : 'time_event_to',
                modifier: moment(type === 'start' ? timeFrom : timeTo).format('HH:mm')
            })
        );
    };

    useEffect(() => {
        if (initialEvent.event_date) {
            setStartDate(initialEvent.event_date);
            setTimeFrom(moment(initialEvent.event_date));
            setTimeTo(moment(initialEvent.event_date, 'YYYY-MM-DD').add(1, 'hours'));
        }
    }, [initialEvent.event_date]);

    useEffect(() => {
        if (initialEvent.id) {
            setStartDate(new Date(initialEvent.date_event));
            setTimeFrom(
                moment(new Date(`${initialEvent.date_event} ${initialEvent.time_event_from}`))
            );
            setTimeTo(moment(new Date(`${initialEvent.date_event} ${initialEvent.time_event_to}`)));
        }
    }, [initialEvent.id]);

    return (
        <>
            <div className="mb-4">
                <label className="control-label">{t('Date')}</label>
                <DatePicker
                    className={'form-control'}
                    selected={startDate}
                    onChange={(date: any) => {
                        setStartDate(date);
                        dispatch(
                            updateFormEventAction({
                                type: 'date_event',
                                modifier: moment(date).format('YYYY-MM-DD')
                            })
                        );
                    }}
                />
            </div>

            <div className="mb-4">
                <label className="control-label">{t('Time Start')}</label>
                <div>
                    <TimePicker
                        className="mr-5"
                        value={timeFrom}
                        defaultValue={timeFrom}
                        showSecond={false}
                        inputReadOnly={true}
                        onChange={(v) => setupTime(v, 'start')}
                    />
                    <TimePicker
                        className="mr-5"
                        value={timeTo}
                        defaultValue={timeTo}
                        showSecond={false}
                        onChange={(v) => setupTime(v, 'end')}
                    />
                </div>
            </div>
        </>
    );
}
