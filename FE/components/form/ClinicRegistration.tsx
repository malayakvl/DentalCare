// import Image from 'next/image';
import InputTextDisabled from '../../components/_form/InputTextDisabled';
import { Formik } from 'formik';
import { InputText } from '../_form';
import { TogglePassword } from '../_form';
import * as Yup from 'yup';
import { useTranslations } from 'next-intl';
import getConfig from 'next/config';
import { signIn } from 'next-auth/react';
import { useDispatch, useSelector } from 'react-redux';
import { showLoaderAction } from '@/redux/layouts/actions';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/auth`;

export default function ClinicRegistration({
    email,
    locale = '',
    forFree,
    skip
}: {
    email: any;
    locale?: string;
    forFree?: number;
    skip: number | null;
}) {
    const t = useTranslations();
    const dispatch = useDispatch();
    // const countries = useSelector(countriesSelector);
    // const preparedCountriesDropdown = useMemo(
    //     () => prepareCountriesDropdown(countries, locale),
    //     [countries]
    // );
    // useEffect(() => {
    //     dispatch(fetchCountriesAction());
    // }, []);

    // @ts-ignore
    const validationSchema = Yup.object().shape({
        first_name: Yup.string()
            .strict(true)
            .trim(t('Cannot include leading and trailing spaces'))
            .required(t('Required field')),
        last_name: Yup.string()
            .strict(true)
            .trim(t('Cannot include leading and trailing spaces'))
            .required(t('Required field')),
        identification_number: Yup.string()
            .strict(true)
            .trim(t('Cannot include leading and trailing spaces'))
            .required(t('Required field')),
        vat: Yup.string()
            .strict(true)
            .trim(t('Cannot include leading and trailing spaces'))
            .required(t('Required field')),
        company_name: Yup.string()
            .strict(true)
            .trim(t('Cannot include leading and trailing spaces'))
            .required(t('Required field'))
            .min(3, t('Company name must be at least 3 characters')),
        ur_address: Yup.string()
            .strict(true)
            .required(t('Required field'))
            .trim(t('Cannot include leading and trailing spaces'))
            .required(t('Required field'))
            .min(5, t('Address must be at least 5 characters')),
        full_address: Yup.string()
            .strict(true)
            .required(t('Required field'))
            .trim(t('Cannot include leading and trailing spaces'))
            .required(t('Required field'))
            .min(5, t('Address must be at least 5 characters')),
        phone: Yup.string()
            .strict(true)
            .trim(t('Cannot include leading and trailing spaces'))
            .required(t('Required field'))
            .min(5, t('Phone must be at least 5 characters')),
        password: Yup.string()
            .strict(true)
            .trim(t('Cannot include leading and trailing spaces'))
            .required(t('Required field'))
            .min(6, t('Password must be at least 6 characters')),
        password_confirmation: Yup.string()
            .required(t('Required field'))
            .oneOf([Yup.ref('password'), ''], t('Passwords must match'))
    });

    const onSubmit = (values: any) => {
        dispatch(showLoaderAction(true));
        values['forFree'] = forFree;
        if (skip) {
            values['forFree'] = 'skipNow';
        }
        console.log('Ebala');
        values['locale'] = locale;
        fetch(`${baseUrl}/register?locale=${locale}`, {
            method: 'POST',
            body: JSON.stringify(values),
            headers: { 'Content-Type': 'application/json' }
        }).then((r) => {
            r.json().then(() => {
                alert('credential login')
                signIn('credentials_login', {
                    email: values.email,
                    password: values.password,
                    callbackUrl:
                        forFree === 1
                            ? `${window.location.origin}/${locale === 'en' ? 'en/' : ''}pricing`
                            : skip
                            ? `${window.location.origin}/${locale === 'en' ? 'en/' : ''}dashboard`
                            : `${window.location.origin}/${locale === 'en' ? 'en/' : ''}pricing`
                });
            });
        });
    };
    return (
        <Formik
            enableReinitialize
            validationSchema={validationSchema}
            initialValues={{ email }}
            onSubmit={onSubmit}>
            {(props) => (
                <form onSubmit={props.handleSubmit}>
                    <div className="w-96 px-6 md:px-12 py-14 my-10 rounded-lg colored-shadow flex flex-col md:flex-row md:flex-rowjustify-center md:w-[1024px] bg-white">
                        <div className="pt-5 md:pr-4 md:min-w-[400px] md:border-r">
                            <div className="flex mb-4 items-center">
                                <div className="mr-2.5 font-bold text-3xl line-height-105percent md:mr-0 md:w-full w-60 text-checked">
                                    {t('Your email has been verified!')}
                                </div>
                            </div>

                            <InputTextDisabled name="email" icon="f-email" props={props} />
                            {/*{forFree ? 'Free' : 'SUbscription'}*/}

                            <div className="mb-3 mt-9 text-blue-350 text-sm">
                                {t('Almost there, please')}
                            </div>
                            <div className="mb-10 md:mb-0 text-3xl line-height-105percent font-bold">
                                {t('Complete your profile')}
                            </div>
                            <div className="mt-4">
                                <InputText
                                    icon={'f-fname'}
                                    style={null}
                                    label={null}
                                    name={'first_name'}
                                    placeholder={'Name'}
                                    props={props}
                                    tips={null}
                                />
                                <InputText
                                    icon={'f-lname'}
                                    style={null}
                                    label={null}
                                    name={'last_name'}
                                    placeholder={'Surname'}
                                    props={props}
                                    tips={null}
                                />
                                <InputText
                                    icon={'f-company'}
                                    style={null}
                                    label={null}
                                    name={'company_name'}
                                    placeholder={'Company Name'}
                                    props={props}
                                    tips={null}
                                />

                            </div>
                        </div>
                        <div className="md:ml-8 w-full">
                            <InputText
                                icon={'f-company-id'}
                                style={'w-1/2'}
                                label={null}
                                name={'identification_number'}
                                placeholder={'Company ID'}
                                props={props}
                                tips={null}
                            />
                            <InputText
                                icon={'f-vat'}
                                style={'w-1/2'}
                                label={null}
                                name={'vat'}
                                placeholder={'Vat'}
                                props={props}
                                tips={null}
                            />
                        {/*<InputText*/}
                            {/*    icon={'f-fname'}*/}
                            {/*    style={null}*/}
                            {/*    label={null}*/}
                            {/*    name={'first_name'}*/}
                            {/*    placeholder={'Name'}*/}
                            {/*    props={props}*/}
                            {/*    tips={null}*/}
                            {/*/>*/}
                            {/*<InputText*/}
                            {/*    icon={'f-lname'}*/}
                            {/*    style={null}*/}
                            {/*    label={null}*/}
                            {/*    name={'last_name'}*/}
                            {/*    placeholder={'Surname'}*/}
                            {/*    props={props}*/}
                            {/*    tips={null}*/}
                            {/*/>*/}


                            <InputText
                                label={null}
                                icon={'f-location'}
                                name={'full_address'}
                                placeholder={'Address Line 2'}
                                style={null}
                                props={props}
                                tips={null}
                            />
                            <InputText
                                label={null}
                                icon={'f-location'}
                                name={'ur_address'}
                                placeholder={'Address Line 1'}
                                style={null}
                                props={props}
                                tips={null}
                            />
                            {/*<InputText*/}
                            {/*    label={null}*/}
                            {/*    icon={'f-location'}*/}
                            {/*    name={'post_code'}*/}
                            {/*    placeholder={'Post Code'}*/}
                            {/*    style={'w-1/2'}*/}
                            {/*    props={props}*/}
                            {/*    tips={null}*/}
                            {/*/>*/}

                            <InputText
                                icon={'f-phone'}
                                style={null}
                                label={null}
                                name={'phone'}
                                placeholder={'Phone Number'}
                                props={props}
                                tips={null}
                                onChange={(event) => {
                                    event.target.value = event.target.value.replace(
                                        /[^\s\d+()-]+/gm,
                                        ''
                                    );
                                    props.handleChange(event);
                                }}
                            />
                            <TogglePassword
                                icon={'f-key'}
                                style={null}
                                label={null}
                                name={'password'}
                                placeholder={'Password'}
                                props={props}
                            />
                            <TogglePassword
                                icon={'f-key'}
                                style={'mb-9'}
                                label={null}
                                name={'password_confirmation'}
                                placeholder={'Confirm password'}
                                props={props}
                            />
                            <div className="border-t pt-9">
                                <button
                                    type="submit"
                                    className="uppercase pt-9 gradient-btn w-full btn-primary">
                                    {t('Continue')}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </Formik>
    );
}

export async function getServerSideProps(context: any) {
    const { locale } = context;

    return {
        props: {
            locale,
            messages: {
                ...require(`../../messages/${locale}.json`)
            }
        }
    };
}
