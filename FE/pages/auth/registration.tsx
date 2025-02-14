import React from 'react';
import Head from 'next/head';
import getConfig from 'next/config';
import PatientRegistration from '../../components/form/PatientRegistration';
import ClinicRegistration from '../../components/form/ClinicRegistration';
import RegisterLayout from "@/components/layouts/RegisterLayout";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/auth`;

function Registration({ locale, invitation }: { locale: string; invitation: any }) {
    let Form = <></>;
    if (invitation.role_id === 2) {
        Form = <PatientRegistration email={invitation.email} locale={locale} />;
    }
    console.log(invitation.role_id);

    if (invitation.role_id === 1) {
        Form = (
            <ClinicRegistration
                email={invitation.email}
                locale={locale}
                forFree={invitation.is_free === true ? 0 : 0}
                skip={invitation.is_skip === true ? 1 : null}
            />
        );
    }

    return (
        <>
            <Head>
                <title>DenTal Care - Registration</title>
            </Head>

            <div className="flex main-bg justify-center">{Form}</div>
        </>
    );
}
Registration.Layout = RegisterLayout;

export default Registration;

export async function getServerSideProps(context: any) {
    const {
        query: { hash },
        locale
    } = context;
    const res = await fetch(`${baseUrl}/invitation/${hash}`);
    console.log(res);
    if (res.status !== 200) {
        return {
            redirect: { destination: '/' }
        };
    }

    const json = await res.json();
    // if (!json.active) {
    //     return {
    //         locale,
    //         invitation: json,
    //         redirect: { destination: '/' }
    //     };
    // }
    return {
        props: {
            locale,
            invitation: json,
            messages: {
                ...require(`../../messages/${locale}.json`)
            }
        }
    };
    // console.log(locale, json);

    // return {
    //     props: { invitation: json, locale: locale }
    // };
}
