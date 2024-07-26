import Head from 'next/head';
import FullLayout from '../components/layouts/FullLayout';
import { getSession } from 'next-auth/react';
import Main from '../components/main/index';

export default function Home() {
    return (
        <div className="main-bg  mx-auto">
            <Head>
                <title>DenTal Care</title>
                <meta name="description" content="LiveDentist" />
            </Head>

            <div className="main-layout">
                <Main />
            </div>
        </div>
    );
}
Home.Layout = FullLayout;

export async function getServerSideProps(context: any) {
    const { req, locale } = context;
    const session = await getSession({ req });
    console.log('Session USER', session?.user)

    if (session) {
        return {
            redirect: { destination: `/${locale === 'ua' ? '' : `${locale}/`}dashboard` }
        };
    } else {
        return {
            props: {
                messages: {
                    ...require(`../messages/${locale}.json`)
                }
            }
        };
    }
}
