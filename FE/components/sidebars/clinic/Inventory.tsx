import React, { Fragment } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useDispatch } from 'react-redux';
import { setActivePageAction } from '../../../redux/layouts/actions';

const SidebarInventory: React.FC = () => {
    const t = useTranslations();
    const dispatch = useDispatch();
    return (
        <Fragment>
            <li
                className="go-back"
                role="presentation"
                onClick={() => {
                    dispatch(
                        setActivePageAction({
                            type: 'inventory',
                            modifier: 'products'
                        })
                    );
                }}>
                <Link href={'/dashboard'} legacyBehavior>
                    <a>
                        <span>Go Back</span>
                    </a>
                </Link>
            </li>
            <li>
                <div className="separator" />
            </li>
            <li className="submenu">
                <span
                    className="inventory-sub text-blue-350 text-base font-bold tracking-wide truncate cursor-pointer"
                    role="presentation"
                    onClick={() => {
                        dispatch(
                            setActivePageAction({
                                type: 'inventory',
                                modifier: 'products'
                            })
                        );
                    }}>
                    {t('Inventory')}
                </span>
            </li>
        </Fragment>
    );
};

export default SidebarInventory;
