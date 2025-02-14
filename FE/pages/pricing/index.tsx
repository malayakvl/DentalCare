import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Router from 'next/router';
// import Image from 'next/image';
import Head from 'next/head';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '@/redux/user/selectors';
// import { session } from 'next-auth';
import { setModalCalendlyMetaAction, showLoaderAction } from '../../redux/layouts/actions';
import { fetchFormAction, requestDemoAction } from '@/redux/paymentPlans';
import { itemsSelector } from '@/redux/paymentPlans/selectors';
// import { formatCurrency, parseTranslation } from '../../lib/functions';
import FullLayout from '../../components/layouts/FullLayout';
import { skipExistUserSubscriptionNewAction } from '@/redux/user';
import { InputText } from '@/components/_form';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Try from '../../components/try';
import { setupFreeSubscriptionAction } from '@/redux/user';
import {getSession} from "next-auth/react";

type PriceProps = {
    planId: number;
    name: string;
    price: number;
    desc: string;
    sale: number;
    buttonText: string;
    imageSrc: string;
    disabled?: boolean;
    selected: boolean;
    onClick: any;
    session: any;
};

const PriceHeading = ({
    planId,
    name,
    price,
    desc,
    sale,
    buttonText,
    imageSrc,
    disabled
}: PriceProps) => {
    const t = useTranslations();
    const user = useSelector(userSelector);
    const dispatch = useDispatch();

    return (
        <div>
            <div className="w-full h-32 lg:h-[120px] relative mx-auto">
                <div className="">
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <img src={imageSrc} className="mx-auto plan-img" alt="" />
                </div>
            </div>
            <div className="price-plan-name">
                {name}
                {planId === 2 && <div className="most-popular">{t('Most popular')}</div>}
            </div>
            <div className="md:h-[100px] lg:h-[55px] price-description mb-[15px]">{desc}</div>
            <div className="inline-block text-center" style={{ justifyContent: 'center' }}>
                <div>
                    <div className="price-plan inline-block">{price}</div>
                    <div className="inline-block align-middle per-month mt-[-15px]">
                        euros / {t('month')}
                    </div>
                </div>
                <div className="clear-both" />
                <div
                    className="mt-[-10px] md:h-[40px] inline-block"
                    style={{ justifyContent: 'center' }}>
                    {sale > 0 && (
                        <div className="font-bold text-gray-350 text-sm">
                            {sale}% {t('of sale')}
                        </div>
                    )}
                </div>
            </div>

            <div className=" h-[15px] mt-[-20px] discount-text hidden">
                {sale > 0 && (
                    <div className="price-percent">
                        {sale}% {t('of sale')}
                    </div>
                )}
                {sale == 0 && <div className="price-percent" />}
            </div>
            <div className="clear-both" />
            <div className="mt-[0px] mb-[20px] md:mb-auto  md:mx-[12px] md:mt-[-10px]">
                {planId < 3 && (
                    <button
                        onClick={() => {
                            // dispatch(setSelectedPlanAction(planId));
                            if (user?.subscription_id) {
                                if (user?.subscription_id.includes('skip')) {
                                    Router.push(`/subscription/create?planId=${planId}`);
                                } else {
                                    Router.push(`/account/plan`);
                                }
                            } else {
                                if (user?.email) {
                                    Router.push(`/subscription/create?planId=${planId}`);
                                } else {
                                    Router.push(`/auth/subscription?planId=${planId}`);
                                }
                            }
                        }}
                        className={`${
                            disabled ? 'disabled-btn' : 'gradient-btn'
                        } w-full mt-7 md:mt-[40px] justify-self-end gradient-selectur`}>
                        {planId !== 3 ? t(buttonText) : t('Talk to sales')}
                    </button>
                )}
                {planId == 3 && (
                    <button
                        onClick={() => {
                            dispatch(setModalCalendlyMetaAction(true));
                        }}
                        className={`${
                            disabled ? 'disabled-btn' : 'gradient-btn'
                        } w-full mt-7 md:mt-[40px] justify-self-end gradient-selectur`}>
                        {planId !== 3 ? t(buttonText) : t('Talk to sales')}
                    </button>
                )}
            </div>
        </div>
    );
};

