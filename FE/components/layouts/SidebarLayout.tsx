// import { SidebarCustomer, SidebarBuyer, SidebarAdmin } from '../sidebar/index';
import { SidebarClinic } from '../sidebars/index';
import SidebarHeader from '../header/SidebarHeader';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { userSelector } from '@/redux/user/selectors';
import { isDataLoadingSelector, isSidebarOpenSelector } from '@/redux/layouts/selectors';
import {
    showEmailNotificationAction,
    toggleProfileMenuAction,
    toggleSidebarAction
} from '@/redux/layouts';
import Router, { useRouter } from 'next/router';
// import { setUserLocaleAction } from '../../redux/user/actions';

export default function SidebarLayout({ children }: { children: any }) {
    const user = useSelector(userSelector);
    const showLoader = useSelector(isDataLoadingSelector);
    const dispatch = useDispatch();
    const isSidebarOpen = useSelector(isSidebarOpenSelector);
    const { locale }: any = useRouter();
    // const redirectOrderNumber = '';

    const isValidEmail = (email: any) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    // const isMobileDevice = useSelector(isMobileDeviceSelector);
    useEffect(() => {
        if (user?.email && user.role_id == 2) {
            if (user?.status === 'cancel') {
                Router.push(`/pricing`);
            }
            if (user.subscription_id?.includes('fake_sub_') || user?.subscription_expired) {
                Router.push(`/pricing`);
            }
        }
        if (user?.email) {
            if (
                !isValidEmail(user?.email) &&
                (!user?.email_real || !isValidEmail(user?.email_real))
            ) {
                dispatch(showEmailNotificationAction(true));
            } else {
                dispatch(showEmailNotificationAction(false));
            }
            // dispatch(setUserLocaleAction(locale));
        }
    }, [user?.email]);

    return (
        <div className="relative min-h-screen bg-gray-100">
            {showLoader && (
                <div className="loader">
                    <div className="flex justify-center items-center w-full h-full">
                        <div className="loader-content"></div>
                        {/*<div*/}
                        {/*    className="spinner-border animate-spin inline-block w-20 h-20 border-4 rounded-full"*/}
                        {/*    role="status">*/}
                        {/*    <span className="visually-hidden">Loading...</span>*/}
                        {/*</div>*/}
                    </div>
                </div>
            )}
            {/*{user.role_id === 1 && <SidebarBuyer />}*/}
            {user.role_id === 1 && <SidebarClinic />}
            {/*{user.role_id === 3 && <SidebarAdmin />}*/}
            <div
                className={`relative ml-0 h-full mt-2 pb-2 md:mt-0 md:mb-10 ${
                    !isSidebarOpen ? 'side-margin' : 'side-with-sidebar'
                }`}>
                <div className="absolute md:hidden flex items-center">
                    <button
                        className="outline-none mobile-menu-button"
                        onClick={() => {
                            dispatch(toggleSidebarAction());
                            dispatch(toggleProfileMenuAction(false));
                        }}>
                        {/*<svg*/}
                        {/*    width="24"*/}
                        {/*    height="40"*/}
                        {/*    viewBox="0 0 24 40"*/}
                        {/*    fill="none"*/}
                        {/*    xmlns="http://www.w3.org/2000/svg">*/}
                        {/*    <path*/}
                        {/*        fillRule="evenodd"*/}
                        {/*        clipRule="evenodd"*/}
                        {/*        d="M3 15C3 14.4477 3.44772 14 4 14H20C20.5523 14 21 14.4477 21 15C21 15.5523 20.5523 16 20 16H4C3.44772 16 3 15.5523 3 15ZM3 20C3 19.4477 3.44772 19 4 19H14C14.5523 19 15 19.4477 15 20C15 20.5523 14.5523 21 14 21H4C3.44772 21 3 20.5523 3 20ZM4 24C3.44772 24 3 24.4477 3 25C3 25.5523 3.44772 26 4 26H8C8.55228 26 9 25.5523 9 25C9 24.4477 8.55228 24 8 24H4Z"*/}
                        {/*        fill="#4F5B84"*/}
                        {/*    />*/}
                        {/*</svg>*/}
                    </button>
                </div>

                <div className="bg-white">
                    <SidebarHeader />
                </div>
                <div className="mt-6 ml-[40px]">{children}</div>
            </div>
        </div>
    );
}
