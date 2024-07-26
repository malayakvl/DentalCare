import { useRef } from 'react';
import { getSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { InputText, InputPassword } from '@/components/_form';
import { signIn } from 'next-auth/react';
import FullLayout from '../../components/layouts/FullLayout';
import { Formik, Field } from 'formik';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import React from 'react';
import { hideRegisterFormAction, setupFreeSubscriptionAction } from '@/redux/user';

function Signin({ locale }: { locale: string }) {
    const t = useTranslations();
    const { query } = useRouter();
    const dispatch = useDispatch();
    // const fbBtnRef = useRef(null);

    const SubmitSchema = Yup.object().shape({
        email: Yup.string().email(t('Must be a valid email')).required(t('Required field')),
        password: Yup.string().required(t('Required field'))
    });

    // @ts-ignore
    return (
        <>
            <Head>
                <title>DenTal Care - Sign In</title>
            </Head>

            <div className="flex main-bg justify-center">
                <div className="w-80 p-8 mt-10 rounded-lg bg-white colored-shadow md:w-96 md:p-10 pb-14">
                    <div className="mb-2 font-sm">{t('Welcome back!')}</div>
                    <div className="mb-8 font-bold text-2xl line-height-105percent text-gray-600">
                        {t('Please sign into your account')}
                    </div>

                    {query.message && (
                        <div className="error-el mb-4">
                            <span className="text-sm">{query.message}</span>
                        </div>
                    )}
                    <Formik
                        enableReinitialize
                        initialValues={{}}
                        validationSchema={SubmitSchema}
                        onSubmit={(values) => {
                            signIn('credentials_login', {
                                email: (values as any).email,
                                password: (values as any).password,
                                callbackUrl: `${window.location.origin}${
                                    locale === 'fr' ? '' : `/${locale}`
                                }/dashboard`
                            });
                        }}>
                        {(props) => (
                            <form onSubmit={props.handleSubmit} className="mb-4">
                                <InputText
                                    style={null}
                                    icon={'f-email'}
                                    label={null}
                                    name={'email'}
                                    placeholder={'Email'}
                                    props={props}
                                    tips={null}
                                    onChange={(event) => {
                                        event.target.value = event.target.value.trim();
                                        props.handleChange(event);
                                    }}
                                />

                                <InputPassword
                                    style={null}
                                    icon={'f-password'}
                                    label={null}
                                    name={'password'}
                                    placeholder={'Password'}
                                    props={props}
                                />

                                <div className="text-gray-450 flex items-center mb-5">
                                    <Field
                                        id="acceptTerms"
                                        name="acceptTerms"
                                        className="text-green-250 w-5 h-5 border-2 rounded mr-2.5"
                                        type="checkbox"
                                    />
                                    <div className="text-xs">{t('Remember me')}</div>
                                    <Link href={'/auth/restore'} legacyBehavior>
                                        <a className="ml-auto text-xs font-bold red-yellow-gradient-text">
                                            {t('Forgot password?')}
                                        </a>
                                    </Link>
                                </div>

                                <div className="mb-6">
                                    <button
                                        className="gradient-btn w-full px-3 py-4 text-white bg-indigo-500 rounded-md
                                    hover:bg-indigo-600
                                    focus:outline-none duration-100 ease-in-out">
                                        {t('Login')}
                                    </button>
                                </div>

                                <div className="">
                                    <div
                                        style={{ lineHeight: '0.1em' }}
                                        className="text-center border-b my-5">
                                        <span className="bg-white px-6">{t('or')}</span>
                                    </div>
                                </div>
                            </form>
                        )}
                    </Formik>

                    <div className="mt-3 border-t text-center text-sm">
                        <div className="mb-2 pt-1">
                            <Link href={'/auth/signup'} legacyBehavior>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                                <a
                                    onClick={() => {
                                        dispatch(hideRegisterFormAction(false));
                                        dispatch(setupFreeSubscriptionAction(false));
                                    }}
                                    className="red-yellow-gradient-text font-bold">
                                    {t('Don’t have an account?')} {t('Sign up here!')}
                                </a>
                            </Link>
                        </div>
                        <div className="text-gray-450">
                            {t('By signing in, you accept the')}{' '}
                            <Link href={'/terms-and-conditions'} legacyBehavior>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rainbow-gradient-text">
                                    {' '}
                                    {t('terms of use')}
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
Signin.Layout = FullLayout;

export default Signin;

export async function getServerSideProps(context: any) {
    const { req, locale } = context;
    const session = await getSession({ req });
    if (session) {
        return {
            redirect: { destination: `/${locale === 'uk' ? '' : locale}` }
        };
    }
    return {
        props: {
            // providers: await providers(),
            locale: locale,
            messages: {
                ...require(`../../messages/${locale}.json`)
            }
        }
    };
}
