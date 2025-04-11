import InputLabel from '../../../Components/Form/InputLabel';
import PrimaryButton from '../../../Components/Form/PrimaryButton';
import { Transition } from '@headlessui/react';
import {Link, router, useForm, usePage} from '@inertiajs/react';
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { appLangSelector } from "../../../Redux/Layout/selectors";
import Lang from "lang.js";
import lngSize from "../../../Lang/Size/translation";
import InputText from "../../../Components/Form/InputText";
import InputSelect from "../../../Components/Form/InputSelect";


export default function Form({
   clinicData,
   formData,
   className = '',
}) {
    const appLang = useSelector(appLangSelector);
    const msg = new Lang({
        messages: lngSize,
        locale: appLang,
    });

    const [values, setValues] = useState({
        name: formData.name,
        clinic_id: clinicData.id
    })

    const { processing, recentlySuccessful, errors } = useForm();

    const handleChangeSelect = (e) => {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    const handleChangeFile = (e) => {
        const key = e.target.id;
        setValues(values => ({
            ...values,
            [key]: e.target.files[0],
        }))
    }

    const submit = (e) => {
        e.preventDefault();
        if (formData.id) {
            router.post(`/size/update?id=${formData.id}`, values);
        } else {
            router.post('/size/update', values);
        }
    };

    return (
        <section className={className}>
            <header>
                <h2>
                    <Link className="icon-back" href={'/sizes'}>&nbsp;</Link>
                    {formData?.id ? msg.get('size.title.edit') : msg.get('size.title.create')}
                </h2>
            </header>

            <form onSubmit={submit} className="mt-0 space-y-4" encType='multipart/form-data'>
                <InputText
                    name={'name'}
                    values={values}
                    dataValue={values.name}
                    value={values.name}
                    onChange={handleChange}
                    required
                    label={msg.get('size.name')}
                />
                <div className="flex items-center">
                    <Link
                        className="btn-back"
                        title={msg.get('size.back')}
                        href={`/sizes`}
                    >
                        {msg.get('size.back')}
                    </Link>
                    <PrimaryButton disabled={processing}>{msg.get('size.save')}</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">
                            {msg.get('size.saved')}
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
