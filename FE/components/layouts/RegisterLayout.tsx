import Header from '../header/Header';
import React, {useEffect} from 'react';
import Footer from '../footer/Footer';
import {useDispatch, useSelector} from 'react-redux';
// import { isDataLoadingSelector } from '../../redux/layouts/selectors';
import { useRouter } from 'next/router';
import { fetchUserAction, setUserAction } from "@/redux/user";
import { userSelector } from '@/redux/user/selectors';
import { useSession } from "next-auth/react";

export default function RegisterLayout({ children }: { children: any }) {
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const session = useSession();
    useEffect(
        function () {
            const queryString = window.location.search;
            console.log('SESSION', session);
            // if (session?.user?.email && !window.localStorage.getItem('user')) {
            //     dispatch(fetchUserAction(session.user.email));
            //     console.log('USER MAIL', session.user.email);
            // } else {
            //     const localUser = JSON.parse(window.localStorage.getItem('user') || '{}');
            //     if (session?.user?.email !== localUser.email) {
            //         // WTF я не помню зачем я ето делала
            //         // window.localStorage.setItem('user', JSON.stringify({}));
            //         if (session?.user?.email !== undefined) {
            //             dispatch(fetchUserAction(session?.user?.email));
            //         }
            //     } else {
            //         dispatch(
            //             setUserAction(JSON.parse(window.localStorage.getItem('user') || '{}'))
            //         );
            //     }
            // }
        },
        [dispatch, session]
    );

    return (
        <>
            <div
                className={`min-h-[750px] text-black dark:text-white bg-gray-100`}>
                {children}
            </div>
        </>
    );
}
