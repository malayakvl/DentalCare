import React, { Fragment, useCallback, useState } from 'react';
import * as Yup from 'yup';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { Formik } from 'formik';
import { InputSwitcher, InputText } from '../../_form';
import { useDispatch, useSelector } from 'react-redux';
import { ClinicPhotos } from '../index'
import {redirectToListSelector, uploadedFilesSelector} from "@/redux/clinics/selectors";
import { updateClinicAction } from "@/redux/clinics/actions";
import { useRouter } from 'next/navigation'
// import dynamic from 'next/dynamic';
// import 'suneditor/dist/css/suneditor.min.css';
// const SunEditor = dynamic(() => import('suneditor-react'), {
//     ssr: false
// });

function ClinicForm({
    locale,
    clinicData,
    photos
}: {
    locale: string;
    clinicData: Clinics.ClinicItem;
    photos: string[];
}) {
    const t = useTranslations();
    const dispatch = useDispatch();
    const redirectToList = useSelector(redirectToListSelector);
    const uploadedFiles = useSelector(uploadedFilesSelector);
    const router = useRouter();

    const [editorContent, setEditorContent] = useState('');
    const [tags, setTags] = useState<any[]>([]);

    const onDelete = useCallback(
        (tagIndex: number) => {
            setTags(tags.filter((_, i) => i !== tagIndex));
        },
        [tags]
    );

    const handleChangeEditor = (content: any) => {
        setEditorContent(content);
    };

    // @ts-ignore
    const SubmitSchema = Yup.object().shape({
        name: Yup.string()
            .max(140, t('Must be less characters', {charNumber: 140}))
            .required(t('Required field')),
        address: Yup.string()
            .max(140, t('Must be less characters', {charNumber: 140}))
            .required(t('Required field')),
        // description: Yup.string().required(t('Required field')),
    });

    return (
        <Formik
            enableReinitialize
            initialValues={clinicData}
            validationSchema={SubmitSchema}
            onSubmit={(values) => {
                const formData = new FormData();
                // let tmpError: string[] = [];
                if (uploadedFiles.length) {
                    uploadedFiles.forEach((file: any) => {
                        formData.append('photos[]', file);
                    });
                }
                formData.append('name', values['name']);
                formData.append('address', values['address']);

                dispatch(updateClinicAction(formData, values.id));

            }}>
            {(props) => {
                const { handleChange } = props;
                return (
                    <form onSubmit={props.handleSubmit} className="mt-5">
                        <div className="max-w-screen-md xl:max-w-screen-2xl grid grid-flow-row-dense grid-cols-3 grid-rows-3">
                            <div className="grow mb-4">
                                <ClinicPhotos
                                    uploadedFiles={[]}
                                    photos={photos}
                                    clinicData={clinicData}
                                />
                            </div>
                            <div className="col-span-2 ml-6">
                                <h2 className="form-subtitle">{t('Clinic details')}</h2>
                                <InputText
                                    icon={null}
                                    label={'Filial Name'}
                                    name={'name'}
                                    placeholder={'Filial Name'}
                                    style={null}
                                    props={props}
                                    tips={t('count_characters', { charNumber: 140 })}
                                    onChange={(event) => {
                                        event.target.value = event.target.value.trimStart();
                                        props.handleChange(event);
                                    }}
                                />
                                <InputText
                                    icon={null}
                                    label={'Filial Address'}
                                    name={'address'}
                                    placeholder={'Filial Address'}
                                    style={null}
                                    props={props}
                                    tips={t('count_characters', { charNumber: 140 })}
                                    onChange={(event) => {
                                        event.target.value = event.target.value.trimStart();
                                        props.handleChange(event);
                                    }}
                                />

                                <button type="submit" className="gradient-btn">
                                    {props.values?.id ? t('Update Clinic') : t('Add Clinic')}
                                </button>
                            </div>
                        </div>
                    </form>
                );
            }}
        </Formik>
    );
}

export default ClinicForm;
