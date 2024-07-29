import * as Yup from 'yup';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { InputTextarea } from '../_form';
import { setShcedulerPopupAction } from '../../redux/scheduler';
import { eventsDataSelector, showSchedulerModalSelector } from '../../redux/scheduler/selectors';
import { fetchRolesAction } from '../../redux/staff';
import { itemResRolesSelector } from '../../redux/staff/selectors';
import { cabinetsSelector } from '../../redux/cabinets/selectors';
import { fetchCabinetsAction } from '../../redux/cabinets';
import { toggleModalShedule } from '../../lib/functions';
import { createEventAction } from '../../redux/scheduler/actions';
import EventStatus from './EventStatus';
import EventPatient from './EventPatient';
import EventDateTime from './EventDateTime';

function CreateEvent() {
    const t = useTranslations();
    const dispatch = useDispatch();
    const showModal = useSelector(showSchedulerModalSelector);
    const cabinets = useSelector(cabinetsSelector);
    const staffByRoles = useSelector(itemResRolesSelector);
    const initialEvent = useSelector(eventsDataSelector);

    const [cabinetsSelectors, setCabinetsSelectors] = useState<any[]>([]);
    const [staffsSelectors, setStaffsSelectors] = useState<any[]>([]);
    const [cabinetSelected, setCabinetSelected] = useState<any>(null);
    const [staffSelected, setStaffSelected] = useState<any>(null);

    useEffect(() => {
        dispatch(fetchCabinetsAction());
        dispatch(fetchRolesAction());
    }, []);

    useEffect(() => {
        if (showModal) {
            toggleModalShedule();
        }
    }, [dispatch, showModal]);

    useEffect(() => {
        if (initialEvent.id) {
            setStaffSelected({ value: initialEvent.doctor_id, label: initialEvent.doctorName });
        }
    }, [initialEvent.id]);

    useEffect(() => {
        if (initialEvent.cabinet_id) {
            const _selected = cabinets.find((v: any) => v.id === initialEvent.cabinet_id);
            if (_selected) {
                setCabinetSelected({ value: _selected.id, label: _selected.name });
            }
        }
        if (cabinets.length > 0) {
            const _cabinets: React.SetStateAction<any[]> = [];
            cabinets.forEach((cabinet: any) => {
                _cabinets.push({ value: cabinet.id, label: cabinet.name });
            });
            setCabinetsSelectors(_cabinets);
        }
        if (staffByRoles?.staff) {
            const _staffs: React.SetStateAction<any[]> = [];
            staffByRoles.staff.forEach((staff: any) => {
                _staffs.push({ value: staff.id, label: staff.name });
            });
            setStaffsSelectors(_staffs);
        }
    }, [initialEvent.cabinet_id, cabinets, staffByRoles]);

    const handleChangeCabinets = (selectedOption: any) => {
        setCabinetSelected(selectedOption);
    };
    const handleChangeStaff = (selectedOption: any) => {
        setStaffSelected(selectedOption);
    };

    const SubmitSchema = Yup.object().shape({
        last_name: initialEvent.newPatient
            ? Yup.string().required(t('Required field'))
            : Yup.string(),
        first_name: initialEvent.newPatient
            ? Yup.string().required(t('Required field'))
            : Yup.string(),
        phone: initialEvent.newPatient ? Yup.string().required(t('Required field')) : Yup.string()
    });

    return (
        <div className="modal modal-scheduler opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" />
            <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div
                    className="modal-content py-4 text-left px-6 overflow-auto"
                    style={{ maxHeight: '90vh' }}>
                    <div className="flex justify-between items-center pb-3">
                        <p className="text-2xl font-bold">{t('Create Event')}</p>
                        <div
                            className="modal-close cursor-pointer z-50"
                            role="presentation"
                            onClick={() => {
                                dispatch(setShcedulerPopupAction(false));
                                toggleModalShedule();
                            }}>
                            <img
                                src="/images/close-modal.svg"
                                className="fill-current text-black"
                                alt={''}
                            />
                        </div>
                    </div>

                    {/*Body*/}
                    <Formik
                        enableReinitialize
                        initialValues={initialEvent}
                        validationSchema={SubmitSchema}
                        onSubmit={(values, { resetForm }) => {
                            const formData = new FormData();
                            // Object.keys(values).forEach((key: string) => {
                            //     formData.append(key, (values as any)[key]);
                            // });
                            formData.append('comment', values.comment);
                            formData.append('patient_id', initialEvent.patient_id);
                            formData.append('cabinet_id', cabinetSelected.value);
                            formData.append('doctor_id', staffSelected.value);
                            formData.append('date_event', initialEvent.date_event);
                            formData.append('time_event_from', initialEvent.time_event_from);
                            formData.append('time_event_to', initialEvent.time_event_to);
                            formData.append('status', initialEvent.status.name);
                            dispatch(createEventAction(formData));
                            setCabinetSelected(null);
                            setStaffSelected(null);
                            toggleModalShedule();
                            resetForm();
                        }}>
                        {(props) => (
                            <form onSubmit={props.handleSubmit} className="mt-5">
                                <EventStatus />

                                <EventPatient props={props} />

                                <div className="mb-4">
                                    <label className="control-label">{t('doctor')}</label>
                                    <Select
                                        isClearable={true}
                                        className={'form-control-dropdown'}
                                        classNamePrefix={'inventory'}
                                        options={staffsSelectors}
                                        value={staffSelected}
                                        onChange={handleChangeStaff}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="control-label">{t('Cabinet')}</label>
                                    <Select
                                        isClearable={true}
                                        className={'form-control-dropdown'}
                                        classNamePrefix={'inventory'}
                                        options={cabinetsSelectors}
                                        value={cabinetSelected}
                                        onChange={handleChangeCabinets}
                                    />
                                </div>

                                <EventDateTime />

                                <InputTextarea
                                    icon={null}
                                    label={'Comment'}
                                    name={'comment'}
                                    placeholder={'Comment'}
                                    style={null}
                                    props={props}
                                />

                                <button type="submit" className="btn violet-btn">
                                    {t('Save')}
                                </button>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default CreateEvent;
