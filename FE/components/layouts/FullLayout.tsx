import Header from '../header/Header';
import React from 'react';
import Footer from '../footer/Footer';
import { useSelector } from 'react-redux';
// import { isDataLoadingSelector } from '../../redux/layouts/selectors';
import { useRouter } from 'next/router';
// import { userSelector } from '../../redux/user/selectors';

export default function FullLayout({ children }: { children: any }) {
    // const showLoader = useSelector(isDataLoadingSelector);
    // const router = useRouter();
    // const user = useSelector(userSelector);

    return (
        <>
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
            {/*<Footer />*/}
            <Header />
            <div
                className={`min-h-[750px] text-black dark:text-white bg-gray-100`}>
                {children}
            </div>
            <Footer />
        </>
    );
}
