import React, { Fragment } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { sidebarCloseAction } from '@/redux/layouts';
import { useWindowSize } from '../../../hooks';

const SidebarFull: React.FC = () => {
    const t = useTranslations();
    const dispatch = useDispatch();
    const router = useRouter();
    const currRoute = router.route.substring(1);
    const { isMobile } = useWindowSize();

    const closeMenu = () => {
        if (isMobile) {
            dispatch(sidebarCloseAction());
        }
    };

    return (
        <Fragment>
            <li
                role="presentation"
                className={currRoute === 'dashboard' ? 'active' : ''}
                onClick={() => closeMenu()}>
                <Link href={'/dashboard'} legacyBehavior>
                    <a>
                        <i className="dashboard"/>
                        <span className="s-caption">{t('Dashboard')}</span>
                    </a>
                </Link>
            </li>
            <li
                role="presentation"
                className={currRoute === 'clinic' ? 'active' : ''}
                onClick={() => closeMenu()}>
                <Link href={'/clinics'} legacyBehavior>
                    <a>
                        <i className="clinic"/>
                        <span className="s-caption">{t('Clinics')}</span>
                    </a>
                </Link>
            </li>
            <li
                role="presentation"
                className={currRoute === 'clinic' ? 'active' : ''}
                onClick={() => closeMenu()}>
                <Link href={'/stores'} legacyBehavior>
                    <a>
                        <i className="store"/>
                        <span className="s-caption">{t('Stores')}</span>
                    </a>
                </Link>
            </li>
            {/*<li role="presentation" className="separator-line">*/}
            {/*    <div className="separator"/>*/}
            {/*</li>*/}
            {/*<li role="presentation" className="separator-line">*/}
            {/*    <div className="separator"/>*/}
            {/*</li>*/}
        </Fragment>
    );
};

export default SidebarFull;
