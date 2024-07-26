import '../styles/globals.scss';
import Head from 'next/head';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import {NextIntlClientProvider, useMessages} from 'next-intl';
import { SessionProvider } from 'next-auth/react';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../app/store';
import MainLayout from '../components/layouts/MainLayout';
import {useRouter} from 'next/router';
import SidebarLayout from '../components/layouts/SidebarLayout';
// import { Toasts, ConfirmationModal } from '../components/_common';
// import { CalendlyModal } from '../components/_common';
import React from 'react';

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);
    const Layout = (Component as any).Layout || SidebarLayout;
    // const Layout = (Component as any).Layout;
    const router = useRouter();

    return getLayout(
        <ReduxProvider store={store}>
            <NextIntlClientProvider
                locale={router.locale}
                timeZone="Europe/Vienna"
                messages={pageProps.messages}
            >
                <SessionProvider
                    session={pageProps.session}>
                    <MainLayout>
                        <Head>
                            <title>DenTal Care for all</title>
                            <link rel="icon" href="/images/logo-1.svg"/>
                            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                            <meta name="google-signin-client_id" content="6984088107-b74m2a42votop2kk4hrhfosri34r10d3.apps.googleusercontent.com"/>
                            <script src="https://apis.google.com/js/platform.js" async defer></script>
                            {/*<meta name="google-signin-client_id" content="6984088107-b74m2a42votop2kk4hrhfosri34r10d3.apps.googleusercontent.com"/>*/}
                        </Head>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </MainLayout>
                </SessionProvider>
            </NextIntlClientProvider>
        </ReduxProvider>
    );
}

export default MyApp;
