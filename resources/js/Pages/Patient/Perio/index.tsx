import { Transition } from '@headlessui/react';
import { Link, router, useForm } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import { appLangSelector } from "../../../Redux/Layout/selectors";
import Lang from "lang.js";
import lngMaterial from "../../../Lang/Material/translation";
import InputText from "../../../Components/Form/InputText";
import InputTreeSelect from "../../../Components/Form/InputTreeSelect";
import { emptyProducersAutocompleteAction, findProducersAction } from "../../../Redux/Clinic";
import { useDispatch, useSelector } from "react-redux";
import { userSearchResultsSelector } from "../../../Redux/Clinic/selectors";
import InputSelect from "../../../Components/Form/InputSelect";

import {
    getStatusesSelector,
    getActiveToothNumber
} from "../../../Redux/Formula/selectors";
import MovePerio from './Move';
import Furkacia from './Furkacia';
import FormulaPerio1828 from './FormulaPerio1828';
import FormulaPerio3848 from './FormulaPerio3848';
import DentalDeposits from './DentalDeposits';
import Fertilizer from './Fertilizer';
import Bleeding from './Bleeding';
import Moving from './Moving';
import DeepZond from './DeepZoond';


export default function Formula() {
    const toothActive = useSelector(getStatusesSelector);
    const activeNumber = useSelector(getActiveToothNumber);

    return (
        <div className="w-full scroll-x">
            <table className="table-auto perio-table">
                <tbody>
                <tr>
                    <td className="title">Статус зуба</td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td className="title">Кровоточивість</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="title">Гноєтеча</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="title">Зубні відкладення</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="title">Глибина зонд-ння</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="title">Ясений край</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="title">Вестибулярно</td>
                    <td colSpan={16} style={{textAlign: 'center', width: '1024px'}}>
                        <FormulaPerio1828 />
                    </td>
                </tr>
                <tr>
                    <td className="title">Глибина зондування</td>
                    <td><DeepZond toothNum={48} /></td>
                    <td><DeepZond toothNum={47} /></td>
                    <td><DeepZond toothNum={46} /></td>
                    <td><DeepZond toothNum={45} /></td>
                    <td><DeepZond toothNum={44} /></td>
                    <td><DeepZond toothNum={43} /></td>
                    <td><DeepZond toothNum={42} /></td>
                    <td><DeepZond toothNum={41} /></td>
                    <td><DeepZond toothNum={31} /></td>
                    <td><DeepZond toothNum={32} /></td>
                    <td><DeepZond toothNum={33} /></td>
                    <td><DeepZond toothNum={34} /></td>
                    <td><DeepZond toothNum={35} /></td>
                    <td><DeepZond toothNum={36} /></td>
                    <td><DeepZond toothNum={37} /></td>
                    <td><DeepZond toothNum={38} /></td>
                </tr>
                <tr>
                    <td className="title">Ясений край</td>
                    <td><DeepZond toothNum={48} /></td>
                    <td><DeepZond toothNum={47} /></td>
                    <td><DeepZond toothNum={46} /></td>
                    <td><DeepZond toothNum={45} /></td>
                    <td><DeepZond toothNum={44} /></td>
                    <td><DeepZond toothNum={43} /></td>
                    <td><DeepZond toothNum={42} /></td>
                    <td><DeepZond toothNum={41} /></td>
                    <td><DeepZond toothNum={31} /></td>
                    <td><DeepZond toothNum={32} /></td>
                    <td><DeepZond toothNum={33} /></td>
                    <td><DeepZond toothNum={34} /></td>
                    <td><DeepZond toothNum={35} /></td>
                    <td><DeepZond toothNum={36} /></td>
                    <td><DeepZond toothNum={37} /></td>
                    <td><DeepZond toothNum={38} /></td>
                </tr>
                <tr style={{paddingTop: '10px'}}>
                    <td style={{paddingTop: '10px'}} className="title">Зубні відкладення</td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={48} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={47} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={46} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={45} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={44} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={43} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={42} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={41} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={31} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={32} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={33} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={34} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={35} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={36} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={37} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={38} />
                    </td>
                </tr>
                <tr>
                    <td className="title">Гноєтеча</td>
                    <td><Fertilizer toothNum={48} /></td>
                    <td><Fertilizer toothNum={47} /></td>
                    <td><Fertilizer toothNum={46} /></td>
                    <td><Fertilizer toothNum={45} /></td>
                    <td><Fertilizer toothNum={44} /></td>
                    <td><Fertilizer toothNum={43} /></td>
                    <td><Fertilizer toothNum={42} /></td>
                    <td><Fertilizer toothNum={41} /></td>
                    <td><Fertilizer toothNum={31} /></td>
                    <td><Fertilizer toothNum={32} /></td>
                    <td><Fertilizer toothNum={33} /></td>
                    <td><Fertilizer toothNum={34} /></td>
                    <td><Fertilizer toothNum={35} /></td>
                    <td><Fertilizer toothNum={36} /></td>
                    <td><Fertilizer toothNum={37} /></td>
                    <td><Fertilizer toothNum={38} /></td>
                </tr>
                <tr>
                    <td className="title">Кровоточивість</td>
                    <td><Bleeding toothNum={48} /></td>
                    <td><Bleeding toothNum={47} /></td>
                    <td><Bleeding toothNum={46} /></td>
                    <td><Bleeding toothNum={45} /></td>
                    <td><Bleeding toothNum={44} /></td>
                    <td><Bleeding toothNum={43} /></td>
                    <td><Bleeding toothNum={42} /></td>
                    <td><Bleeding toothNum={41} /></td>
                    <td><Bleeding toothNum={31} /></td>
                    <td><Bleeding toothNum={32} /></td>
                    <td><Bleeding toothNum={33} /></td>
                    <td><Bleeding toothNum={34} /></td>
                    <td><Bleeding toothNum={35} /></td>
                    <td><Bleeding toothNum={36} /></td>
                    <td><Bleeding toothNum={37} /></td>
                    <td><Bleeding toothNum={38} /></td>
                </tr>
                
                <tr>
                    <td className="title">Фуркація</td>
                    <td><Furkacia toothNum={48} /></td>
                    <td><Furkacia toothNum={47} /></td>
                    <td><Furkacia toothNum={46} /></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><Furkacia toothNum={38} /></td>
                    <td><Furkacia toothNum={38} /></td>
                    <td><Furkacia toothNum={38} /></td>
                </tr>
                <tr>
                    <td className="title">Рухомість</td>
                    <td><Moving toothNum={48} /></td>
                    <td><Moving toothNum={47} /></td>
                    <td><Moving toothNum={46} /></td>
                    <td><Moving toothNum={45} /></td>
                    <td><Moving toothNum={44} /></td>
                    <td><Moving toothNum={43} /></td>
                    <td><Moving toothNum={42} /></td>
                    <td><Moving toothNum={41} /></td>
                    <td><Moving toothNum={31} /></td>
                    <td><Moving toothNum={32} /></td>
                    <td><Moving toothNum={33} /></td>
                    <td><Moving toothNum={34} /></td>
                    <td><Moving toothNum={35} /></td>
                    <td><Moving toothNum={36} /></td>
                    <td><Moving toothNum={37} /></td>
                    <td><Moving toothNum={38} /></td>
                </tr>
                <tr>
                    <td className="title">Рухомість</td>
                    <td colSpan={16} style={{textAlign: 'center', width: '1024px'}}>
                        <FormulaPerio3848 />
                    </td>
                </tr>
                <tr>
                    <td className="title">Глибина зондування</td>
                    <td><DeepZond toothNum={48} /></td>
                    <td><DeepZond toothNum={47} /></td>
                    <td><DeepZond toothNum={46} /></td>
                    <td><DeepZond toothNum={45} /></td>
                    <td><DeepZond toothNum={44} /></td>
                    <td><DeepZond toothNum={43} /></td>
                    <td><DeepZond toothNum={42} /></td>
                    <td><DeepZond toothNum={41} /></td>
                    <td><DeepZond toothNum={31} /></td>
                    <td><DeepZond toothNum={32} /></td>
                    <td><DeepZond toothNum={33} /></td>
                    <td><DeepZond toothNum={34} /></td>
                    <td><DeepZond toothNum={35} /></td>
                    <td><DeepZond toothNum={36} /></td>
                    <td><DeepZond toothNum={37} /></td>
                    <td><DeepZond toothNum={38} /></td>
                </tr>
                <tr>
                    <td className="title">Ясений край</td>
                    <td><DeepZond toothNum={48} /></td>
                    <td><DeepZond toothNum={47} /></td>
                    <td><DeepZond toothNum={46} /></td>
                    <td><DeepZond toothNum={45} /></td>
                    <td><DeepZond toothNum={44} /></td>
                    <td><DeepZond toothNum={43} /></td>
                    <td><DeepZond toothNum={42} /></td>
                    <td><DeepZond toothNum={41} /></td>
                    <td><DeepZond toothNum={31} /></td>
                    <td><DeepZond toothNum={32} /></td>
                    <td><DeepZond toothNum={33} /></td>
                    <td><DeepZond toothNum={34} /></td>
                    <td><DeepZond toothNum={35} /></td>
                    <td><DeepZond toothNum={36} /></td>
                    <td><DeepZond toothNum={37} /></td>
                    <td><DeepZond toothNum={38} /></td>
                </tr>
                <tr style={{paddingTop: '10px'}}>
                    <td style={{paddingTop: '10px'}} className="title">Зубні відкладення</td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={48} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={47} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={46} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={45} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={44} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={43} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={42} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={41} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={31} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={32} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={33} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={34} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={35} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={36} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={37} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={38} />
                    </td>
                </tr>
                <tr>
                    <td className="title">Гноєтеча</td>
                    <td><Fertilizer toothNum={48} /></td>
                    <td><Fertilizer toothNum={47} /></td>
                    <td><Fertilizer toothNum={46} /></td>
                    <td><Fertilizer toothNum={45} /></td>
                    <td><Fertilizer toothNum={44} /></td>
                    <td><Fertilizer toothNum={43} /></td>
                    <td><Fertilizer toothNum={42} /></td>
                    <td><Fertilizer toothNum={41} /></td>
                    <td><Fertilizer toothNum={31} /></td>
                    <td><Fertilizer toothNum={32} /></td>
                    <td><Fertilizer toothNum={33} /></td>
                    <td><Fertilizer toothNum={34} /></td>
                    <td><Fertilizer toothNum={35} /></td>
                    <td><Fertilizer toothNum={36} /></td>
                    <td><Fertilizer toothNum={37} /></td>
                    <td><Fertilizer toothNum={38} /></td>
                </tr>
                <tr>
                    <td className="title">Кровоточивість</td>
                    <td><Bleeding toothNum={48} /></td>
                    <td><Bleeding toothNum={47} /></td>
                    <td><Bleeding toothNum={46} /></td>
                    <td><Bleeding toothNum={45} /></td>
                    <td><Bleeding toothNum={44} /></td>
                    <td><Bleeding toothNum={43} /></td>
                    <td><Bleeding toothNum={42} /></td>
                    <td><Bleeding toothNum={41} /></td>
                    <td><Bleeding toothNum={31} /></td>
                    <td><Bleeding toothNum={32} /></td>
                    <td><Bleeding toothNum={33} /></td>
                    <td><Bleeding toothNum={34} /></td>
                    <td><Bleeding toothNum={35} /></td>
                    <td><Bleeding toothNum={36} /></td>
                    <td><Bleeding toothNum={37} /></td>
                    <td><Bleeding toothNum={38} /></td>
                </tr>
                
                <tr>
                    <td className="title">Фуркація</td>
                    <td><Furkacia toothNum={48} /></td>
                    <td><Furkacia toothNum={47} /></td>
                    <td><Furkacia toothNum={46} /></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><Furkacia toothNum={38} /></td>
                    <td><Furkacia toothNum={38} /></td>
                    <td><Furkacia toothNum={38} /></td>
                </tr>
                <tr>
                    <td className="title">Рухомість</td>
                    <td><Moving toothNum={48} /></td>
                    <td><Moving toothNum={47} /></td>
                    <td><Moving toothNum={46} /></td>
                    <td><Moving toothNum={45} /></td>
                    <td><Moving toothNum={44} /></td>
                    <td><Moving toothNum={43} /></td>
                    <td><Moving toothNum={42} /></td>
                    <td><Moving toothNum={41} /></td>
                    <td><Moving toothNum={31} /></td>
                    <td><Moving toothNum={32} /></td>
                    <td><Moving toothNum={33} /></td>
                    <td><Moving toothNum={34} /></td>
                    <td><Moving toothNum={35} /></td>
                    <td><Moving toothNum={36} /></td>
                    <td><Moving toothNum={37} /></td>
                    <td><Moving toothNum={38} /></td>
                </tr>
                <tr>
                    <td className="title">Статус зуба</td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                </tr>

            </tbody>
                
            </table>
             
            </div>
    );
}