export default function Pricing({ locale, session }: { locale: any, session: any }) {
    const t = useTranslations();
    const [selected, setSelected] = useState('business');
    const dispatch = useDispatch();
    const plans = useSelector(itemsSelector);
    const user = useSelector(userSelector);
    const [showTrial, setShowTrial] = useState(true);
    const [hideFreeBtn, setHideFreeBtn] = useState(false);
    // const session = '';

    // const stripeClientSecret = useSelector(clientSecretSelector);

    const [success, setSuccess] = useState(false);
    const [hideTrialBtn, setHideTrialBtn] = useState(false);

    const validationSchema = Yup.object().shape({
        email: Yup.string().email(t('Must be a valid email')).required(t('Required field'))
    });

    // console.log(user);
    const handlerSubmit = (values: unknown) => {
        dispatch(
            requestDemoAction({
                form: values,
                successMessage: t('Your request has been sent'),
                locale,
                callback: setSuccess
            })
        );
    };

    useEffect(() => {
        dispatch(showLoaderAction(true));
        dispatch(fetchFormAction());
    }, []);

    useEffect(() => {
        if (user?.email) {
            if (user.is_trial) {
                setHideTrialBtn(true);
                setShowTrial(false);
            }
            if (user.subscription_id?.includes('skip_sub')) {
                setShowTrial(false);
            }
            setHideFreeBtn(true);
        }
        // setShowTrial(false);
    }, [user?.email]);

    const renderTickByValues = (data: any, planId: number) => {
        return (
            <>
                {data.map((_data: any, key: number) => (
                    <Fragment key={`tick_${Math.random()}`}>
                        <div className="option-row relative">
                            <span
                                className={`w-full font-semibold text-[14px] pr-4 leading-[24px] text-left text-gray-[350] tick-bg ${
                                    _data.values[planId].value ? 'active' : ''
                                }`}>
                                {t(_data.option.name)}
                            </span>
                            {_data.values[planId].value && (
                                <div className="tick-block">
                                    <div className="option-tick" />
                                </div>
                            )}
                        </div>
                    </Fragment>
                ))}
            </>
        );
    };

    const renderValuesTick = (data: any, key: number, planId: number, plans: any) => {
        return (
            <>
                <div className={`price-name-heading ${key > 0 ? 'price-name-heading-1 ' : ''}`}>
                    <span className="block pt-[9px] text-[16px] block-price-head md:hidden">
                        {t(plans.values[key].group.name)}
                    </span>
                </div>
                {renderTickByValues(data, planId)}
            </>
        );
    };

    const parseOptionsNew = (data: any, locale: string) => {
        return (
            <>
                {data.map((data: any) => (
                    <Fragment key={data.option.id}>
                        <div className="option-row">
                            <div className="option-value">
                                {/*{parseTranslation(data.option, 'name', locale)}*/}
                                {t(data.option.name)}
                            </div>
                        </div>
                    </Fragment>
                ))}
            </>
        );
    };

    return (
        <div className="main-bg container xl:max-w-[1400px] mx-auto">
            <Head>
                <title>DenTal Care - Pricing</title>
            </Head>
            <div className="main-layout">
                <div className="relative mx-auto mt-[100px]">
                    <div className="flex flex-col md:flex-row ">
                        <div className="w-full md:w-2/3">
                            <span className="block text-16px mb-[10px] md:text-[14px] text-gray-350 font-semibold md:ml-[5px]">
                                {t('Pricing & Plans')}
                            </span>
                            <h1 className="page-heading md:pr-[100px]">
                                {t('Pricing that fits your size')}
                            </h1>
                            <div className="text-pricing mt-[10px]">
                                {locale == 'fr' && (
                                    <>
                                        {t('text_pricing_1')}
                                        <span className="font-bold">{t('text_pricing_1_1')}</span>
                                        &nbsp;{t('text_pricing_1_2')}
                                        <span className="block mt-[5px]">
                                            {t('text_pricing_2_1')}{' '}
                                            <span className="font-bold">
                                                {t('text_pricing_2_2')}
                                            </span>
                                            <span>{t('text_pricing_2_3')}</span>
                                        </span>
                                    </>
                                )}
                                {locale == 'en' && (
                                    <>
                                        <span className="block">{t('text_pricing_1')}</span>
                                        <span className="block font-bold">{t('text_always')}</span>
                                    </>
                                )}
                                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                                <span
                                    onClick={() => dispatch(setupFreeSubscriptionAction(true))}
                                    className={`mt-[30px] ${hideFreeBtn ? 'hidden' : 'block'}`}>
                                    <Link href={'/auth/signup'} legacyBehavior>
                                        <a className="btn-big md:mr-[20px] block mb-[10px] md:mb-auto md:inline-block lg:mr-[84px] text-center">
                                            <span className="text-[20px] inline-block min-w-[220px] text-center">
                                                {t('text_free')}
                                            </span>
                                        </a>
                                    </Link>
                                </span>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 relative">
                            <div className="sitting-boy" />
                        </div>
                    </div>

                    {/*SKIP NOW BLOCK*/}
                    <div className="underline text-center mt-8 lg:mt-40">
                        {showTrial && (
                            <Fragment>
                                {user?.email && !user?.subscription_id && (
                                    <span
                                        className="cursor-pointer"
                                        role="presentation"
                                        onClick={() => {
                                            dispatch(
                                                skipExistUserSubscriptionNewAction(
                                                    `${window.location.origin}/dashboard`,
                                                    locale
                                                )
                                            );
                                        }}>
                                        {t('Skip for now')}
                                    </span>
                                )}
                                {!user?.email && (
                                    <Link href="/auth/signup?forFree=skip" legacyBehavior>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                                        <a
                                            onClick={() => {
                                                dispatch(
                                                    skipExistUserSubscriptionNewAction(
                                                        `${window.location.origin}/dashboard`,
                                                        locale
                                                    )
                                                );
                                            }}>
                                            {t('Skip for now')}
                                        </a>
                                    </Link>
                                )}
                            </Fragment>
                        )}
                    </div>

                    {/*PRICING BLOCK*/}
                    <div className="mx-auto mt-[100px] mb-[40px]">
                        <div className="flex w-full flex-col md:flex-row">
                            {/*PLANS OPTION DESCRIPTIONS*/}
                            <div className="hidden md:w-[40%] md:block description-column">
                                <div className="block-fixed-height-heading">
                                    <div className="stamp" />
                                </div>
                                <Fragment>
                                    {plans.values.map((values: any, key: number) => (
                                        <div key={key}>
                                            <div
                                                key={values.group}
                                                className={`price-name-heading ${
                                                    key > 0 ? 'price-name-heading-1' : ''
                                                } `}>
                                                {/*{parseTranslation(values.group, 'name', locale)}*/}
                                                {t(values.group.name)}
                                            </div>
                                            {parseOptionsNew(values.values, locale)}
                                        </div>
                                    ))}
                                </Fragment>
                            </div>
                            {/*FIRST PLAN OPTIONS*/}
                            <div className="md:w-[25%] non-gradiend-block">
                                <div className="block-fixed-height-heading">
                                    <PriceHeading
                                        planId={1}
                                        onClick={() => setSelected('basic')}
                                        name={t('Basic')}
                                        selected={selected === 'basic'}
                                        price={49}
                                        desc={t(
                                            'Best for live retailers that are small or starting out'
                                        )}
                                        sale={5}
                                        session={session}
                                        buttonText="Select"
                                        imageSrc={'/images/plans/standart.png'}
                                    />
                                </div>
                                <Fragment>
                                    {plans.values.map((values: any, key: number) => (
                                        <div key={key}>
                                            {renderValuesTick(values.values, key, 0, plans)}
                                        </div>
                                    ))}
                                </Fragment>
                            </div>
                            {/*SECOND PLAN OPTIONS*/}
                            <div className="md:w-[25%]  gradient-block border-gradient-purple">
                                <div className="block-fixed-height-heading">
                                    <PriceHeading
                                        planId={2}
                                        onClick={() => setSelected('basic')}
                                        name={t('Business')}
                                        selected={selected === 'business'}
                                        price={99}
                                        desc={t(
                                            'Best for live retailers selling more than 5,000€ monthly'
                                        )}
                                        sale={3}
                                        session={session}
                                        buttonText="Select"
                                        imageSrc={'/images/plans/thumb.png'}
                                    />
                                </div>
                                <Fragment>
                                    {plans.values.map((values: any, key: number) => (
                                        <div key={key}>
                                            {renderValuesTick(values.values, key, 1, plans)}
                                        </div>
                                    ))}
                                </Fragment>
                            </div>
                            {/*THIRD PLAN OPTIONS*/}
                            <div className="md:w-[25%] non-gradiend-block">
                                <div className="block-fixed-height-heading">
                                    <PriceHeading
                                        planId={3}
                                        onClick={() => setSelected('platinum')}
                                        name={t('Platinum')}
                                        selected={selected === 'basic'}
                                        price={139}
                                        desc={t(
                                            'Best for retailers with sales over 50,000€ monthly'
                                        )}
                                        sale={3}
                                        session={session}
                                        buttonText="Select"
                                        imageSrc={'/images/plans/rocket.png'}
                                    />
                                </div>
                                <Fragment>
                                    {plans.values.map((values: any, key: number) => (
                                        <div key={key}>
                                            {renderValuesTick(values.values, key, 2, plans)}
                                        </div>
                                    ))}
                                </Fragment>
                            </div>
                        </div>
                    </div>
                </div>
                {/*FORM BLOCK*/}
                {showTrial && !user.id && (
                    <div className="text-gray-350 mx-auto border-red-900">
                        <div className="clear-both" />
                        {user.subscription_id}
                        <h3 className="hidden red-yellow-gradient-text mt-[30px] font-bold text-[24px] leading-[32px] md:text-[60px] md:leading-[72px] text-center md:mt-[80px]">
                            {t('Try it for free today!')}
                        </h3>
                        <h4 className="hidden text-gray-350 leading-[38px] text-[30px] w-full text-center font-medium mt-[24px]">
                            {t('It only takes 30 seconds to get started')}.
                        </h4>
                        {/*=======================================================*/}
                        {/*====================== TRY FOR TODAY ==================*/}
                        {/*=======================================================*/}
                        <div className="lg:mt-[100px]">
                            <Try />
                        </div>

                        {success ? (
                            <div className="mt-8 mb-16 font-bold text-2xl text-center text-green-500 hidden">
                                {t('Your request has been sent')}
                            </div>
                        ) : (
                            <Formik
                                initialValues={{}}
                                validationSchema={validationSchema}
                                onSubmit={handlerSubmit}>
                                {(props) => (
                                    <Form className="flex flex-wrap justify-center align-middle lg:flex-nowrap lg:max-w-2xl mt-8 mb-16 mx-auto hidden">
                                        <InputText
                                            style={'h-14 text-lg w-full'}
                                            icon={'f-email'}
                                            label={null}
                                            name={'email'}
                                            placeholder={t('holder_email')}
                                            props={props}
                                            tips={null}
                                        />

                                        <div className="mb-6 min-w-max w-full lg:w-auto ">
                                            <button className="lg:ml-5 lg:mt-0 w-full gradient-btn hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out">
                                                <span className="text-lg">
                                                    {t('Request a demo')}
                                                </span>
                                            </button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
Pricing.Layout = FullLayout;

export async function getServerSideProps(context: any) {
    const { locale, req } = context;
    const session = await getSession({ req });

    return {
        props: {
            session,
            locale,
            messages: {
                ...require(`../../messages/${locale}.json`),
                ...require(`../../messages/pricing/${locale}.json`)
            }
        }
    };
}

Pricing.Layout = FullLayout;
