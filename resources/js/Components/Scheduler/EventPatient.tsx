import React, {useEffect, useState} from 'react';
import Lang from "lang.js";
import { useDispatch, useSelector } from 'react-redux';
import { appLangSelector } from "../../Redux/Layout/selectors";
import lngScheduler from "../../Lang/Scheduler/translation";
// import { setShowTableError } from "../../Redux/Incominginvoice";
// import { Link } from "@inertiajs/react";
// import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/solid';
import InputText from "../../Components/Form/InputText";
import { setNewPatientAction } from "../../Redux/Scheduler";

export default function EventPatient(values) {
    // const t = useTranslations();
    const dispatch = useDispatch();
    const appLang = useSelector(appLangSelector);
    const msg = new Lang({
        messages: lngScheduler,
        locale: appLang,
    });
    const [addPatient, setAddPatient] = useState(false);
    const [patientData, setPatientData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        patient: ""
    })

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value
        setPatientData(values => ({
            ...values,
            [key]: value,
        }))

    };

    // useEffect(() => {
    //     dispatch(setNewPatientAction(patientData));
    // }, [patientData])

    return (
        <div className="mb-4">
            <>
                <div className="mb-4 relative">
                    {/*<label className="control-label text-sm">{msg.get('scheduler.patient')}</label>*/}
                    <InputText
                        name={'patient'}
                        values={patientData}
                        value={patientData.patient}
                        onChange={handleChange}
                        required
                        label={msg.get('scheduler.patient')}
                    />
                    {!addPatient && (
                        <span
                            onClick={() => {
                                setAddPatient(!addPatient);
                            }}
                            className="ml-2 mt-1 text-gray-500 cursor-pointer add-patient"
                            width={32}
                            height={32}
                        ></span>
                    )}
                </div>
                {addPatient && (
                    <div className="mt-4 bg-gray-50 px-2 rounded-md border pb-4">
                        <h2>{msg.get('scheduler.add.patient')}</h2>
                        <InputText
                            name={'firstName'}
                            values={patientData}
                            value={patientData.firstName}
                            onChange={handleChange}
                            required
                            label={msg.get('scheduler.form.firstName')}
                        />
                        <InputText
                            name={'lastName'}
                            values={patientData}
                            value={patientData.lastName}
                            onChange={handleChange}
                            required
                            label={msg.get('scheduler.form.lastName')}
                        />
                        <InputText
                            name={'email'}
                            values={patientData}
                            value={patientData.email}
                            onChange={handleChange}
                            required
                            label={msg.get('scheduler.form.email')}
                        />
                        <InputText
                            name={'phone'}
                            values={patientData}
                            value={patientData.phone}
                            onChange={handleChange}
                            required
                            label={msg.get('scheduler.form.phone')}
                        />
                    </div>
                )}

            </>
        </div>
    );
}
