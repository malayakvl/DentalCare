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
import { useDispatch, useSelector } from 'react-redux';
// import { accountService } from '../../_services';
import React,{ useEffect, useState } from 'react';
import { showLoaderAction } from '@/redux/layouts/actions';
import getConfig from 'next/config';
import { hideRegisterFormAction, setupFreeSubscriptionAction } from '@/redux/user';
import { hideRegisterFormSelector, userForFreeSelector } from '@/redux/user/selectors';
import {
    inviteUserAction,
    setOrderCommentAction,
    setWaitOrderIdAction
} from '@/redux/user/actions';
const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/auth`;

function Signup({ locale }: { locale: string }) {
    const t = useTranslations();
    const { query } = useRouter();
    const dispatch = useDispatch();
    const fbBtnRef = useRef(null);
    const forFree = 1;
    const [roleId, setRoleId] = useState(1);
    const [hideForm, setHideForm] = useState(false);

    const hideFormSelector = useSelector(hideRegisterFormSelector);

    const SubmitSchema = Yup.object().shape({
        email: Yup.string().email(t('Must be a valid email')).required(t('Required field')),
        // password: Yup.string().required(t('Required field')),
    });

    // useState()
    const onSubmit = (values: any) => {
        dispatch(showLoaderAction(true));
        values['role_id'] = roleId;
        dispatch(inviteUserAction(values, locale));
    };

    useEffect(() => {
        setHideForm(hideFormSelector);
    }, [hideFormSelector]);

    // @ts-ignore
    return (
        <>
            <Head>
                <title>DenTal Care - Sign Up</title>
            </Head>

            <div className="flex main-bg justify-center">
                {!hideForm && (
                    <div className="w-80 p-8 mt-10 rounded-lg bg-violet-150 colored-shadow md:w-[480px] md:p-10 pb-14">
                        <div className="mb-8 font-bold text-2xl line-height-105percent text-gray-600">
                            {t('Registration')}
                        </div>
                        {/*<div className="g-signin2" data-onsuccess="onSignIn"/>*/}

                        {query.message && (
                            <div className="error-el mb-4">
                                <span className="text-sm">{query.message}</span>
                            </div>
                        )}
                        <Formik
                            enableReinitialize
                            initialValues={{}}
                            validationSchema={SubmitSchema}
                            onSubmit={onSubmit}>
                            {(props) => (
                                <form onSubmit={props.handleSubmit} className="mb-4">
                                    <div className="mb-5 mt-3 block">
                                        <div className="font-bold mb-2.5">
                                            {t('How would you like to Sign up as?')} :
                                        </div>
                                        <div className="text-gray-180 text-xs mb-2">
                                            <Field
                                                onClick={() => {
                                                    setRoleId(1);
                                                }}
                                                id="buyer-radio"
                                                type="radio"
                                                className="radio mr-2.5"
                                                name="role_id"
                                                value="1"
                                            />
                                            <label
                                                htmlFor="buyer-radio"
                                                className="text-blue-350 font-bold">
                                                {t('Clinic')}
                                            </label>
                                        </div>
                                        <div
                                            className={`text-gray-180 text-xs`}>
                                            <Field
                                                onClick={() => setRoleId(2)}
                                                id="seller-radio"
                                                type="radio"
                                                className="radio mr-2.5"
                                                name="role_id"
                                                value="2"
                                            />
                                            <label
                                                htmlFor="seller-radio"
                                                className="text-blue-350 font-bold">
                                                {t('Patient')}
                                            </label>
                                        </div>
                                    </div>
                                    <div className="text-center border-b mt-1 mb-5 border-b-blue-250"></div>
                                    {/*<div className="text-center border-b mt-1 mb-5 border-b-blue-250"></div>*/}
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

                                    {/*<InputText*/}
                                    {/*    style={null}*/}
                                    {/*    icon={'f-fname'}*/}
                                    {/*    label={null}*/}
                                    {/*    name={'name'}*/}
                                    {/*    placeholder={'name'}*/}
                                    {/*    props={props}*/}
                                    {/*    tips={``}*/}
                                    {/*/>*/}

                                    {/*<InputText*/}
                                    {/*    style={null}*/}
                                    {/*    icon={'f-phone'}*/}
                                    {/*    label={null}*/}
                                    {/*    name={'phone'}*/}
                                    {/*    placeholder={'Phone'}*/}
                                    {/*    props={props}*/}
                                    {/*    tips={``}*/}
                                    {/*/>*/}

                                    {/*<InputPassword*/}
                                    {/*    style={null}*/}
                                    {/*    icon={'f-password'}*/}
                                    {/*    label={null}*/}
                                    {/*    name={'password'}*/}
                                    {/*    placeholder={'Password'}*/}
                                    {/*    props={props}*/}
                                    {/*/>*/}
                                    {/*<InputPassword*/}
                                    {/*    style={null}*/}
                                    {/*    icon={'f-password'}*/}
                                    {/*    label={null}*/}
                                    {/*    name={'confirm_password'}*/}
                                    {/*    placeholder={'Confirm Password'}*/}
                                    {/*    props={props}*/}
                                    {/*/>*/}
                                    <span
                                        className="text-[12px] mt-[-15px] block mb-[20px] text-violet-650 leading-4">{t('tips_password')}</span>


                                    <div className="">
                                        <div
                                            style={{lineHeight: '0.1em'}}
                                            className="text-center border-b border-b-blue-250 my-5">
                                            <span className="px-6" style={{'background': '#f0eefe'}}>{t('or')}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={() => signIn('google')} className="btn-primary btn-google">
                                            <span>{t('Sign in with gooogle')}</span>
                                        </button>
                                    </div>


                                    <div className="text-gray-450 flex items-center mb-5">
                                        <Field
                                            id="acceptTerms"
                                            name="acceptTerms"
                                            className="text-green-250 w-5 h-5 border-2 rounded mr-2.5"
                                            type="checkbox"
                                        />
                                        <div className="text-xs">
                                            {t('Accept TermsCondition')}
                                            <Link href={'/terms-and-conditions'} legacyBehavior>
                                                <a className="ml-auto text-xs font-bold red-yellow-gradient-text">
                                                    {t('Accept TermsCondition2')}
                                                </a>
                                            </Link>
                                        </div>
                                        {/*<Link href={'/auth/restore'} legacyBehavior>*/}
                                        {/*    <a className="ml-auto text-xs font-bold red-yellow-gradient-text">*/}
                                        {/*        {t('Forgot password?')}*/}
                                        {/*    </a>*/}
                                        {/*</Link>*/}
                                    </div>

                                    <div className="mb-6">
                                        <button
                                            className="btn-primary btn-medium w-full px-3 py-4 text-white bg-indigo-500 rounded-md
                                    hover:bg-indigo-600
                                    focus:outline-none duration-100 ease-in-out">
                                            {t('Registration')}
                                        </button>
                                    </div>

                                </form>
                            )}
                        </Formik>

                        {/*<ProviderBtns Providers={providers} locale={locale} />*/}
                        {/*<div id="fb-block-btn" ref={fbBtnRef}></div>*/}

                        {/*<fb:login-button*/}
                        {/*    config_id="{config_id}"*/}
                        {/*    throwIfNamespace={}false*/}
                        {/*    onlogin="checkLoginState();">*/}
                        {/*</fb:login-button>*/}
                        {/*<div>*/}
                        {/*    <fb:login-button*/}
                        {/*        config_id="{config_id}"*/}
                        {/*        onlogin="checkLoginState();">*/}
                        {/*    </fb:login-button>*/}
                        {/*</div>*/}
                        {/*<button*/}
                        {/*    className="image-btn bg-social-facebook text-white"*/}
                        {/*    onClick={() => accountService.loginFB()}>*/}
                        {/*    <div className="text-[12px] md:text-sm w-full text-center bg-facebook-btn">*/}
                        {/*        {t('Continue with Facebook')}*/}
                        {/*    </div>*/}
                        {/*    /!*<div className="text-sm bg-facebook-btn">{t('Continue with Facebook')}</div>*!/*/}
                        {/*</button>*/}

                    </div>
                )}
                {hideForm && (
                    <div className="w-80 p-8 mt-10 rounded-lg bg-violet-150 colored-shadow md:w-[480px] md:p-10 pb-14">
                        <div className="grid content-center md:min-h-[400px] text-center">
                            <div className="mb-4 font-bold text-2xl line-height-105percent text-violet-450">
                                {t(
                                    'We send you confirmation link, please check your mailbox'
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

Signup.Layout = FullLayout;

export default Signup;

export async function getServerSideProps(context: any) {
    const {req, locale} = context;
    const session = await getSession({req});
    if (session) {
        return {
            redirect: {destination: `/${locale === 'uk' ? '' : locale}`}
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
