import Image from 'next/image';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import React, { useEffect, useRef, useState } from 'react';
import LangSwitcher from '../lang/Switcher';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { userSelector } from '../../redux/user/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { baseApiUrl } from '../../constants';
// import { fetchLatestAction } from '../../redux/notifications';
import { isSTextingMenuOpenSelector } from '../../redux/layouts/selectors';
import { setupFreeSubscriptionAction } from '../../redux/user';

const userProfileImg =
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';

interface Props {
    isNonPage?: boolean | null;
}

const Header: React.FC<Props> = ({ isNonPage }) => {
    const user = useSelector(userSelector);
    const dispatch = useDispatch();
    const t = useTranslations();
    const [userPhoto, setUserPhoto] = useState(userProfileImg);
    const router = useRouter();
    // const [showTextingMenu, setShowTestingMenu] = useState(false);
    const showTextingMenu = useSelector(isSTextingMenuOpenSelector);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const node = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(
        function () {
            if (user?.photo) {
                setUserPhoto(baseApiUrl + user?.photo);
            }
            if (user?.email !== undefined) {
                // dispatch(fetchLatestAction());
            }
            if (window) {
                if (window.innerWidth < 768) {
                    setIsMobile(true);
                }
                const handleWindowResize = () => {
                    if (window.innerWidth < 768) {
                        setIsMobile(true);
                    } else {
                        setIsMobile(false);
                    }
                };
                window.addEventListener('resize', handleWindowResize);
                return () => {
                    window.removeEventListener('resize', handleWindowResize);
                };
            }
        },
        [user]
    );

    useEffect(() => {
        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, []);

    const handleClick = (e: any) => {
        if (
            e.target.parentNode.classList.contains('profile-block') ||
            e.target.parentNode.classList.contains('profile-name') ||
            node?.current?.contains(e.target)
        ) {
            return;
        }
        setShowProfileMenu(false);
    };

    return (
        <header className="w-full mx-auto max-w-full px-4 sm:px-6 lg:px-4">
            <div className="container mx-auto lg:pb-[10px]">
                <div className="relative z-50 flex justify-between">
                    <Link href="/">
                        <div className="logo">
                            <span className="logo-img" />
                            <span>DenTal Care</span>
                        </div>
                    </Link>
                    <div className="btn-toogle">
                        <a href="#" className="btn btn-primary"><span /></a>
                    </div>
                    <div className="hidden lg:block align-end">
                        <ul className="lg:mr-[230px] nav-text">
                            <li><a>{t('Main')}</a></li>
                            <li><a>{t('About Us')}</a></li>
                            <li><a>{t('Services')}</a></li>
                            <li><a>{t('Help')}</a></li>
                        </ul>
                        <LangSwitcher type={``}/>
                        <div className="absolute right-0 top-[5px]">
                            {!user.email && (
                                <>
                                    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                                    <a href="/auth/signup" className="btn-primary btn-medium btn-login">
                                        {t('Registration')}
                                    </a>
                                </>
                            )}
                            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                            <a href="/auth/signin" className=" btn-login">
                                <span className="enter-btn"></span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            <div className="clearfix"/>
        </header>
    );
};

export default Header;
