import React, { useRef, useEffect, useState } from 'react';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css';
import { CalendarIcon } from '@heroicons/react/solid';
import { useDispatch, useSelector } from 'react-redux';
import { setShcedulerPopupAction } from '../../redux/scheduler';
import moment from 'moment';
import { useTranslations } from 'next-intl';
import {
    fetchSchedulerAction,
    getEventAction,
    removeEventAction,
    setEventSchedulerInitAction,
    setIntervalAction,
    updateEventAction
} from '@/redux/scheduler/actions';
import { eventsSelector } from '@/redux/scheduler/selectors';
// import { cabinetsSelector } from '../../redux/cabinets/selectors';
// import { permissionsSelector } from '../../redux/user/selectors';
// import { checkPermissions } from '../../lib/functions';
import { setErrorToastAction } from '@/redux/layouts';

const scheduler = (window as any).scheduler;
// cont sContainer = scheduler_here

const html = function (id: any) {
    return document.getElementById(id);
};

const Scheduler: React.FC<any> = (events: any) => {
    const dispatch = useDispatch();
    const t = useTranslations();
    const items = useSelector(eventsSelector);
    let schedulerContainer: any | null = useRef<HTMLInputElement>(null);
    // const permissions = useSelector(permissionsSelector);
    const cabinets = [{id: 1, label: 'Test 1' }, {id: 1, label: 'Test 2'}]

    const showCalendar = () => {
        if (scheduler.isCalendarVisible()) scheduler.destroyCalendar();
        else
            scheduler.renderCalendar({
                position: 'dhx_minical_icon',
                date: scheduler.getState().date,
                navigation: true,
                handler: function (date: any, calendar: any) {
                    console.log(calendar);
                    scheduler.setCurrentView(date);
                    scheduler.destroyCalendar();
                }
            });
    };

    useEffect(() => {
        dispatch(
            fetchSchedulerAction(moment().format('YYYY-MM-DD'), moment().format('YYYY-MM-DD'))
        );
        dispatch(
            setIntervalAction({
                dateFrom: moment().format('YYYY-MM-DD'),
                dateTo: moment().format('YYYY-MM-DD')
            })
        );
    }, []);

    useEffect(() => {
        if (scheduler) {
            scheduler.parse(items);
        }
    }, [items]);

    useEffect(() => {
        if (scheduler && cabinets.length > 0) {
            const sections: { key: number; label: string }[] = [];
            cabinets.forEach((cabinet: any) => {
                sections.push({ key: cabinet.id, label: cabinet.name });
            });

            scheduler.skin = 'material';
            scheduler.config.header = [
                'single_unit',
                'week_unit',
                'month',
                'date',
                'prev',
                'today',
                'next'
            ];
            scheduler.locale.labels.week_unit_tab = t('Week units');
            scheduler.locale.labels.single_unit_tab = t('Units');
            scheduler.locale.labels.section_custom = 'Section';
            scheduler.config.details_on_create = true;
            scheduler.config.details_on_dblclick = true;
            scheduler.config.first_hour = 8;
            scheduler.config.last_hour = 21;
            scheduler.config.icons_select = [
                'icon_details',
                'icon_edit',
                'icon_copy',
                'icon_delete'
            ];
            scheduler.locale.labels.icon_copy = 'Copy';
            scheduler.templates.event_text = function (start: any, end: any, event: any) {
                return `<div class="event-data">${event.patientName}<br/>${
                    event.text
                }<span class="doctor-block">${t('doctor')}: ${event.doctorName}</span></div>`;
            };

            scheduler._click.buttons.copy = function (id: any) {
                console.log('copy', id);
            };
            scheduler._click.buttons.edit = function (id: any) {
                // if (checkPermissions('edit_scheduler_event', permissions)) {
                //     dispatch(getEventAction(id));
                // } else {
                //     dispatch(setErrorToastAction('Permission deny'));
                // }
            };

            scheduler.createUnitsView({
                name: 'week_unit',
                property: 'section_id',
                list: sections,
                days: 7
            });
            scheduler.date.week_unit_start = scheduler.date.week_start;

            scheduler.createUnitsView({
                name: 'single_unit',
                property: 'section_id',
                list: sections
            });

            scheduler.init(
                schedulerContainer,
                new Date(
                    parseInt(moment().format('YYYY')),
                    parseInt(moment().format('MM')) - 1,
                    parseInt(moment().format('DD'))
                ),
                'single_unit'
            );

            // delete event
            scheduler.attachEvent('onBeforeEventDelete', function (id: any, ev: any) {
                return true;
                // if (checkPermissions('delete_scheduler_event', permissions)) {
                //     dispatch(removeEventAction(id));
                //     return true;
                // } else {
                //     dispatch(setErrorToastAction('Permission deny'));
                //     return false;
                // }
            });

            scheduler.attachEvent('onBeforeEventChanged', function (id: any, ev: any) {
                return true;
                // if (checkPermissions('edit_scheduler_event', permissions)) {
                //     return true;
                // } else {
                //     dispatch(setErrorToastAction('Permission deny!!!!!!'));
                //     return false;
                // }
            });

            // update event
            scheduler.attachEvent('onEventChanged', function (id: any, ev: any) {
                dispatch(
                    updateEventAction(id, {
                        time_event_from: moment(ev.start_date).format('HH:mm'),
                        time_event_to: moment(ev.end_date).format('HH:mm'),
                        date_event: moment(ev.start_date).format('YYYY-MM-DD'),
                        cabinet_id: ev.section_id
                    })
                );
            });

            // change view/date
            scheduler.attachEvent(
                'onBeforeViewChange',
                function (old_mode: string, old_date: any, mode: string, date: any) {
                    if (mode === 'week_unit') {
                        switch (moment(date).format('d')) {
                            case '1':
                                scheduler.ignore_week_unit = function (date: any) {
                                    if ([0, 4, 5, 6].includes(date.getDay())) return true;
                                    if (date.getDay() > 3 || date.getDay() === 0) return true;
                                };
                                break;
                            case '2':
                                scheduler.ignore_week_unit = function (date: any) {
                                    if ([0, 1, 5, 6].includes(date.getDay())) return true;
                                };
                                break;
                            case '3':
                                scheduler.ignore_week_unit = function (date: any) {
                                    if ([0, 1, 2, 6].includes(date.getDay())) return true;
                                };
                                break;
                            case '4':
                                scheduler.ignore_week_unit = function (date: any) {
                                    if ([0, 1, 2, 3].includes(date.getDay())) return true;
                                };
                                break;
                            case '5':
                                scheduler.ignore_week_unit = function (date: any) {
                                    if ([1, 2, 3, 4].includes(date.getDay())) return true;
                                };
                                break;
                            case '6':
                                scheduler.ignore_week_unit = function (date: any) {
                                    if ([1, 2, 3, 4].includes(date.getDay())) return true;
                                };
                                break;
                        }
                        dispatch(
                            fetchSchedulerAction(
                                moment(date).format('YYYY-MM-DD'),
                                moment(date).add(7, 'days').format('YYYY-MM-DD')
                            )
                        );
                        dispatch(
                            setIntervalAction({
                                dateFrom: moment(date).format('YYYY-MM-DD'),
                                dateTo: moment(date).add(7, 'days').format('YYYY-MM-DD')
                            })
                        );
                    } else if (mode === 'single_unit') {
                        dispatch(
                            fetchSchedulerAction(
                                moment(date).format('YYYY-MM-DD'),
                                moment(date).format('YYYY-MM-DD')
                            )
                        );
                        dispatch(
                            setIntervalAction({
                                dateFrom: moment(date).format('YYYY-MM-DD'),
                                dateTo: moment(date).format('YYYY-MM-DD')
                            })
                        );
                    }

                    return true;
                }
            );
            scheduler.showLightbox = function (id: any) {
                // const ev = scheduler.getEvent(id);
                scheduler.startLightbox(id, html('my_form'));
                scheduler.endLightbox(false, html('my_form'));
                // self.setShowModal(true);
            };
            //
            scheduler.attachEvent('onEmptyClick', function (date: any, e: any) {
                const evData = scheduler.getActionData(e);
                // dispatch(setEventInitAction({ date: date, sectionId: evData.section }));
                dispatch(
                    setEventSchedulerInitAction({
                        id: null,
                        doctor_id: null,
                        cabinet_id: evData.section,
                        event_date: date,
                        patient_id: null,
                        patient: null,
                        comment: null,
                        status: 'plannned',
                        newPatient: false,
                        date_event: moment(date).format('YYYY-MM-DD'),
                        time_event_from: moment(date).format('HH:mm'),
                        time_event_to: moment(date, 'YYYY-MM-DD').add(1, 'hours').format('HH:mm')
                    })
                );
                dispatch(setShcedulerPopupAction(true));
            });
        }
    }, [cabinets]);

    return (
        <>
            <div className="calendar-controls" role="group">
                <div
                    role="presentation"
                    className=""
                    id="dhx_minical_icon"
                    onClick={() => showCalendar()}>
                    <CalendarIcon width={18} height={18} />
                </div>
            </div>
            <div
                className="text-sm font-medium"
                ref={(input) => {
                    schedulerContainer = input;
                }}
                style={{ width: '100%', height: '100%' }}
            />
        </>
    );
};

export default Scheduler;
