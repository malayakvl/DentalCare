import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout';
import {Head, router, useForm, usePage} from '@inertiajs/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { appLangSelector } from "../../Redux/Layout/selectors";
import Lang from "lang.js";
import lngRole from "../../Lang/Role/translation";
import { Link } from "@inertiajs/react";
import InputText from "../../Components/Form/InputText";
import InputLabel from "../../Components/Form/InputLabel";
import Checkbox from "../../Components/Form/Checkbox";
import PrimaryButton from "../../Components/Form/PrimaryButton";
import { Transition } from '@headlessui/react';

export default function Create({clinicData, permissionData}) {
    const dispatch = useDispatch();
    const user = usePage().props.auth.user;
    const appLang = useSelector(appLangSelector);
    const msg = new Lang({
        messages: lngRole,
        locale: appLang,
    });

    const { processing, recentlySuccessful } = useForm();

    const [values, setValues] = useState({
        name: '',
        permissions: []
    });

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    const handlePermission = (el) => {
        const tmpPermis = values.permissions;
        if (el.checked) {
            tmpPermis.push(parseInt(el.id));
        } else {
            const index = tmpPermis.indexOf(parseInt(el.id));
            if (index > -1) { // only splice array when item is found
                tmpPermis.splice(index, 1); // 2nd parameter means remove one item only
            }
        }
        setValues(values => ({
            ...values,
            ['permissions']: tmpPermis,
        }))
    }

    const submit = (e) => {
        e.preventDefault();
        router.post(`/role/store`, values);
    };

    return (
        <AuthenticatedLayout
            header={
                <Head title="Roles" />
            }
        >
            <div className="py-0">
                <form onSubmit={submit} className="mt-0 space-y-4" encType='multipart/form-data'>
                    <div>
                        <div className="p-4 sm:p-8 mb-8 content-data bg-content">
                            <section>
                                <header>
                                    <div className="flex inline-flex">
                                        <h2>
                                            <Link className="icon-back" href={'/roles'}>&nbsp;</Link>
                                            {msg.get('role.title.create')}
                                        </h2>
                                    </div>
                                </header>
                            </section>
                            <div>
                                <div className="p-4 sm:p-8 mb-8 content-data bg-content">
                                    <div className="row">
                                        <InputText
                                            name={'name'}
                                            values={values}
                                            value={values.name}
                                            onChange={handleChange}
                                            required
                                            label={msg.get('role.name')}
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12 mt-4">
                                            <div className="form-group">
                                                <InputLabel value={msg.get('role.permission')} />
                                                <br/>
                                                <div className="columns-4">
                                                    {permissionData && permissionData.map( (item, i) => (
                                                        <div key={i} className={item.name === 'clinic-delete' ? 'disabled-content' : ''}>
                                                            <div key={item.id}>
                                                                <Checkbox
                                                                    id={`${item.id}`}
                                                                    name={`remember[${item.id}]`}
                                                                    // checked={values['permissions'].includes(item.id)}
                                                                    onChange={(e) => {
                                                                        handlePermission(e.target)
                                                                    }}
                                                                />
                                                                <label htmlFor={`${item.id}`}>
                                                                    <span className="ms-2 text-sm text-gray-600">
                                                                        {msg.get(`role.${item.name}`)}
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center mt-5">
                                            <Link
                                                className="btn-back"
                                                title={msg.get('role.back')}
                                                href={`/roles`}
                                            >
                                                {msg.get('role.back')}
                                            </Link>
                                            <PrimaryButton disabled={processing}>{msg.get('role.save')}</PrimaryButton>

                                            <Transition
                                                show={recentlySuccessful}
                                                enter="transition ease-in-out"
                                                enterFrom="opacity-0"
                                                leave="transition ease-in-out"
                                                leaveTo="opacity-0"
                                            >
                                                <p className="text-sm text-gray-600">
                                                    {msg.get('filial.saved')}
                                                </p>
                                            </Transition>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
