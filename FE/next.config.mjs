/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en', 'ua', 'lv', 'lt'],
        defaultLocale: 'ua',
        localeDetection: false
    },
    reactStrictMode: true,
    images: {
        domains: [
            'localhost',
        ]
    },
    publicRuntimeConfig: {
        apiUrl: process.env.API_URL,
        siteUrl: process.env.API_SITE_URL,
        stripeKey: process.env.API_STRIPE,
        facebookClientId: process.env.FACEBOOK_CLIENT_ID,
        localUrl: process.env.LOCAL_PATH_REPLACE
    },
};

export default nextConfig;
