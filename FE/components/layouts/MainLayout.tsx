import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserAction, setUserAction } from '../../redux/user';
import { userSelector } from '../../redux/user/selectors';
// import CookieConsent from 'react-cookie-consent';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function MainLayout({ children }: { children: any }) {
    const session = useSession();
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const t = useTranslations();

    useEffect(
        function () {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            if (session?.data?.user?.email && !window.localStorage.getItem('user')) {
                dispatch(fetchUserAction(session?.data?.user?.email));
            } else {
                const localUser = JSON.parse(window.localStorage.getItem('user') || '{}');
                if (session?.data?.user?.email !== localUser.email) {
                    if (session?.data?.user?.email !== undefined) {
                        dispatch(fetchUserAction(session?.data?.user?.email));
                    }
                } else {
                    dispatch(
                        setUserAction(JSON.parse(window.localStorage.getItem('user') || '{}'))
                    );
                }
            }
        },
        [dispatch, session.data?.user]
    );

    return (
        <div className="relative min-h-screen">
            {/*{showLoader && (*/}
            {/*    <div className="loader">*/}
            {/*        <div className="flex justify-center items-center w-full h-full">*/}
            {/*            <div*/}
            {/*                className="spinner-border animate-spin inline-block w-20 h-20 border-4 rounded-full"*/}
            {/*                role="status">*/}
            {/*                <span className="visually-hidden">Loading...</span>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*)}*/}
            <div
                className={`min-h-[750px] text-black dark:text-white bg-gray-100`}>
                {children}
            </div>
        </div>
    );
}
