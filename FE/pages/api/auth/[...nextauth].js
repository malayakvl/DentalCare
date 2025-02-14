import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/auth`;

export default NextAuth({
    // pages: {
    //     signIn: '/auth/signin',
    //     signOut: '/auth/signout',
    //     error: '/auth/error', // Error code passed in query string as ?error=
    //     verifyRequest: '/auth/verify-request', // (used for check email message)
    //     newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    // },
    providers: [
        // FacebookProvider({
        //     clientId: process.env.FACEBOOK_CLIENT_ID,
        //     clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        // }),
        FacebookProvider({
            clientId: '3046697902325160',
            clientSecret: 'a99354090c107188b3a6ca136d20d06c'
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            id: 'credentials_login',
            async authorize(credentials) {
                console.log(credentials);
                const res = await fetch(`${baseUrl}/login`, {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { 'Content-Type': 'application/json' }
                });
                const resp = await res.json();
                console.log('Resp User', resp.user);
                if (res.ok && resp.user) {
                    return resp.user;
                }
                // console.log(resp.user);

                throw `/auth/signin?message=${resp.message}`;
                // return null
            }
        }),
        CredentialsProvider({
            id: 'credentials_subscription_login',
            async authorize(credentials) {
                const res = await fetch(`${baseUrl}/subscription-login`, {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { 'Content-Type': 'application/json' }
                });
                const resp = await res.json();

                if (res.ok && resp.user) {
                    return resp.user;
                }
                throw `/auth/signin?message=${resp.message}`;
                // return null
            }
        }),
        // CredentialsProvider({
        //     id: 'credentials_seller_login',
        //     async authorize(credentials) {
        //         const res = await fetch(`${baseUrl}/admin-seller`, {
        //             method: 'POST',
        //             body: JSON.stringify(credentials),
        //             headers: { 'Content-Type': 'application/json' }
        //         });
        //         const resp = await res.json();
        //         if (res.ok && resp.user) {
        //             return resp.user;
        //         }
        //         throw `/auth/signin?message=${resp.message}`;
        //         // return null
        //     }
        // }),
        // CredentialsProvider({
        //     id: 'credentials_hash',
        //     async authorize(credentials) {
        //         const res = await fetch(`${baseUrl}/activate-hash/${credentials.hash}`, {
        //             method: 'GET',
        //             headers: { 'Content-Type': 'application/json' }
        //         });
        //         const resp = await res.json();
        //         if (res.ok && resp.user) {
        //             return resp.user;
        //         }
        //
        //         throw `/auth/signin?message=your token expired`;
        //         // return null
        //     }
        // }),
        // CredentialsProvider({
        //     id: 'credentials_sdkfacebook',
        //     async authorize(credentials) {
        //         const res = await fetch(`${baseUrl}/provider`, {
        //             method: 'POST',
        //             body: JSON.stringify(credentials),
        //             headers: { 'Content-Type': 'application/json' }
        //         });
        //         const resp = await res.json();
        //         if (res.ok && resp.user) {
        //             return resp.user;
        //         }
        //         throw `/auth/signup?message=your token expired cred`;
        //         // return null;
        //     }
        // }),
        CredentialsProvider({
            id: 'credentials_login_subscription',
            async authorize(credentials) {
                const res = await fetch(`${baseUrl}/subscription-register-login`, {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { 'Content-Type': 'application/json' }
                });
                const resp = await res.json();
                if (res.ok && resp.user) {
                    return resp.user;
                }
                throw `/auth/signin?message=you are not registered yet`;
                // return null;
            }
        })
    ],
    events: {
        async signIn(message) {
            if (message.account?.provider) {
                const dataUser = message.user;
                console.log("DATA USER", message.user);
                dataUser.provider = message.account.provider;
                dataUser.providerId = message.account.id;
                await fetch(`${baseUrl}/provider`, {
                    method: 'POST',
                    body: JSON.stringify(dataUser),
                    headers: { 'Content-Type': 'application/json' }
                });
            }
        }
    },
    debug: true
});
