import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations();

    return (
        <footer className="w-full bg-violet-650 pt-[30px]">
            <div className="container mx-auto text-white">
                <div className="px-4 pb-4 tracking-wide text-sm text-violet-550 flex h-full justify-between flex-col">
                    <div className="flex flex-col md:flex-row justify-between md:pb-4">
                        <div className="cursor-pointer mt-3 md:mt-0">
                            <Link href={'/'}>
                                    <Image
                                        src="/images/footer/logo.svg"
                                        width="350"
                                        height="40"
                                        layout="fixed"
                                        className="logo-footer"
                                        alt=""
                                    />
                            </Link>
                        </div>
                        <div className="mb-4 justify-end flex flex-com md:justify-self-stretch md:flex-row md:mb-0">
                            <div className="mr-9 text-white">
                                <div className="mb-2 font-bold text-white">{t('About Us')}</div>
                                <div className="mb-0.5">
                                    <Link href={'/pricing'}>{t('Price')}</Link>
                                </div>
                                <div>
                                    <Link href={'/contact-us'}>{t('Contact Us')}</Link>
                                </div>
                            </div>
                            <div className="text-white">
                                <div className="mb-2 font-bold text-white">{t('Languages')}</div>
                                {/*<div className="mb-0.5">*/}
                                {/*    <Link href={'/case-studies'}>{t('Матеріали')}</Link>*/}
                                {/*</div>*/}
                                <div className="uppercase mb-0.5">
                                    <Link href={'/faq'}>{t('Faq')}</Link>
                                </div>
                                <div className="mb-0.5">
                                    <Link href={'/full-guide/livesession'}>
                                        {t('Knowlage Center')}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 flex-col md:flex-row justify-between border-t border-blue-450">
                        <div className="flex justify-end hidden">
                            <div className="mr-10">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer">
                                    <Image
                                        src="/images/social/facebook.svg"
                                        width={15}
                                        height={15}
                                        layout="fixed"
                                        alt=""
                                    />
                                </a>
                            </div>

                            <div className="mr-10">
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer">
                                    <Image
                                        src="/images/social/instagram.svg"
                                        width={15}
                                        height={15}
                                        layout="fixed"
                                        alt=""
                                    />
                                </a>
                            </div>

                            <div>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer">
                                    <Image
                                        className=""
                                        src="/images/social/linkedin.svg"
                                        width={15}
                                        height={15}
                                        layout="fixed"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col float-right md:flex-row md:justify-end">
                            <div className="mr-0 text-right md:mr-5 text-white">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <Link href={'/about-us'} >
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                                    {t('About DenTal Care')}
                                </Link>
                            </div>
                            <div className="mr-0 text-right md:mr-5 text-white">
                                <Link href={'/privacy'}>Privacy</Link>
                            </div>
                            <div className="mr-0 text-right md:mr-5 text-white">
                                <Link href={'/terms-and-conditions'}>Terms</Link>
                            </div>
                            <div className="text-white">
                                @ {moment().format('YYYY')} DenTal Care
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
