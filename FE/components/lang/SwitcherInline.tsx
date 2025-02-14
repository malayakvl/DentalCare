import { useRouter } from 'next/router';
import React, { useState } from 'react';
import {
    setLngAction,
    toggleProfileMenuAction,
    toggleTextingMenuAction
} from '@/redux/layouts';
import { useDispatch } from 'react-redux';
import { setUserLocaleAction } from '@/redux/user/actions';

export default function LangSwitcherInline() {
    const { locale, locales, defaultLocale }: any = useRouter();
    const router = useRouter();
    // const node = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    const [showLangMenu, setShowLangMenu] = useState(false);
    const switchLang = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        const { pathname, asPath, query } = router;
        const target = event.target as HTMLSpanElement;
        const _locale: string = target.getAttribute('data-lang') || defaultLocale;
        router.push({ pathname, query }, asPath, { locale: _locale });
        setShowLangMenu(false);
        dispatch(toggleTextingMenuAction(false));
        dispatch(setLngAction(_locale));
        dispatch(setUserLocaleAction(_locale));
        dispatch(toggleProfileMenuAction(false));
    };

    return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        <div className={`language-block inline-block text-right lang-mob`}>
            <ul>
                {locales.map((_locale: string) => (
                    <li
                        className={`cursor-pointer inline-block font-bold uppercase mr-4 ${
                            _locale == locale ? 'red-yellow-gradient-text' : ''
                        }`}
                        // onClick={() => {
                        //     dispatch(toggleTextingMenuAction(true));
                        // }}
                        role="presentation"
                        key={_locale}
                        data-lang={_locale}
                        onClick={switchLang}>
                        {_locale}
                    </li>
                ))}
            </ul>
        </div>
    );
}
