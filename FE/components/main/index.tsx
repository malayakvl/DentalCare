import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React, { useState } from 'react';
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import Faq from '../faq/Faq';
import {useRouter} from "next/router";

function Main() {
    const t = useTranslations();
    const [activeNumber, setActiveNumber] = useState(0);
    const { locale, locales, defaultLocale }: any = useRouter();
    const dispatch = useDispatch();
    const changeFeedback = (num: number) => {
        setActiveNumber(num);
    };
    return (
        <>
            <div className="md:flex">
                <div className="w-full md:w-1/2">
                    <div className="home-hero-wrapper text-center">
                        <h1 className="title home-hero">
                            {t('teaser_1')} <span className="accent-text text-white">{t('teaser_2')}</span>{t('teaser_3')}
                        </h1>
                        <p className="text-[22px] text-cligraf text-violet-350 mt-[20px] mb-[20px]">
                            Увесь облік операцій по клініці в одній системі<br/>
                            <span className="font-thin">Для керівників, лікарів, бухгалтерів та пацієнтів</span>
                        </p>
                        <div className="clearfix" />
                        <div className="mt-[50px]">
                            <a href="/plans" className="block lg:inline btn-primary">
                                Запланувати Консультацію
                            </a>
                            <a href="/services" className="mt-[20px] block lg:inline btn-primary btn-white md:ml-[10px]">
                                Переглянути Сервіси
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="cabinet"></div>
ʼ                </div>
            </div>
            <div className="container mx-auto relative">
                <div className="bg-gray-gradient mx-[16px] p-5  mt-[-300px] md:mt-[100px] md:p-10 rounded-lg min-h-[250px] md:mx-auto lg:mt-[-100px]">
                    <div className="md:flex mt-[20px] text-white">
                        <div className="w-full inline-block mb-[30px] md:mb-auto md:w-1/3">
                            <i className="icon icon-envelope"/>
                            <div className="float-left title-home">
                                <span className="block uppercase font-bold">Звʼязатись з Нами</span>
                                <span className="text-[16px] font-normal block mt-4">+380 (97) 259-35-35</span>
                                <span className="text-[16px] font-normal block mt-4">
                                    <a href="#" className="h-link font-bold">malaya.kvl@gmail.com</a>
                                </span>
                                <span className="text-[16px] font-normal block mt-4">
                                    <a href="#" className="h-link font-bold">Замовити зустріч</a>
                                </span>
                            </div>

                        </div>
                        <div className="w-full inline-block mb-[30px] md:mb-auto md:w-1/3">
                            <i className="icon icon-clock"/>
                            <div className="float-left title-home">
                                <span className="block uppercase font-bold">Години Роботи</span>
                                <span className="text-[16px] font-normal block mt-4"><b
                                    className="text-white inline-block min-w-[80px]">Пон-Пт</b> 9:00 - 18:00</span>
                                <span className="text-[16px] font-normal block mt-2"><b
                                    className="text-white inline-block min-w-[80px]">Сб </b>10:00 - 15:00</span>
                                <span className="text-[16px] font-normal block mt-2"><b
                                    className="text-white inline-block min-w-[80px]">Нд</b>вихідний</span>
                            </div>
                        </div>
                        <div className="w-full inline-block md:mb-auto md:w-1/3">
                            <i className="icon icon-teeth"/>
                            <div className="float-left title-home">
                                <span className="block uppercase font-bold">Сервіси</span>
                                <span className="text-[16px] font-normal block mt-4">Планування зустрічей</span>
                                <span className="text-[16px] font-normal block mt-2">Фінанси клініки</span>
                                <span className="text-[16px] font-normal block mt-2">Управління складом</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="grid md:flex mt-10">
                    <div className="order-2 w-full md:w-1/2 relative md:order-1">
                        <div className="md:block round-violet"/>
                        <div className="pic pic-4"/>
                    </div>
                    <div className="order-1 w-full px-[16px] md:px-auto md:w-1/2 md:mt-20 md:order-2">
                        <h3 className="pt-0">Візуальне сприйняття історії лікування</h3>
                        <span className="text-[16px] mt-4 lead-3 block lg:text-[18px]">
                            Динамічна історія лікування пацієнта, яка в хронологічному порядку та необмеженій
                            кількості зберігає файли всіх форматів.
                            <br/>
                            <a href="#" className="btn-primary btn-medium inline-block mt-7">Детальніше</a>
                        </span>
                    </div>
                </div>


                <div className="md:flex mt-20 lg:mt-40">
                    <div className="w-full px-[16px] md:px-auto md:w-1/2">
                        <h3 className="pt-[50px]">Зрозумілі плани лікування</h3>
                        <span className="mb-[50px] md:mb-auto text-[16px] mt-4 lead-3 block lg:text-[18px]">
                            Нарешті лікар та пацієнт можуть спілкуватися «однією мовою», адже плани лікування прості
                            та зрозумілі не лише для спеціалістів, а і для пацієнтів.<br/>
                            <a href="#" className="btn-primary btn-medium inline-block mt-7">Детальніше</a>
                        </span>
                    </div>
                    <div className="w-full md:w-1/2 relative">
                        <div className="pic pic-3"/>
                        <div className="round-violet round-violet-right"/>
                    </div>
                </div>

                <div className="grid md:flex md:mt-20 lg:mt-20">
                    <div className="order-2 w-full md:w-1/2 relative md:order-1">
                        <div className="round-violet"/>
                        <div className="pic pic-2"/>
                    </div>
                    <div className="order-1 w-full px-[16px] md:px-auto md:w-1/2 md:mt-20 md:order-2">
                        <h3 className="lg:pt-[0px]">Розумний розклад</h3>
                        <span className="mb-[50px] md:mb-auto text-[16px] mt-4 lead-3 block lg:text-[18px]">
                            Інтерактивний розклад клініки надасть всю важливу інформацію про пацієнтів за лічені секунди.
                            <br/>
                            <a href="#" className="btn-primary btn-medium inline-block mt-7">Детальніше</a>
                        </span>
                    </div>
                </div>

                <div className="md:flex md:mt-40">
                    <div className="w-full px-[16px] md:px-auto md:w-1/2">
                        <h3 className="pt-[50px]">Повний контроль над фінансами</h3>
                        <span className="pb-[50px] text-[16px] mt-4 lead-3 block md:pb-auto lg:text-[18px]">
                            Реальна картина вашого бізнесу в один клік. P&L, заробітні плати і більше 40 фінансових
                            та операційних звітів покажуть, як оперативно скоротити витрати, закрити збиткові маніпуляції,
                            коли інвестувати в бізнес, розрахувати зарплати та зробити необхідні закупівлі.
                           <br/>
                            <a href="#" className="btn-primary btn-medium inline-block mt-7">Детальніше</a>
                        </span>
                    </div>
                    <div className="w-full md:w-1/2 relative">
                        <div className="pic pic-5"/>
                        <div className="round-violet round-violet-right"/>
                    </div>
                </div>

                <div className="grid md:flex md:mt-10">
                    <div className="order-2 w-full md:w-1/2 relative md:order-1">
                        <div className="round-violet"/>
                        <div className="pic-7"/>
                    </div>
                    <div className="order-1 w-full px-[16px] md:px-auto md:w-1/2 md:mt-10 lg:mt-20 md:order-2">
                        <h3 className="">Точний облік матеріалів та препаратів</h3>
                        <span className="pb-[50px] text-[16px] mt-4 lead-3 block md:pb-auto lg:text-[18px]">
                            Ведення обліку товарів, матеріалів, препаратів та інструментів забезпечує безперебійну
                            роботу кожного спеціаліста та всієї клініки.
                            Спеціалісти виконують маніпуляції та процедури, а система автоматично списує з балансу
                            усі матеріали та засоби, що використовувалися.
                            <br/>
                            <a href="#" className="btn-primary btn-medium inline-block mt-7">Детальніше</a>
                        </span>
                    </div>
                </div>

                <div className="md:flex lg:mt-20">
                    <div className="w-full px-[16px] md:px-auto md:w-1/2">
                        <h3 className="pt-[50px]">Робота команди в єдиному просторі</h3>
                        <span className="text-[16px] mt-4 lead-3 block lg:text-[18px]">
                            У DenTalCare лікарі разом створюють плани та етапи лікування, обмінюються коментарями та файлами,
                            планують задачі, створюють нагадування один одному та контролюють їх виконання.
                            Асистент — завжди розуміє, що потрібно підготувати для кожного наступного візиту,
                            які треба матеріали та інструменти. Адміністратор — не покидаючи зону рецепції знає,
                            які маніпуляції виконано пацієнту та скільки це коштує.
                            Керівник та власник — бачить повну картину роботи кожного спеціаліста та всієї клініки.
                            <br/>
                            <a href="#" className="btn-primary btn-medium inline-block mt-7">Детальніше</a>
                        </span>
                    </div>
                    <div className="w-full md:w-1/2 relative">
                        <div className="pic-1 ml-[20px]"/>
                    </div>
                </div>
            </div>
            <Faq />
        </>
    );
}

export default Main;
